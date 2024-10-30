import React, { useState, useEffect } from 'react';
import { JogoStyle } from "../css/JogoStyle.jsx";

import tecla_s from "../assets/game/tecla-s-do-teclado.png";
import tecla_w from "../assets/game/tecla-w-de-um-teclado-de-computador.png";
import imgCarro from "../assets/game/carro_mahindra_upperview.png";
import imgAttack from "../assets/game/attackzone.png";
import imgBrake from "../assets/game/brakezone.png";
import imgPista from "../assets/game/pista de fundo.png";
import Nav from "../components/Nav";

const Jogo = () => {
    const [PosY, setPosY] = useState(2);
    const [objects, setObjects] = useState([]);
    const [battery, setBattery] = useState(100);
    const [speed, setSpeed] = useState(5);

    useEffect(() => {
        const changeAlign = (offset) => {
            const newPosY = Math.min(Math.max(PosY + offset, 1), 3);
            setPosY(newPosY);
        };

        const handleKeyDown = (event) => {
            if (event.keyCode === 87) {
                changeAlign(-1);
            } else if (event.keyCode === 83) {
                changeAlign(1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [PosY]);
    
    useEffect(() => {
        let tick = Date.now();
        let attackInterval;
        let brakeInterval;
        let running = true;

        let lastLine = 0;
        const getLine = () => {
            const availableLines = [1, 2, 3].filter(line => line !== lastLine);
            const randomIndex = Math.floor(Math.random() * availableLines.length);
            lastLine = availableLines[randomIndex];
            return lastLine;
        };

        let UID = 0;
        const getUID = () => {
            UID++;
            return UID;
        };

        const render = () => {
            if (!running) return;
            const now = Date.now();
            const delta = (now - tick) / 1000;
            tick = now;

            setObjects((prevObjects) => { 
                const updatedObjects = prevObjects.map((object) => {
                    if (object.path <= -10) {
                        return null;
                    }

                    let activated = object.activated;
                    if (object.path > 0 && object.path < 10 && object.line === PosY && !activated) {
                        activated = object.callback();
                    }

                    return { ...object, path: object.path - 5 * delta, activated };
                }).filter(object => object !== null && !object.activated);
                
                return updatedObjects;
            });

            requestAnimationFrame(render);
        };

        const createAttack = () => {
            const newObject = {
                id: getUID(),
                element: "attackzone",
                image: imgAttack,
                path: 100,
                line: getLine(),
                activated: false,
                callback: () => {
                    console.log("attack ativado")
                    return true;
                }
            };
            setObjects(prevObjects => [...prevObjects, newObject]);
        };

        const createBrake = () => {
            const newObject = {
                id: getUID(),
                element: "brakezone",
                image: imgBrake,
                path: 100,
                line: getLine(),

                activated: false,
                callback: () => {
                    console.log("brakezone ativado")
                    return true;
                }
            };
            setObjects(prevObjects => [...prevObjects, newObject]);
        };

        brakeInterval = setInterval(createBrake, 2000);
        attackInterval = setInterval(createAttack, 2000);
        requestAnimationFrame(render);

        return () => {
            clearInterval(attackInterval);
            clearInterval(brakeInterval);
        };
    }, [PosY]);

    return (
        <>
            <Nav buttons={["Home", "Tecnologias"]} />
            <JogoStyle>
                <section className='content'>
                    <div className="top-frame">
                        <div className="battery">
                            <h4 className="battery-label">BATERIA</h4>
                            <div className="battery-bar">
                                <div style={{ width: `${battery}%` }} className="battery-value" />
                            </div>
                        </div>
                    </div>

                    <div className="game-board">
                        <img src={imgPista} className="track" />
                        <div className="game-holder">
                            {objects.map((object) => {
                                return (
                                    <img
                                        key={`${object.id}-${object.path}`}
                                        className={object.element}
                                        src={object.image}
                                        style={{
                                            marginLeft: `${object.path}%`,
                                            marginTop: `${(object.line - 1) * 11}%`
                                        }}
                                    />
                                );
                            })}
                        </div>
                        <img src={imgCarro} className="carro" style={{ marginTop: `${(PosY - 1) * 11}%` }} />
                    </div>
                    <div className="teclas">
                        <div className='grid1'>
                            <img src={tecla_w} alt="Up" />
                            <h2>UP</h2>
                        </div>
                        <div className='grid2'>
                            <img src={tecla_s} alt="Down" />
                            <h2>Down</h2>
                        </div>
                    </div>
                    <div className='container-infos'>
                        <h1>Vivencie as tecnologias REAIS DA CORRIDA!</h1>
                        <div className='infos'>
                            <img src={imgAttack} alt='attack mode img' />
                            <span>ATTACK MODE: Ao passar por cima da zona de "attack mode" você receberá um aumento de potência para o carro durante um certo período de tempo.</span>
                        </div>
                        <div className='infos'>
                            <img src={imgBrake} alt='zona de frenagem img' />
                            <span>Zona de Frenagem: Ao passar por cima da zona de frenagem você recarrega uma porcentagem de bateria, simulando uma frenagem antecedente a curva das pistas reais.</span>
                        </div>
                    </div>
                </section>
            </JogoStyle>
        </>
    );
};

export default Jogo;

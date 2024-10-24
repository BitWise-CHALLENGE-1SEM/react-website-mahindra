import React, { useState, useEffect, useRef } from 'react';
import { JogoStyle } from "../css/JogoStyle.jsx";
import tecla_s from "../assets/game/tecla-s-do-teclado.png";
import tecla_w from "../assets/game/tecla-w-de-um-teclado-de-computador.png";

import imgCarro from "../assets/game/carro.png";
import imgAttack from "../assets/game/attackzone.png";
import imgPista from "../assets/game/pista de fundo.png";

import imgFrenagem from "../assets/game/zona-de-frenagem.png";
import audio from "../assets/audios/atack_mode_sound.mp3";
import Nav from "../components/Nav";

const Jogo = () => {
    const travelTime = 3;
    let jsPosY = 2;
    const [PosY, setPosY] = useState(jsPosY);
    const [objects, setObjects] = useState([
        {
            id: Date.now(),
            element:"attack",
            line:1,
            path:100,
            function:()=>{
                
            },
        }
    ]);
    
    useEffect(() => {
        const changeAlign = (offset) => {
            jsPosY = Math.min(Math.max(jsPosY + offset, 1), 3);
            setPosY(jsPosY);
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
    }, []);

    let tick = Date.now()
    useEffect(() => {
        const render = setInterval(() => {
            const delta = (Date.now() - tick) / 100;
            const updatedObjects = objects.map((object, index) => {
                if (object.path <= -120) {
                    return {}
                } else {
                    return {
                        ...object,
                        path: object.path - 3 * delta
                    };
                }
            }).filter(object => object !== null); // Remove os objetos marcados
        
            setObjects(updatedObjects); // Atualiza o estado com os objetos filtrados
            tick = Date.now();
        }, 10);
        

        const createAttack = setInterval(()=>{
            let newObject = {
                id: Date.now(),
                element:"attack",
                path:100
            }
            setObjects(prevObjects => [...prevObjects, newObject]);
        },200)

        return () =>{ 
            clearInterval(render)
            clearInterval(createAttack)
        };
    }, [tick]);

    return (
        <>
            <Nav buttons={["Home","Tecnologias"]} />
            <JogoStyle>
                <section className='content'>
                    <div className="game-board">
                        <img src={imgPista} className="track"/>

                        <div className="game-holder">
                            {objects.map((object,_)=>(
                                <img src={imgAttack} style={{ marginLeft: `${object.path}%` }} className="attackzone" />
                            ))}
                        </div>

                        <img src={imgCarro} className="carro" style={{ marginTop: `${(PosY-1)*11}%` }} />                        
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
                            <img src={imgFrenagem} alt='zona de frenagem img' />
                            <span>Zona de Frenagem: Ao passar por cima da zona de frenagem você recarrega uma porcentagem de bateria, simulando uma frenagem antecedente a curva das pistas reais.</span>
                        </div>
                    </div>
                </section>
            </JogoStyle>
        </>
    );
};

export default Jogo;

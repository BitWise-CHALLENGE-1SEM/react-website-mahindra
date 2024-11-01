import React, { useState,useEffect,useRef } from 'react';
import { JogoStyle } from "../css/JogoStyle.jsx";

import tecla_s from "../assets/game/tecla-s-do-teclado.png";
import tecla_w from "../assets/game/tecla-w-de-um-teclado-de-computador.png";
import imgCarro from "../assets/game/carro_mahindra_upperview.png";
import imgAttack from "../assets/game/attackzone.png";
import imgBrake from "../assets/game/brakezone.png";
import imgPista from "../assets/game/pista de fundo.png";
import Nav from "../components/Nav";

const Jogo=()=>{
    const DefaultSpeed = 60
    const [PosY,setPosY] = useState({
        value: 2,
        target: 2
    });

    const [objects,setObjects] = useState([]);
    const [battery,setBattery] = useState(100);
    const [distance,setDistance] = useState(0);
    const [speed,setSpeed] = useState(DefaultSpeed);
    const requestRef = useRef();

    // Algoritimo para fixar a velocidade com base no STEP do RENDER
    const LerpSpeed=(DT,Speed)=>{
        return (1-Math.pow(Speed,DT))
    }

    // Algoritimo para Interpolar valores a cada RENDER
    const Interpolation = (Origin, Goal, Speed) => {
        if (Origin === Goal) {
            return Origin;
        } else {
            let Next = Origin + Speed * (Origin > Goal ? -1 : 1);
            return Math.abs(Next - Goal) < Speed ? Goal : Next;
        }
    };

    let UID = useRef(0);
    const getUID=()=>{
        UID.current++;
        return UID.current;
    };

    useEffect(() => {
        const changeAlign=(offset)=>{
            setPosY(prev => ({
                ...prev,
                target: Math.min(Math.max(prev.target + offset, 1), 3)
            }));
        };
    
        const handleKeyDown = (event) => {
            event.preventDefault();
            if (event.key === 'w') {
                changeAlign(-1);
            } else if (event.key === 's') {
                changeAlign(1);
            }
        };
    
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    
    useEffect(()=>{
        let tick = Date.now();
        let attackInterval;
        let brakeInterval;
        let running = true;

        let lastLine = 0;
        const getLine=()=>{
            const availableLines = [1, 2, 3].filter(line => line !== lastLine);
            const randomIndex = Math.floor(Math.random() * availableLines.length);
            const newLine = availableLines[randomIndex];
            lastLine = newLine;
            return newLine;
        };
        const render=()=>{
            if (!running) return;
            const now = Date.now();
            const delta = (now - tick) / 1000;
            tick = now;

            setObjects((prevObjects) => { 
                const updatedObjects = prevObjects.map((object) => {
                    if (object.path <= -40) {
                        return null;
                    }

                    let activated = object.activated;
                    if (object.path > 0 && object.path < 11 && object.line === Math.round(PosY.value)-1 && !activated) {
                        activated = object.callback();
                    }

                    return { ...object, path: object.path - speed/2 * delta, activated };
                }).filter(object => object !== null);
                
                return updatedObjects;
            });
            setDistance((prevSpeed)=>{
                return (prevSpeed+(speed/5)*delta)
            })  
            setBattery((prevBattery)=>{
                return (prevBattery-(speed/100)*delta)
            }) 
            setPosY((prev)=>{
                return {...prev,value:Interpolation(prev.value,prev.target,LerpSpeed(delta,.3))}
            })
            
            requestRef.current = requestAnimationFrame(render);
        };

        brakeInterval = setInterval(()=>{
            const newObject = {
                id: getUID(),
                element: "brakezone",
                image: imgBrake,
                path: 100,
                line: getLine(),
                activated: false,
                callback: ()=>{
                    if (speed==DefaultSpeed){
                        console.log("brakezone ativa")
                        setSpeed(30)
                        setBattery(100)
                        let timeout = setTimeout(() => {
                            setSpeed(DefaultSpeed)
                        }, 5000);
                        return true;
                    }
                    return false;
                }
            };
            setObjects(prevObjects => [...prevObjects, newObject]);
        },3000);

        attackInterval = setInterval(()=>{
            const newObject = {
                id: getUID(),
                element: "attackzone",
                image: imgAttack,
                path: 100,
                line: getLine(),
                activated: false,
                callback: ()=>{
                    if (speed==DefaultSpeed){
                        console.log("attack ativa")
                        setSpeed(90)
                        let timeout = setTimeout(() => {
                            setSpeed(DefaultSpeed)
                        }, 5000);
                        return true;
                    }
                    return false;
                }
            };
            setObjects(prevObjects => [...prevObjects, newObject]);
        },4000);

        const handleFocus =()=>{
            running = true;
            requestRef.current = requestAnimationFrame(render);
        };
        const handleBlur =()=>{
            running = false;
        };

        requestRef.current = requestAnimationFrame(render);
        window.addEventListener('focus', handleFocus);
        window.addEventListener('blur', handleBlur);
        return ()=>{
            window.removeEventListener('focus',handleFocus);
            window.removeEventListener('blur',handleBlur);
            clearInterval(attackInterval);
            clearInterval(brakeInterval);
            running = false;
        };
    },[speed]);

    const renderCar = () => {
        return (<img
            key={getUID()}
            src={imgCarro}
            className="carro"
            style={{ 
                marginTop: `${(PosY.value-1) * 10}%`,
                rotate: `${(PosY.target-PosY.value)*10}deg`,
            }}
        />);
    };

    return(<>
        <Nav buttons={["Tecnologias","Home",sessionStorage.getItem("usuario") ? "" : "Login"]} />
        <JogoStyle>
            <section className='content'>
                <div className="top-frame">
                    <div className="black-div battery">
                        <h4 className="label">BATERIA</h4>
                        <div className="battery-bar">
                            <div style={{ width: `${Math.max(battery,0)}%` }} className="battery-value" key={battery}/>
                        </div>
                    </div>

                    <div className="black-div score">
                        <h4 className="label">SCORE</h4>
                        <label className="score-label">{`${Math.floor(distance)}m`}</label>
                    </div>
                </div>

                <div className="game-board"
                    // style={{
                    //     filter:`blur(.3rem)`
                    // }}
                >
                    <img src={imgPista} className="track" key={speed} style={{
                        animation:`clouds-animation ${200/speed}s infinite linear`
                    }}/>
                    <div className="game-holder">
                        {objects.map((object) => {
                            return (
                                <img
                                    key={`${object.id}-${object.path}`}
                                    className={object.element}
                                    src={object.image}
                                    style={{
                                        marginLeft: `${object.path}%`,
                                        marginTop: `${(object.line - 1) * 10}%`
                                    }}
                                />
                            );
                        })}
                    </div>

                    {renderCar()}
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
    </>);
};

export default Jogo;

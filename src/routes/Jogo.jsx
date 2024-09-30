import React, { useState, useEffect, useRef } from 'react';
import { JogoStyle } from "../css/JogoStyle.jsx";
import tecla_s from "../assets/game/tecla-s-do-teclado.png";
import tecla_w from "../assets/game/tecla-w-de-um-teclado-de-computador.png";
import carro from "../assets/game/mario.png";
import atack from "../assets/game/atackmode.png";
import pista from "../assets/game/pista de fundo.png";
import audio from "../assets/audios/atack_mode_sound.mp3";

import Nav from "../components/Nav"
const Jogo = () => {
    const marioRef = useRef(null);
    const pipeRef = useRef(null);
    const cloudsRef = useRef(null);
    const audioRef = useRef(null);
    const [up, setUp] = useState(false);
    const [down, setDown] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.keyCode === 87) {
                setUp(true);
                marioRef.current.classList.add("up");
                marioRef.current.classList.remove("removeup", "down", "removedown");
            }
            if (event.keyCode === 83) {
                setDown(true);
                marioRef.current.classList.add("down");
                marioRef.current.classList.remove("removedown", "up", "removeup");
            }
        };

        const handleKeyUp = (event) => {
            if (event.keyCode === 87) {
                setUp(false);
                marioRef.current.classList.add("removeup");
            }
            if (event.keyCode === 83) {
                setDown(false);
                marioRef.current.classList.add("removedown");
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    useEffect(() => {
        const loop = setInterval(() => {
            const pipePosition = pipeRef.current?.offsetLeft;
            const cloudsPosition = cloudsRef.current?.offsetLeft;

            // Lógica do jogo aqui
        }, 10);

        return () => clearInterval(loop);
    }, []);

    return (<>
        <Nav buttons={["Home"]}/>
        <JogoStyle>
            <div className='content'>
                <div className="game-board">
                    <button className="game-over">GAME OVER</button>
                    <img src={pista} className="clouds" ref={cloudsRef} />
                    <img src={carro} className="mario" ref={marioRef} />
                    <img src={atack} className="pipe" ref={pipeRef} />
                    <audio src={audio} className="audio" ref={audioRef}></audio>
                    <div className="score">0</div>
                </div>
                <div className="teclas">
                    <div>
                        <img src={tecla_w} alt="Up" />
                        <h2>Up</h2>
                    </div>
                    <div>
                        <img src={tecla_s} alt="Down" />
                        <h2>Down</h2>
                    </div>
                </div>
            </div>
        </JogoStyle>
    </>
    );
};

export default Jogo;
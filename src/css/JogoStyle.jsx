import styled from "styled-components";
import "../css/base.css";

export const JogoStyle = styled.section`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.content {
    width: 100%;
    position: relative;
    display: block;
    padding-top: 5%;
    background-image: radial-gradient( #444444 ,#222222 );
}

.game-board {
    width: 100%;
    height: 60vh;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    background: linear-gradient(#87CEEB, #E0F6FF);
}

.game-holder {
    position: absolute;
    height: 100%;
    width: 100%;
}

.carro {
    transition: .3s ease-out;
    position: absolute;
    height: 33%;
}

.track {
    position: absolute;
    height: 100%;
    width: 200%;
    margin-right: -100%;
    transition: 1s
}

.game-over:hover {
    background-color: #E0F6FF;
}

.teclas {
    padding: 5vh;
    display: flex;
    justify-content: center;
    gap: 5vh;

}
.teclas h2{
    color: white;
}

.teclas img {
    height: 8vh;
    filter: invert();
}

h1 {
    display: flex;
    color: #E0F6FF;
    justify-content: center;
    font-size: 6vh;
}

.container-infos {
    position: relative;
    padding: 3vh;
}

.infos {
    padding: 9vh;
    display: flex;
    align-items: center;
    color: #E0F6FF;
    border: solid;
}

.infos span {
    padding-left: 3vh;
    font-size: 3vh;
}

.infos img {
    height: 15vh;
}

@keyframes clouds-animation {
    from {
        right: 0px;
    }
    to {
        right: 100%;
    }
}

// Media Queries para responsividade
@media (max-width: 768px) {
    .teclas img {
        height: 5vh; // Diminuir o tamanho das imagens
    }
    
    h1 {
        font-size: 5vh; // Ajustar tamanho da fonte
    }

    .infos span {
        font-size: 2.5vh; // Ajustar tamanho da fonte
    }
}

@media (max-width: 480px) {
    .teclas img {
        height: 4vh; // Diminuir ainda mais
    }

    h1 {
        font-size: 4vh; // Diminuir tamanho da fonte
    }

    .infos {
        flex-direction: column; // Mudar para coluna em telas menores
        align-items: flex-start;
    }
}

.attackzone,.brakezone {
    position: absolute;
    height: 20%;
    transform: translateY(30%);
    transition: .2s
}

.black-div{
    position: absolute;
    width: 40%;
    height: 90%;
    background-color: var(--color2);
    border-radius: 7px;
}

.battery{
    left: 95%;
    transform: translateX(-100%) skew(20deg);
}

.score{
    left: 10%;
    transform: skew(20deg);
}

.battery-bar {
    position: absolute;
    transform: translateX(-50%);
    top: 60%;
    left: 50%;
    width: 90%;
    height: 25%;
    background-color: #000000;
    z-index: 10;
    border-radius: 5px;
}
.battery-value{
    background-color: #00d9ff;
    transition: width 0.5s;
    z-index: 11;
    width: 100%;
    height: 100%;
}

.label {
    position: absolute;
    transform: translateX(-50%) skew(-20deg);
    left: 50%;
    width: 100%;
    color: white;
    font-weight: bold;
    font-size: 2rem;
    text-align: center
}

.score-label{
    transform: translateX(-50%) skew(-20deg);
    left: 50%;
    color: white;
    position: absolute;
    top: 50%;
    font-size: 1.5rem;
    font-weight: bold;
}

.top-frame{
    justify-content:space-around;
    top: 0;
    z-index: 10;
    position: absolute;
    margin-left: 100%;
    transform: translateX(-100%);
    height: 75px;
    width: 30rem;
    background-color: var(--color1);
    clip-path: polygon(7% 100%, 0% 0%, 100% 0%, 100% 100%)
}

`;


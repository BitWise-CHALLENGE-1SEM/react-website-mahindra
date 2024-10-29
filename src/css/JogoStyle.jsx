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
    background-color: var(--color5);
}

.game-board {
    width: 100%;
    height: 70vh;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    background: linear-gradient(#87CEEB, #E0F6FF);
}

.attackzone {
    position: absolute;
    height: 20%;
    transform: translateY(30%);
    transition: .2s
}

.game-holder {
    position: absolute;
    height: 100%;
    width: 100%;
}

.carro {
    transition: 1s ease-out;
    position: relative;
    height: 33%;
}

.track {
    position: absolute;
    height: 100%;
    width: 200%;
    animation: clouds-animation 2s infinite linear;
    margin-right: -100%;
}

.game-over:hover {
    background-color: #E0F6FF;
}

.teclas {
    padding: 5vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr); // Correção aqui para usar repeat
    justify-content: center;
    gap: 5vh;
}

.teclas img {
    height: 8vh;
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
.battery-bar {
    position: absolute;
    top: 40px; /* Posição da barra para baixo */
    left: 75%; /* Alinha a barra mais à esquerda */
    width: 20%; /* Aumenta a largura da barra */
    height: 15px; /* Altura da barra */
    background-color: #00ff00; /* Cor verde vibrante */
    transition: width 0.2s; /* Animação ao mudar a largura */
    z-index: 10; /* Garante que a barra esteja acima de outros elementos */
    border-radius: 5px; /* Bordas arredondadas */
}

.battery-label {
    position: absolute;
    top: 15px; /* Posição do texto acima da barra */
    left: 80%; /* Alinha o texto à esquerda */
    color: white; /* Cor do texto */
    font-weight: bold; /* Texto em negrito */
    font-size: 16px; /* Tamanho do texto */
    z-index: 15; /* Garante que o texto esteja acima da barra */
    text-align: center; /* Centraliza o texto */
    width: 10%; /* Largura igual à da barra */
}





`;


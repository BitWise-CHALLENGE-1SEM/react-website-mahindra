import styled from "styled-components";
import "../css/base.css"
export const JogoStyle = styled.section`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.content{
    padding-top: 20vh;
    background-color: var(--color5);

}
.game-board{
    
    width: 100%;
    height: 500px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    background: linear-gradient(#87CEEB, #E0F6FF);
}

.pipe{
    position: absolute;
    margin-bottom: 50px;
    bottom: 0;
    width: 90px;
    height: 20px;
    animation: pipe-animation 2s infinite linear;
}

.mario{
    position: absolute;
    bottom: 200px;
    width: 150px;
    
}
.up{
    animation: up 500ms ease-out;
    margin-bottom: +200px;
}
.down{
    animation: down 500ms ease-out;
    margin-bottom: -200px;
}
.removeup{
    animation: reverseup 500ms ease-out;
    margin-bottom: 0px;
}
.removedown{
    animation: reversedown 500ms ease-out;
    margin-bottom: 0px;
}
/*.jump{
    animation: jump 500ms ease-in-out;
}*/

.clouds{
    position: absolute;
    height: 500px;
    width: 200%;
    animation: clouds-animation 5s infinite linear;
    margin-right: -100%;
}


/* .game-over{
    position: absolute;
    font-size: 23px;
    font-weight: bold;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 0;
    padding: 10px;
    width: 200px;
    height: 50px;
    cursor: pointer;
    border-radius: 4px;
    background-color: rgb(212, 69, 33);
    z-index: 999;
} */

.game-over:hover{
    background-color: #E0F6FF;
}

.teclas{
    padding: 5vh;
    display: grid;
    grid-template-columns: (1fr,1fr); 
    justify-content: center;
    gap: 5vh;
}

.grid1{
    order: 1;
}
.grid2{
    order: 2;
}
.teclas img{
    height: 8vh;
}
h1{
    display: flex;
    color:#E0F6FF;
    justify-content: center;
    font-size: 6vh;
}
.container-infos{
    position: relative;
    padding: 3vh;
}
.infos{
    padding: 9vh;
    display: flex;
    align-items: center;
    color: #E0F6FF;
    border: solid;
}
.infos span{
    padding-left: 3vh;
    font-size: 3vh;
}
.infos img{
    height: 15vh;
}

@keyframes pipe-animation {
    from{
        right: -80px;
    }
    
    to{
        right: 100%;
    }
}
@keyframes up {
    from{
        margin-bottom: 0px;
    }
    to{
        margin-bottom: +200px;
    }
}
@keyframes reverseup {
    from{
        margin-bottom: +200px;
    }    
    to{
        margin-bottom: 0px;
    }
}
@keyframes down {
    from{
        margin-bottom: 0px;
    }
    to{
        margin-bottom: -200px;
    }
}
@keyframes reversedown {
    from{
        margin-bottom: -200px;
    }
    to{
        margin-bottom: 0px;
    }
}
/*
@keyframes jump {
    0%{
        bottom: 0;
    }
    
    40%{
        bottom: 180px;
    }

    50%{
        bottom: 180px;
    }

    60%{
        bottom: 180px;
    }

    100%{
        bottom: 0;
    }
}*/

@keyframes clouds-animation{
    from{
        right: 0px;
    }

    to{
        right: 100%;
    }
}




`
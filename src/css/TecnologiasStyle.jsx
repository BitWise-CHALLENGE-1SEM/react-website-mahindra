import styled from "styled-components"
import "../css/base.css"
export const TecnologiasStyle = styled.section`
    

.secao1{
    padding-top: 10px;
    background-image: radial-gradient( #ececec , #dddddd);
}
.secao1 h1{
    color: white;
    font-size: 37px;
    text-align: center;
    width: 100%;
    text-transform: uppercase;
    background: var(--color2);
    -webkit-text-stroke-color: black;
    -webkit-text-stroke-width: 1.5px;
}

.container{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 40px;
    padding-top: 100px;
    padding-bottom: 100px;
}

.content{
    width: 590px;
    height: 450px;
    position: relative;
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
    overflow: hidden;
    border-radius: 20px;
    background: var(--color2);
}   

.content h2{
    z-index: 1;
    color: white;
    font-size: 2rem;
    text-align: center;
}

.content p{
    color: #fff;
    margin-top: 10px;
    z-index: 1;
    width: 75%;
    text-align: center;
}

.content::before{
    content: "";
    position: absolute;
    width: 180px;
    background: linear-gradient(180deg, blue, red);
    height: 164%;
    animation: animate 4s linear infinite;
    transition: all 0.4s linear;
}

.content::after{
    content: "";
    position: absolute;
    background: var(--color2);
    inset: 5px;
    border-radius: 15px;
}

@keyframes animate {
    from{
        transform: rotate(0deg);

    }
    to{
        transform: rotate(360deg);
    }
    
}

/* secao 2 */
.btn{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
}

.btnCorrer{
    margin: 0px 25px 0px 25px;
    background: var(--color2);
    padding: 4px 30px 4px 30px;
    align-items: center;
    box-shadow: 0 0 0 0 var(--color6);
    outline: 4px solid;
    border-radius: 30px;
    color: white;
    outline-color: var(--color2);
    outline-offset: 0;
    text-shadow: none;
    cursor: pointer;
    font-size: 20px;
    max-width: 200px;
    width: 100%;
    height: 55px;
    position: relative;
    text-decoration: none;
    display: flex;
    justify-content: center;
    transition: all 550ms cubic-bezier(.36, .63, .5, .73);
    border-style: none;
}

.btnCorrer:hover{
    box-shadow: 0 0 0 4px white;
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    background: var(--color1);
}

.secao2{
    display: flex;
    background-image: radial-gradient(rgb(68, 68, 68), rgb(34, 34, 34));
    padding-bottom: 50px;
    border-bottom: 8px solid var(--color1);

}

.secao2-text h1{
    margin-top: 100px;  
    line-height: 1.1;
    color: white;
    text-transform: uppercase;
    font-size: 1.7rem;
    text-align: center;
}

.titulo1{
    font-size: 2.5rem;
    text-transform: uppercase;
    color:white;
    text-align: center;
}
.secao2-text p{
    margin: 2rem auto 2rem;
    width: 70%;
    color: var(--color1);
    font-size: 1.7rem;
}

.secao2-text p a{
    color: white;
}

.secao2-text p{
    background-color: var(--color2);
    border-radius: 30px;
    padding: 1rem;
}

.secao2-image{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 100px;
}

.image{
    width: 50vw;

}

.secao2-image:hover{
    cursor: pointer;
    animation: carro 0.9s ease-in-out;
}
@keyframes carro{
    from{
        transform: translateX(100px);
    }
    to{
        transform: translateX(10px);
        filter:drop-shadow(var(--color1) 0 0 2rem)
    }

}

.hovered{
    filter:drop-shadow(var(--color1) 0 0 2rem)
}

@media (max-width: 1250px){
    .secao2{
        flex-direction: column;
    }

    .image{
        width: 70vw;
    }

    .secao2-image{
        margin-right: 0;
    }
}
/* secao 3 */
.secao3{
    padding: 5vh;
    background: var(--color5);
}

.secao3 h1{
    display: flex;
    justify-content: center;
    color: white;
    font-size: 2.75rem;
    margin: 5vh;
    border-bottom: solid;
    
}

.secao3 h2{
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color1);
    font-size: 2.5rem;
    
}

.frame{
    width: 100%;
    display: flex;
    justify-content: center;
}

.video-background{
    filter: brightness(110%);
    display: flex;

}

.conteudos{
    display: flex;
    flex-wrap: wrap;
    margin-top: 3vh;
    margin-bottom: 3vh;
    gap: 5vh;
    padding: 5vh;
    justify-content: center;
    background: var(--color2);
    border-radius: 30px;
}

.conteudo1, .conteudo2{
    text-align: center;
    color: var(--color4);
    font-size: 1.5rem;
    width: 500px;
    border-radius: 5rem;
    font-weight: 700;
}

.conteudo1 h3, .conteudo2 h3{
    color: var(--color1);
    font-size: 2rem;
}

/* accordion */

.container-acc{
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
}

.accordion{
    background-image: radial-gradient( #ececec , #dddddd);
    border-radius: 8px;
    padding: 12px;
    cursor: pointer;
    box-shadow: 5px 5px 5px rgba(0,0,0, 0.1);
}

.accordion-header{
    width: 100%;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.8rem;
    cursor: pointer;
}

.accordion-header span{
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--color1);
    font-weight: 700;
    padding: .3rem;
}

.accordion-body{
    color: var(--color2);
    font-size: 1.5rem;
    opacity: 0;
    height: 0;
    transition: opacity 1.5s;
    overflow: hidden;
}

.accordion-body.active{
    height: 100%;
    opacity: 1;
    padding: 2rem;
    
}

.accordion:has(.active) .arrow{
    transform: rotate(180deg);
}

.arrow{
    transition: transform .3s linear;
}


`
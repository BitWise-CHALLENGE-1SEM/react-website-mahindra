import styled from "styled-components"
import "../css/base.css"
export const TecnologiasStyle = styled.section`
    

.secao1{
    padding-top: 100px;
    background-image: radial-gradient( #ececec , #dddddd);
}
.secao1 h1{
    text-align: center;
    color: white;
    font-size: 37px;
    text-align: center;
    padding-bottom: 100px;
    text-transform: uppercase;
    -webkit-text-stroke-color: black;
    -webkit-text-stroke-width: 1.5px;
}

.container{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 40px;
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
    background: var(--color3);
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
    padding-bottom: 3vh;
}
.btnCorrer{
    background: var(--color4);
    width: 120px;
    height: 60px;
    border-radius: 2rem;
    transition: 0.8s;
    border: 1px solid var(--color2);
    font-weight: 700;

}
.btnCorrer:hover{
    background: var(--color4);
    color: var(--color1);
    box-shadow: 5px 5px 4px var(--color5);
    text-transform: uppercase;
    
}
.secao2{
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    text-align: center;
    align-items: center;
    background-image: radial-gradient(rgb(68, 68, 68), rgb(34, 34, 34));
} 
.order-1{
    order:1;
}
.order-2{
    order:2;
}
.secao2-text h1{
    margin-top: 100px;  
    line-height: 1.1;
    color: white;
    text-transform: uppercase;
    font-size: 1.7rem;
}
.titulo1{
    font-size: 2.5rem;
    text-transform: uppercase;
    color:var(--color4);
}
.secao2-text p{
    margin: 2rem auto 2rem;
    width: 60%;
    color: var(--color1);
    font-size: 1.7rem;
}
.secao2-text p a{
    color: var(--color4);
}
.image{
    margin-top: 100px;
    width: 80%;
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

.lista{
    list-style: circle;
    color: #dddddd;
}
`
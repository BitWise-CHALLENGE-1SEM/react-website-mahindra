import styled from "styled-components"
import "../css/base.css"
export const TecnologiasStyle = styled.section`
    

.secao3{
    padding-top: 100px;
    background-image: radial-gradient( #ececec , #dddddd);
}
.secao3 h1{
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
    background: var(--color5);
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
    background: var(--color5);
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
`
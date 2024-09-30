import styled from "styled-components";
import "../css/base.css"
export const FooterStyle = styled.section`

footer{
    width: 100%;
    background: var(--color2);
    min-height: 100px;
    padding: 20px 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

footer .social-icon, footer .menu{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
}

footer .social-icon li, footer .menu li{
    list-style: none;
}

footer .social-icon li a{  
    font-size: 2em;
    color:var(--color1);
    margin: 0 10px;
    display: inline-block;
    transition: all .5s;
}

footer .social-icon li a:hover{
    transform: translateY(-10px);
}

footer .menu li button{  
    font-size: 1.2rem;
    color: #fff;
    margin: 0 10px;
    transition: all .5s;
    text-decoration: none;
    opacity: .75;
    cursor: pointer;
}

footer .menu li button:hover{
    color: var(--color1);
}
button{
    background: none;
    border: none;
}

footer p{
    color: black;
    text-align: center;
    font-size: 1.1rem;
    margin: 15px 0 10px 0;
}
`
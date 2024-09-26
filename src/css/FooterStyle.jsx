import styled from "styled-components";
export const FooterStyle = styled.section`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins','sans-serif';
}

:root{
    --color1: #e0042c;
    --color2: #222222;
    --color3: #382424;
    --color4: #c4dce5;
    --color5: #0c2b43;
    --color6: #113454;
    --background: #1F2336;
    --accent: #F4BD50;
} 

footer{
    width: 100%;
    background: #222222;
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

footer .menu li a{  
    font-size: 1.2rem;
    color: #fff;
    margin: 0 10px;
    transition: all .5s;
    text-decoration: none;
    opacity: .75;
    cursor: pointer;
}

footer .menu li a:hover{
    color: #e0042c;
}

footer p{
    color: black;
    text-align: center;
    font-size: 1.1rem;
    margin: 15px 0 10px 0;
}
`
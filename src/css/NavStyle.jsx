
import styled from "styled-components";
import "../css/base.css";
export const NavStyle = styled.section`

/* improviso para a nav parar de sobrescrever a home */
.bloco-nav{
    /* padding-bottom: 30vh; */
}
header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color1);
    position: fixed;
    z-index: 3;
}

header img{
    height: 65px;
    margin: 15px;
}

nav{
    display: flex;
}

nav ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

nav ul li {
    margin: auto 10px auto 10px;
}

nav ul li a {
    display: inline-block;
    padding: 10px 30px;  
    color: white;
    background-color: var(--color2);
    text-decoration: none;
    text-align: center;
    font-size: 15px;
    overflow: hidden;
    transition: background-color .3s;
    transform: skew(-20deg);
    border-radius: 7px;
}

.parallelogram-button span {
    display: inline-block;
    transform: skew(20deg);
    transition: all .3s;
}

nav ul li a:hover {
    background-color: var(--color6);
}

.parallelogram-button span:hover{
    transform: scale(1.08) skew(20deg);
    transition: all .3s;
}
.cta-button {
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
    font-size: 15px;
    max-width: 160px;
    width: 100%;
    height: 45px;
    position: relative;
    text-decoration: none;
    display: flex;
    justify-content: center;
    transition: all 550ms cubic-bezier(.36, .63, .5, .73);
}

.cta-button:hover {
    box-shadow: 0 0 0 4px white;
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    background: var(--color6);
}
.logo-formula{
    width: 250px;
    padding-top: 90px;
    background-color: var(--color1);
    clip-path: polygon(0 0, 100% 55%, 70% 100%, 0% 100%);
    position: fixed;
    z-index: 2;
}

.logo-formula img{
    width: 200px;
}

.scroll-indicator {
    height: 10px;
    width: calc(100% - 15rem);
    position: fixed;
    margin-left: 160px;
    top: 8rem;
    left: 4rem;
    z-index: 2;
  }
  
  .scroll-indicator .progress-bar {
    height: 100%;
    width: 0;
    border-radius: 100px;
    background: linear-gradient(to right, black, #e0042c);
  }
`
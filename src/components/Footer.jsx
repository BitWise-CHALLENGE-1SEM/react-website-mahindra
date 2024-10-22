import { FooterStyle } from "../css/FooterStyle";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";

const Footer=()=>{
    
    return(
        <>
        

        
        <FooterStyle>
            <footer>
                <ul className="social-icon">
                    <li><a href="https://www.apple.com/br/app-store/"><FaApple/></a></li>
                    <li><a href="https://pt-br.facebook.com/"><FaFacebook/></a></li>
                    <li><a href="https://br.linkedin.com/?original_referer=https%3A%2F%2Fwww.bing.com%2F"><FaLinkedin/></a></li>
                    <li><a href="https://www.instagram.com/"><FaInstagram/></a></li>
                    <li><a href="https://play.google.com/store/games?device=windows"><BiLogoPlayStore/></a></li>
                </ul>

                <ul className="menu">
                    <li><button onClick={()=>{
                window.scrollTo({
                    top: document.querySelector(".secao1").getBoundingClientRect().top + window.scrollY,
                    behavior: "smooth",
                });
                }}>Problemática</button></li>

                    <li><button onClick={()=>{
                window.scrollTo({
                    top: document.querySelector(".secao2").getBoundingClientRect().top + window.scrollY,
                    behavior: "smooth",
                });
                }}>Solução</button></li>

                    <li><button onClick={()=>{
                window.scrollTo({
                    top: document.querySelector(".secao3").getBoundingClientRect().top + window.scrollY,
                    behavior: "smooth",
                });
                }}>Objetivos</button></li>
                </ul>
                <p>@2024 BitWise | Todos Direitos Reservados</p>
            </footer>
         </FooterStyle>
        </>
    )
}

export default Footer
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
                    <li><a href="#"><FaApple/></a></li>
                    <li><a href="#"><FaFacebook/></a></li>
                    <li><a href="#"><FaLinkedin/></a></li>
                    <li><a href="#"><FaInstagram/></a></li>
                    <li><a href="#"><BiLogoPlayStore/></a></li>
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
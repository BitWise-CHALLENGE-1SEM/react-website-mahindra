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
                    <li><a href="#">Problemática</a></li>
                    <li><a href="#">Solução</a></li>
                    <li><a href="#">Objetivos</a></li>
                </ul>
                <p>@2024 BitWise | Todos Direitos Reservados</p>
            </footer>
         </FooterStyle>
        </>
    )
}

export default Footer
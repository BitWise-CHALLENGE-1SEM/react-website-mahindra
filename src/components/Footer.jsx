import { FooterStyle } from "../css/FooterStyle";
import { FaApple, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    const handleScroll = (section) => {
        navigate("/"); // Navega para a página inicial
        setTimeout(() => {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
    };

    return (
        <FooterStyle>
            <footer>
                <ul className="social-icon">
                    <li><a href="https://www.apple.com/br/app-store/"><FaApple /></a></li>
                    <li><a href="https://pt-br.facebook.com/"><FaFacebook /></a></li>
                    <li><a href="https://br.linkedin.com/"><FaLinkedin /></a></li>
                    <li><a href="https://www.instagram.com/"><FaInstagram /></a></li>
                    <li><a href="https://play.google.com/store/games?device=windows"><BiLogoPlayStore /></a></li>
                </ul>

                <ul className="menu">
                    <li>
                        <button onClick={() => handleScroll('secao1')}>Problemática</button>
                    </li>
                    <li>
                        <button onClick={() => handleScroll('secao2')}>Solução</button>
                    </li>
                    <li>
                        <button onClick={() => handleScroll('secao3')}>Objetivos</button>
                    </li>
                </ul>
                <p>@2024 BitWise | Todos Direitos Reservados</p>
            </footer>
        </FooterStyle>
    );
};

export default Footer;

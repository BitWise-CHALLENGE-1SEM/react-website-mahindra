import { Link } from "react-router-dom"
import { NavStyle } from "../css/NavStyle"
import logo from "../assets/logo_mahindra.png"
import logo_formula from "../assets/Formula_E.png"
const Nav=()=>{
    
    return(
        <>
        <NavStyle>
            <section className="bloco-nav">
                <header>
                    <div className="logo">
                        <a href="#home">
                            <img src={logo} alt="logo"/>
                        </a>
                    </div>
                    <nav>
                        <ul>
                            {/* <!--Explicação do que almejamos = Escopo + Slideshow--> */}
                            <li><a href="#secao1-2" className="parallelogram-button"><span>Problemática</span></a></li> 
                            {/* <!--Jogo do mario 2D adaptado na solução (atack mode)--> */}
                            <li><a href="#secao2" className="parallelogram-button"><span>Solução</span></a></li> 
                            {/* <!--Impactos positivos vs Negativos--> */}
                            <li><a href="#secao3" className="parallelogram-button"><span>Objetivos</span></a></li> 
                        </ul>
                        <Link className="cta-button" to="/login">LOGIN</Link>
                    </nav>
                </header>
                <div className="logo-formula">
                    <img src={logo_formula} alt=""/>
                </div>

                <div className="scroll-indicator">
                    <div className="progress-bar"></div>
                </div>
            </section>
        </NavStyle>
        </>
    )
}

export default Nav
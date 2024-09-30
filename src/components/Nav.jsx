import { Link, Navigate, useNavigate } from "react-router-dom"
import { NavStyle } from "../css/NavStyle"
import logo from "../assets/logo_mahindra.png"
import logo_formula from "../assets/Formula_E.png"



const Nav=(props)=>{

    const navigate = useNavigate()
    

    const buttons = {
        Impactos:<li>
            <button type="text" className="parallelogram-button" onClick={()=>{
                window.scrollTo({
                    top: document.querySelector(".secao3").getBoundingClientRect().top + window.scrollY,
                    behavior: "smooth",
                });
            }}><span>IMPACTOS</span></button>
        </li>,
        Sobre:<li>
            <button type="text" className="parallelogram-button" onClick={()=>{
                window.scrollTo({
                    top: document.querySelector(".secao1-2").getBoundingClientRect().top + window.scrollY,
                    behavior: "smooth",
                });
            }}><span>SOBRE</span></button>
        </li>,
        
        Home:<li>
            <Link className="parallelogram-button" to="/">HOME</Link>
        </li>,
        Game:<li>
            <button onClick={()=>{
            navigate("/jogo");
        }} className="parallelogram-button"><span>JOGO</span></button>
         </li>,
        Login:<li>
            <Link className="cta-button" to="/login">LOGIN</Link>
        </li>
    }
    return(<>
        <NavStyle>
            <section className="bloco-nav">
                <header>
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <nav>
                        <ul>
                            {props.buttons.map((button, index) => (
                                buttons[button]
                            ))}
                        </ul>
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
    </>)
}

export default Nav
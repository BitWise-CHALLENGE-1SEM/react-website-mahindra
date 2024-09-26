import { Link } from "react-router-dom"
import { NavStyle } from "../css/NavStyle"
import logo from "../assets/logo_mahindra.png"
import logo_formula from "../assets/Formula_E.png"

const Nav=(props)=>{
    const buttons = {
        Home:<li>
            <a href="#secao1-2" className="parallelogram-button"><span>asdasdasd</span></a>
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
                        <a href="#home">
                            <img src={logo} alt="logo"/>
                        </a>
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
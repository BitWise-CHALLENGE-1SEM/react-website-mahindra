import { useNavigate, Link } from "react-router-dom"
import { useEffect, useRef, useState} from "react"
import { LoginStyle } from "../css/LoginStyle";

const Login=()=>{
    let usuario = ""
    let email = ""

    const inputUser = useRef();
    const inputPass = useRef();

    const [registrados, setRegistrados] = useState();
    const navigate = useNavigate();

    function validade(){
        for(let i=0; i<registrados.length; i++){
            console.log(registrados[i])
            if(
                (
                    registrados[i].email == inputUser.current.value
                    |
                    registrados[i].usuario == inputUser.current.value
                ) &&
                registrados[i].senha == inputPass.current.value
            ){ 
                usuario = registrados[i].usuario
                email = registrados[i].email

                return true;
            }
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        if(validade()){
            let token = 
            Math.random().toString(16).substring(2)+
            Math.random().toString(16).substring(2)

            sessionStorage.setItem("usuario",usuario)
            sessionStorage.setItem("email",email)
            sessionStorage.setItem("senha",token)
            navigate("/")
        }else{
            alert("usuario/senha inválidos")
        }
    }

    useEffect(()=>{
        fetch("http://localhost:5000/clientes").then((resposta)=>{
            return resposta.json();
        }).then((resposta)=>{
            setRegistrados(resposta)
        })
    },[])

    return(<>
        <LoginStyle>
            <section className="container">
                <div className="login">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <span className="titulo">Faça seu login</span>

                        <div className="div-input">
                            <input
                                type="text"
                                className="caixa-input"
                                placeholder="Email do usuário"
                                id="email"
                                ref={inputUser}
                            />
                        </div>

                        <div className="div-input">
                            <input
                                type="password"
                                className="caixa-input"
                                placeholder="Senha"
                                id="senha"
                                ref={inputPass}
                            />
                        </div>
                        
                        <div className="div-botao">
                            <button type="submit" className="botao-login">login</button>
                        </div>

                        <ul className="utilidades">
                            <li>
                                <a href="#">Esqueceu sua senha?</a>
                            </li>
                            <li>
                                <span className="texto-utilidade">Não possui conta? </span>
                                <Link to="/clientes">Criar</Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </section>
        </LoginStyle>
    </>)
}

export default Login
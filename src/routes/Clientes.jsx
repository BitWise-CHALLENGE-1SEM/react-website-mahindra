import { ClientesStyle } from "../css/ClientesStyle";
import { useParams, Link, useNavigate } from "react-router-dom"
import { useState } from "react"

import Nav from "../components/Nav"
const Clientes=()=>{

    let {id} = useParams();
    const [registrados, setRegistrados]=useState({
        id,
        nome:"",
        senha:"",
        email:"",
        telefone:""
    });

    const navigate = useNavigate();
    const handleChange=(e)=>{
        setRegistrados({...registrados,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        fetch(`http://localhost:5000/clientes/${id ? id:""}`,{
            method: id?"put":"post",
            headers:{
                "content-type": "application/json",
            },
            body: JSON.stringify(registrados),
        }).then (()=>{
            navigate("/login");
        })
    };

    return(<>
        <Nav buttons={["Home"]}/>
        <ClientesStyle>
            <body>
                <section className="usuario">
                    <div class="wrapper">
                        <h1>Cadastrar Usuários</h1>
                        <form onSubmit={handleSubmit}>
                            <div class="input-box">
                                <input
                                    type="text"
                                    name="usuario"
                                    value={registrados.usuario}
                                    placeholder="Digite o nome de usuário"
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div class="input-box">
                                <input
                                    type="text"
                                    name="email"
                                    value={registrados.email}
                                    placeholder="Digite o email do usuário"
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div class="input-box">
                                <input
                                    type="password"
                                    name="senha"
                                    value={registrados.senha}
                                    placeholder="Digite sua senha"
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div class="input-box">
                                <input
                                    type="text"
                                    name="telefone"
                                    value={registrados.telefone}
                                    placeholder="Digite o número de telefone"
                                    onChange={handleChange}
                                />
                            </div>

                            <button type="submit" class="btn" onSubmit={handleSubmit}>Cadastrar</button>
                        </form>
                    </div>
                </section>
            </body>
        </ClientesStyle>
    </>)
}

export default Clientes
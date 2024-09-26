import { ClientesStyle } from "../css/ClientesStyle";
import { useParams, Link, useNavigate } from "react-router-dom"
import { useState } from "react"

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
        fetch(`http://localhost:5001/clientes/${id ? id:""}`,{
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
        <ClientesStyle>
            <section className="usuario">
                <h1>Cadastrar Usuários</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="usuario"
                        value={registrados.usuario}
                        placeholder="Digite o nome de usuário"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="email"
                        value={registrados.email}
                        placeholder="Digite o email do usuário"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="senha"
                        value={registrados.senha}
                        placeholder="Digite sua senha"
                        onChange={handleChange}
                        required
                    />
                    
                    <input
                        type="text"
                        name="telefone"
                        value={registrados.telefone}
                        placeholder="Digite o número de telefone"
                        onChange={handleChange}
                    />

                    <button type="submit" onSubmit={handleSubmit}>Cadastrar</button>
                </form>
            </section>
        </ClientesStyle>
    </>)
}

export default Clientes
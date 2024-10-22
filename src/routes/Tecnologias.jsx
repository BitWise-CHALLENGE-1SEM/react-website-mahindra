import { TecnologiasStyle } from "../css/TecnologiasStyle"
import Nav from "../components/Nav"

const Tecnologias=()=>{
    return(
        <>
        <TecnologiasStyle>
            <Nav buttons={["Home","Game",sessionStorage.getItem("usuario") ? "" : "Login"]}/>
            <section className="corpo">
                <section className="secao3">
                    <h1>A Fórmula-E promove inovações tecnológicas.</h1>
                        <div className="container">
                            <div className="content">
                                <h2>A Categoria Exportadora de Tech </h2>
                                <p>A Fórmula E tem sido um campo de testes incrível para tecnologias que acabam sendo aplicadas em nosso dia a dia. O fato de evoluir o carro na pista permite transportar as tecnologias criadas para os novos carros elétricos das grandes marcas.</p>
                            </div>  
                            <div className="content">
                                <h2>Tecnologias Exclusivas de Ponta </h2>
                                <p>A Fórmula E é um espetáculo de inovações e tecnologias revolucionárias que nunca foram vistas em outros eventos automobilísticos. A categoria conta com um modelo de qualificação duelo, sistema de Attack Mode, Fanboost e tração integral variável. A implementação dessas tecnologias exclusivas exemplificam o futuro das competições automotivas, estabelecendo novos padrões de engenharia e performance.</p>
                            </div>
                        </div>
                    </section>
                </section>
        </TecnologiasStyle>
        </>
    )

}

export default Tecnologias
import { TecnologiasStyle } from "../css/TecnologiasStyle"
import Nav from "../components/Nav"
import carro from "../assets/carromahindrapng.webp"
import acelerando from "../assets/audios/acelerando.mp3"
const Tecnologias=()=>{
    function animated(){
        const carro = document.querySelector('.image');
        carro.classList.add('hovered');
        setTimeout(() => {
            carro.classList.remove('hovered');
        }, 15000);
    }
    function acelerar(){
        const x = document.querySelector(".musica")
        x.play()
    }
    
    return(
        <>
        <TecnologiasStyle>
            <Nav buttons={["Home","Game",sessionStorage.getItem("usuario") ? "" : "Login"]}/>
            <section className="corpo">
                <section className="secao1">
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
                <section className="secao2">
                    <div className="secao2-text order-1">
                        <h1>Encontre todas as</h1>
                        <h2 className="titulo1">tecnologias mais avançadas.</h2>
                        <p> <a>- Frenagem Regenerativa:</a> Permitem que os carros recuperem energia durante a frenagem, aumentando a eficiência energética.</p>
                        <p> <a>- Desempenho e Eficiência:</a> O mais recente carro GEN3 Evo pode acelerar de 0 a 100 km/h em apenas 1,82 segundos, sendo 30% mais rápido que um carro de Fórmula 1 atual que faz em 2,6 segundos.  </p>
                        <p> <a>- Tecnologia de Baterias:</a> Com uma potência de 350 kW, obteve um aumento de 75% de capacidade energética em relação ao modelo anterior</p>
                        <div className="btn"><button className="btnCorrer" onClick={acelerar}>Vamos correr</button></div>
                        </div>

                        <div className="secao2-image order-2">
                        <audio className="musica">
                            <source src={acelerando} type="audio/mpeg"/>
                        </audio>
                        <img src={carro} className="image" alt="carro" onMouseOver={animated}/>
                    </div>
                </section>
            </section>
        </TecnologiasStyle>
        </>
    )

}

export default Tecnologias
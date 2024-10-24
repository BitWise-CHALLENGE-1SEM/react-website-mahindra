import { TecnologiasStyle } from "../css/TecnologiasStyle"
import Nav from "../components/Nav"
import carro from "../assets/carromahindrapng.webp"
import acelerando from "../assets/audios/acelerando.mp3"
import video from "../assets/attackmodevideo.mp4"
import fanboost from "../assets/fanboostvideo.mp4"
import ReactPlayer from "react-player"

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
                <section className="secao3">
                    <h1>Inovações EXCLUSIVAS da Formula-e</h1>
                    <h2>Attack Mode</h2>
                    <div className="frame">
                        <ReactPlayer
                            url={video}
                            playing
                            loop={true}
                            muted
                            className="video-background"
                        />
                    </div>
                    
                    <div className="conteudos">
                        <div className="conteudo1">
                            <h3>DESCRIÇÃO</h3>
                            <p>Descrição: Para ativar o Attack Mode, os pilotos precisam passar por uma zona de ativação específica na pista, que geralmente está fora da linha de corrida ideal. Isso significa que eles precisam perder um certo tempo de ritmo naquele momento,
                                o que pode ser arriscado, mas recompensador. Uma vez ativado, o Attack Mode proporciona um aumento temporário de potência ao carro. Este aumento pode variar, mas geralmente adiciona cerca de 35 kW de potência extra
                            </p>
                        </div>    
                        <div className="conteudo2">
                            <h3>IMPACTO</h3>
                            <p>Aumenta a competitividade e a imprevisibilidade das corridas, A duração do Attack Mode e o número de ativações permitidas por corrida podem variar. Os pilotos e suas equipes precisam decidir estrategicamente quando ativar o modo para obter a maior vantagem possível, seja para ultrapassar um concorrente ou defender uma posição.
                            Importante ressaltar que os carros de Fórmula E possuem luzes LED no Halo (a estrutura de proteção sobre o cockpit) que acendem para indicar quando o piloto está em Attack Mode.
                            </p>
                        </div>
                    </div>
                    <h2>Fanboost</h2>
                    <div className="frame">
                        <ReactPlayer
                            url={fanboost}
                            playing
                            loop={true}
                            muted
                            className="video-background"
                        />
                    </div>
                    <div className="conteudos">
                        <div className="conteudo1">
                            <h3>DESCRIÇÃO</h3>
                            <p>O Fanboost permite que os fãs votem online para dar um aumento de potência temporário aos seus pilotos favoritos durante a corrida. Os 3 pilotos com mais votos recebem um impulso extra de energia que pode ser usado a qualquer momento.
                            </p>
                        </div>    
                        <div className="conteudo2">
                            <h3>IMPACTO</h3>
                            <p>Permite aos fãs participarem diretamente na corrida, permitindo que influenciem o resultado e criando uma conexão mais forte entre os pilotos e o público</p>
                        </div>
                    </div>
                </section>
            </section>
        </TecnologiasStyle>
        </>
    )

}

export default Tecnologias
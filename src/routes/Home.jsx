import gp_sp from "../assets/tracks/gp-sao-paulo.webp";
import gp_monaco from "../assets/tracks/gp-monaco.webp";
import gp_berlim from "../assets/tracks/gp-berlim.webp";
import gp_uer from "../assets/tracks/gp-uer.webp";

import Slideshow from "../components/Slideshow"
import exemplo_jogo from "../assets/exemplo_jogo.png";

import { HomeStyle } from "../css/HomeStyle";

import Nav from "../components/Nav"
const Home=()=>{
    
    return(<>
        <Nav buttons={["Impactos","Sobre","Game",sessionStorage.getItem("usuario") ? "" : "Login"]}/>
        <HomeStyle>
            <Slideshow/>
            <body>
                {/* <section className="secao1">
                    <h3>Inserir as pessoas no mundo da formula-E!</h3>
                    <div className="slider">
                        <div className="slides">
                            <input type="radio" name="radio-btn" id="radio1"/>
                            <input type="radio" name="radio-btn" id="radio2"/>
                            <input type="radio" name="radio-btn" id="radio3"/>
                            <input type="radio" name="radio-btn" id="radio4"/>
                    
                            {/* <!-- SLIDES IMAGE --> */}
                            {/* <div className="slide first">
                                <img src={gp_sp} alt="imagem 1"/>
                            </div>
                    
                            <div className="slide">
                                <img src={gp_berlim} alt="imagem 2"/>
                            </div>
                    
                            <div className="slide">
                                <img src={gp_monaco} alt="imagem 3"/>
                            </div>
                    
                            <div className="slide">
                                <img src={gp_uer} alt="imagem 4"/>
                            </div>
                        </div>
                    </div>
                </section> */} 
                <section className="secao1-2">
                    <div className="text">  
                        <p>A Fórmula-E é uma categoria empolgante que combina corridas de carros elétricos com tecnologia de ponta.
                            No entanto, ela muitas vezes não recebe a mesma atenção que outras competições automobilísticas mais tradicionais. Através da nossa abordagem inovadora 
                            que combina educação sobre a categoria e lazer (gamificação), vamos impulsionar o interesse e participação do público, consequentemente ampliaremos a divulgação orgânica,
                            auxiliando a popularizar a Fórmula-E e atrair um público mais amplo.
                        </p>
                        <a href="#secao3">Saiba mais!</a>
                    </div>

                    <div className="container-expand">
                        <div>
                            <div className="content-expand">
                                <h2>DE VRIES</h2>
                                <span>Driver</span>
                            </div>
                        </div>
                        <div>
                            <div className="content-expand">
                                <h2>MORTARA</h2>
                                <span>Driver</span>
                            </div>
                        </div>
                        <div>
                            <div className="content-expand">
                                <h2>King</h2>
                                <span>Reserve driver</span>
                            </div>
                        </div>
                        <div>
                            <div className="content-expand">
                                <h2>Bertrand</h2>
                                <span>CEO</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="secao2">
                    <div className="jogo">
                        <h2>Aprendendo de maneira divertida!</h2>
                        <img src={exemplo_jogo} alt="exemplo_jogo"/>
                    </div>
                </section>
                <section className="secao3">
                    <div class="container">
                        <div class="content">
                            <h2>Impactos Negativos do Problema</h2>
                            <p>O problema enfrentado pela Fórmula-E é a falta de popularidade e divulgação insuficiente. Isso resulta em menor interesse do público,
                                menor base de fãs e oportunidades de negócios limitadas para organizadores e equipes. Além disso,
                                os potenciais fãs perdem a chance de desfrutar das corridas empolgantes e tecnológicas da categoria.</p>
                        </div>  
                        <div class="content">
                            <h2>Impactos Positivos da Solução</h2>
                            <p>A solução incentivará a participação ativa, criando uma comunidade mais entusiasmada em torno da categoria, ou seja, o conhecimento e o interesse dos fãs ampliarão. Dessa forma,
                                aumenta-se a divulgação orgânica e consequentemente a popularidade da fórmula-E. Em suma, o público aumentará devido ao aumento da divulgação orgânica,
                                a partir disso promovemos maior visibilidade para a Fórmula-E favorecendo a presença de patrocinadores e impulsionando a categoria de modo geral.</p>
                        </div>
                    </div>
                </section>
            </body>
        </HomeStyle>
    </>)
}

export default Home
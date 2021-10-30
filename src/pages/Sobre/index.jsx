import { Title } from "../../components/Title"
import { Skill } from '../../components/Skill'
import './style.css'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import { ExperienciaBox } from "../../components/ExperienciaBox"

function Sobre() {
    return (
        <div className="container-sobre">
            <div className="title">
                <Title conteudo="SOBRE" />
            </div>

            <div className="content-info">
                <div className="infos">
                    <h2>INFORMAÇÕES PESSOAIS</h2>
                    <div className="container-info">
                        <div className="coluna-info">
                            <p><span>Nome:</span>Marco Gouveia</p>
                            <p><span>Idade:</span>19 Anos</p>
                            <p><span>Nacionalidade:</span>Recife - PE</p>

                        </div>
                        <div className="coluna-info">
                            <p><span>Email:</span>marcogouveia2001@outlook.com</p>
                            <p><span>Telefone:</span>(81) 99468-1599</p>
                            <p><span>Endereço:</span>R. Tenente Coronel Evilasio Novaes Gominho, COHAB - Cabo de S.t Agostinho - PE</p>
                        </div>
                    </div>

                </div>

                <div className="sobre-infos">
                    <h2>Olá</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Beatae nam aut ducimus harum enim at autem, reiciendis, impedit
                        voluptate iusto, quod et earum minus sed quisquam possimus
                        dipisci ipsa suscipit.</p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Delectus molestias reiciendis odio praesentium obcaecati quaerat,
                        quo error beatae voluptates a, repellat optio quam dolorem cumque
                        vel, officia sit. Blanditiis, veritatis.
                    </p>
                </div>

            </div>

            <div className="button-download-cv">
                <a target="_blank" rel="noreferrer" href="https://google.com">Download CV</a>
            </div>

            <hr />

            <div className="title">
                <Title conteudo="SKILLS" />
            </div>


            <div className="skills-content">
                <Skill foto={js} tecnologia="JavaScript" alt="JavaScript" />
                <Skill foto={html} tecnologia="Html" alt="Html" />
                <Skill foto={css} tecnologia="Css" alt="Css" />
                <Skill foto={react} tecnologia="React" alt="React" />
            </div>


            <hr />
            <div className="title">
                <Title conteudo="Experiência e educação" />
            </div>

            <ExperienciaBox anoComeco="2020" anoFim="Até Agora" title="Desenvolvedor FRONT-END - GRID Design e Estrategia">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis libero eaque possimus aliquam! Pariatur est similique fugit laboriosam officia, id a neque? Excepturi tempora, consequuntur nihil ducimus officiis facilis minus.
            </ExperienciaBox >
            <ExperienciaBox anoComeco="2019" anoFim="2022" title="Formação em Analise e desenvolvimento de sistemas">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis libero eaque possimus aliquam! Pariatur est similique fugit laboriosam officia, id a neque? Excepturi tempora, consequuntur nihil ducimus officiis facilis minus.
            </ExperienciaBox >
            <ExperienciaBox anoComeco="2018" anoFim="Até Agora" title="Inicio dos Estudos na programação">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis libero eaque possimus aliquam! Pariatur est similique fugit laboriosam officia, id a neque? Excepturi tempora, consequuntur nihil ducimus officiis facilis minus.
            </ExperienciaBox >




        </div>
    )
}

export { Sobre }
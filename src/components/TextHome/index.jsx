import './style.css';
import {FaArrowRight} from 'react-icons/fa'
function TextHome() {
    return (
        <div className="text-home">
            <h1>
                Olá, Eu sou <span>Marco Gouveia,</span> <br />
                Um Desenvolvedor <br /> <span>Front End</span>
            </h1>

            <p>
                Estudande de ADS (Análise e desenvolvimento de Sistemas), apaixonado por jogos, música e o principal  
                <span> Tecnologia</span>, com foco no clean-Code e performace;
                <br /><br />
                Quer saber mais ? Navegue pelos links ao lado { <FaArrowRight color="#FFF" /> }
            </p>
        </div>
    )
}

export { TextHome }
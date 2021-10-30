import { ContatoBox } from '../../components/ContatoBox';
import { Formulario } from '../../components/Formulario';
import { Title } from '../../components/Title';
import './style.css';

import { FaEnvelope, FaPhoneAlt, FaUsers, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'



function Contato() {

    const Redes = () => {
        return (

            <div className="flex-redes">
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com">
                    {<FaInstagram color="#FFF" size="28" />}
                </a>
                <a target="_blank" rel="noreferrer" href="linkedin.com/in/marco-gouveia-8a4bb9197/">
                    {<FaLinkedin color="#FFF" size="28" />}
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/marcogouveia">
                    {<FaGithub color="#FFF" size="28" />}
                </a>
            </div>
        )
    }

    return (
        <div className="container-contato">

            <div className="title">
                <Title conteudo="Contato" />
            </div>

            <div className="flex-contato">

                <div className="infos-contato-div">
                    <div className="text-info-div">
                        <h2>Entre em Contato!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, voluptatem? Necessitatibus natus recusandae laborum! Libero fugit voluptate, harum accusantium consequuntur distinctio amet cumque animi ullam debitis laboriosam eius a saepe!</p>
                    </div>
                    <ContatoBox icon={<FaEnvelope color="#FFF" size="42" />} tipo="Email" texto="marcogouveia2001@outlook.com" />
                    <ContatoBox icon={<FaPhoneAlt color="#FFF" size="42" />} tipo="Telefone" texto="(81) 99468-1599)" />
                    <ContatoBox icon={<FaUsers color="#FFF" size="42" />} tipo="Redes Sociais" texto={<Redes />} />
                </div>

                <Formulario />

            </div>


        </div>
    )
}

export { Contato }
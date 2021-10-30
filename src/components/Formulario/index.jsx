import { useState } from 'react';
import './style.css';

function Formulario() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [assunto, setAssunto] = useState("");
    const [mensagem, setMensagem] = useState("");

    function showInputs(e){
        e.preventDefault();
        alert(`

            Formulario Moral !

            Nome: ${nome},
            Email: ${email},
            Assunto: ${assunto},
            Mensagem: ${mensagem};
        
        `)
    }

    return (

        <div className="formulario">
            <form>
                <div className="inputs-line">
                    <div className="input-name">
                        <label htmlFor="nome">Nome:</label><br />
                        <input id="nome" type="text" onChange={ (e) => {setNome(e.target.value)} } />
                    </div>

                    <div className="input-email">
                        <label htmlFor="email">Email:</label><br />
                        <input id="email" type="email" onChange={ (e) => {setEmail(e.target.value)} }/>
                    </div>
                </div>

                <div className="input-assunto">
                    <label htmlFor="assunto">Assunto:</label><br />
                    <input id="assunto" type="text" onChange={ (e) => {setAssunto(e.target.value)} }/>
                </div>

                <div className="textarea-mensagem">
                    <label htmlFor="mensagem">Mensagem:</label><br />
                    <textarea name="mensagem" id="mensagem" onChange={ (e) => {setMensagem(e.target.value)} }></textarea>
                </div>

                <div className="button-send">
                    <input onClick={showInputs} type="submit" value="Enviar" />
                </div>
            </form>
        </div>

    )
}

export { Formulario }
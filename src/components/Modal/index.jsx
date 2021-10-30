import { Title } from '../Title';
import './style.css';

function Modal({nome, projeto, tecnologia, previw, foto, setModal}) {
    return (
        <div className="modal-cliente">
            <div className="content-modal">
                <div className="close-button">
                    <button onClick={ () => {setModal("")} }> X </button>
                </div>
                <Title conteudo={nome} />

                <div className="infos-cliente">
                    <div className="coluna">
                        <p><span>Projeto:</span>{projeto}</p>
                        <p><span>Tecnologias:</span>{tecnologia}</p>
                    </div>
                    <div className="coluna">
                        <p><span>Cliente:</span>{nome}</p>
                        <p><span>Preview:</span> <a target="_blank" rel="noreferrer" href={previw}>{previw}</a></p>
                    </div>
                </div>

                <div className="foto-cliente">
                    <img src={foto} alt={nome} />
                </div>
            </div>
        </div>
    )
}

export {Modal}
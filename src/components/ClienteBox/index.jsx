import { useState } from 'react';
import { Modal } from '../Modal';

import './style.css';

function ClienteBox(props) {

    const [modal, setModal] = useState("");

    function handleModal(cliente) {
        setModal(cliente);
    }

    return (

        <>
            <button onClick={() => { handleModal(props.nome) }} className="button-cliente-modal">
                <div className="box-cliente">
                    <img src={props.foto} alt={props.cliente} />
                    <div className="cliente-nome">
                        <h4>{props.nome}</h4>
                    </div>
                </div>
            </button>

            {modal === props.nome && <Modal
                nome={props.nome}
                tecnologia={props.tecnologia}
                projeto={props.projeto}
                previw={props.previw}
                foto={props.foto}
                setModal={setModal}
            />}


        </>

    )
}

export { ClienteBox }
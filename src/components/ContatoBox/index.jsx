import './style.css';

function ContatoBox(props) {
    return (
        <div className="box-contato-info">
            <div className="icone-contato">
                <span>{props.icon}</span>
            </div>
            <div className="infos-contato">
                <h4>{props.tipo}</h4>
                <p>{props.texto}</p>
            </div>
        </div>
    )
}

export {ContatoBox}
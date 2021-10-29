import './style.css';

function ClienteBox (props) {

    return (
        <div className="box-cliente">
            {console.log(props.foto)}
            <img src={props.foto} alt={props.cliente} />
        </div>
    )
}

export { ClienteBox } 
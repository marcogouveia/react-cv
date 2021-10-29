import foto from '../../assets/eu-de-chapeu.jpeg';
import './style.css';
function FotoHome () {
    return (
        <div className="foto">
            <img src={foto} alt="Marco Gouveia" />
        </div>
    )
}

export { FotoHome }
import './style.css'

function ExperienciaBox(props) {
    return (

        <div className="content-box-experiencia">
            <div className="data-box">
                <span className="ano">{props.anoComeco}</span>
                <div className="barra"></div>
                <span className="ano">{props.anoFim}</span>
            </div>
            <div className="text-experiencia">
                <h2>{props.title}</h2>
                <p>{props.children}</p>
            </div>
        </div>


    )
}

export { ExperienciaBox }
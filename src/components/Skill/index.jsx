
import './style.css'

function Skill(props) {
    return (

        <div className="skill">
            <img src={props.foto} alt={props.alt} />
            <h3>{props.tecnologia}</h3>
        </div>


    )
}

export { Skill }
import { FaEnvelope, FaUser, FaHome, FaGithub, FaBriefcase } from 'react-icons/fa'
import './style.css'
const Nav = ({ setActive }) => {
    return (
        <div className="nav-bar">
            <ul>
                <li>
                    <button onClick={() => { setActive("home") }}>
                        <FaHome size="25" color="#FFF" />
                        <h2>HOME</h2>
                    </button>
                </li>
                <li>
                    <button onClick={() => { setActive("sobre") }}>
                        <FaUser size="25" color="#FFF" />
                        <h2>SOBRE</h2>
                    </button>
                </li>
                <li>
                    <button onClick={() => { setActive("portfolio") }}>
                        <FaBriefcase size="25" color="#FFF" />
                        <h2>PORTFOLIO</h2>
                    </button>
                </li>
                <li>
                    <button onClick={() => { setActive("contato") }}>
                        <FaEnvelope size="25" color="#FFF" />
                        <h2>CONTATO</h2>
                    </button>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/marcogouveia">
                        <FaGithub size="25" color="#FFF" />
                        <h2>GITHUB</h2>
                    </a>

                </li>

            </ul>
        </div>
    )
}

export { Nav }
import { useState } from 'react';
import './App.css';
import { FaEnvelope, FaUser, FaHome, FaGithub, FaBriefcase } from 'react-icons/fa'
import './components/Nav/style.css';

import { Contato } from './pages/Contato';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Sobre } from './pages/Sobre';




function App() {

    const [active, setActive] = useState("HomePage");

    function handlePage(page) {

        if (page === "home") {
            setActive("HomePage")
        }
        else if (page === "sobre") {
            setActive("SobrePage")
        }
        else if (page === "portfolio") {
            setActive("PortfolioPage")
        }
        else if (page === "contato") {
            setActive("ContatoPage")
        }

    }


    const Nav = () => {
        return (
            <div className="nav-bar">
                <ul>
                    <li>
                        <button onClick={() => { handlePage("home") }}>

                            <FaHome size="25" color="#FFF" />
                            <h2>HOME</h2>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => { handlePage("sobre") }}>
                            <FaUser size="25" color="#FFF" />
                            <h2>SOBRE</h2>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => { handlePage("portfolio") }}>
                            <FaBriefcase size="25" color="#FFF" />
                            <h2>PORTFOLIO</h2>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => { handlePage("contato") }}>
                            <FaEnvelope size="25" color="#FFF" />
                            <h2>CONTATO</h2>
                        </button>
                    </li>
                    <li>
                        <FaGithub size="25" color="#FFF" />
                        <h2>GITHUB</h2>
                    </li>

                </ul>
            </div>
        )
    }

    return (

        <div>
            

            {active === "HomePage" && <Home />}
            {active === "SobrePage" && <Sobre />}
            {active === "PortfolioPage" && <Portfolio />}
            {active === "ContatoPage" && <Contato />}


            <Nav />

        </div>

    );
}

export default App;

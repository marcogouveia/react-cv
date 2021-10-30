import { useState } from 'react';
import './App.css';

import './components/Nav/style.css';

import { Contato } from './pages/Contato';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Sobre } from './pages/Sobre';

import { Nav } from './components/Nav';


function App() {

    const [active, setActive] = useState("HomePage");

    function handlePage(page) {

        if (active === "home") {
            setActive("HomePage")
        }
        else if (active === "sobre") {
            setActive("SobrePage")
        }
        else if (active === "portfolio") {
            setActive("PortfolioPage")
        }
        else if (active === "contato") {
            setActive("ContatoPage")
        }

    }

    return (

        <div>
            
            {handlePage(active)}

            {active === "HomePage" && <Home />}
            {active === "SobrePage" && <Sobre />}
            {active === "PortfolioPage" && <Portfolio />}
            {active === "ContatoPage" && <Contato />}


            <Nav active={active} setActive={setActive} />

        </div>

    );
}

export default App;

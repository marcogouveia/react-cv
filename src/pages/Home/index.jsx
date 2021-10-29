import { FotoHome } from "../../components/FotoHome"
import { TextHome } from "../../components/TextHome";
import './style.css';
function Home () {
    return (
        <div className="container">
            <FotoHome />
            <TextHome />
        </div>
    )
}

export { Home }
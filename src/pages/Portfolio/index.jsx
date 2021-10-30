import { ClienteBox } from '../../components/ClienteBox'
import { Title } from '../../components/Title'
import './style.css';
import data from '../../data';

function Portfolio() {
    return (
        <div className="container-portfolio">
            <div className="title">
                <Title conteudo="Portfólio" />
            </div>

            <div className="portfolio-list">
                {data.map((item) => {
                    return (
                        <ClienteBox 
                            nome={item.cliente.nome} 
                            foto={item.cliente.foto} 
                            projeto={item.cliente.projeto} 
                            tecnologia={item.cliente.tecnologia}
                            previw={item.cliente.preview}
                        />

                    )

                })}

            </div>
        </div>
    )
}

export { Portfolio }
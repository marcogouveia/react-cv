import { ClienteBox } from '../../components/ClienteBox'
import { Title } from '../../components/Title'

import data from '../../data';

function Portfolio() {
    return (
        <div className="container-portfolio">
            <div className="title">
                <Title conteudo="Portfólio" />
            </div>

            <div className="portfolio-list">
                {data.map( (item) => {
                    console.log(item.cliente.foto)
                    return (
                        <ClienteBox foto={item.cliente.foto} cliente={item.cliente.nome} />
                            
                    )
                    
                })}
                
            </div>
        </div>
    )
}

export { Portfolio }
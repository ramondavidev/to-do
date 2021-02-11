import { Link } from 'react-router-dom';

import './home.styles.scss';


const Home = () => {
    return (
        <div id="home">
            <div className='info'>
                <div className='container'>
                    <div className='store-name'>Teste para Desenvolvedor Full Stack React/NodeJs</div>
                    <span className='first-sentence'>Processo seletivo que consiste em criar uma TO-DO list. <br/> Teste feito por <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ramondavidev/">Ramon.</a>
                    </span>
                    <div className='store-name'>Tecnologias</div>
                    <span className='second-sentence'>Tecnologias usadas no front: Reactjs, redux e sass. <br/> Tecnologias usadas no back: Node, express e MongoDB.</span>
                    <Link to='/to-do' className='link'>
                        <button className='btn'>Ir para página de TO-DO</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;
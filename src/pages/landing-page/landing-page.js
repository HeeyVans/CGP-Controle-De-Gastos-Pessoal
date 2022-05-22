import './styles.css'
import Navbar from './Navbar'
import img from '../../assets/image-inicio.png'


function LandingPage() {
    return (
        <div id='main'>
            <Navbar />
            <div className="container-landing-page">
                <div className='name'>
                    <h1>
                        Controle seu gasto pessoal online
                    </h1>
                    <p className='details'>Encontre aqui a melhor forma de você organizar seu dinheiro, totalmente grátis e prático de usar!
                    </p>
                    <a href='../cadastro' className='cv-btn'>Cadastra-se já!</a>
                </div>

                <div className='image'>
                    <span className="img-inicio"><img src={img} alt="imagem"></img> </span>
                </div>

            </div>

            <div className='container-informacoes'>
                <h3><span>Veja alguns de nossos recursos:</span></h3>
                <p className='details-footer'>Cartões de Crédito • Controle de Gasto Mensal • Notificação de Vencimento de Fatura • Gasto Distribuido por Categoria</p>
            </div>

        </div>
    );
}

export default LandingPage;
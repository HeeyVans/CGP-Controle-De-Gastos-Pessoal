import './styles.css'
import Navbar from './Navbar'


function Inicio() {
  return (
    <div id='main'>
      <Navbar/>
        <div className='name'>
            <h1><span>Controle seu gasto pessoal online</span></h1>
            <p className='details'>Encontre aqui a melhor forma de você organizar seu dinheiro, totalmente grátis e prático de usar!
            </p>
            <a href='../cadastro/Cadastro.js' className='cv-btn'>Cadastra-se já!</a>
        </div>
      </div>
  );
}

export default Inicio;
import React from 'react';
import Navbar from './Navbar'
import "./sobre.css"
import imgsobre from '../../assets/imagens/sobre.jpg'

function Sobre() {
    return (
        <div>
            <Navbar />
            <div className="container-sobre">
                <div className="text-sobre">
                    <h1>Quem Somos</h1>
                    <p className="sobre">O CGP (Controle de Gastos Pessoal) é um gerenciador financeiro que vai te ajudar a ter controle dos seus gastos mensais. 
                    Trabalhado em cada detalhe com muito carinho e paixão para lhe proporcionar o melhor rendimento ao final do mês.
                    </p>
                </div>
                <div className="img-sobre">
                    <img src={imgsobre} alt="Homem aguando seus investimentos"/>
                </div>
            </div>
        </div>
    );
}
export default Sobre;
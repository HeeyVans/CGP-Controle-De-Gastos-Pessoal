import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imagens/logo-Outline.png";
import btnNotificacoes from '../../assets/imagens/btnNotificacoes.png';
import btnPerfil from '../../assets/imagens/btnPerfil.png';

const NavBar = () => {
    return (
        <nav>
            <Link to="/">
                <img src={ logo } alt="logo" />
            </Link>
            <Link to="/inicio"> Início </Link>
            <Link to="/relatorios"> Relatórios </Link>
            <Link to="/ajustes"> Ajustes </Link>
            <Link to="/#">
                <img src={ btnNotificacoes } alt="Notificações" width='50px' height='50px'/>
            </Link>
            <Link to="/#">
                <img src={ btnPerfil } alt="Notificações" width='50px' height='50px'/>
            </Link>
        </nav>
    );
}

export default NavBar;
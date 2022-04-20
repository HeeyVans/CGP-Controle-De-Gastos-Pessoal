import React from "react";
import { Link } from "react-router-dom";

//Imagens e Icones
import logo from "../../assets/imagens/logo-Outline.png";
import btnNotificacoes from '../../assets/imagens/btnNotificacoes.png';
import btnPerfil from '../../assets/imagens/btnPerfil.png';

//Estilos
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav class={styles.navbar}>
            <div>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <ul>
                <li>
                    <Link to="/inicio"> Início </Link>
                </li>
                <li>
                    <Link to="/relatorios"> Relatórios </Link>
                </li>
                <li>
                    <Link to="/ajustes"> Ajustes </Link>
                </li>
            </ul>
            <div class={styles.menuEsq}>
                <Link to="/#">
                    <img src={btnNotificacoes} alt="Notificações" width='50px' height='50px' />
                </Link>
                <Link to="/#">
                    <img src={btnPerfil} alt="Notificações" width='50px' height='50px' />
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;
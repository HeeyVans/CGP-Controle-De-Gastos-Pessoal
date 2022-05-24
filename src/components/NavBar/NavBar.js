import React from "react";
import { Link } from "react-router-dom";

//Imagens e Icones
import logo from "../../assets/imagens/logo-Outline.png";
import btnInicio from "../../assets/imagens/btnInicio.png";
import btnRelatorios from "../../assets/imagens/btnRelatorios.png";
import btnAjustes from "../../assets/imagens/btnAjustes.png";
import btnNotificacoes from "../../assets/imagens/btnNotificacoes.png";
import btnPerfil from "../../assets/imagens/btnPerfil.png";

//Estilos
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className={"navbar"}>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="menuCentral">
        <li>
          <img src={btnInicio} alt="Notificações" width="50px" height="50px" />
          <Link to="/inicio"> Início </Link>
        </li>
        <li>
          <img
            src={btnRelatorios}
            alt="Notificações"
            width="50px"
            height="50px"
          />
          <Link to="/relatorios"> Relatórios </Link>
        </li>
        <li>
          <img src={btnAjustes} alt="Notificações" width="50px" height="50px" />
          <Link to="/ajustes"> Ajustes </Link>
        </li>
      </ul>
      <ul className={"menuEsq"}></ul>
    </nav>
  );
};

export default NavBar;

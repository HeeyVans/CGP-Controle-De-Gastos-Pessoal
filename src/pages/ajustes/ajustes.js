import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./styles.css";
import { useState } from "react";

const Ajustes = () => {
  const [nome, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [apelido, setApelido] = useState("");

  return (
    <div>
      <NavBar />
      <div className="container">
        <h1>Ajustes</h1>
      </div>

      <div className="container-opcoes">
        <ul>
          <li>
            <h2>Conta</h2>
          </li>
          <li>
            <h2>Notificações</h2>
          </li>
          <li>
            <h2>Trocar Senha</h2>
          </li>
          <li>
            <h2>Sobre</h2>
          </li>
          <li className="op-sair">
            <h2>Sair</h2>
          </li>
        </ul>
      </div>

      <div className="container-conta">
        <h2>Conta</h2>
        <h3>Dados pessoais:</h3>

        <form className="ajustes-form">
          <div className="wrap-input-nome">
            <input
              className={nome !== "" ? "has-val input" : "input"}
              type="nome"
              value={nome}
              onChange={(e) => setNomeCompleto(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Nome"></span>
          </div>

          <div className="wrap-input-email">
            <input
              className={email !== "" ? "has-val input" : "input"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Email"></span>
          </div>

          <div className="wrap-input-telefone">
            <input
              className={telefone !== "" ? "has-val input" : "input"}
              type="telefone"
              value={telefone}
              onChange={(e) =>
                setTelefone[(telefone, setTelefone)](e.target.value)
              }
            />
            <span className="focus-input" data-placeholder="Telefone"></span>
          </div>

          <div className="wrap-input-apelido">
            <input
              className={apelido !== "" ? "has-val input" : "input"}
              type="apelido"
              value={apelido}
              onChange={(e) => setApelido(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Apelido"></span>
          </div>

          <div className="container-form-btn">
            <button className="mudancas-form-btn">Salvar Mudanças</button>
            <button className="cancelar-form-btn">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Ajustes;

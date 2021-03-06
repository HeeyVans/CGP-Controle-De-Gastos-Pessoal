import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./ajustes.css";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/auth.js";
import {
  api,
  getUserData,
  uptadeUser,
  uptadeSal,
} from "../../services/axios.js";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const Ajustes = () => {
  const navigate = useNavigate();
  const inicitalState = {
    id: "",
    nome: "",
    email: "",
    password: "",
    dat_nasc: "",
    saldo_mensal: 0,
  };

  const [user, setUser] = useState(inicitalState);
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      const token = JSON.parse(localStorage.getItem("token"));

      api.defaults.headers.common["authorization"] = `Beers ${token}
        `;
      try {
        const response = await getUserData();
        setUser({
          ...response.data,
          dat_nasc: response.data.dat_nasc
            ? moment(response.data.dat_nasc).format("DD/MM/YYYY")
            : undefined,
        });
      } catch (err) {
        navigate("/inicio");
      }
    })();
  }, []);

  const onChange = (event) => {
    setUser((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onClickSave = async (event) => {
    try {
      event.preventDefault();
      await uptadeUser(user.nome, user.password, user.dat_nasc);
      await uptadeSal(user.saldo_mensal);
      alert("Dados Atualizados Com Sucesso");
      navigate("/inicio");
    } catch (error) {
      alert(
        `Erro : ${error.response.data.Error}\nMessagem : ${error.response.data.Messagem}`
      );
    }
  };

  const onClickCancel = async (event) => {
    event.preventDefault();
    navigate("/inicio");
  };

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

          <li className="op-sair" onClick={logout}>
            <h2>Sair</h2>
          </li>
        </ul>
      </div>

      <div className="container-conta">
        <h2>Conta</h2>
        <h3>Dados pessoais:</h3>

        <form className="ajustes-form">
          <div className="input-nome">
            <input
              className={user.nome !== "" ? "has-val input" : "input"}
              type="nome"
              value={user.nome}
              onChange={onChange}
              name="nome"
            />
            <span className="focus-input" data-placeholder="Nome"></span>
          </div>

          <div className="wrap-input-email">
            <input
              className={user.email !== "" ? "has-val input" : "input"}
              type="email"
              value={user.email}
              onChange={onChange}
              name="email"
              disabled={true}
            />
            <span className="focus-input" data-placeholder="Email"></span>
          </div>

          <div className="wrap-input-telefone">
            <input
              className={user.password !== "" ? "has-val input" : "input"}
              type="password"
              value={user.password}
              onChange={onChange}
              name="password"
            />
            <span className="focus-input" data-placeholder="Senha"></span>
          </div>

          <div className="wrap-input-apelido">
            <input
              className={user.dat_nasc !== "" ? "has-val input" : "input"}
              type="dat_nasc"
              value={user.dat_nasc}
              onChange={onChange}
              name="dat_nasc"
            />
            <span
              className="focus-input"
              data-placeholder="Data de Nascimento"
            ></span>
          </div>
          <div className="wrap-input-salario">
            <input
              className={user.saldo_mensal !== "" ? "has-val input" : "input"}
              type="saldo_mensal"
              value={user.saldo_mensal}
              onChange={onChange}
              name="saldo_mensal"
            />
            <span
              className="focus-input"
              data-placeholder="Saldo Mensal"
            ></span>
          </div>
          <div className="container-form">
            <button className="mudancas-form-btn" onClick={onClickSave}>
              Salvar Mudan??as
            </button>
            <button className="cancelar-form-btn" onClick={onClickCancel}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Ajustes;

import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { useNavigate, useLocation } from "react-router-dom";
import {
  api,
  cartãoUptade,
  cartãoCreate,
  removeCartao,
} from "../../services/axios.js";
import "../inicio/inicio.css";
import "../cartao/styles.css";
import moment from "moment";

const Cartao = () => {
  const [cartao, setcartao] = useState({
    id: "",
    dat_ven: undefined,
    id_user: "",
    nome: "",
    saldo_parcelado: 0,
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    api.defaults.headers.common["authorization"] = `Beers ${token}
      `;

    if (location.state?.hasOwnProperty("cartao")) {
      setcartao({
        ...location.state.cartao,
        dat_ven: location.state.cartao.dat_ven
          ? moment(location.state.cartao.dat_ven).format("DD/MM/YYYY")
          : undefined,
      });
    }
  }, []);

  const handleSubmit = async (event, remover) => {
    try {
      event.preventDefault();
      if (remover === false) {
        if (cartao.id) {
          await cartãoUptade(cartao.id, cartao.nome, cartao.dat_ven);
        } else {
          await cartãoCreate(cartao.nome, cartao.dat_ven);
        }
        alert(!!cartao.id ? "Atualização Realizada" : "Cadastro Realizado");
        navigate("/inicio");
      } else {
        const confirm = window.confirm(
          "Tem Certeza Que Deseja Remvoer Cartão?"
        );
        if (confirm) {
          await removeCartao(cartao.id);
          alert("Cartão Removido Com Sucesso");
          navigate("/inicio");
        }
      }
    } catch (error) {
      alert(
        `Erro : ${error.response.data.Error}\nMessagem : ${error.response.data.Messagem}`
      );
    }
  };
  const onChange = (event) => {
    setcartao((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <div>
      <NavBar />

      <h1>Cartao : {cartao.nome}</h1>
      <div className="container-inicio" style={{ padding: 30 }}>
        <form onSubmit={handleSubmit} className="ajustes-form">
          <div className="wrap-input-nome">
            <input
              className={cartao.nome !== "" ? "has-val input" : "input"}
              type="nome"
              value={cartao.nome}
              onChange={onChange}
              name="nome"
            />
            <span className="focus-input" data-placeholder="Nome"></span>
          </div>

          <div className="wrap-input-saldo_parcelado">
            <input
              className={
                cartao.saldo_parcelado !== "" ? "has-val input" : "input"
              }
              type="saldo_parcelado"
              value={cartao.saldo_parcelado}
              onChange={onChange}
              name="saldo_parcelado"
              disabled={true}
            />
            <span
              className="focus-input"
              data-placeholder="Saldo Parcelado"
            ></span>
          </div>

          <div className="wrap-input-dat_ven">
            <input
              className={cartao.dat_ven !== "" ? "has-val input" : "input"}
              type="dat_ven"
              value={cartao.dat_ven}
              onChange={onChange}
              name="dat_ven"
            />
            <span
              className="focus-input"
              data-placeholder="Data de Vencimento"
            ></span>
          </div>

          <div className="container-form-btn">
            <button
              className="mudancas-form-btn"
              onClick={(event) => handleSubmit(event, false)}
            >
              {!!cartao.id ? "Atualizar" : "Cadastrar"}
            </button>
            <button
              className="cancelar-form-btn"
              style={{ marginTop: 10 }}
              onClick={(event) => handleSubmit(event, true)}
              disabled={cartao.id ? false : true}
            >
              Remover Cartão
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cartao;

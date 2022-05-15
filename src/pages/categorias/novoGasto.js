import NavBar from "../../components/NavBar/NavBar";
import React, { useState, useEffect } from "react";
import {
  api,
  getCartoes,
  newConta,
  newDebito,
  newCredito,
} from "../../services/axios.js";
import { useNavigate, useLocation } from "react-router-dom";
import "../categorias/styles.css";

const NovoGasto = () => {
  const [gasto, setGasto] = useState({
    id_categoria: "",
    tipo: "",
    valor: 0,
    desc: "",
    dat_vencimento: "",
    id_cartao: "Selecione",
    num_parcelas: 1,
  });

  const [cartao, setCartao] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      if (gasto.tipo === "debitos") {
        newDebito(gasto.id_categoria, gasto.valor, gasto.desc);
      } else if (gasto.tipo === "creditos") {
        newCredito(
          gasto.id_categoria,
          gasto.id_cartao,
          gasto.valor,
          gasto.num_parcelas,
          gasto.desc
        );
      } else if (gasto.tipo === "contas") {
        newConta(
          gasto.id_categoria,
          gasto.valor,
          gasto.dat_vencimento,
          gasto.desc
        );

        navigate("/inicio");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      const token = JSON.parse(localStorage.getItem("token"));

      api.defaults.headers.common["authorization"] = `Beers ${token}
      `;

      if (!location.state?.categoria) {
        navigate("/inicio");
      }

      try {
        const cartoes = await getCartoes();
        const cartoes_aux = cartoes.data.results.map((value) => {
          delete value.saldo_parcelado;
          delete value.dat_ven;
          delete value.id_user;

          return value;
        });

        setCartao(cartoes_aux);
        setGasto((prevState) => ({
          ...prevState,
          id_categoria: location.state.categoria.id,
          tipo: location.state.categoria.tipo,
        }));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const onChange = (event) => {
    setGasto((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
      <NavBar />
      <div className="container-gasto" style={{ padding: 30 }}>
        <h2>Seu Gasto</h2>
        <form onSubmit={handleSubmit} className="ajustes-form">
          <div className="wrap-input-nome">
            <input
              className={gasto.valor !== "" ? "has-val input" : "input"}
              type="valor"
              value={gasto.valor}
              onChange={onChange}
              name="valor"
            />
            <span className="focus-input" data-placeholder="Valor"></span>
          </div>

          <div className="wrap-input-saldo_parcelado">
            <input
              className={gasto.desc !== "" ? "has-val input" : "input"}
              type="desc"
              value={gasto.desc}
              onChange={onChange}
              name="desc"
            />
            <span className="focus-input" data-placeholder="Descrição"></span>
          </div>

          <div className="wrap-input-dat_ven">
            <input
              className={gasto.num_parcelas !== "" ? "has-val input" : "input"}
              type="num_parcelas"
              value={gasto.num_parcelas}
              onChange={onChange}
              name="num_parcelas"
              disabled={gasto.tipo !== "creditos" ? true : false}
            />
            <span
              className="focus-input"
              data-placeholder="Numero de Parcelas"
            ></span>
          </div>

          <div className="wrap-input-dat_ven">
            <input
              className={
                gasto.dat_vencimento !== "" ? "has-val input" : "input"
              }
              type="dat_vencimento"
              value={gasto.dat_vencimento}
              onChange={onChange}
              name="dat_vencimento"
              disabled={gasto.tipo !== "contas" ? true : false}
            />
            <span
              className="focus-input"
              data-placeholder="Data de Vencimento"
            ></span>
          </div>
          <h2 style={{ position: "relative", top: 90 }}>Cartões</h2>
          <select
            value={gasto.id_cartao}
            onChange={onChange}
            name="id_cartao"
            disabled={gasto.tipo !== "creditos" ? true : false}
            style={{
              position: "relative",
              marginBottom: 20,
              fontSize: 16,
              top: 100,
              marginLeft: 30,
            }}
          >
            <option value="Selecione">Selecione</option>
            {cartao.map((value, index) => {
              return (
                <option key={index} value={value.id}>
                  {value.nome}
                </option>
              );
            })}
          </select>

          <div className="container-form-btn">
            <button className="mudancas-form-btn" onClick={handleSubmit}>
              Criar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NovoGasto;

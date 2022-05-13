import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { api, getUser } from "../../services/axios.js";
import { Chart } from "react-google-charts";
import { useNavigate } from "react-router-dom";
import "./inicio.css";
import btnNew from "../../assets/imagens/new3.png";

const Inicio = () => {
  const [userData, setUserData] = useState({ Cartoes: [], Categorias: [] });
  const navigate = useNavigate();

  function getRandomColor() {
    var letters = "89ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 8)];
    }
    return color;
  }

  useEffect(() => {
    (async () => {
      const token = JSON.parse(localStorage.getItem("token"));

      api.defaults.headers.common["authorization"] = `Beers ${token}
        `;
      try {
        const response = await getUser();
        localStorage.setItem("UserData", JSON.stringify(response.data));
      } catch (err) {
        console.log(err);
      } finally {
        const data = JSON.parse(localStorage.getItem("UserData"));
        if (data) {
          setUserData(data);
        } else {
          setUserData({ ...userData, failed: true });
        }
      }
    })();
  }, []);

  const ResumoGastos = () => {
    const resumo = [["Categorias", "Valor Planejado"]];

    for (let Categoria in userData.Categorias) {
      resumo.push([
        userData.Categorias[Categoria].nome,
        userData.Categorias[Categoria].valor_planejado,
      ]);
    }
    return resumo;
  };

  const onClickCategoria = (categoria, CreateOrUpdate) => {
    console.log(`Testando Categoria : ${categoria} Create : ${CreateOrUpdate}`);
    if (CreateOrUpdate) {
      navigate(`/categoria`);
    } else {
      navigate(`/categoria`, { state: { categoria: categoria } }); //true é para criar , false estára dando um update
    }
  };
  const onClickCartao = (cartao, CreateOrUpdate) => {
    console.log(`Testando Cartao : ${cartao} Create : ${CreateOrUpdate}`);

    if (CreateOrUpdate) {
      navigate(`/cartao`);
    } else {
      navigate(`/cartao`, { state: { cartao: cartao } }); //true é para criar , false estára dando um update
    }
  };
  return (
    <div>
      <NavBar />
      <h1>Ola, Seja Bem-Vindo {userData.nome}</h1>
      {userData.failed && (
        <p>Erro na Requisição , Atualize a Pagina Para Tentar Novamente</p>
      )}

      <div className="container-inicio">
        <div className="SalarioMensal">
          <h2>Salario Mensal</h2>
          <p>R$ {userData.saldo_mensal}</p>
        </div>
        <div className="DespesaMensal">
          <h2>Despesa Mensal</h2>
          <p>R$ {userData.saldo_mensal - userData.saldo_resto}</p>
        </div>
        <div className="SaldoResto">
          <h2>Gasto Total</h2>
          <p>
            R$
            {userData.Categorias.reduce((soma, value) => {
              return soma + value.valor_atual;
            }, 0)}
          </p>
        </div>

        <div className="Categorias">
          <ul>
            <li onClick={() => onClickCategoria(false, true)}>
              <img className="newCategoria" src={btnNew} alt="Nova Categoria" />
              Novo
            </li>
            {userData.Categorias.map((value, index) => (
              <li
                key={index}
                onClick={() => onClickCategoria(value, false)}
                categoria={value}
              >
                {value.nome}
                <p>Gasto Atual : {value.valor_atual}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="Resumo">
          <h2>Distribuição de Categorias</h2>
          {!userData.failed && (
            <Chart
              chartType="PieChart"
              data={ResumoGastos()}
              width={"100%"}
              height={"250px"}
            />
          )}
        </div>
        <div className="Cartoes">
          <h2>
            Cartões{" "}
            <img
              className="newCartao"
              src={btnNew}
              alt="Nova Categoria"
              onClick={() => onClickCartao(false, true)}
            />
          </h2>

          <ul>
            {userData.Cartoes.map((value, index) => (
              <li
                key={index}
                style={{ background: getRandomColor() }}
                onClick={() => onClickCartao(value, false)}
              >
                {value.nome}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Inicio;

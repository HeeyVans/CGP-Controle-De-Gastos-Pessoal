import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { api, getUser } from "../../services/axios.js";
import { Chart } from "react-google-charts";
import { useNavigate } from "react-router-dom";
import "./inicio.css";
<<<<<<< HEAD
import btnNew from "../../assets/imagens/new3.png";
=======
import { Chart } from "react-google-charts";

export const data = [
  ["Gastos", "Gastos Mensais"],
  ["Transporte", 11],
  ["Educação", 2],
  ["Lazer", 2],
  ["Serviços", 2],
  ["Restaurante", 7],
];
>>>>>>> 8a5a4d8f7d0675ab731fd4811ea8d6321eebbfe4

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
<<<<<<< HEAD
      <h1>Ola, Seja Bem-Vindo {userData.nome}</h1>
      {userData.failed && (
        <p>Erro na Requisição , Atualize a Pagina Para Tentar Novamente</p>
      )}

=======
      <h1>Olá, Seja Bem-Vindo {userData.nome}</h1>
>>>>>>> 8a5a4d8f7d0675ab731fd4811ea8d6321eebbfe4
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
<<<<<<< HEAD
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
=======
            {/*  {userData.Categorias.map((value) => {
              return (
                <li>
                  <h2>{value.nome}</h2>
                  <p>Gasto Atual: {value.valor_atual}</p>
                </li>
              );
            })} */}
>>>>>>> 8a5a4d8f7d0675ab731fd4811ea8d6321eebbfe4
          </ul>
        </div>

        <div className="Resumo">
<<<<<<< HEAD
          <h2>Distribuição de Categorias</h2>
          {!userData.failed && (
            <Chart
              chartType="PieChart"
              data={ResumoGastos()}
              width={"100%"}
              height={"250px"}
            />
          )}
=======
          <h2>Resumo de Gastos</h2>
          <Chart
            chartType="PieChart"
            data={data}
            width={"100%"}
            height={"250px"}
          />
>>>>>>> 8a5a4d8f7d0675ab731fd4811ea8d6321eebbfe4
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
<<<<<<< HEAD
            {userData.Cartoes.map((value, index) => (
              <li
                key={index}
                style={{ background: getRandomColor() }}
                onClick={() => onClickCartao(value, false)}
              >
                {value.nome}
              </li>
            ))}
=======
            <li>Inter</li>
            <li>Santander</li>
            <li>Banco do Brasil</li>
            <li>Bradesco</li>
            <li>Nubank</li>
            <li>Neon</li>
            <li>Itáu</li>
            <li>Next</li>
            <li>C6</li>
>>>>>>> 8a5a4d8f7d0675ab731fd4811ea8d6321eebbfe4
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Inicio;

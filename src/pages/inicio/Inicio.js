import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { api, getUser } from "../../services/axios.js";
import "./inicio.css";

const Inicio = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    (async () => {
      try {
        api.defaults.headers.common["authorization"] = `Beers ${JSON.parse(
          localStorage.getItem("token")
        )}`;
        const response = await getUser();
        setUserData(response.data);
        console.log(response.data);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Ola, Seja Bem-Vindo {userData.nome}</h1>
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
          <h2>Saldo Restante</h2>
          <p>R$ {userData.saldo_resto}</p>
        </div>

        <div className="Categorias">
          <ul>
            {userData.Categorias.map((value) => {
              return (
                <li>
                  <h2>{value.nome}</h2>
                  <p>Gasto Atual: {value.valor_atual}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="Resumo">
          <h2>Resumo de Gastos</h2>
        </div>
        <div className="Cartoes">
          <h2>Cartões</h2>
          <ul>
            <li>Casa</li>
            <li>Casa</li>
            <li>Casa</li>
            <li>Casa</li>
            <li>Casa</li>
            <li>Casa</li>
            <li>Casa</li>
            <li>Casa</li>
            <li>Casa</li>
            <li>Casa</li>
            <li>Casa</li>
            <li>Casa</li>
            <li>Casa</li>
            <li>Casa</li>
            <li>Casa</li>
            <li>Casa</li>
            <li>Casa</li>
            <li>Casa</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Inicio;

import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./inicio.css";

const Inicio = () => {
  return (
    <div>
      <NavBar />

      <div className="container-inicio">
        <div className="SalarioMensal">
          <h2>Salario Mensal</h2>
          <p>R$ 300</p>
        </div>
        <div className="DespesaMensal">
          <h2>Despesa Mensal</h2>
          <p>R$ 300</p>
        </div>
        <div className="SaldoTotal">
          <h2>Saldo Total</h2>
          <p>R$ 300</p>
        </div>

        <div className="Categorias">
          <ul>
            <li>
              <h2>Casa</h2>
              <p>Gasto autal : R$ 12,00</p>
            </li>
            <li>
              <h2>Casa</h2>
              <p>Gasto autal : R$ 12,00</p>
            </li>
            <li>
              <h2>Casa</h2>
              <p>Gasto autal : R$ 12,00</p>
            </li>
            <li>
              <h2>Casa</h2>
              <p>Gasto autal : R$ 12,00</p>
            </li>
            <li>
              <h2>Casa</h2>
              <p>Gasto autal : R$ 12,00</p>
            </li>
            <li>
              <h2>Casa</h2>
              <p>Gasto autal : R$ 12,00</p>
            </li>

            <li>
              <h2>Casa</h2>
              <p>Gasto autal : R$ 12,00</p>
            </li>
            <li>
              <h2>Casa</h2>
              <p>Gasto autal : R$ 12,00</p>
            </li>
            <li>
              <h2>Casa</h2>
              <p>Gasto autal : R$ 12,00</p>
            </li>
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

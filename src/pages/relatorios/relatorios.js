import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Chart } from "react-google-charts";
import "./styles.css";
import { api, categoriasPeriodo } from "../../services/axios.js";

const Relatorios = () => {
  const [data, setData] = useState([
    ["Categoria", "Gasto"],
    ["", 0],
  ]);

  const [input, setInput] = useState({
    dateprev: "",
    datapos: "",
  });

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    api.defaults.headers.common["authorization"] = `Beers ${token}
      `;
  }, []);

  const onclickButton = async () => {
    const dados = [["Categoria", "Gasto"]];

    try {
      const { data } = await categoriasPeriodo(input.dateprev, input.datapos);
      const gastosPorCategoria = data.results.map((value, index) => {
        const soma = value[
          value.tipo.charAt(0).toUpperCase() + value.tipo.slice(1)
        ].reduce((soma, i) => {
          return soma + i.valor;
        }, 0);
        dados.push([value.nome, soma]);
        return dados;
      });

      setData(gastosPorCategoria[0]);
    } catch (error) {
      alert(
        `Erro : ${error.response.data.Error}\nMessagem : ${error.response.data.Messagem}`
      );
    }
  };

  const options = {
    title: "Gastos Por Categoria No Periodo",
    chartArea: { width: "43%" },
    hAxis: {
      title: "Total de Gasto",
      minValue: 0,
    },
    vAxis: {
      title: "Categorias",
    },
  };
  const onChange = (event) => {
    setInput((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
      <NavBar />
      <h1>Relatorios</h1>
      <div style={{ textAlign: "center" }}>
        <p>Escolha o Periodo a Ser Visualizado</p>
        <input
          type={"date"}
          value={input.dateprev}
          onChange={onChange}
          name="dateprev"
        ></input>
        <input
          type={"date"}
          value={input.datapos}
          onChange={onChange}
          name="datapos"
        ></input>
        <button onClick={onclickButton}>Buscar</button>
      </div>

      <div className="container-relatorios">
        <Chart
          chartType="BarChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default Relatorios;

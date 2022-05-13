import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { useNavigate, useLocation } from "react-router-dom";
import { api, categoriaCreate, categoriaUptade } from "../../services/axios.js";
import "../inicio/inicio.css";

const Cartao = () => {
  const [categoria, setCategoria] = useState({
    id: "",
    nome: "",
    desc: "",
    valor_planejado: 0,
    valor_atual: 0,
    tipo: "debitos",
    id_user: "",
    Creditos: [],
    Debitos: [],
    Contas: [],
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    api.defaults.headers.common["authorization"] = `Beers ${token}
      `;
    if (location.state?.hasOwnProperty("categoria")) {
      setCategoria(location.state.categoria);
    }
  }, []);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (!!categoria.id === true) {
        await categoriaUptade(
          categoria.id,
          categoria.nome,
          categoria.valor_planejado,
          categoria.desc
        );
      } else {
        await categoriaCreate(
          categoria.nome,
          categoria.valor_planejado,
          categoria.tipo,
          categoria.desc
        );
      }
    } catch (error) {
      alert(error);
    } finally {
      navigate("/inicio");
    }
  };
  const onChange = (event) => {
    setCategoria((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const collumnsTable = () => {
    if (
      !!categoria[
        categoria.tipo.charAt(0).toUpperCase() + categoria.tipo.slice(1)
      ].length
    ) {
      const chaves = Object.keys(
        categoria[
          categoria.tipo.charAt(0).toUpperCase() + categoria.tipo.slice(1)
        ][0]
      );

      const chavesFiltradas = chaves.filter(
        (value) =>
          value !== "id_categoria" && value !== "id" && value !== "id_cartao"
      );

      return chavesFiltradas.map((value, index) => {
        return <th key={index}>{value}</th>;
      });
    } else {
      return <th>Sem Gastos</th>;
    }
  };
  const rows = () => {
    const gasto =
      categoria[
        categoria.tipo.charAt(0).toUpperCase() + categoria.tipo.slice(1)
      ];

    if (!!gasto.length) {
      const collumns = Object.keys(gasto[0]);
      const collumnsFiltradas = collumns.filter(
        (value) =>
          value !== "id_categoria" && value !== "id" && value !== "id_cartao"
      );

      return gasto.map((value, index) => {
        return (
          <tr key={index}>
            {collumnsFiltradas.map((valor, index) => {
              return <td key={index}>{value[valor]}</td>;
            })}
          </tr>
        );
      });
    } else {
      return <td></td>;
    }
  };
  return (
    <div>
      <NavBar />

      <h1>Categoria : {categoria.nome}</h1>
      <p></p>
      <div className="container-categorias" style={{ padding: 30 }}>
        <div className="form">
          <form onSubmit={handleSubmit} style={{ width: "100vw" }}>
            <label style={{ display: "inline-block", marginRight: 30 }}>
              Nome:
              <input
                style={{
                  border: "solid",
                  borderWidth: 1,
                  marginBottom: 20,
                }}
                className={"input"}
                type="text"
                value={categoria.nome}
                onChange={onChange}
                name="nome"
              />
            </label>

            <label style={{ display: "inline-block", marginRight: 30 }}>
              Valor Planejado:
              <input
                style={{
                  border: "solid",
                  borderWidth: 1,
                  marginBottom: 20,
                }}
                className={"input"}
                type="text"
                value={categoria.valor_planejado}
                onChange={onChange}
                name="valor_planejado"
              />
            </label>

            <label style={{ display: "inline-block", marginRight: 30 }}>
              Valor Atual:
              <input
                style={{
                  border: "solid",
                  borderWidth: 1,
                  marginBottom: 20,
                }}
                className={"input"}
                type="text"
                value={categoria.valor_atual}
                onChange={onChange}
                name="valor_atual"
                disabled={true}
              />
            </label>

            <label style={{ display: "inline-block", marginRight: 30 }}>
              Descrição:
              <input
                style={{
                  border: "solid",
                  borderWidth: 1,
                  marginBottom: 20,
                  width: 600,
                }}
                className={"input"}
                type="text"
                value={categoria.desc ? categoria.desc : ""}
                onChange={onChange}
                name="desc"
              />
            </label>

            <select
              value={categoria.tipo}
              onChange={onChange}
              name="tipo"
              disabled={categoria.id ? true : false}
              style={{ display: "block", marginBottom: 20, fontSize: 16 }}
            >
              <option value="debitos">{categoria.tipo}</option>
              <option value="creditos">creditos</option>
              <option value="contas">contas</option>
            </select>

            <input
              type="submit"
              value="Enviar"
              style={{
                marginBottom: 30,
                width: 300,
                height: 50,
                fontSize: 20,
                background: "#ADD8E6",
              }}
            />
          </form>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>{collumnsTable()}</tr>
            </thead>
            <tbody>{rows()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cartao;

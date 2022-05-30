import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { useNavigate, useLocation } from "react-router-dom";
import {
  api,
  categoriaCreate,
  categoriaUptade,
  removeCategoria,
  removeGasto,
} from "../../services/axios.js";
import "../inicio/inicio.css";

const Categoria = () => {
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
      console.log(location.state.categoria);
      setCategoria(location.state.categoria);
    }
  }, []);

  const handleSubmit = async (event, remover) => {
    try {
      event.preventDefault();
      if (remover === false) {
        if (!!categoria.id === true) {
          await categoriaUptade(
            categoria.id,
            categoria.nome,
            categoria.valor_planejado,
            categoria.desc
          );
          alert("Atualizado Com Sucesso");
          navigate("/inicio");
        } else {
          console.log(categoria);
          await categoriaCreate(
            categoria.nome,
            categoria.valor_planejado,
            categoria.tipo,
            categoria.desc
          );
          alert("Criado Com Sucesso");
          navigate("/inicio");
        }
      } else if (remover === true) {
        const confirmar = window.confirm("Tem Certeza que Deseja Excluir");
        if (confirmar) {
          await removeCategoria(categoria.id);
          alert("Categoria Removida");
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
    setCategoria((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const removeGastos = async (id) => {
    try {
      const confirmar = window.confirm(
        "Tem Certeza que Deseja Remover o Gasto?"
      );
      if (confirmar) {
        await removeGasto(id, categoria.tipo);

        const newDebitos = categoria.Debitos.filter((gasto) => {
          return gasto.id !== id;
        });
        const newContas = categoria.Contas.filter((gasto) => {
          return gasto.id !== id;
        });
        const newCreditos = categoria.Creditos.filter((gasto) => {
          return gasto.id !== id;
        });

        const categoriaAux = {
          ...categoria,
          Debitos: newDebitos,
          Contas: newContas,
          Creditos: newCreditos,
        };

        setCategoria(categoriaAux);
        alert("Gasto Removido");
      }
    } catch (error) {
      alert(
        `Erro : ${error.response.data.Error}\nMessagem : ${error.response.data.Messagem}`
      );
    }
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
      chavesFiltradas.push("Ação");
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
            <td>
              <button
                className="cancelar-form-btn"
                onClick={() => removeGastos(value.id)}
              >
                Remover
              </button>
            </td>
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
      <div className="container-categoria" style={{ padding: 30 }}>
        <div className="formcategoria">
          <form onSubmit={handleSubmit}>
            <div className="wrap-input-nome">
              <input
                className={categoria.nome !== "" ? "has-val input" : "input"}
                type="nome"
                value={categoria.nome}
                onChange={onChange}
                name="nome"
              />
              <span className="focus-input" data-placeholder="Nome"></span>
            </div>
            <div className="wrap-input-nome">
              <input
                className={
                  categoria.valor_planejado !== "" ? "has-val input" : "input"
                }
                type="valor_planejado"
                value={categoria.valor_planejado}
                onChange={onChange}
                name="valor_planejado"
              />
              <span
                className="focus-input"
                data-placeholder="Valor Planejado"
              ></span>
            </div>
            <div className="wrap-input-nome">
              <input
                className={
                  categoria.valor_atual !== "" ? "has-val input" : "input"
                }
                type="valor_atual"
                value={categoria.valor_atual}
                onChange={onChange}
                name="valor_atual"
                disabled={true}
              />
              <span
                className="focus-input"
                data-placeholder="Valor Atual"
              ></span>
            </div>

            <div className="wrap-input-nome">
              <input
                className={
                  categoria.valor_planejado !== "" ? "has-val input" : "input"
                }
                type="desc"
                value={categoria.desc}
                onChange={onChange}
                name="desc"
              />
              <span className="focus-input" data-placeholder="Descrição"></span>
            </div>

            <select
              value={categoria.tipo}
              onChange={onChange}
              name="tipo"
              disabled={categoria.id ? true : false}
              style={{
                position: "relative",
                marginBottom: 20,
                marginLeft: 30,
                fontSize: 16,
                top: 70,
              }}
            >
              <option value="debitos">{categoria.tipo}</option>
              <option value="creditos">creditos</option>
              <option value="contas">contas</option>
            </select>

            <div className="container-form-btn">
              <button
                className="mudancas-form-btn"
                onClick={(event) => handleSubmit(event, false)}
              >
                {!!categoria.id ? "Atualizar" : "Cadastrar"}
              </button>
              <button
                className="cancelar-form-btn"
                style={{ marginTop: 10 }}
                onClick={(event) => handleSubmit(event, true)}
                disabled={categoria.id ? false : true}
              >
                Remover Categoria
              </button>
            </div>
          </form>
        </div>
        <div className="tablecategoria">
          <table className="table">
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

export default Categoria;

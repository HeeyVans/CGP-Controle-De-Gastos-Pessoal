import { useState } from "react";
import logoIMG from "../../assets/Logo Outline.png";
import "./styles.css";
import { createUser } from "../../services/axios.js";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [data, setData] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(nome, senha, data, email);
      navigate("/login");
    } catch (error) {
      alert(
        `Erro : ${error.response.data.Error}\nMessagem : ${error.response.data.Messagem}`
      );
    }
  };

  return (
    <div className="container">
      <div className="container-cadastro">
        <span className="img-cadastro">
          <img src={logoIMG} alt="logotipo"></img>{" "}
        </span>
        <div className="wrap-cadastro">
          <form className="cadastro-form">
            <span className="cadastro-form-title">
              Cadastre-se gratuitamente
            </span>

            <div className="wrap-input">
              <input
                className={nome !== "" ? "has-val input" : "input"}
                type="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Nome"></span>
            </div>

            <div className="wrap-input">
              <input
                className={data !== "" ? "has-val input" : "input"}
                type="data"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Data"></span>
            </div>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={senha !== "" ? "has-val input" : "input"}
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="container-cadastro-form-btn">
              <button className="cadastro-form-btn" onClick={handleSubmit}>
                Cadastrar
              </button>
            </div>

            <div className="text-cadastro">
              <span className="txt-cadastro">Já sou cadastrado. </span>
              <a className="txt2" href="../login">
                Quero fazer login!
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;

import { useState } from 'react';
import logoIMG from '../../assets/Logo Outline.png'
import './styles.css'

function Login() {
const [email, setEmail] = useState("")
const [senha, setSenha] = useState("")

  return (
    <div className="container">
      <span className="img-login"><img src={logoIMG} alt="logotipo"></img> </span> 
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Acesse sua conta </span>

            <div className="wrap-input">
                <input 
                className={email !== "" ? 'has-val input' : 'input'}
                type="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
                <input className={senha !== "" ? 'has-val input' : 'input'} 
                type="senha" 
                value={senha}
                onChange={e => setSenha(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="container-login-form-btn">
                <button className="login-form-btn">
                      Entrar
                </button>
            </div>

            <div className="text-login">
              <span className="txt-conta">Ainda não possui conta? </span>
              <a className="txt2" href="../cadastro/Cadastro.js">Faça o cadastro</a>
            </div>

          </form>
        </div>
      </div>
    </div>

  );
}

export default Login;

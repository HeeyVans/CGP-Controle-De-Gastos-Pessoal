import React from 'react';
import Navbar from './Navbar';
import "./contato.css";
import iconTelefone from "../../assets/imagens/icon-telefone.png";
import iconMail from "../../assets/imagens/icon-mail.png";
import iconLocal from "../../assets/imagens/icon-local.png";

function Contato() {
    return (
        <div>
            <Navbar />
            <div className="container-contato">
                <div>
                    {/* <p>Entre em</p> */}
                    <h2>Entre em Contato</h2>
                </div>
                <div className="center">
                    <div className="card">
                        <div className="icon">
                            <img src={iconTelefone} alt="icone de telefone" />
                        </div>
                        <div className="infos">
                            <p>(81) 4002-8922</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={iconMail} alt="icone de telefone" />
                        </div>
                        <div className="infos">
                            <p>controledegastospessoal@cgp.com</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={iconLocal} alt="icone de telefone" />
                        </div>
                        <div className="infos">
                            <p>Dois Irmãos - Recife, PE</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contato;
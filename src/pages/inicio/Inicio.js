import React from "react";
import NavBar from '../../components/NavBar/NavBar'

const Inicio = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
        }}>
            <NavBar />
            <h1>Início</h1>
            <h1> DEUS NOS AJUDE!!!!</h1>
        </div>
    );
};

export default Inicio;
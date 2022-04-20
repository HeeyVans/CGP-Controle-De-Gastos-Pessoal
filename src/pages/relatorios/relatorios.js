import React from "react";
import NavBar from '../../components/NavBar/NavBar'

const Relatorios = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
        }}>
            <NavBar />
            <h1>Relatorios</h1>
        </div>
    );
};

export default Relatorios;
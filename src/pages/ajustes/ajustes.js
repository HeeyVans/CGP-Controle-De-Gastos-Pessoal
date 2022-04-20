import React from "react";
import NavBar from '../../components/NavBar/NavBar'

const Ajustes = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
        }}>
            <NavBar />
            <h1>Ajustes</h1>
        </div>
    );
};

export default Ajustes;
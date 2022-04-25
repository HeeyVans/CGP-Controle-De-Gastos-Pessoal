import React from 'react';
import './global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Importando as pages
import LandingPage from './pages/landing-page/landing-page';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import Inicio from './pages/inicio/inicio';
import Relatorios from './pages/relatorios/relatorios';
import Ajustes from './pages/ajustes/ajustes';

// import Routes from './routes';


function App() {
    return (
        // <Routes />
        <Router>
            <Routes>
                <Route path='/' exact element={<LandingPage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/inicio' element={<Inicio />} />
                <Route path='/relatorios' element={<Relatorios />} />
                <Route path='/ajustes' element={<Ajustes />} />
            </Routes>
        </Router>
    );
}

export default App;
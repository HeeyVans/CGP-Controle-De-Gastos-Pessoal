import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './pages/landing-page/landing-page';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';

import Inicio from './pages/inicio/inicio'
import Relatorios from './pages/relatorios/relatorios';
import Ajustes from './pages/ajustes/ajustes';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={LandingPage} />
                <Route path='/login' component={Login} />
                <Route path='/cadastro' component={Cadastro} />
                <Route path='/inicio' component={Inicio} />
                <Route path='/relatorios' element={Relatorios} />
                <Route path='/ajustes' element={<Ajustes />} />
            </Switch>
        </BrowserRouter>
    );
}
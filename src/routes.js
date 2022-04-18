import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import Inicio from './pages/inicio/Inicio'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
            <Route path='/' exact component={Inicio} />
                <Route path='/login' component={Login} />
                <Route path='/cadastro' component={Cadastro} />
            ]</Switch>
        </BrowserRouter>
    );
}
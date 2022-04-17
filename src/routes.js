import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/cadastro' component={Cadastro} />
            ]</Switch>
        </BrowserRouter>
    );
}
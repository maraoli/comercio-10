import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Homepage from './pages/homepage/Homepage'
import Produtos from './pages/produtos/Produtos'
import Contato from './pages/contato/Contato'
import Sobre from './pages/sobre/Sobre'
import Login from './pages/login/Login'
import Pagina404 from './pages/pagina404/index'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/produtos" component={Produtos} />
                <Route path="/contato" component={Contato} />
                <Route path="/sobre" component={Sobre} />
                <Route path="/login" component={Login} />
                <Route component={Pagina404} />
            </Switch>
        </BrowserRouter>
    )
}
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Homepage from './pages/homepage/Homepage'
import Produtos from './pages/produtos/Produtos'
import Contato from './pages/contato/Contato'
import Sobre from './pages/sobre/Sobre'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import MeusDados from './pages/meus-dados/Meus-dados'
import Servicos from './pages/servicos/Servicos'
import ServicosSite from './pages/servicos/Servicos-site'
import ServicosSite2 from './pages/servicos/Servicos-site-2'
import ServicosSite3 from './pages/servicos/Servicos-site-3'
import ServicosSite4 from './pages/servicos/Servicos-site-4'
import ServicosConsultoria from './pages/servicos/Servicos-consultoria'
import ServicosConsultoria2 from './pages/servicos/Servicos-consultoria-2'
import ServicosConsultoria3 from './pages/servicos/Servicos-consultoria-3'
import Acompanhamento from './pages/acompanhamento/Acompanhamento'
import AcompCard from './pages/acompanhamento/Acomp-card'
import Pagamento from './pages/pagamento/Pagamento'
import Pagina404 from './pages/pagina404/index'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/produtos" component={Produtos} />
                <Route path="/contato" component={Contato} />
                <Route path="/sobre" component={Sobre} />
                <Route path="/meus-dados" component={MeusDados}/>
                <Route path="/servicos" component={Servicos}/>
                <Route path="/servicos-site" component={ServicosSite}/>
                <Route path="/servicos-site-2" component={ServicosSite2}/>
                <Route path="/servicos-site-3" component={ServicosSite3}/>
                <Route path="/servicos-site-4" component={ServicosSite4}/>
                <Route path="/servicos-consultoria" component={ServicosConsultoria}/>
                <Route path="/servicos-consultoria-2" component={ServicosConsultoria2}/>
                <Route path="/servicos-consultoria-3" component={ServicosConsultoria3}/>
                <Route path="/acompanhamento" component={Acompanhamento}/>
                <Route path="/acompanhamento-detalhes" component={AcompCard}/>
                <Route path="/pagamento" component={Pagamento}/>
                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={Cadastro}/>
                <Route component={Pagina404} />
            </Switch>
        </BrowserRouter>
    )
}
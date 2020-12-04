import React from 'react';
import PageDefault from '../../components/pageDefault/PageDefault';
import {Link} from 'react-router-dom';
import './Login.css'

export default function Login(){
    return(
        <PageDefault>
            <div className="login_container">
                <div className="login_board">
                    <fieldset>
                        <label>E-mail:</label>
                        <input type="email" />

                        <label>Senha:</label>
                        <input type="password"/>

                        <button className="login_button">Login</button>
                    </fieldset>

                    <div className="login_redirect">
                        <Link to="/reset"><span>Esqueci minha senha</span></Link>
                        <Link to="/cadastro"><span>Não tenho cadastro</span></Link>
                    </div>
                </div>
            </div>
        </PageDefault>
    )
}
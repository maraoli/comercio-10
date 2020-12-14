import React from 'react';
import PageDefault from '../../components/pageDefault/PageDefault';
import {Link, useHistory} from 'react-router-dom';
import './Login.css'

export default function Login(){

    const history = useHistory();

    return(
        <PageDefault>
            <div className="login_container">
                <div className="login_board">
                    <fieldset>
                        <label>E-mail:</label>
                        <input type="email" />

                        <label>Senha:</label>
                        <input type="password"/>

                        <button className="login_button" onClick={()=>{
                            const data = {
                                name: "Ana"
                            }
                        
                            localStorage.setItem('user', JSON.stringify(data));

                            history.push('/');
                        }}>
                            Login
                        </button>
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
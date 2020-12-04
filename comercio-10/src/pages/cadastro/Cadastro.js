import React from 'react';
import PageDefault from '../../components/pageDefault/PageDefault'
import {Link} from 'react-router-dom'
import './Cadastro.css';

export default function Cadastro(){
    return(
        <PageDefault>        
            <div className="cadastro_container">
                <div className="cadastro_board">
                    <fieldset>
                        <label>Nome:</label>
                        <input type="text" />

                        <label>E-mail:</label>
                        <input type="email" />

                        <div className="cadastro_senhas">
                            <div>
                                <label>Senha:</label>
                                <input type="password"/>
                            </div>
                            
                            <div>
                                <label>Confirmar senha:</label>
                                <input type="password"/>
                            </div>
                        </div>

                        <button className="cadastro_button">Cadastrar</button>
                    </fieldset>

                    <div className="cadastro_redirect">
                        <Link to="/login"><span>Já possuo cadastro</span></Link>
                    </div>
                </div>
            </div>
        </PageDefault>
    )
}
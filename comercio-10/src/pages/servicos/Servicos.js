import React from 'react';
import PageDefault from '../../components/pageDefault/PageDefault';
import { Link } from 'react-router-dom'
import './Servicos.css'

export default function Servicos(){

    return(
        <PageDefault>
            <div className="s__servicos">
                <Link to="/servicos-site">
                    <div className="servico s__servico">
                        <p>Solicitar um site</p>
                    </div>
                </Link>

                <Link to="/servicos-consultoria">
                    <div className="servico s__servico">
                        <p>Solicitar uma consultoria</p>
                    </div>
                </Link>

                <Link to="/acompanhamento">
                    <div className="servico s__servico">
                        <p>Acompanhar minhas solicitações</p>
                    </div>
                </Link>

            </div>
        </PageDefault>
    )
}
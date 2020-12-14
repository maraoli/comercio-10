import React from 'react';
import PageDefault from '../../components/pageDefault/PageDefault';
import './Servicos.css'

export default function Servicos(){

    return(
        <PageDefault>
            <div className="s__servicos">
                <div className="servico s__servico">
                    <p>Solicitar um site</p>
                </div>
                <div className="servico s__servico">
                    <p>Solicitar uma consultoria</p>
                </div>
                <div className="servico s__servico">
                    <p>Acompanhar minhas solicitações</p>
                </div>
            </div>
        </PageDefault>
    )
}
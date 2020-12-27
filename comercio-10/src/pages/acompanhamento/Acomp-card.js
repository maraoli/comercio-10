import React from 'react';
import PageDefault from '../../components/pageDefault/PageDefault';
import './Acomp-card.css'

export default function AcompCard(){

    return(
        <PageDefault>
            <div className="acomp-card__container">
                <div className="acomp-card__container-2">
                    <p>
                        Solicitação de Site
                        <br/>
                        <br/>
                        Nome: Cantina da Nana
                        <br/>
                        <br/>
                        Data de solicitação: 08/12/2020
                        <br/>
                        <br/>
                        Link de acesso: <a href="https://cantina-da-nana-gc7xrg41m.vercel.app/produtos">https://cantina-da-nana-gc7xrg41m.vercel.app</a>
                        <br/>
                        <br/>
                        Status: Concluído
                        <br/>
                        <br/>
                        
                    </p>
                </div>
            </div>
        </PageDefault>
    )
}
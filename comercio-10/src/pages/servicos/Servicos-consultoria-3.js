import React from 'react';
import PageDefault from '../../components/pageDefault/PageDefault';
import ButtonLink  from '../../components/buttonLink/ButonLink'
import './Servicos-site.css';

export default function ServicosConsultoria3(){

    return(
        <PageDefault>
            <div className="serv-site__container">
                <div>
                <div className="serv-site-3__container">
                    <p className="serv-site__label">
                        Muito obrigada , sua solicitação foi enviada para análise e em até 2 dias úteis você saberá o valor exato para realizar uma consultoria e definirá a forma de pagamento.
                        <br/>
                        <br/>
                        O número da sua solicitação é: “JJS555SS”
                        <br/>
                        <br/>
                        E você pode acompanha-la no menu “Acompanhamento”
                        <br/>
                        <br/>                    
                    </p>
                </div>
                <ButtonLink to="/acompanhamento" class="header__login serv-site__button-2" text="Ir apra Acompanhamento" />
            </div>
            </div>
        </PageDefault>
    )
}
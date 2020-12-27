import React from 'react';
import PageDefault from '../../components/pageDefault/PageDefault';
import ButtonLink  from '../../components/buttonLink/ButonLink'
import './Servicos-site.css';

export default function ServicosSite3(){

    return(
        <PageDefault>
            <div className="serv-site__container">
                <div>
                <div className="serv-site-3__container">
                    <p className="serv-site__label">
                        O custo estimado do seu sistema está em: 
                        <br/>
                        <br/>
                        R$: 400,00 reais.
                        <br/>
                        <br/>
                        Ele pode ser pago em até 12x sem juros nos cartões de crédito, débito ou boleto bancário. Os boletos estão disponíveis em nosso portal.
                        <br/>
                        <br/>
                        Você também pode consultar o status de seus pagamentos no menu “Pagamentos” e acompanhar o andamento do desenvolvimento do sistema em “Acompanhamento.”
                        <br/>
                        <br/>
                    </p>
                </div>
                <ButtonLink to="/servicos-site-4" class="header__login serv-site__button-2" text="Enviar meu pedido para análise" />
            </div>
            </div>
        </PageDefault>
    )
}
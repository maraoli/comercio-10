import React from 'react';
import PageDefault from '../../components/pageDefault/PageDefault';
import ButtonLink  from '../../components/buttonLink/ButonLink'
import './Servicos-site.css';

export default function ServicosSite(){

    return(
        <PageDefault>
            <div className="serv-site__container">
                <form>
                    <fieldset>
                        <label className="serv-site__label">Nome para o Logotipo:</label>
                        <input type="text" className="serv-site__input" />

                        <label className="serv-site__label">Itens para o menu de navegação:</label>
                        <input type="text" className="serv-site__input" />

                        <label className="serv-site__label">Descrição dos serviços:</label>
                        <textarea type="text" className="serv-site__input serv-site__textarea" />
                    </fieldset>
                    <ButtonLink to="/servicos-site-2" class="header__login" text="Avançar" />
                </form>
            </div>
        </PageDefault>
    )
}
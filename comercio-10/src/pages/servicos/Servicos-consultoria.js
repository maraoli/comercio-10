import React from 'react';
import PageDefault from '../../components/pageDefault/PageDefault';
import ButtonLink  from '../../components/buttonLink/ButonLink'
import './Servicos-site.css';

export default function ServicosConsultoria(){

    return(
        <PageDefault>
            <div className="serv-site__container">
                <form>
                    <fieldset>
                        <label className="serv-site__label">Qual é o motivo da sua solicitação?</label>
                        <div className="serv-site__cont-checkbox serv-consult__cont-checkbox">
                            <div>
                                <input type="checkbox"  className="serv-site__checkbox" id="login-yes" name="login-yes" value="Bike" />
                                <label for="login-yes" className="serv-site__label-2">Estou montando um novo negócio</label>
                            </div>
                            <div>
                                <input type="checkbox"  className="serv-site__checkbox" id="login-no" name="login-no" value="Car" />
                                <label for="login-no" className="serv-site__label-2">Melhorar um negócio exitente</label>
                            </div>
                       </div>
                       

                        <label className="serv-site__label">Em que podemos te ajudar?</label>
                        <textarea type="text" className="serv-site__input serv-site__textarea" />


                        <label className="serv-site__label">Qual seria a forma de atendimento?</label>
                        <div className="serv-site__cont-checkbox serv-consult__cont-checkbox">
                            <div>
                                <input type="checkbox"  className="serv-site__checkbox" id="login-yes" name="login-yes" value="Bike" />
                                <label for="login-yes" className="serv-site__label-2">Online pelo próprio portal</label>
                            </div>
                            <div>
                                <input type="checkbox"  className="serv-site__checkbox" id="login-no" name="login-no" value="Car" />
                                <label for="login-no" className="serv-site__label-2">Por telefone</label>
                            </div>
                            <div>
                                <input type="checkbox"  className="serv-site__checkbox" id="login-no" name="login-no" value="Car" />
                                <label for="login-no" className="serv-site__label-2">Por video conferência</label>
                            </div>
                       </div>
                    </fieldset>
                    <ButtonLink to="/servicos-consultoria-2" class="header__login" text="Avançar" />
                </form>
            </div>
        </PageDefault>
    )
}
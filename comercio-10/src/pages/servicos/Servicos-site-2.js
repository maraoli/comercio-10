import React from 'react';
import PageDefault from '../../components/pageDefault/PageDefault';
import ButtonLink  from '../../components/buttonLink/ButonLink'
import './Servicos-site.css';

export default function ServicosSite2(){

    return(
        <PageDefault>
            <div className="serv-site__container">
                <form>
                    <fieldset>
                        <label className="serv-site__label">O sitema terá login?</label>
                        <div className="serv-site__cont-checkbox">
                            <input type="checkbox"  className="serv-site__checkbox" id="login-yes" name="login-yes" value="Bike" />
                            <label for="login-yes" className="serv-site__label-2">Sim</label>
                            <input type="checkbox"  className="serv-site__checkbox" id="login-no" name="login-no" value="Car" />
                            <label for="login-no" className="serv-site__label-2">Não</label>
                       </div>
                       

                        <label className="serv-site__label">O site terá compras online?</label>
                        <div className="serv-site__cont-checkbox">
                            <input type="checkbox"  className="serv-site__checkbox" id="compras-yes" name="compras-yes" value="Bike" />
                            <label for="compras-yes" className="serv-site__label-2">Sim</label>
                            <input type="checkbox"  className="serv-site__checkbox" id="compras-no" name="compras-no" value="Car" />
                            <label for="compras-no" className="serv-site__label-2">Não</label>
                       </div>

                        <label className="serv-site__label">Selecione um modelo base:</label>
                        <div className="serv-site__cont-checkbox">
                            <input type="checkbox" className="serv-site__checkbox" id="modelo-1" name="modelo-1" value="Bike" />
                            <label for="modelo-1" className="modelo-1">
                                <div className="modelo"></div>
                            </label>
                            <input type="checkbox"  className="serv-site__checkbox" id="modelo-2" name="modelo-2" value="Car" />
                            <label for="modelo-2" className="modelo-2">
                                <div className="modelo"></div>
                            </label>
                            <input type="checkbox"  className="serv-site__checkbox" id="modelo-3" name="modelo-3" value="Car" />
                            <label for="modelo-3" className="modelo-3">
                                <div className="modelo"></div>
                            </label>
                       </div>
                    </fieldset>
                    <ButtonLink to="/servicos-site-3" class="header__login" text="Avançar" />
                </form>
            </div>
        </PageDefault>
    )
}
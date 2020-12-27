import React from 'react';
import PageDefault from '../../components/pageDefault/PageDefault';
import ButtonLink from '../../components/buttonLink/ButonLink'
import './Meus-dados.css'

export default function MeusDados(){

    return(
        <PageDefault>
            <div className="meus-dados__container">
                <div className="meus-dados__dados">
                    <p className="meus-dados__nome">Ana Pereira Lima</p>
                    <p className="meus-dados__email">mail@mail.com</p>
                    <p className="meus-dados__telefone">(11)95535-5555</p>
                </div>

                <div className="meus-dados__botoes">
                    <ButtonLink to="/" class="header__login meus-dados__button" text="Atualizar cadastro" />
                    <ButtonLink to="/" class="header__login meus-dados__button" text="Alterar Senha" />
                </div>
            </div>
        </PageDefault>
    )
}
import React from 'react';
import PageDefault from '../../components/pageDefault/PageDefault';
import ButtonLink from '../../components/buttonLink/ButonLink'
import './Meus-dados.css'

export default function MeusDados(){

    return(
        <PageDefault>
            <h1>Meus Dados</h1>
            <p className="meus-dados__nome">Ana</p>
            <p className="meus-dados__email">mail@mail.com</p>
            <p className="meus-dados__telefone">(11)95535-5555</p>

            <ButtonLink to="/" class="" text="Atualizar cadastro" />
            <ButtonLink to="/" class="" text="Alterar Senha" />
        </PageDefault>
    )
}
import React from 'react';
import PageDefault from '../../components/pageDefault/PageDefault';
import {Link} from 'react-router-dom';
import './Acompanhamento.css'

export default function Acompanhamento(){

    return(
        <PageDefault>
            <div className="acomp__container">
                <Link to="/acompanhamento-detalhes">
                    <div className="acomp__card">
                        <p className="acomp__num">JJS555SS</p>
                        <p className="acomp__tipo">Solicitação de Site</p>
                        <p className="acomp__status">Concuído</p>
                    </div>
                </Link>
                <Link to="/acompanhamento-detalhes">
                <div className="acomp__card">
                    <p className="acomp__num">JJS555SS</p>
                    <p className="acomp__tipo">Solicitação de Consultoria</p>
                    <p className="acomp__status">Em análise</p>
                </div>
                </Link>
                <Link to="/acompanhamento-detalhes">
                <div className="acomp__card">
                    <p className="acomp__num">JJS555SS</p>
                    <p className="acomp__tipo">Solicitação de Site</p>
                    <p className="acomp__status">Concuído</p>
                </div>
                </Link>
                <Link to="/acompanhamento-detalhes">
                    <div className="acomp__card">
                        <p className="acomp__num">JJS555SS</p>
                        <p className="acomp__tipo">Solicitação de Site</p>
                        <p className="acomp__status">Concuído</p>
                    </div>
                </Link>
                <Link to="/acompanhamento-detalhes">
                    <div className="acomp__card">
                        <p className="acomp__num">JJS555SS</p>
                        <p className="acomp__tipo">Solicitação de Site</p>
                        <p className="acomp__status">Concuído</p>
                    </div>
                </Link>
                <Link to="/acompanhamento-detalhes">
                    <div className="acomp__card">
                        <p className="acomp__num">JJS555SS</p>
                        <p className="acomp__tipo">Solicitação de Site</p>
                        <p className="acomp__status">Concuído</p>
                    </div>
                </Link>
                <Link to="/acompanhamento-detalhes">
                    <div className="acomp__card">
                        <p className="acomp__num">JJS555SS</p>
                        <p className="acomp__tipo">Solicitação de Site</p>
                        <p className="acomp__status">Concuído</p>
                    </div>
                </Link>
            </div>
        </PageDefault>
    )
}
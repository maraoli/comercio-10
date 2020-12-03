import React from 'react';
import PageDefault from '../../components/pageDefault/PageDefault';
import bkg_store from '../../assets/background_store.jpg';
import {Link} from 'react-router-dom';
import './Homepage.css';

export default function Homepage(){
    return(
        <PageDefault>
            <div className="home__container">
                <section className="sessao_home">  
                    <div className="home__bkgStoreOver">
                        <h1 className="home__header-text">Sua loja como você sempre sonhou.</h1>
                    </div>
                    <img className="home__bkgStore" src={bkg_store} alt="background of store"/>
                </section>

                <section className="sessao sessao_sobre" id="sessao_sobre">
                    <h1>O que é a Comércio 10?</h1>
                    <div className="sobre_conteudo">
                        <p>Aqui na Comércio 10 você pode tirar esse sonho do papel, pois além de contarmos com uma assesoria especializada para colocar a sua empresa nas nuvens temos um time especialista em consultoria para você não perder o financeiro de controle quando suas vendas aumentarem.</p>
                        {/* <img src={} alt="nossa empresa" /> */}
                    </div>
                </section>

                <section className="sessao sessao_servicos" id="sessao_servicos">
                    <h1>Que tal conhecer um de nossos serviços?</h1>
                    <div className="servicos">

                        <Link to="/produtos">
                            <div className="servico servico_1">
                                <p>Quero ter um <span>site</span> para o meu negócio.</p>
                            </div>
                        </Link>

                        <Link to="/produtos">
                            <div className="servico servico_2">
                                <p>Quero solicitar uma <span>consultoria</span> para o meu negócio.</p>
                            </div>
                        </Link>

                    </div>
                    
                </section> 

                <section className="sessao sessao_contatos" id="sessao_contatos">
                    <h1>Contatos</h1>
                </section>  
            </div>
        </PageDefault>
    )
}
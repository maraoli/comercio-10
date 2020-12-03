import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

export default function Navbar(){
    return(
        <>
        <div className="nav__hamburguer menu">
            <input id="hamburguer__check" type="checkbox" />
            <label htmlFor="hamburguer__check"></label> 
            <span className="hamburguer__line"></span>
            <div className="hamburguer__content"></div>
            <div className="nav__container">
                <ul className="nav__itens">
                    <li className="nav__item"><Link to="/">Home</Link></li>
                    <li className="nav__item"><a href="#sessao_sobre">Sobre</a></li>
                    <li className="nav__item"><a href="#sessao_servicos">Serviços</a></li>
                    <li className="nav__item"><a href="#sessao_contatos">Contato</a></li>
                </ul>
            </div>
        </div>

        <div className="nav__container">
           <ul className="nav__itens">
               <li className="nav__item"><Link to="/">Home</Link></li>
               <li className="nav__item"><a href="#sessao_sobre">Sobre</a></li>
               <li className="nav__item"><a href="#sessao_servicos">Serviços</a></li>
               <li className="nav__item"><a href="#sessao_contatos">Contato</a></li>
           </ul>
        </div>
        </>
    )
}
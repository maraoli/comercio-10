import React from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom';

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
                    <li className="nav__item"><Link to="/sobre">Sobre</Link></li>
                    <li className="nav__item"><Link to="/produtos">Serviços</Link></li>
                    <li className="nav__item"><Link to="/contato">Contato</Link></li>
                </ul>
            </div>
        </div>

        <div className="nav__container">
           <ul className="nav__itens">
               <li className="nav__item"><Link to="/">Home</Link></li>
               <li className="nav__item"><Link to="/contato">Contato</Link></li>
               <li className="nav__item"><Link to="/produtos">Serviços</Link></li>
               <li className="nav__item"><Link to="/sobre">Sobre</Link></li>
           </ul>
        </div>
        </>
    )
}
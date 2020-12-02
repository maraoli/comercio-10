import React from 'react';
import CreditCards from '../../assets/credit-cards.png'
import './Footer.css';

export default function Footer(){
    return(
        <div className="footer__container">
            <div className="footer__contatos">
                Contatos
                <p>(11)88888-8888</p>
                <p>(11)99999-9999</p>
            </div>
            <div>
                Aceitamos encomendas
            </div>
            <div className="footer__pagamentos">
                Formas de Pagamento
                <img src={CreditCards} alt="cartoes de credito"/>
            </div>
        </div>
    )
}
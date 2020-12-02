import React from 'react';
import PageDefault from '../../components/pageDefault/PageDefault'
import ImgDoces from '../../assets/doces-1.jpeg';
import {FaArrowRight} from 'react-icons/fa'
import './Produtos.css'

export default function Produtos(){
    return(
        <PageDefault>
            <div className="produtos__container">
                <FaArrowRight className="produtos__arrow"/>
                <input id="produtos-open__aside" type="checkbox"/>
                <aside className="produtos__lista">
                    <ul>
                        <li>Salgados</li>
                        <li>Doces</li>
                        <li>Bebidas</li>
                        <li>Bolos</li>
                        <li>Tortas</li>
                        <li>Pizzas</li>
                    </ul>
                </aside>
                <div className="produtos__produtos">
                    <div className="produtos__produto">
                        <img src={ImgDoces} alt="Doce" />
                        <div>
                            <p>Docinhos Variados</p>
                            <p>R$: 10,00</p>
                        </div>
                    </div>
                    <div className="produtos__produto">
                        <img src={ImgDoces} alt="Doce" />
                        <div>
                            <p>Docinhos Variados</p>
                            <p>R$: 10,00</p>
                        </div>
                    </div>
                    <div className="produtos__produto">
                        <img src={ImgDoces} alt="Doce" />
                        <div>
                            <p>Docinhos Variados</p>
                            <p>R$: 10,00</p>
                        </div>
                    </div>
                    <div className="produtos__produto">
                        <img src={ImgDoces} alt="Doce" />
                        <div>
                            <p>Docinhos Variados</p>
                            <p>R$: 10,00</p>
                        </div>
                    </div>
                    <div className="produtos__produto">
                        <img src={ImgDoces} alt="Doce" />
                        <div>
                            <p>Docinhos Variados</p>
                            <p>R$: 10,00</p>
                        </div>
                    </div>
                    <div className="produtos__produto">
                        <img src={ImgDoces} alt="Doce" />
                        <div>
                            <p>Docinhos Variados</p>
                            <p>R$: 10,00</p>
                        </div>
                    </div>
                    <div className="produtos__produto">
                        <img src={ImgDoces} alt="Doce" />
                        <div>
                            <p>Docinhos Variados</p>
                            <p>R$: 10,00</p>
                        </div>
                    </div>
                    <div className="produtos__produto">
                        <img src={ImgDoces} alt="Doce" />
                        <div>
                            <p>Docinhos Variados</p>
                            <p>R$: 10,00</p>
                        </div>
                    </div>
                    <div className="produtos__produto">
                        <img src={ImgDoces} alt="Doce" />
                        <div>
                            <p>Docinhos Variados</p>
                            <p>R$: 10,00</p>
                        </div>
                    </div>
                    <div className="produtos__produto">
                        <img src={ImgDoces} alt="Doce" />
                        <div>
                            <p>Docinhos Variados</p>
                            <p>R$: 10,00</p>
                        </div>
                    </div>
                    <div className="produtos__produto">
                        <img src={ImgDoces} alt="Doce" />
                        <div>
                            <p>Docinhos Variados</p>
                            <p>R$: 10,00</p>
                        </div>
                    </div>
                    <div className="produtos__produto">
                        <img src={ImgDoces} alt="Doce" />
                        <div>
                            <p>Docinhos Variados</p>
                            <p>R$: 10,00</p>
                        </div>
                    </div>
                    <div className="produtos__produto">
                        <img src={ImgDoces} alt="Doce" />
                        <div>
                            <p>Docinhos Variados</p>
                            <p>R$: 10,00</p>
                        </div>
                    </div>
                    <div className="produtos__produto">
                        <img src={ImgDoces} alt="Doce" />
                        <div>
                            <p>Docinhos Variados</p>
                            <p>R$: 10,00</p>
                        </div>
                    </div>
                </div>
            </div>
        </PageDefault>
    )
}
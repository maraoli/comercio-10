import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

export default function Navbar(){
    const [userName, setUserName] = useState("");

    useEffect(()=>{    
        if(localStorage.getItem('user')){
            const userName = JSON.parse(localStorage.getItem('user'));
            if(userName) setUserName(userName);
        }else{
            setUserName("")
        }
    }, [])

    return(
        <>

        {userName ?
        <>
            <div className="nav__hamburguer menu">
                <input id="hamburguer__check" type="checkbox" />
                <label htmlFor="hamburguer__check"></label> 
                <span className="hamburguer__line"></span>
                <div className="hamburguer__content"></div>
                <div className="nav__container-2">
                    <ul className="nav__itens">
                        <li className="nav__item"><Link to="/meus-dados">Meus dados</Link></li>
                        <li className="nav__item"><Link to="/servicos">Serviços</Link></li>
                        <li className="nav__item"><Link to="/acompanhamento">Acompanhamento</Link></li>
                        <li className="nav__item"><Link to="/pagamento">Pagamento</Link></li>
                    </ul>
                </div>
            </div>

            <div className="nav__container-2">
            <ul className="nav__itens">
                <li className="nav__item"><Link to="/meus-dados">Meus dados</Link></li>
                <li className="nav__item"><Link to="/servicos">Serviços</Link></li>
                <li className="nav__item"><Link to="/acompanhamento">Acompanhamento</Link></li>
                <li className="nav__item"><Link to="/pagamento">Pagamento</Link></li>
            </ul>
            </div>
        </>
        :
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
        }
        </>
    )
}
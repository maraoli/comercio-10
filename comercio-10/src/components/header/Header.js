import React from 'react';
import './Header.css'
import Logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <div className="header__container">
            <Link to="/">
                <div className="header__logo logo__container">
                    <img src={Logo} alt="Logo" className="header__img" />
                </div>
            </Link>
            <Link to="/login">
                <div className="header__login">Login</div>
            </Link>
        </div>
    )
}
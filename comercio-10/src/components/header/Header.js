import React from 'react';
import './Header.css'
import Logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';
import {FaUserCircle} from 'react-icons/fa';

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
                <FaUserCircle className="header__login-mob" />
            </Link>
        </div>
    )
}
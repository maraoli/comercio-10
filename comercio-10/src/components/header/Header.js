import React, {useState, useEffect} from 'react';
import './Header.css'
import Logo from '../../assets/logo.png';
import ButtonLink from '../buttonLink/ButonLink'
import {Link} from 'react-router-dom';
import {FaUserCircle} from 'react-icons/fa';
import {FaSignOutAlt} from 'react-icons/fa';

export default function Header(){
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
        <div className="header__container">
            <Link to="/">
                <div className="header__logo logo__container">
                    <img src={Logo} alt="Logo" className="header__img" />
                </div>
            </Link>
       
            {userName ?
                <div className="header__login-container"> 
                    <span className="header__name">{userName.name}</span>

                    <ButtonLink to="/" class="header__login" text="Sair" onClick={()=>{
                        localStorage.removeItem('user');
                        setUserName('')
                    }}>
                        <FaSignOutAlt className="header__login-mob" />
                    </ButtonLink>
                </div>
            :
                <ButtonLink to="/login" class="header__login" text="Login">
                    <FaUserCircle className="header__login-mob" />
                </ButtonLink>
            }   
        </div>
    )
}
import React from 'react';
import PageDefault from '../../components/pageDefault/PageDefault';
import bkg_store from '../../assets/background_store.jpg';
import './Homepage.css';

export default function Homepage(){
    return(
        <PageDefault>
            <div className="home__container"> 
                <div className="home__bkgStoreOver">
                    <h1 className="home__header-text">Sua loja como você sempre sonhou.</h1>
                </div>
                <img className="home__bkgStore" src={bkg_store} alt="background of store"/>
                
            </div>
        </PageDefault>
    )
}
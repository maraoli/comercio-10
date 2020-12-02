import React from 'react';
import Header from '../../components/header/Header'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import "./PageDefault.css"

export default function PageDefault({children}){
    return(
        <div className="page-default__container">
            <Header />
            <Navbar />
            {children}
            <Footer />
        </div>
    )        
}
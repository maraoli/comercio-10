import React, { Children } from 'react';
import './ButtonLink.css';
import {Link} from 'react-router-dom';

export default function ButtonLink(props){
    return(
        <Link to={props.to} onClick={props.onClick}>
            <div className={props.class}>{props.text}</div>
            {props.children}
        </Link>
    )
}
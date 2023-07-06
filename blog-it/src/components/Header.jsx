import React from 'react';
import Fecha from './Fecha';
import './Header.css';
import Navigator from './Navigator';


const Header = (props) => {

//    const user = props.user;

    return (
        <div className="header">
            <Navigator></Navigator>
            <Fecha></Fecha>
            <h1 className="elegantshadow" >BLOG-IT</h1>
            
        </div>

    )
}

export default Header
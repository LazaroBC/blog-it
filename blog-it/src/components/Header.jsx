import React from 'react'
import Fecha from './Fecha'
import './Header.css'


const Header = (props) => {

    const user = props.user;

    return (
        <div className="header">
            <Fecha></Fecha>
            <h1 className="elegantshadow" >BLOG-IT</h1>
            
        </div>

    )
}

export default Header
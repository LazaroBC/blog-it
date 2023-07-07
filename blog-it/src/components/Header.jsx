import React from 'react';
import Fecha from './Fecha';
import styles from './Header.module.css';
import Navigator from './Navigator';

const Header = (props) => {

    //    const user = props.user;

    return (
        <div>
            <div>
                <Navigator></Navigator>
                <Fecha></Fecha>
                <h1 className={styles['elegantshadow']} >BLOG-IT</h1>
            </div>
        </div>

    )
}

export default Header
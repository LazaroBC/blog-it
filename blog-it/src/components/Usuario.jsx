import React from 'react';
import styles from './Usuario.module.css';

const Usuario = (props) => {


    const user = (props.user ? props.user : {});

    // const user = props.user || {};

    return (
        <div className={styles.usuario}>
            <div className={styles.nombreUsuario}>
                <h2 >{user.usuario}</h2>
                {/* eslint-disable-next-line*/}
                    <img src="https://cdn-icons-png.flaticon.com/512/1184/1184410.png"></img>
            </div>
            <ul >
                <li>{user.nombre} {user.apellido}</li>
                <li>Edad: {user.edad}</li>
            </ul>
        </div>
    )
}

export default Usuario

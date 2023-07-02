import React from 'react'
import './Usuario.css'

const Usuario = (props) => {


    const user = ( props.user ? props.user : {});

   // const user = props.user || {};

    return (
        <div className="usuario">
            <h2>{user.usuario}</h2>
            <ul>
                <li>{user.nombre} {user.apellido}</li>
                <li>Edad: {user.edad}</li>
            </ul>
        </div>
    )
}

export default Usuario

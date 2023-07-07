import React from "react";
import styles from './Inicio.module.css';

const usuario = {
    usuario: "LLatzy Punky",
    nombre: "Lázaro",
    apellido: "Belloch Canet",
    edad: 55
}

const Inicio = (props) => {
    return (
        <div className="App">
            <Header></Header>
            <Usuario user={usuario}></Usuario>
            <Entradas></Entradas>
            <Footer></Footer>
            <Articulo></Articulo>
        </div>
    )
}

export default Inicio;
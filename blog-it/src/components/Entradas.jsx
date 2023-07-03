import React from 'react';
import './Entradas.css';

const Entradas = () => {

    return (
        <div >
            <h1 className='entradas'>Entradas</h1>
                <div className='row'>
                    <div className='tarjeta column'>
                        <div className='titulo'>Titulo de entrada</div>
                        <article className='cuerpo'>
                            <img src="https://forbes.es/wp-content/uploads/2022/11/ciberseguridad.jpg" alt="muestra"></img>
                            <p>
                                Articulo
                            </p>
                            <h3>
                                Subsección
                            </h3>
                        </article>
                        <div className='pie'>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#">Más información</a>
                        </div>

                    </div>
                    <div className='tarjeta column'>
                        <div className='titulo'>Titulo de entrada</div>
                        <article className='cuerpo'>
                            <img src="https://forbes.es/wp-content/uploads/2022/11/ciberseguridad.jpg" alt="muestra"></img>
                            <p>
                                Articulo
                            </p>
                            <h3>
                                Subsección
                            </h3>
                        </article>
                        <div className='pie'>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#">Más información</a>
                        </div>

                    </div>
                    <div className='tarjeta column'>
                        <div className='titulo'>Titulo de entrada</div>
                        <article className='cuerpo'>
                            <img src="https://forbes.es/wp-content/uploads/2022/11/ciberseguridad.jpg" alt="muestra"></img>
                            <p>
                                Articulo
                            </p>
                            <h3>
                                Subsección
                            </h3>
                        </article>
                        <div className='pie'>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#">Más información</a>
                        </div>

                    </div>
                </div>
        </div>
    )
}



export default Entradas;


import React from 'react';
import styles from './Entradas.module.css';


const Entradas = () => {

    return (
        <div >
            <h1 className={styles.entradas}>Entradas</h1>
            <div className={styles.row}>
                <div className={styles['tarjeta column']}>
                    <div className={styles.titulo}><a href="./Articulo">Titulo de entrada</a></div>
                    <article className={styles.cuerpo}>
                        <img src="https://forbes.es/wp-content/uploads/2022/11/ciberseguridad.jpg" alt="muestra"></img>
                        <p>
                            Articulo
                        </p>
                        <h3>
                            Subsección
                        </h3>
                    </article>
                    <div className={styles.pie}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#">Más información</a>
                    </div>

                </div>
                <div className={styles['tarjeta column']}>
                    <div className={styles.titulo}>Titulo de entrada</div>
                    <article className={styles.cuerpo}>
                        <img src="https://forbes.es/wp-content/uploads/2022/11/ciberseguridad.jpg" alt="muestra"></img>
                        <p>
                            Articulo
                        </p>
                        <h3>
                            Subsección
                        </h3>
                    </article>
                    <div className={styles.pie}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#">Más información</a>
                    </div>

                </div>
                <div className={styles['tarjeta column']}>
                    <div className={styles.titulo}>Titulo de entrada</div>
                    <article className={styles.cuerpo}>
                        <img src="https://forbes.es/wp-content/uploads/2022/11/ciberseguridad.jpg" alt="muestra"></img>
                        <p>
                            Articulo
                        </p>
                        <h3>
                            Subsección
                        </h3>
                    </article>
                    <div className={styles.pie}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#">Más información</a>
                    </div>

                </div>
            </div>
        </div>
    )
}



export default Entradas;


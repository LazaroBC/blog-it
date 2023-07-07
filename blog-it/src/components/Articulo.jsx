import React from 'react';
import styles from './Articulo.module.css';
import Navigator from './Navigator';



const Articulo = () => {

    return (
        <div className={styles.centrado}>
            <div className={styles['centrado-cont']}>
                <Navigator></Navigator>
                <h1>
                    Articulo
                </h1>
                <div>
                    <h2>
                        Primera entrada de blog
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nisi illo aliquam deleniti eos. Possimus minima,
                        delectus quam odio dolorem quis dicta rerum libero ullam eius tenetur laboriosam quidem maxime!
                    </p>
                    <button>Ver más</button>
                </div>
            </div>

        </div>
    )
}

export default Articulo;
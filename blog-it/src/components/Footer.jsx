import React from "react";
import styles from './Footer.module.css';

const Footer = () => {


    return (
        <div>
            <footer >
                <div className={styles.creditos}>
                    <ul>
                        <li>
                            <a href="mailto:bellochlazaro.smr@gmail.com">Email</a>
                        </li>
                        <li>
                            <a href="https://github.com/LazaroBC">GitHub</a>
                        </li>
                        <li>
                            <a href="#">
                            Lázaro Belloch Canet
                            </a>
                        </li>
                        
                        <li>
                            <p>
                                👋
                            </p>
                        </li>

                    </ul>

                </div>

            </footer>
        </div>
    )
}

export default Footer;
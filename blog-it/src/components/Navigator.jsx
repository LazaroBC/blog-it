import React from "react";
import styles from './Navigator.module.css';

const Navigator = () => {
	return (
		<div className={styles.centrado}>
			<div className={styles['centrado_cont']}>
				<header id={styles['main_header']}>

					<a id={styles.logo_header} href="#">
						<span className={styles.site_name}>BLOG-IT</span>
						<span className={styles.site_desc}>SMR / ASIR / CiberSeguridad / Tutoriales</span>
					</a>

					<nav>
						<ul>
							<li><a href="#">Inicio</a></li>
							<li><a href="#">Acerca de</a></li>
							<li><a href="#">Contacto</a></li>
						</ul>
					</nav>
				</header>
			</div>
		</div>
	)
}

export default Navigator
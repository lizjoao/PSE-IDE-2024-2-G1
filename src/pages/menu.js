import styles from '../styles/menu.module.css'

export default function Menu() {
	return (
		<div className={styles.container}>
			<a href="#home" className={styles.menuItem}>HOME</a>
			<a href="#catalogo" className={styles.menuItem}>CATALOGO</a>
			<a href="#assassinos" className={styles.menuItem}>ASSASSINOS</a>
			<a href="#ingressos" className={styles.menuItem}>INGRESSOS</a>
		</div>
	)
}
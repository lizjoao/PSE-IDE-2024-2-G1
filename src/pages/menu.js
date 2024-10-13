import styles from '../styles/menu.module.css'

export default function Menu() {
    return (
        <div id='menu' className={styles['container']}>
            <a href="#home" className={styles.menuItem}>HOME</a>
            <a href="#catalogo" className={styles.menuItem}>CATALOGO</a>
            <a href="#assassinos" className={styles.menuItem}>ASSASSINOS</a>
            <a href="#ingresso" className={styles.menuItem}>INGRESSO</a>
        </div>
    )
}
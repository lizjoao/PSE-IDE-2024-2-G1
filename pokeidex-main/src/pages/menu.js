import styles from '../styles/menu.module.css'

import { Press_Start_2P } from 'next/font/google'
 
const press_start_2p = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
})

export default function Menu() {

    return (
        <div id='menu' className={`${press_start_2p.className} ${styles.container}`}>
            
            <a href="#header" className={styles.menuItem}>HOME</a>
            <a href="#starters" className={styles.menuItem}>INICIAIS</a>
            <a href="#aboutUs" className={styles.menuItem}>SOBRE</a>
            <a href="#form" className={styles.menuItem}>FORMULARIO</a>
        </div>
    )
}
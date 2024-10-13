import styles from '../styles/aboutUs.module.css'

import { Press_Start_2P } from 'next/font/google'
 
const press_start_2p = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
})

export default function AboutUs() {

  const neko_comemorando = "/img/neko-comemorando.png";
  const logo = "/img/ide-logo.png";
    return (
        <div id='aboutUs' className={`${press_start_2p.className} ${styles.container}`}>
          <h1 className={styles.title}>SOBRE NOS</h1>
          <div className={styles.grid50}>
            <div className={styles.caixa_preta}>
              <p className={styles.text}>A IDE é a empresa júnior dos cursos Ciência e Engenharia de Computação da 
              Universidade Federal do Rio Grande do Sul. Formada por alunos interessados em se tornarem empreendedores 
              e profissionais excepcionais, a IDE fornece soluções em software, como sites e sistemas, com preços abaixo 
              do mercado aliados à excelência da UFRGS, o Instituto de Informática e seus professores, que fornecem apoio 
              técnico e aconselhamento aos estudantes.</p>
              <img className={styles.logoIDE} src={logo} alt="Logo IDE"/>
            </div>
            <div className={styles.gato_container}><img className={styles.imagem} src={neko_comemorando} alt="Neko dormindo"/></div>
          </div>
        </div>

    )
}
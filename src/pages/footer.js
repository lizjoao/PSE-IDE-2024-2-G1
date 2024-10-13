import styles from "../styles/footer.module.css";

export default function Footer() {
  
  const instaLogo = "/Assets/Instagram.png";
  const linkedLogo = "/Assets/Linkedin.png";
  const ideLogo = "/Assets/IDE.png";

  return (
    <div className={styles.container}>
      <div className={styles.logos}>

        <a href="https://www.instagram.com/ide_jr/" target="_blank">
          <img src={instaLogo} className={styles.insta}></img>
        </a>

        <a href="https://www.linkedin.com/company/empresa-j%C3%BAnior-ide/" target="_blank">
          <img src={linkedLogo} className={styles.linked}></img>
        </a>

        <a href="https://www.idejr.com.br/" target="_blank">
          <img src={ideLogo} className={styles.ide}></img>
        </a>
      </div>

      <div>
        <p className={styles.texto_footer}>
        CineIDE © Todos os direitos reservados.
        </p>
        <p className={styles.texto_footer}>
          Termos de Uso | Política de Privacidade | Política de Cookies
        </p>
      </div>
      <div className={styles.img_canto}>
        <img src={ideLogo}></img>
      </div>
    </div>
  );
}

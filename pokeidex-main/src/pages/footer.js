import styles from "../styles/footer.module.css";
import { Press_Start_2P } from "next/font/google";

const press_start_2p = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {
  const instaLogo = "/img/instagram-logo.png";
  const linkedLogo = "/img/linkedin-logo.png";
  const pokeLogo = "/img/pokemon-logo.png";
  const ideLogo = "/img/ide-logo.png";
  const ideLogoPixelado = "/img/logo-pixelado-branco.png";

  return (
    <div
      id="footer"
      className={`${press_start_2p.className} ${styles.container}`}
    >
      <div className={`${styles.logos}`}>
        <a href="https://www.pokemon.com/br/" target="_blank">
          <img src={pokeLogo} className={styles.poke}></img>
        </a>

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

      <div className={`${styles.texto_footer}`}>
        <p className={`${styles.copyright}`}>
        株式会社ポケモン (The Pokemon Company) &copy; x IDE &copy; Todos os direitos
          reservados.
        </p>
        <p className={`${styles.politicas}`}>
          Termos de Uso | Política de Privacidade | Política de Cookies
        </p>
      </div>
      <div className={styles.img_canto}>
        <img src={ideLogoPixelado}></img>
      </div>
    </div>
  );
}

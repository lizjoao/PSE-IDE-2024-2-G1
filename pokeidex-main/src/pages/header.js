import styles from "../styles/header.module.css";
import borders from "../styles/borders.module.css";
import { Press_Start_2P } from "next/font/google";

const press_start_2p = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  const nekoHeader = "/img/neko-anotando.png";

  return (
    <div id="header" className={`${press_start_2p.className} ${styles.container}`}>
      <div className={styles.neko}>
        <img className={styles.imgNeko} src={nekoHeader}></img>
      </div>
      <div>
        <div className={styles.texto_header}>
          <h1>POKE</h1>
          <h1><font color="#b22559">IDE</font>X</h1>
          <div className={`${styles.base_flex} ${styles.width100}`}>
            <a href="#starters" className={`${borders.pixelCornersBtn} ${borders.white} ${styles.base_flex} ${styles.buttonbg}`}          >
              START
            </a>
          </div>
        </div> 
      </div>
    </div>
  );
}

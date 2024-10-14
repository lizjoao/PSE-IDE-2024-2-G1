import styles from "../styles/header.module.css"

export default function Header() {
  const banner = "/Assets/Banner.png"

  return (
    <div id='home' className={styles.container}>
      <img src={banner} className={styles.img}/>
    </div>
  );
}
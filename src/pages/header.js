import styles from "../styles/header.module.css"

export default function Header() {
  const banner = "/Assets/Banner.png"

  return (
    <div className={styles['header-container']}>
      <img src={banner} className={styles.img}/>
    </div>
  );
}
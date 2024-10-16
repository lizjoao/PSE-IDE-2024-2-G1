import styles from "../styles/catalogo.module.css"

export default function Catalogo() {
	return(
		<div id='catalogo' className={styles.container}>
			<h1 className={styles.title}>FILMES EM CARTAZ</h1>
			<div className={styles.grid}>
				<img src="/Assets/Filme1.png" className={styles.gridItem} />
				<img src="/Assets/Filme2.png" className={styles.gridItem} />
				<img src="/Assets/Filme3.png" className={styles.gridItem} />
				<img src="/Assets/Filme4.png" className={styles.gridItem} />
				<img src="/Assets/Filme5.png" className={styles.gridItem} />
				<img src="/Assets/Filme6.png" className={styles.gridItem} />
				<img src="/Assets/Filme7.png" className={styles.gridItem} />
				<img src="/Assets/Filme8.png" className={styles.gridItem} />
				<img src="/Assets/Filme9.png" className={styles.gridItem} />
				<img src="/Assets/Filme10.png" className={styles.gridItem} />
				<img src="/Assets/Filme11.png" className={styles.gridItem} />
				<img src="/Assets/Filme12.png" className={styles.gridItem} />
				<img src="/Assets/Filme13.png" className={styles.gridItem} />
				<img src="/Assets/Filme14.png" className={styles.gridItem} />
				<img src="/Assets/Filme15.png" className={styles.gridItem} />
				<img src="/Assets/Filme16.png" className={styles.gridItem} />
			</div>
		</div>
	);
};
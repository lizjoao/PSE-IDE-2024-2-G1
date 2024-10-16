import styles from "../styles/catalogo.module.css"
const catalogos = [
        {
            "Nome":"",
			"id": 1,
            "Path": "/Assets/Filme1.png"
        },
        {
            "Nome":"",
			"id": 2,
            "Path": "/Assets/Filme2.png"
        },
        {
            "Nome":"",
			"id":3,
            "Path": "/Assets/Filme3.png"
        },
        {
            "Nome":"",
			"id": 4,
            "Path": "/Assets/Filme4.png"
        },
        {
            "Nome":"",
			"id": 5,
            "Path": "/Assets/Filme5.png"
        },
        {
            "Nome":"",
			"id": 6,
            "Path": "/Assets/Filme6.png"
        },
        {
            "Nome":"",
			"id": 7,
            "Path": "/Assets/Filme7.png"
        },
        {
            "Nome":"",
			"id": 8,
            "Path": "/Assets/Filme8.png"
        },
        {
            "Nome":"",
			"id": 9,
            "Path": "/Assets/Filme9.png"
        },
        {
            "Nome":"",
			"id": 10,
            "Path": "/Assets/Filme10.png"
        },
        {
            "Nome":"",
			"id": 11,
            "Path": "/Assets/Filme11.png"
        },
        {
            "Nome":"",
			"id": 12,
            "Path": "/Assets/Filme12.png"
        },
        {
            "Nome":"",
			"id": 13,
            "Path": "/Assets/Filme13.png"
        },
        {
            "Nome":"",
			"id": 14,
            "Path": "/Assets/Filme14.png"
        },
        {
            "Nome":"",
			"id": 15,
            "Path": "/Assets/Filme15.png"
        },
        {
            "Nome":"",
			"id": 16,
            "Path": "/Assets/Filme16.png"
        }
    ]

export default function Catalogo() {
	return(
		<div id='catalogo' className={styles.container}>
			<div className = {styles.header}>
				<h1 className={styles.title}>FILMES EM CARTAZ</h1>
				<input className={styles.input} placeholder="Pesquisa"></input>
			</div>
			<div className={styles.grid}>
				{catalogos.map((catalogo) => {
					return (
					<div key={catalogo.id}>
						<img src={catalogo.Path} className={styles.gridItem} />
					</div>
					);
				})}
			</div>
		</div>
	);
};
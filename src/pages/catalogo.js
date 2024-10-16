import styles from "../styles/catalogo.module.css"
import React, { useState } from 'react';
const catalogos = [
        {
            "titulo":"",
			"id": 1,
            "Path": "/Assets/Filme1.png"
        },
        {
            "titulo":"",
			"id": 2,
            "Path": "/Assets/Filme2.png"
        },
        {
            "titulo":"",
			"id":3,
            "Path": "/Assets/Filme3.png"
        },
        {
            "titulo":"",
			"id": 4,
            "Path": "/Assets/Filme4.png"
        },
        {
            "titulo":"",
			"id": 5,
            "Path": "/Assets/Filme5.png"
        },
        {
            "titulo":"",
			"id": 6,
            "Path": "/Assets/Filme6.png"
        },
        {
            "titulo":"",
			"id": 7,
            "Path": "/Assets/Filme7.png"
        },
        {
            "titulo":"",
			"id": 8,
            "Path": "/Assets/Filme8.png"
        },
        {
            "titulo":"",
			"id": 9,
            "Path": "/Assets/Filme9.png"
        },
        {
            "titulo":"",
			"id": 10,
            "Path": "/Assets/Filme10.png"
        },
        {
            "titulo":"",
			"id": 11,
            "Path": "/Assets/Filme11.png"
        },
        {
            "titulo":"",
			"id": 12,
            "Path": "/Assets/Filme12.png"
        },
        {
            "titulo":"",
			"id": 13,
            "Path": "/Assets/Filme13.png"
        },
        {
            "titulo":"",
			"id": 14,
            "Path": "/Assets/Filme14.png"
        },
        {
            "titulo":"Frankenstein",
			"id": 15,
            "Path": "/Assets/Filme15.png"
        },
        {
            "titulo":"",
			"id": 16,
            "Path": "/Assets/Filme16.png"
        }
    ]

export default function Catalogo() {
	const [lista_catalogos, setCatalogos] = useState(catalogos); // Estado para controlar o assassino atual
	const [filtro, setFiltro] = useState(''); // Estado para controlar o assassino atual
    const filtroLower = filtro.toLowerCase()
    const catalogos_exib = catalogos.filter(catalogo => catalogo.titulo.toLowerCase().includes(filtroLower))
    
    console.log(filtro)
	return(
		<div id='catalogo' className={styles.container}>
			<div className = {styles.header}>
				<h1 className={styles.title}>FILMES EM CARTAZ</h1>
				<input type='search' value={filtro} onChange={(e)=>setFiltro(e.target.value)} className={styles.input} placeholder="Pesquisa"></input>
			</div>
			<div className={styles.grid}>
				{catalogos_exib.map((catalogo) => {
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
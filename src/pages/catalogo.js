import styles from "../styles/catalogo.module.css"
import React, { useState } from 'react';
const catalogos = [
        {
            "titulo":"Friday the 13th",
            "titulo2":"Sexta-Feira 13",
            "vilão" : "Jason Voorhess",
			"id": 1,
            "Path": "/Assets/Filme1.png"
        },
        {
            "titulo":"Halloween",
            "titulo2":"Halloween - A Noite do Terror",
            "vilão" : "Michael Myers",
			"id": 2,
            "Path": "/Assets/Filme2.png"
        },
        {
            "titulo":"A Nightmare on Elm Street",
            "titulo2":"A Hora do Pesadelo",
            "vilão" : "Freddy Krueger",
			"id":3,
            "Path": "/Assets/Filme3.png"
        },
        {
            "titulo":"Alien",
            "titulo2":"Alien o Oitavo Passageiro",
            "vilão" : "Xenomorfo",
			"id": 4,
            "Path": "/Assets/Filme4.png"
        },
        {
            "titulo":"The Thing",
            "titulo2":"O Enigma de Outro Mundo",
            "vilão" : "A Coisa",
			"id": 5,
            "Path": "/Assets/Filme5.png"
        },
        {
            "titulo":"The Texas Chainsaw Massacre",
            "titulo2":"O Massacre da Serra Elétrica",
            "vilão" : "Leatherface",
			"id": 6,
            "Path": "/Assets/Filme6.png"
        },
        {
            "titulo":"Scream",
            "titulo2":"Pânico",
            "vilão" : "Ghostface",
			"id": 7,
            "Path": "/Assets/Filme7.png"
        },
        {
            "titulo":"The Ring",
            "titulo2":"O Chamado",
            "vilão" : "Samara Morgan",
			"id": 8,
            "Path": "/Assets/Filme8.png"
        },
        {
            "titulo":"Hellraiser",
            "titulo2":"Hellraiser - Renascido do Inferno",
            "vilão" : "Pinhead",
			"id": 9,
            "Path": "/Assets/Filme9.png"
        },
        {
            "titulo":"The Shining",
            "titulo2":"O iluminado",
            "vilão" : "Jack Torrance",
			"id": 10,
            "Path": "/Assets/Filme10.png"
        },
        {
            "titulo":"Night of the Living Dead",
            "titulo2":"A Noite dos Mortos Vivos",
            "vilão" : "Zumbis",
			"id": 11,
            "Path": "/Assets/Filme11.png"
        },
        {
            "titulo":"The Exorcist",
            "titulo2":"O Exorcista",
            "vilão" : "Pazuzu",
			"id": 12,
            "Path": "/Assets/Filme12.png"
        },
        {
            "titulo":"Child's Play",
            "titulo2":"Brinquedo Assasino",
            "vilão" : "Chuck",
			"id": 13,
            "Path": "/Assets/Filme13.png"
        },
        {
            "titulo":"The Night Flier",
            "titulo2":"Vôo Noturno",
            "vilão" : "Dwight Renfield",
			"id": 14,
            "Path": "/Assets/Filme14.png"
        },
        {
            "titulo":"Frankenstein",
            "titulo2":"Frankenstein",
            "vilão" : "Monstro de Frankenstein",
			"id": 15,
            "Path": "/Assets/Filme15.png"
        },
        {
            "titulo":"Saw",
            "titulo2":"Jogos Mortais",
            "vilão" : "Jigsaw",
			"id": 16,
            "Path": "/Assets/Filme16.png"
        }
    ]

export default function Catalogo() {
    const [lista_catalogos, setCatalogos] = useState(catalogos); 
    const [filtro, setFiltro] = useState(''); 
    const [selectedId, setSelectedId] = useState(null); // Estado para controlar o clique

    const filtroLower = filtro.toLowerCase();
    const catalogos_exib = catalogos.filter(catalogo => 
        catalogo.titulo.toLowerCase().includes(filtroLower) ||
        catalogo.id == parseInt(filtroLower) ||
        catalogo.titulo2.toLowerCase().includes(filtroLower) ||
        catalogo.vilão.toLowerCase().includes(filtroLower)
    );

    return (
        <div id='catalogo' className={styles.container}>
            <h1 className={styles.title}>FILMES EM CARTAZ</h1>
            <div className={styles.header}>
                <input 
                    type='search' 
                    value={filtro} 
                    onChange={(e) => setFiltro(e.target.value)} 
                    className={styles.input} 
                    placeholder="Pesquisa"
                />
            </div>
            <div className={styles.grid}>
                {catalogos_exib.map((catalogo) => {
                    return (
                        <div 
                            key={catalogo.id} 
                            className={styles.gridItemContainer}
                            onClick={() => setSelectedId(catalogo.id === selectedId ? null : catalogo.id)} // Toggle no clique
                        >
                            <img 
                                src={catalogo.Path} 
                                className={styles.gridItem} 
                            />
                            {selectedId === catalogo.id && (
                                <div className={styles.infoOverlay}>
                                    <h2>{catalogo.titulo2}</h2>
                                    <p>Vilão: {catalogo.vilão}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
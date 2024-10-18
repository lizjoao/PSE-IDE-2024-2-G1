import styles from "../styles/catalogo.module.css";
import React, { useState } from 'react';

const catalogo = [
    {
        "titulo": "Friday the 13th",
        "titulo2": "Sexta-Feira 13",
        "vilão": "Jason Voorhess",
        "ano": "1980",
        "diretor": "Sean S. Cunningham",
        "id": 1,
        "Path": "/Assets/Filme1.png"
    },
    {
        "titulo": "Halloween",
        "titulo2": "Halloween - A Noite do Terror",
        "vilão": "Michael Myers",
        "ano": "1978",
        "diretor": "John Carpenter",
        "id": 2,
        "Path": "/Assets/Filme2.png"
    },
    {
        "titulo": "A Nightmare on Elm Street",
        "titulo2": "A Hora do Pesadelo",
        "vilão": "Freddy Krueger",
        "ano": "1984",
        "diretor": "Wes Craven",
        "id": 3,
        "Path": "/Assets/Filme3.png"
    },
    {
        "titulo": "Alien",
        "titulo2": "Alien o Oitavo Passageiro",
        "vilão": "Xenomorfo",
        "ano": "1979",
        "diretor": "Ridley Scott",
        "id": 4,
        "Path": "/Assets/Filme4.png"
    },
    {
        "titulo": "The Thing",
        "titulo2": "O Enigma de Outro Mundo",
        "vilão": "A Coisa",
        "ano": "1982",
        "diretor": "John Carpenter",
        "id": 5,
        "Path": "/Assets/Filme5.png"
    },
    {
        "titulo": "The Texas Chainsaw Massacre",
        "titulo2": "O Massacre da Serra Elétrica",
        "vilão": "Leatherface",
        "ano": "1974",
        "diretor": "Tobe Hooper",
        "id": 6,
        "Path": "/Assets/Filme6.png"
    },
    {
        "titulo": "Scream",
        "titulo2": "Pânico",
        "vilão": "Ghostface",
        "ano": "1996",
        "diretor": "Wes Craven",
        "id": 7,
        "Path": "/Assets/Filme7.png"
    },
    {
        "titulo": "The Ring",
        "titulo2": "O Chamado",
        "vilão": "Samara Morgan",
        "ano": "2002",
        "diretor": "Gore Verbinski",
        "id": 8,
        "Path": "/Assets/Filme8.png"
    },
    {
        "titulo": "Hellraiser",
        "titulo2": "Hellraiser - Renascido do Inferno",
        "vilão": "Pinhead",
        "ano": "1987",
        "diretor": "Clive Barker",
        "id": 9,
        "Path": "/Assets/Filme9.png"
    },
    {
        "titulo": "The Shining",
        "titulo2": "O Iluminado",
        "vilão": "Jack Torrance",
        "ano": "1980",
        "diretor": "Stanley Kubrick",
        "id": 10,
        "Path": "/Assets/Filme10.png"
    },
    {
        "titulo": "Night of the Living Dead",
        "titulo2": "A Noite dos Mortos Vivos",
        "vilão": "Zumbis",
        "ano": "1968",
        "diretor": "George A. Romero",
        "id": 11,
        "Path": "/Assets/Filme11.png"
    },
    {
        "titulo": "The Exorcist",
        "titulo2": "O Exorcista",
        "vilão": "Pazuzu",
        "ano": "1973",
        "diretor": "William Friedkin",
        "id": 12,
        "Path": "/Assets/Filme12.png"
    },
    {
        "titulo": "Child's Play",
        "titulo2": "Brinquedo Assassino",
        "vilão": "Chucky",
        "ano": "1988",
        "diretor": "Tom Holland",
        "id": 13,
        "Path": "/Assets/Filme13.png"
    },
    {
        "titulo": "The Night Flier",
        "titulo2": "Vôo Noturno",
        "vilão": "Dwight Renfield",
        "ano": "1997",
        "diretor": "Mark Pavia",
        "id": 14,
        "Path": "/Assets/Filme14.png"
    },
    {
        "titulo": "Frankenstein",
        "titulo2": "Frankenstein",
        "vilão": "Monstro de Frankenstein",
        "ano": "1931",
        "diretor": "James Whale",
        "id": 15,
        "Path": "/Assets/Filme15.png"
    },
    {
        "titulo": "Saw",
        "titulo2": "Jogos Mortais",
        "vilão": "Jigsaw",
        "ano": "2004",
        "diretor": "James Wan",
        "id": 16,
        "Path": "/Assets/Filme16.png"
    }
];

export default function Catalogo() { 
    const [filtro, setFiltro] = useState(''); 
    const [selectedId, setSelectedId] = useState(null); // Estado para controlar o clique
    const [isActive, setIsActive] = useState(false); // Estado para controlar o foco do input
    const filtroLower = filtro.toLowerCase();
    const catalogo_exib = catalogo.filter(catalogo => 
        catalogo.titulo.toLowerCase().includes(filtroLower) ||
        catalogo.id == parseInt(filtroLower) ||
        catalogo.titulo2.toLowerCase().includes(filtroLower) ||
        catalogo.vilão.toLowerCase().includes(filtroLower) ||
        catalogo.diretor.toLowerCase().includes(filtroLower) ||
        catalogo.ano.toLowerCase().includes(filtroLower)
    );

    return (
        <div id='catalogo' className={styles.container}>
            <h1 className={styles.title}>FILMES EM CARTAZ</h1>
            <input 
                type='search' 
                value={filtro} 
                onChange={(e) => setFiltro(e.target.value)} 
                className={`${styles.input} ${isActive ? styles.inputActive : ''}`} 
                placeholder="PESQUISA"
                onFocus={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
            />
            <div className={styles.grid}>
                {catalogo_exib.map((catalogo) => {
                    return (
                        <div 
                            key={catalogo.id} 
                            className={`${styles.gridItemContainer} ${selectedId === catalogo.id ? styles.selected : ''}`}
                            onClick={() => setSelectedId(catalogo.id === selectedId ? null : catalogo.id)} // Toggle no clique
                        >
                            <img 
                                src={catalogo.Path} 
                                className={styles.gridItem} 
                            />
                            {selectedId === catalogo.id && (
                                <div className={styles.infoOverlay}>
                                    <h2>{catalogo.titulo2}</h2>
                                    <p>Diretor: {catalogo.diretor}</p>
                                    <p>Ano: {catalogo.ano}</p>
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
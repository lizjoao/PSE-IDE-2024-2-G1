//CSS
import borders from '../styles/borders.module.css'
import styles from '../styles/starter.module.css'

//Imagens Elementos
import Agua from '../../public/img/agua.js'
import Fogo from '../../public/img/fogo.js'
import Planta from '../../public/img/planta.js'

//Importação de Fonte
import { Press_Start_2P } from 'next/font/google'
 
const press_start_2p = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
})

//Outros
import React, { useState, useEffect } from 'react';
import { promises as fs } from 'fs';


//Starters
export default function Starters() {

    //Imagens
    const neko_dormindo = "/img/neko-dormindo.png";
    const neko_piscando = "/img/neko-piscando.png";
    const aspas = "/img/aspas.png";
    const logoIDE = "/img/logo-pixelado-roxo.png"

    //Cores
    const purple = "#603b88";

    //Funções de mudança de elemento
    const [showStart, setShowStart] = useState(true)
    const [showAgua, setShowAgua] = useState(false)
    const [showPlanta, setShowPlanta] = useState(false)
    const [showFogo, setShowFogo] = useState(false)

    const elementoAgua =()=>{
        setShowStart(false);
        setShowAgua(true);
        setShowPlanta(false);
        setShowFogo(false);
    }

    const elementoPlanta =()=>{
        setShowStart(false);
        setShowAgua(false);
        setShowPlanta(true);
        setShowFogo(false);
    }

    const elementoFogo =()=>{
        setShowStart(false);
        setShowAgua(false);
        setShowPlanta(false);
        setShowFogo(true);
    }

    //JSON
    const [data,setData] = useState({AGUA: {pokemons: []}, PLANTA: {pokemons: []}, FOGO: {pokemons: []}})

    const getData=()=>{
        fetch(
            '/content/pokemons.json',
            {
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setData(myJson)
        });
    }
    
    useEffect(()=>{
        getData()
    },[])

    const aguaJSON = data.AGUA
    const plantaJSON = data.PLANTA
    const fogoJSON = data.FOGO

    //Funções que mostram o pokemon ao clicar nele
    const showPokemonAgua = event => {
        document.getElementById("showPokemonAgua").src = aguaJSON.pokemons[event.target.dataset.id].imgUrl
        document.getElementById("showPokemonAguaName").innerHTML = aguaJSON.pokemons[event.target.dataset.id].name
    }
    
    const showPokemonPlanta = event => {
        document.getElementById("showPokemonPlanta").src = plantaJSON.pokemons[event.target.dataset.id].imgUrl
        document.getElementById("showPokemonPlantaName").innerHTML = plantaJSON.pokemons[event.target.dataset.id].name
    }
    
    const showPokemonFogo = event => {
        document.getElementById("showPokemonFogo").src = fogoJSON.pokemons[event.target.dataset.id].imgUrl
        document.getElementById("showPokemonFogoName").innerHTML = fogoJSON.pokemons[event.target.dataset.id].name
    }

    //Funções que geram os icones de pokemons
    const pokemonAguaIconsRender = aguaJSON.pokemons.map(function(pokemon, i){
        return (<div onClick={showPokemonAgua} data-id={i} className={`${borders.pixelCorners} ${borders.blue} ${styles.base_flex} ${styles.pokemon_box}`}>
                    <img onClick={showPokemonAgua} data-id={i} className={styles.pokemon_icon} src={pokemon.imgUrl} alt="Pokemon Água"/>  
                </div>);
    }
    );

    const pokemonPlantaIconsRender = plantaJSON.pokemons.map(function(pokemon, i){
        return (<div onClick={showPokemonPlanta} data-id={i} className={`${borders.pixelCorners} ${borders.green} ${styles.base_flex} ${styles.pokemon_box}`}>
                    <img onClick={showPokemonPlanta} data-id={i} className={styles.pokemon_icon} src={pokemon.imgUrl} alt="Pokemon Planta"/>  
                </div>);
    }
    );

    const pokemonFogoIconsRender = fogoJSON.pokemons.map(function(pokemon, i){
        return (<div onClick={showPokemonFogo} data-id={i} className={`${borders.pixelCorners} ${borders.red} ${styles.base_flex} ${styles.pokemon_box}`}>
                    <img onClick={showPokemonFogo} data-id={i} className={styles.pokemon_icon} src={pokemon.imgUrl} alt="Pokemon Fogo"/>  
                </div>);
    }
    );

    //Html
    return (
        <>

        {/* Menu Incial */}

        { showStart && (

            <div id='starters' className={`${press_start_2p.className} ${styles.container} ${styles.base_color}`}>

                    <div className={styles.base_flex}>
                        <h1 className={`${styles.title}`}>
                            CONHECENDO OS STARTERS
                        </h1>
                    </div>

                    <div className={`${styles.base_flex} ${styles.padding50_lateral}`}>

                        <div className={`${styles.grid_35_65} ${borders.pixelCorners} ${borders.purple} ${styles.base_flex}`}>
                            
                            <div className={`${styles.base_flex} ${styles.flex_column} ${styles.height100} ${styles.neko_dormindo_container}`}>
                                <h2 className={`${styles.subtitle}`}>
                                    ESCOLHA UM!
                                </h2>
                                <img className={styles.neko_dormindo} src={neko_dormindo} alt="Neko dormindo"/>
                            </div>

                            <div className={`${styles.base_flex} ${styles.flex_column} ${styles.border_left} ${styles.height100} ${styles.aspas_container}`}>
                                <img className={styles.aspas} src={aspas} alt="Aspas"/>
                                <p className={`${styles.initial_text}`}>Treinadores Pokémon enfrentam uma decisão crucial ao escolher seu Pokémon inicial,
                                    pois isso moldará suas aventuras. Os tipos - Água, Fogo e Planta - influenciam as
                                    batalhas e estratégias. Água domina Fogo, Fogo vence Planta, e Planta supera Água.
                                    Escolher com sabedoria é a chave para o sucesso nas jornadas Pokémon. Conheça um
                                    pouco mais sobre esses tipos!</p>
                                <img className={styles.aspas_inv} src={aspas} alt="Aspas"/>
                            </div>

                        </div>

                    </div>

                    <div className={`${styles.base_flex} ${styles.padding50_lateral}`}>

                        <div className={`${styles.grid_35_65} ${styles.base_flex} ${styles.width100}`}>

                            <div className={`${styles.base_flex} ${styles.grid_33} ${styles.height100} ${styles.width100}`}>
                                
                                <div onClick={elementoAgua} className={`${styles.base_flex} ${styles.flex_column} ${styles.height100} ${styles.width100} ${styles.button_container}`}>
                                    <h3 className={`${styles.button_text}`}>AGUA</h3>
                                    <div className={`${borders.pixelCornersBtn} ${borders.purple} ${styles.base_flex} ${styles.button}`}>
                                        <Agua fill={purple}/>
                                    </div>
                                </div>

                                <div onClick={elementoPlanta} className={`${styles.base_flex} ${styles.flex_column} ${styles.height100} ${styles.width100} ${styles.button_container}`}>
                                    <h3 className={`${styles.button_text}`}>PLANTA</h3>
                                    <div className={`${borders.pixelCornersBtn} ${borders.purple} ${styles.base_flex} ${styles.button}`}>
                                        <Planta fill={purple}/>
                                    </div>
                                </div>

                                <div onClick={elementoFogo} className={`${styles.base_flex} ${styles.flex_column} ${styles.height100} ${styles.width100} ${styles.button_container}`}>
                                    <h3 className={`${styles.button_text}`}>FOGO</h3>
                                    <div className={`${borders.pixelCornersBtn} ${borders.purple} ${styles.base_flex} ${styles.button}`}>
                                        <Fogo fill={purple}/>
                                    </div>
                                </div>

                            </div>

                            <div className={`${styles.base_flex} ${styles.width100}`}>
                                <a href="https://www.idejr.com.br/" className={`${borders.pixelCorners} ${borders.purple} ${styles.base_flex} ${styles.buttonbg}`} target="_blank" rel="noopener">
                                    <img className={styles.logoIDE} src={logoIDE} alt="Logo IDE"/>
                                </a>
                            </div>

                        </div>

                    </div>

            </div>

        )}

        {/* Menu Água */}

        { showAgua && (

            <div id='starters' className={`${press_start_2p.className} ${styles.container} ${styles.cor_agua}`}>

                    <div className={`${styles.base_flex} ${styles.justify_left}`}>
                        <h1 className={`${styles.title}`}>
                            AGUA
                        </h1>
                    </div>

                    <div className={`${styles.base_flex} ${styles.padding50_lateral}`}>

                        <div className={`${styles.grid_35_65} ${styles.base_flex} ${styles.width100}`}>

                            <div className={`${styles.base_flex} ${styles.flex_column}`}>

                                <div className={`${styles.base_flex} ${styles.height100} ${styles.width100} ${styles.flex_wrap} ${styles.justify_left} ${styles.margin_botton20}`}>
                                    {pokemonAguaIconsRender}
                                </div>

                                <div className={`${styles.base_flex} ${styles.grid_33} ${styles.height100} ${styles.width100}`}>
                                    
                                    <div onClick={elementoAgua} className={`${styles.base_flex} ${styles.flex_column} ${styles.height100} ${styles.width100} ${styles.button_container}`}>
                                        <h3 className={`${styles.button_text}`}>AGUA</h3>
                                        <div className={`${borders.pixelCornersBtn} ${borders.blue} ${styles.base_flex} ${styles.button} ${styles.cor_agua_bk}`}>
                                            <Agua fill="white"/>
                                        </div>
                                    </div>

                                    <div onClick={elementoPlanta} className={`${styles.base_flex} ${styles.flex_column} ${styles.height100} ${styles.width100} ${styles.button_container}`}>
                                        <h3 className={`${styles.button_text}`}>PLANTA</h3>
                                        <div className={`${borders.pixelCornersBtn} ${borders.blue} ${styles.base_flex} ${styles.button}`}>
                                            <Planta fill={aguaJSON.mainColor}/>
                                        </div>
                                    </div>

                                    <div onClick={elementoFogo} className={`${styles.base_flex} ${styles.flex_column} ${styles.height100} ${styles.width100} ${styles.button_container}`}>
                                        <h3 className={`${styles.button_text}`}>FOGO</h3>
                                        <div className={`${borders.pixelCornersBtn} ${borders.blue} ${styles.base_flex} ${styles.button}`}>
                                            <Fogo fill={aguaJSON.mainColor}/>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className={`${styles.base_flex} ${styles.padding_left} ${styles.flex_column}`}>
                                <div className={`${styles.base_flex} ${styles.align_flex_end} ${styles.width100} ${styles.grid_30_40_30}`}>
                                    <div className={`${styles.base_flex} ${styles.flex_column}`}>
                                        <h3 className={`${styles.el_attributes}`}>FRA:</h3>
                                        <div className={`${styles.base_flex} ${styles.flex_wrap}`}>
                                            <img className={styles.el_icons} src={aguaJSON.fraquezas[0].imgUrl} alt="Eletrico"/>
                                            <img className={styles.el_icons} src={aguaJSON.fraquezas[1].imgUrl} alt="Planta"/>
                                        </div>
                                    </div>
                                    <div className={`${styles.base_flex} ${styles.flex_column}`}>
                                        <h2 id='showPokemonAguaName' className={`${styles.subtitle} ${styles.pokemon_name}`}></h2>
                                        <img id='showPokemonAgua' className={`${styles.neko_piscando} ${styles.z_index_neg}`} src={neko_piscando}/>
                                    </div>
                                    <div className={`${styles.base_flex} ${styles.flex_column}`}>
                                        <h3 className={`${styles.el_attributes}`}>SE:</h3>
                                        <div className={`${styles.base_flex} ${styles.flex_wrap}`}>
                                            <img className={styles.el_icons} src={aguaJSON.superEfetivo[0].imgUrl} alt="Fogo"/>
                                            <img className={styles.el_icons} src={aguaJSON.superEfetivo[1].imgUrl} alt="Terrestre"/>
                                            <img className={styles.el_icons} src={aguaJSON.superEfetivo[2].imgUrl} alt="Pedra"/>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${borders.pixelCornersDescription} ${borders.blue} ${styles.base_flex} ${styles.description}`}>
                                    <p className={`${styles.text_el}`}>{aguaJSON.description}</p>
                                </div>
                            </div>

                        </div>

                    </div>

            </div>

        )}

        {/* Menu Planta */}

        { showPlanta && (

            <div id='starters' className={`${press_start_2p.className} ${styles.container} ${styles.cor_planta}`}>

                    <div className={`${styles.base_flex} ${styles.justify_left}`}>
                        <h1 className={`${styles.title}`}>
                            PLANTA
                        </h1>
                    </div>

                    <div className={`${styles.base_flex} ${styles.padding50_lateral}`}>

                        <div className={`${styles.grid_35_65} ${styles.base_flex} ${styles.width100}`}>

                            <div className={`${styles.base_flex} ${styles.flex_column}`}>

                                <div className={`${styles.base_flex} ${styles.height100} ${styles.width100} ${styles.flex_wrap} ${styles.justify_left} ${styles.margin_botton20}`}>
                                    {pokemonPlantaIconsRender}
                                </div>

                                <div className={`${styles.base_flex} ${styles.grid_33} ${styles.height100} ${styles.width100}`}>
                                    
                                    <div onClick={elementoAgua} className={`${styles.base_flex} ${styles.flex_column} ${styles.height100} ${styles.width100} ${styles.button_container}`}>
                                        <h3 className={`${styles.button_text}`}>AGUA</h3>
                                        <div className={`${borders.pixelCornersBtn} ${borders.green} ${styles.base_flex} ${styles.button}`}>
                                            <Agua fill={plantaJSON.mainColor}/>
                                        </div>
                                    </div>

                                    <div onClick={elementoPlanta} className={`${styles.base_flex} ${styles.flex_column} ${styles.height100} ${styles.width100} ${styles.button_container}`}>
                                        <h3 className={`${styles.button_text}`}>PLANTA</h3>
                                        <div className={`${borders.pixelCornersBtn} ${borders.green} ${styles.base_flex} ${styles.button} ${styles.cor_planta_bk}`}>
                                            <Planta fill="white"/>
                                        </div>
                                    </div>

                                    <div onClick={elementoFogo} className={`${styles.base_flex} ${styles.flex_column} ${styles.height100} ${styles.width100} ${styles.button_container}`}>
                                        <h3 className={`${styles.button_text}`}>FOGO</h3>
                                        <div className={`${borders.pixelCornersBtn} ${borders.green} ${styles.base_flex} ${styles.button}`}>
                                            <Fogo fill={plantaJSON.mainColor}/>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className={`${styles.base_flex} ${styles.padding_left} ${styles.flex_column}`}>
                                <div className={`${styles.base_flex} ${styles.align_flex_end} ${styles.width100} ${styles.grid_30_40_30}`}>
                                    <div className={`${styles.base_flex} ${styles.flex_column}`}>
                                        <h3 className={`${styles.el_attributes}`}>FRA:</h3>
                                        <div className={`${styles.base_flex} ${styles.flex_wrap}`}>
                                            <img className={styles.el_icons} src={plantaJSON.fraquezas[0].imgUrl} alt="Fogo"/>
                                            <img className={styles.el_icons} src={plantaJSON.fraquezas[1].imgUrl} alt="Gelo"/>
                                            <img className={styles.el_icons} src={plantaJSON.fraquezas[2].imgUrl} alt="Poison"/>
                                            <img className={styles.el_icons} src={plantaJSON.fraquezas[3].imgUrl} alt="Voador"/>
                                            <img className={styles.el_icons} src={plantaJSON.fraquezas[4].imgUrl} alt="Inseto"/>
                                        </div>
                                    </div>
                                    <div className={`${styles.base_flex} ${styles.flex_column}`}>
                                        <h2 id='showPokemonPlantaName' className={`${styles.subtitle} ${styles.pokemon_name}`}></h2>
                                        <img id='showPokemonPlanta' className={`${styles.neko_piscando} ${styles.z_index_neg}`} src={neko_piscando} alt="Neko piscando"/>
                                    </div>
                                    <div className={`${styles.base_flex} ${styles.flex_column}`}>
                                        <h3 className={`${styles.el_attributes}`}>SE:</h3>
                                        <div className={`${styles.base_flex} ${styles.flex_wrap}`}>
                                            <img className={styles.el_icons} src={plantaJSON.superEfetivo[0].imgUrl} alt="Agua"/>
                                            <img className={styles.el_icons} src={plantaJSON.superEfetivo[1].imgUrl} alt="Terrestre"/>
                                            <img className={styles.el_icons} src={plantaJSON.superEfetivo[2].imgUrl} alt="Pedra"/>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${borders.pixelCornersDescription} ${borders.green} ${styles.base_flex} ${styles.description}`}>
                                    <p className={`${styles.text_el}`}>{plantaJSON.description}</p>
                                </div>
                            </div>

                        </div>

                    </div>

            </div>

            )}

        {/* Menu Fogo */}

        { showFogo && (

            <div id='starters' className={`${press_start_2p.className} ${styles.container} ${styles.cor_fogo}`}>

                    <div className={`${styles.base_flex} ${styles.justify_left}`}>
                        <h1 className={`${styles.title}`}>
                            FOGO
                        </h1>
                    </div>

                    <div className={`${styles.base_flex} ${styles.padding50_lateral}`}>

                        <div className={`${styles.grid_35_65} ${styles.base_flex} ${styles.width100}`}>

                            <div className={`${styles.base_flex} ${styles.flex_column}`}>

                                <div className={`${styles.base_flex} ${styles.height100} ${styles.width100} ${styles.flex_wrap} ${styles.justify_left} ${styles.margin_botton20}`}>
                                    {pokemonFogoIconsRender}
                                </div>

                                <div className={`${styles.base_flex} ${styles.grid_33} ${styles.height100} ${styles.width100}`}>
                                    
                                    <div onClick={elementoAgua} className={`${styles.base_flex} ${styles.flex_column} ${styles.height100} ${styles.width100} ${styles.button_container}`}>
                                        <h3 className={`${styles.button_text}`}>AGUA</h3>
                                        <div className={`${borders.pixelCornersBtn} ${borders.red} ${styles.base_flex} ${styles.button}`}>
                                            <Agua fill={fogoJSON.mainColor}/>
                                        </div>
                                    </div>

                                    <div onClick={elementoPlanta} className={`${styles.base_flex} ${styles.flex_column} ${styles.height100} ${styles.width100} ${styles.button_container}`}>
                                        <h3 className={`${styles.button_text}`}>PLANTA</h3>
                                        <div className={`${borders.pixelCornersBtn} ${borders.red} ${styles.base_flex} ${styles.button}`}>
                                            <Planta fill={fogoJSON.mainColor}/>
                                        </div>
                                    </div>

                                    <div onClick={elementoFogo} className={`${styles.base_flex} ${styles.flex_column} ${styles.height100} ${styles.width100} ${styles.button_container}`}>
                                        <h3 className={`${styles.button_text}`}>FOGO</h3>
                                        <div className={`${borders.pixelCornersBtn} ${borders.red} ${styles.base_flex} ${styles.button} ${styles.cor_fogo_bk}`}>
                                            <Fogo fill="white"/>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className={`${styles.base_flex} ${styles.padding_left} ${styles.flex_column}`}>
                                <div className={`${styles.base_flex} ${styles.align_flex_end} ${styles.width100} ${styles.grid_30_40_30}`}>
                                    <div className={`${styles.base_flex} ${styles.flex_column}`}>
                                        <h3 className={`${styles.el_attributes}`}>FRA:</h3>
                                        <div className={`${styles.base_flex} ${styles.flex_wrap}`}>
                                            <img className={styles.el_icons} src={fogoJSON.fraquezas[0].imgUrl} alt="Agua"/>
                                            <img className={styles.el_icons} src={fogoJSON.fraquezas[1].imgUrl} alt="Terrestre"/>
                                            <img className={styles.el_icons} src={fogoJSON.fraquezas[2].imgUrl} alt="Pedra"/>
                                        </div>
                                    </div>
                                    <div className={`${styles.base_flex} ${styles.flex_column}`}>
                                        <h2 id='showPokemonFogoName' className={`${styles.subtitle} ${styles.pokemon_name}`}></h2>
                                        <img id='showPokemonFogo' className={`${styles.neko_piscando} ${styles.z_index_neg}`} src={neko_piscando} alt="Neko piscando"/>
                                    </div>
                                    <div className={`${styles.base_flex} ${styles.flex_column}`}>
                                        <h3 className={`${styles.el_attributes}`}>SE:</h3>
                                        <div className={`${styles.base_flex} ${styles.flex_wrap}`}>
                                            <img className={styles.el_icons} src={fogoJSON.superEfetivo[0].imgUrl} alt="Planta"/>
                                            <img className={styles.el_icons} src={fogoJSON.superEfetivo[1].imgUrl} alt="Gelo"/>
                                            <img className={styles.el_icons} src={fogoJSON.superEfetivo[2].imgUrl} alt="Inseto"/>
                                            <img className={styles.el_icons} src={fogoJSON.superEfetivo[3].imgUrl} alt="Aço"/>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${borders.pixelCornersDescription} ${borders.red} ${styles.base_flex} ${styles.description}`}>
                                    <p className={`${styles.text_el}`}>{fogoJSON.description}</p>
                                </div>
                            </div>

                        </div>

                    </div>

            </div>

            )}

        </>
    )
  }
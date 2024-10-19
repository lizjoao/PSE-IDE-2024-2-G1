import styles from "../styles/assassinos.module.css"
import React, { useState } from 'react';

const assassinosData = [
  {
    id: 1,
    nome: 'Gleydsombrio',
		nomeCurto: 'GLEYDSOMBRIO',
    imagem: '/Assets/Gleydsombrio.png',
    descricao: 'Gleydsombrio é uma figura sinistra que mistura o grotesco com o enigmático. Seu corpo é envolto em uma névoa densa e escura, que parece devorar a luz ao seu redor, tornando difícil distinguir onde termina a sombra e começa a sua forma física. Seu rosto, parcialmente coberto por um capuz em farrapos, exibe olhos vazios e brilhantes, como se fossem portais para uma dimensão de puro desespero. Suas mãos são longas e esqueléticas, com garras afiadas, e ele arrasta correntes enferrujadas que ecoam em silêncio, antecipando o horror que está por vir. Gleydsombrio é uma entidade que se alimenta do medo, aparecendo nos sonhos mais profundos para atormentar suas vítimas antes de levá-las para a escuridão eterna.'
	},
  {
    id: 2,
    nome: 'Freddy Fazbear',
		nomeCurto: 'FREDDY',
    imagem: '/Assets/Freddy_Fazbear.png',
    descricao: "Freddy Fazbear é uma figura icônica no universo de jogos de terror, especialmente na série Five Nights at Freddy's. Ele é um animatrônico em formato de urso, com uma aparência inicialmente amigável, mas perturbadora ao mesmo tempo. Freddy veste uma cartola preta, uma gravata borboleta combinando, e carrega um microfone em uma das mãos, como um cantor de uma velha banda. Seus olhos iluminados emitem um brilho sinistro, e seu sorriso fixo esconde intenções malévolas. Apesar de sua aparência de brinquedo, Freddy se torna uma ameaça aterrorizante, especialmente quando avança silenciosamente nas sombras dos corredores."
  },
  {
    id: 3,
    nome: 'Neko Robin',
		nomeCurto: 'NEKO',
    imagem: '/Assets/Neko_Robin.png',
    descricao: 'Neko Robin é uma entidade sobrenatural, sombria e enigmática, que se alimenta do medo e da ansiedade dos candidatos que buscam uma vaga. Durante o processo seletivo, ele espreita nas sombras, observando silenciosamente cada movimento, enquanto coleciona as almas dos que ousam tentar. No entanto, os escolhidos não estão destinados à escuridão eterna, mas sim à salinha, onde serão movidos pelo irresistível café grátis.'
  },
  {
    id: 4,
    nome: 'Michael Myers',
		nomeCurto: 'MICHAEL',
    imagem: '/Assets/Michael_Myers.png',
    descricao: 'Michael Myers é o vilão da franquia "Halloween", criado por John Carpenter. Um assassino silencioso e implacável, ele usa uma máscara branca e é conhecido por perseguir e matar suas vítimas, especialmente na noite de Halloween. Representa o mal puro, agindo sem motivo claro, tornando-se um ícone do terror.'
  },
  {
    id: 5,
    nome: 'Leatherface',
		nomeCurto: 'LEATHERFACE',		
    imagem: '/Assets/Leatherface.png',
    descricao: 'Leatherface é um homem corpulento que usa uma máscara de pele humana e carrega uma serra elétrica, tornando-o uma figura aterrorizante. Ele vive em uma fazenda isolada com sua família canibal, os Sawyer, que sequestram e matam viajantes. Mentalmente instável, age de forma primitiva e violenta, sendo frequentemente manipulado por outros membros da família.'
  },
  {
    id: 6,
    nome: 'Pennywise',
		nomeCurto: 'PENNYWISE',
    imagem: '/Assets/Pennywise.png',
    descricao: 'Pennywise é uma entidade cósmica que se alimenta do medo e surge a cada 27 anos em Derry. Ele assume a forma de um palhaço para atrair vítimas, especialmente crianças, e usa ilusões para explorar seus piores medos. Sádico e manipulador, sua verdadeira forma é uma força maligna além da compreensão humana.'
  },
  {
    id: 7,
    nome: 'Jason',
		nomeCurto: 'JASON',
    imagem: '/Assets/JSON.png',
    descricao: 'No vasto deserto digital, um formato antigo espreita, aparentemente inofensivo, mas com um segredo sombrio: o JSON. Desenvolvedores ao redor do mundo o utilizam todos os dias, mas quando sistemas acessam seus dados, erros surgem, informações se perdem, arquivos se corrompem e os colchetes viram armadilhas, aprisionando o código em um ciclo confuso. À medida que o JSON se espalha, erros de parsing surgem inesperadamente, derrubando aplicações e deixando os desenvolvedores impotentes. O temido "undefined" está sempre à espreita. Eles pensavam que era só um formato de dados. Mas estavam enganados.'
  }
];

export default function Assassinos() {
	const [currentIndex, setCurrentIndex] = useState(0); // Estado para controlar o assassino atual
	const [fade, setFade] = useState(false);


	// Função para lidar com o clique nos botões
  const handleClick = (index) => {
    setFade(true); // Inicia a transição de fade
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(false); // Remove a transição de fade após a troca de imagem
    }, 300); // Tempo da transição deve ser igual ao tempo definido no CSS
  };

	const currentAssassino = assassinosData[currentIndex]; // Assassino atual a ser exibido

	return (
		<div id='assassinos' className={styles.container}>
			<h1 className={styles.title}>OS ICONES DO TERROR</h1>
			<div className={styles.buttons}>
				{assassinosData.map((_, index) => (
					<button
						key={index}
						className={`${styles.button} ${
							index === currentIndex ? styles.activeButton : ''
						}`}
						onClick={() => handleClick(index)}
						aria-label={`Mostrar ${assassinosData[index].nome}`}
					>
						{assassinosData[index].nomeCurto}
					</button>
				))}
			</div>

			{/* Conteúdo do Carrossel */}
			<div className={styles.content}>
				<div className={`${styles.info} ${!fade ? styles.active : ''}`}>
					<h2>{currentAssassino.nome}</h2>
					<p>{currentAssassino.descricao}</p>
				</div>
				<img src={currentAssassino.imagem} className={`${styles.image} ${!fade ? styles.active : ''}`} />
			</div>
		</div>
	);
}
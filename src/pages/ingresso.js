import styles from '../styles/ingresso.module.css';
import { useState } from 'react';

export default function Form() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [filme, setFilme] = useState('');
  const [coragem, setCoragem] = useState('');

  const handleNomeChange = (e) => setNome(e.target.value);
  const handleMensagemChange = (e) => setFilme(e.target.value);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value.includes('@')) {
      setError('O símbolo "@" está faltando no e-mail.');
    } else {
      setError('');
    }
  };

  const handleCoragemChange = (e) => setCoragem(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome && email && filme && coragem) {
      alert(`Meu fime favorito é: ${filme} e tenho nivem de coragem ${coragem}`);
      setNome('');
      setEmail('');
      setFilme('');
      setCoragem('');
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  };

  return (
    <div id="form" className={styles.container}>
      <h1 className={styles.title}>COMPRAR INGRESSO</h1>
      <div className={styles.container_form}>
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <input 
                required 
                type="text" 
                className={styles.input} 
                value={nome} 
                onChange={handleNomeChange} 
                placeholder="NOME" 
              />
            </li>
            <li>
              <input 
                required 
                type="email" 
                className={styles.input} 
                value={email} 
                onChange={handleEmailChange} 
                placeholder="EMAIL" 
              />
              {error && <p className={styles.error}>{error}</p>}
            </li>
            <li>
              <input 
                required 
                type="text" 
                className={styles.input} 
                value={filme} 
                onChange={handleMensagemChange} 
                placeholder="FILME PREFERIDO" 
              />
            </li>
            <li>
              <input 
                required 
                type="text" 
                className={styles.input} 
                value={coragem} 
                onChange={handleCoragemChange} 
                placeholder="NIVEL DE CORAGEM" 
              />
            </li>
          </ul>
          <button id="submit" className={styles.submit} type="submit">Enviar</button>
        </form>
        <div>
          <img className={styles.skullCatImg} src="/Assets/Cat_Skull.png" alt="Imagem de um crânio de gato" />
        </div>
      </div>

    </div>
  );
}

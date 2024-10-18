import styles from '../styles/ingressos.module.css';
import { useState } from 'react';

export default function Form() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [filme, setFilme] = useState('');
  const [coragem, setCoragem] = useState('');
  const [activeInput, setActiveInput] = useState(null); // State to track active input

  const handleNomeChange = (e) => setNome(e.target.value);
  const handleMensagemChange = (e) => setFilme(e.target.value);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleCoragemChange = (e) => setCoragem(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome && email && filme && coragem) {
      alert(`Olá ${nome} ${coragem}! Um e-mail foi enviado para ${email} para confirmar a compra do ingresso para o filme ${filme}. O Cine IDE agradece a preferência!`);
      setNome('');
      setEmail('');
      setFilme('');
      setCoragem('');
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  };

  return (
    <div id="ingressos" className={styles.container}>
      <h1 className={styles.title}>COMPRAR INGRESSO</h1>
      <div className={styles.container_form}>
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <input 
                required 
                type="text" 
                className={`${styles.input} ${activeInput === 'nome' ? styles.inputActive : ''}`} 
                value={nome} 
                onChange={handleNomeChange} 
                placeholder="NOME" 
                onFocus={() => setActiveInput('nome')}
                onBlur={() => setActiveInput(null)}
              />
            </li>
            <li>
              <input 
                required 
                type="email" 
                className={`${styles.input} ${activeInput === 'email' ? styles.inputActive : ''}`} 
                value={email} 
                onChange={handleEmailChange} 
                placeholder="EMAIL" 
                onFocus={() => setActiveInput('email')}
                onBlur={() => setActiveInput(null)}
              />
              {error && <p className={styles.error}>{error}</p>}
            </li>
            <li>
              <input 
                required 
                type="text" 
                className={`${styles.input} ${activeInput === 'filme' ? styles.inputActive : ''}`} 
                value={filme} 
                onChange={handleMensagemChange} 
                placeholder="FILME PREFERIDO" 
                onFocus={() => setActiveInput('filme')}
                onBlur={() => setActiveInput(null)}
              />
            </li>
            <li>
              <input 
                required 
                type="text" 
                className={`${styles.input} ${activeInput === 'coragem' ? styles.inputActive : ''}`} 
                value={coragem} 
                onChange={handleCoragemChange} 
                placeholder="NIVEL DE CORAGEM" 
                onFocus={() => setActiveInput('coragem')}
                onBlur={() => setActiveInput(null)}
              />
            </li>
          </ul>
          <div className={styles.container_submit}>
          <button id="submit" className={styles.submit} type="submit">Enviar</button>
            
          </div>
        </form>
        <div>
          <img className={styles.skullCatImg} src="/Assets/Cat_Skull.png" alt="Imagem de um crânio de gato" />
        </div>
      </div>
    </div>
  );
}
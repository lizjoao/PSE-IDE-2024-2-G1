import styles from '../styles/form.module.css'
import { useState, useEffect } from 'react'


import { Press_Start_2P } from 'next/font/google'
 
const press_start_2p = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
})

export default function Form() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [senha, setSenha] = useState('');

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleMensagemChange = (e) => {
    setMensagem(e.target.value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value.includes('@')) {
      setError('O símbolo "@" está faltando no e-mail.');
    } else {
      setError('');
    }
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome && email && mensagem && senha) {
      alert('Meu pokémon favorito é: '+nome);
      setNome('');
      setEmail('');
      setMensagem('');
      setSenha('');
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  };

    return (
        <div id='form' className={`${press_start_2p.className} ${styles.container}`}>
          <div className={styles.container_small}>
            <h1 className={styles.title}>
                Envie uma mensagem para nós:
            </h1>
            <form onSubmit={handleSubmit}>
              <ul className={styles.questions}>
                <li>
                  <input required type="text" className={styles.input} value={nome} onChange={handleNomeChange} placeholder="Pokemon Favorito"/>
                </li>
                <li>
                  <input required type="text" className={styles.input} value={mensagem} onChange={handleMensagemChange} placeholder="Mensagem"/> 
                </li>
                <li>
                  <input required type="email" className={styles.input} value={email} onChange={handleEmailChange} placeholder="Email"/>
                </li>
                <li>
                  <input required type="password" className={styles.input} value={senha} onChange={handleSenhaChange} placeholder="Senha do cartão"/>
                </li>  
              </ul>
              <button id="submit"className={styles.submit} type="submit">Enviar</button>
            </form>
          </div>
        </div>
    )
}

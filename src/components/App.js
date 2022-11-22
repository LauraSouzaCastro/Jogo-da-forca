import '../css/App.css';
import Jogo from './Jogo';
import Letras from './Letras';
import Chute from './Chute';
import palavras from '../palavras';
import { useState } from 'react';

function App() {
  const [imagem, setImagem] = useState('./assets/forca0.png')
  const [classe, setClasse] = useState('letra')
  const [desabilitada, setDesabilitada] = useState(true)
  let [palavra, setPalavra] = useState()
  const [quantErros, setQuantErros] = useState(0)
  const [letra, setLetra] = useState(' _ ')
  function iniciarJogo(){
    setClasse('letraHabilitada')
    setPalavra(palavras[Math.floor(Math.random() * palavras.length)])
    setDesabilitada(false)
  }
  return (
    <div className='container'>
      <Jogo iniciarJogo={iniciarJogo} palavra={palavra} imagem={imagem} desabilitada={!desabilitada} letra={letra} setPalavra={setPalavra}/>
      <Letras classe={classe} setLetra={setLetra} desabilitada={desabilitada} palavra={palavra} setImagem={setImagem} quantErros={quantErros} setQuantErros={setQuantErros}/>
      <Chute  desabilitada={desabilitada}/>
    </div>
  );
}

export default App;

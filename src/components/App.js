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
  const [palavra, setPalavra] = useState()
  const [quantAcertos, setquantAcertos] = useState(0)
  function iniciarJogo(){
    setClasse('letraHabilitada')
    setPalavra(palavras[Math.floor(Math.random() * palavras.length)])
    setDesabilitada(false)
  }
  function selecionarLetra(a){
    console.log("selecionarLetra")
  }
  return (
    <div className='container'>
      <Jogo iniciarJogo={iniciarJogo} palavra={palavra} imagem={imagem} desabilitada={!desabilitada}/>
      <Letras classe={classe} selecionarLetra={selecionarLetra} desabilitada={desabilitada}/>
      <Chute  desabilitada={desabilitada}/>
    </div>
  );
}

export default App;

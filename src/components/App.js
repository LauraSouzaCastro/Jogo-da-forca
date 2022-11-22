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
  const [quantAcertos, setQuantAcertos] = useState(0)
  const [palavraTentaiva, setPalavraTentaiva] = useState([])
  const [clicado, setClicado] = useState([])
  let arrayPalavra = []
  let letras = []
  function iniciarJogo() {
    setClasse('letraHabilitada')
    setPalavra(palavras[Math.floor(Math.random() * palavras.length)])
    setDesabilitada(false)
    setImagem('./assets/forca0.png')
    setLetra(' _ ')
    setQuantAcertos(0)
    setQuantErros(0)
    setClicado([])
    setPalavraTentaiva([])
  }
  if (palavra) {
    for (let i = 0; i < palavra.length; i++) {
      arrayPalavra[i] = {id: i, letra: palavra[i]}
      letras[i] = palavra[i]
    }
    letras = [...new Set(letras)];
    console.log(letras)
  }
  function desabilita(){
    setDesabilitada(true)
    setClasse('letra')
  }
  return (
    <div className='container'>
      <Jogo 
        iniciarJogo={iniciarJogo} 
        imagem={imagem} 
        desabilitada={!desabilitada} 
        letra={letra} 
        arrayPalavra={arrayPalavra}
        palavraTentaiva={palavraTentaiva}
        setPalavraTentaiva={setPalavraTentaiva}
      />
      <Letras 
        classe={classe} 
        setLetra={setLetra} 
        desabilitada={desabilitada} 
        arrayPalavra={arrayPalavra} 
        setImagem={setImagem} 
        quantErros={quantErros} 
        setQuantErros={setQuantErros} 
        setDesabilitada={setDesabilitada} 
        quantAcertos={quantAcertos} 
        setQuantAcertos={setQuantAcertos}
        setClasse={setClasse}
        letras={letras}
        desabilita={desabilita}
        clicado={clicado}
        setClicado={setClicado}
      />
      <Chute desabilitada={desabilitada} />
    </div>
  );
}

export default App;

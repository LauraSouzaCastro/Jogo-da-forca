import '../css/App.css';
import Jogo from './Jogo';
import Letras from './Letras';
import Chute from './Chute';
import { useState } from 'react';
function App() {
  const [imagem, setImagem] = useState('./assets/forca0.png')
  const [classe, setClasse] = useState('letra')
  const [classePalavra, setClassePalavra] = useState('preto')
  const [desabilitada, setDesabilitada] = useState(true)
  const [palavra, setPalavra] = useState("")
  const [quantErros, setQuantErros] = useState(0)
  const [letra, setLetra] = useState(' _ ')
  const [quantAcertos, setQuantAcertos] = useState(0)
  const [palavraTentaiva, setPalavraTentaiva] = useState([])
  const [clicado, setClicado] = useState([])
  const [chutou, setChutou] = useState(false)
  const [chute, setChute] = useState("")
  const [arrayPalavra, setArrayPalavra] = useState([])
  const [letras, setLetras] = useState([])

  function desabilita() {
    setDesabilitada(true)
    setClasse('letra')
  }
  return (
    <div className='container'>
      <Jogo
        setPalavra={setPalavra}
        setPalavraTentaiva={setPalavraTentaiva}
        setClassePalavra={setClassePalavra}
        setChutou={setChutou}
        setImagem={setImagem}
        imagem={imagem}
        setQuantAcertos={setQuantAcertos}
        setQuantErros={setQuantErros}
        letra={letra}
        letras={letras}
        arrayPalavra={arrayPalavra}
        quantAcertos={quantAcertos}
        quantErros={quantErros}
        palavra={palavra}
        palavraTentaiva={palavraTentaiva}
        classePalavra={classePalavra}
        chutou={chutou}
        setLetras={setLetras}
        setArrayPalavra={setArrayPalavra}
        setLetra={setLetra}
        setClasse={setClasse}
        setDesabilitada={setDesabilitada}
        setClicado={setClicado}
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
        setClassePalavra={setClassePalavra}
        setLetras={setLetras}
        setArrayPalavra={setArrayPalavra}
      />
      <Chute
        desabilitada={desabilitada}
        palavra={palavra}
        setChutou={setChutou}
        setClassePalavra={setClassePalavra}
        desabilita={desabilita}
        setImagem={setImagem}
        chute={chute}
        setChute={setChute}
      />
    </div>
  );
}
export default App;
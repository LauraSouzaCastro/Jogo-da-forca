import '../css/Letra.css';
import forca1 from '../assets/forca1.png';
import forca2 from '../assets/forca2.png';
import forca3 from '../assets/forca3.png';
import forca4 from '../assets/forca4.png';
import forca5 from '../assets/forca5.png';
import forca6 from '../assets/forca6.png';
export default function Letras({ classe, desabilita, setLetra, desabilitada, letras, setImagem, quantErros, setQuantErros, quantAcertos, setQuantAcertos, clicado, setClicado, setClassePalavra, setLetras, setArrayPalavra }) {
    const forca = [forca1, forca2, forca3, forca4, forca5, forca6]
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    function selecionarLetra(a) {
        setLetra(a)
        setClicado([...clicado, a])
        if (!letras.find(e => e === a) && quantErros < 6) {
            setQuantErros(quantErros + 1)
            setImagem(forca[quantErros])
            quantErros = quantErros + 1
        } else {
            setQuantAcertos(quantAcertos + 1)
            quantAcertos = quantAcertos + 1
        }
        if (quantErros === 6 || quantAcertos === letras.length) {
            desabilita()
            if (quantErros === 6) {
                setClassePalavra('vermelho')
            } else if (quantAcertos === letras.length) {
                setClassePalavra('verde')
            }
        }
    }
    return (
        <div className='caixaLetra'>
            {alfabeto.map((a) => (clicado.find(e => e === a)) ? <button disabled={true} className='letra' key={a} onClick={() => selecionarLetra(a)} data-test="letter">{a.toLocaleUpperCase()}</button> : <button disabled={desabilitada} className={classe} key={a} onClick={() => selecionarLetra(a)} data-test="letter">{a.toLocaleUpperCase()}</button>)}
        </div>
    )
}
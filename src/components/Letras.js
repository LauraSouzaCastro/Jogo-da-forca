import '../css/Letra.css';
export default function Letras({ classe, desabilita, setLetra, desabilitada, letras, setImagem, quantErros, setQuantErros, quantAcertos, setQuantAcertos, clicado, setClicado, setClassePalavra, setLetras, setArrayPalavra }) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    function selecionarLetra(a) {
        setLetra(a)
        setClicado([...clicado, a])
        if (!letras.find(e => e === a) && quantErros < 6) {
            setQuantErros(quantErros + 1)
            setImagem(`./assets/forca${quantErros + 1}.png`)
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
            {alfabeto.map((a) => (clicado.find(e => e === a)) ? <button disabled={true} className='letra' key={a} onClick={() => selecionarLetra(a)} data-test="letter">{a}</button> : <button disabled={desabilitada} className={classe} key={a} onClick={() => selecionarLetra(a)} data-test="letter">{a}</button>)}
        </div>
    )
}
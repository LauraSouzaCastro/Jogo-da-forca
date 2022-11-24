import '../css/Jogo.css';
import palavras from '../palavras';
export default function Jogo({ setPalavra, setPalavraTentaiva, setClassePalavra, setChutou, setImagem, imagem, setQuantAcertos, setQuantErros, letra, letras, arrayPalavra, quantAcertos, quantErros, palavra, palavraTentaiva, classePalavra, chutou, setLetras,  setArrayPalavra, setLetra, setClasse, setDesabilitada, setClicado}) {
    function iniciarJogo() {
        const palavraSorteada = palavras[Math.floor(Math.random() * palavras.length)]
        setClasse('letraHabilitada')
        setPalavra(palavraSorteada)
        setDesabilitada(false)
        setImagem('./assets/forca0.png')
        setLetra(' _ ')
        setQuantAcertos(0)
        setQuantErros(0)
        setClicado([])
        setPalavraTentaiva([])
        setClassePalavra('preto')
        setChutou(false)
        setArrayPalavra([])
        setLetras([])
        arrayPalavra = []
        letras = []
        if (palavraSorteada) {
            for (let i = 0; i < palavraSorteada.length; i++) {
                arrayPalavra[i] = { id: i, letra: palavraSorteada[i] }
                letras[i] = palavraSorteada[i]
            }
            letras = [...new Set(letras)]
            setArrayPalavra([...arrayPalavra])
            setLetras([...letras]);
        }
    }
    return (
        <div className='caixaJogo'>
            <img src={imagem} className='forca' data-test="game-image" alt='' />
            <div className='caixaBotaoPalavra'>
                <button className='botao' onClick={iniciarJogo} data-test="choose-word">Escolher Palavra</button>
                <span className='palavraJogo' data-test="word" data-answer={palavra}>
                    {(quantErros === 6 || quantAcertos === letras.length || chutou === true) ? <strong className={classePalavra}>{palavra}</strong> : arrayPalavra.map((p) => {
                        if (p.letra === letra) {
                            palavraTentaiva[p.id] = (p.letra)
                            return <strong key={p.id}>{p.letra}</strong>
                        } else if (palavraTentaiva.find(e => e === p.letra)) {
                            return <strong key={p.id}>{palavraTentaiva.find(e => e === p.letra)}</strong>
                        } else {
                            return <strong key={p.id}> _ </strong>
                        }
                    })}
                </span>
            </div>
        </div>
    )
}
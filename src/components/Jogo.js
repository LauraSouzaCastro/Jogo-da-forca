import '../css/Jogo.css';
export default function Jogo({ iniciarJogo, imagem, letra, letras, arrayPalavra, quantAcertos, quantErros, palavra, palavraTentaiva, classePalavra, chutou}) {
    return (
        <div className='caixaJogo'>
            <img src={imagem} className='forca' alt='' data-test="game-image" />
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
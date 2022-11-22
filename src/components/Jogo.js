import '../css/Jogo.css';
export default function Jogo(props) {
    const { iniciarJogo: iniciarJogo,
        imagem: imagem,
        desabilitada: desabilitada,
        letra: letra,
        letras: letras,
        arrayPalavra: arrayPalavra,
        setPalavraTentaiva: setPalavraTentaiva,
        quantAcertos: quantAcertos,
        quantErros: quantErros,
        palavra: palavra,
        palavraTentaiva: palavraTentaiva,
        setClassePalavra: setClassePalavra,
        classePalavra: classePalavra,
        chutou: chutou } = props;
    function letraEscolhida(p) {
        if (p.letra === letra) {
            palavraTentaiva[p.id] = (p.letra)
            setPalavraTentaiva(palavraTentaiva)
            return <strong key={p.id}>{p.letra}</strong>
        } else if (palavraTentaiva.find(e => e === p.letra)) {
            return <strong key={p.id}>{palavraTentaiva.find(e => e === p.letra)}</strong>
        } else{
            return <strong key={p.id}> _ </strong>
        }
    }
    function fimDeJogo(){
        if(quantErros === 6 ){
            setClassePalavra('vermelho')
        }else if ( quantAcertos === letras.length){
            setClassePalavra('verde')
        }
        return  <strong className={classePalavra}>{palavra}</strong>
    }
    
    return (
        <div className='caixaJogo'>
            <img src={imagem} className='forca' alt='' />
            <div className='caixaBotaoPalavra'>
                <button className='botao' onClick={iniciarJogo} disabled={desabilitada}>Escolher Palavra</button>
                <span className='palavraJogo'>
                    { (quantErros === 6 || quantAcertos === letras.length || chutou === true) ?  fimDeJogo() : arrayPalavra.map((p) => letraEscolhida(p))}
                </span>
            </div>
        </div>
    )
}
import '../css/Letra.css';


export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const { classe: classe,
        setLetra: setLetra,
        desabilitada: desabilitada,
        letras: letras,
        setImagem: setImagem,
        quantErros: quantErros,
        setQuantErros: setQuantErros,
        quantAcertos: quantAcertos,
        setQuantAcertos: setQuantAcertos,
        desabilita: desabilita,
        clicado: clicado,
        setClicado: setClicado } = props
    function selecionarLetra(a) {
        setLetra(a)
        clicado.push(a)
        setClicado(clicado)
        console.log(clicado)
        if (!letras.find(e => e === a) && quantErros < 6) {
            setQuantErros(quantErros + 1)
            setImagem(`./assets/forca${quantErros + 1}.png`)
        } else {
            setQuantAcertos(quantAcertos + 1)
        }
    }
    if (quantErros === 6 || quantAcertos === letras.length) {
        desabilita()
    }
    function renderizaLetra(a) {
        if (clicado.find(e => e === a)) {
            return <button disabled={true} className='letra' key={a} onClick={() => selecionarLetra(a)} data-test="letter">{a}</button>
        } else {
            return <button disabled={desabilitada} className={classe} key={a} onClick={() => selecionarLetra(a)} data-test="letter">{a}</button>
        }

    }
    return (
        <div className='caixaLetra'>
            {alfabeto.map((a) => renderizaLetra(a))}
        </div>
    )
}
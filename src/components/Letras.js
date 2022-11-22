import '../css/Letra.css';
let clicado = []
let palavra = []
export default function Letras(props){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    if(props.palavra){
        for(let i = 0; i < props.palavra.length; i++){
            palavra[i] = props.palavra[i]
        }
    }
    function selecionarLetra(a){
        const setLetra = props.setLetra
        const setQuantErros = props.setQuantErros
        let quantErros = props.quantErros
        setLetra(a)
        clicado.push(a)
        if(!palavra.find(e => e === a)){
            quantErros = quantErros + 1
            setQuantErros(quantErros)
            const setImagem = props.setImagem
            setImagem(`./assets/forca${quantErros}.png`) 
        }
    }
    function renderizaLetra(a){
        if(clicado.find(e => e === a)){
            return <button disabled={true} className='letra' key={a} onClick={() => selecionarLetra(a)}>{a}</button> 
        }else{
            return <button disabled={props.letraDesabilitada} className={props.classe} key={a} onClick={() => selecionarLetra(a)}>{a}</button> 
        }
        
    }
    return(
        <div className='caixaLetra'>
            {alfabeto.map((a) => renderizaLetra(a))}
        </div>
    )
}
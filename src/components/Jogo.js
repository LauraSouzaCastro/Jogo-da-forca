import '../css/Jogo.css';

export default function Jogo(props){
    let palavra = []
    if(props.palavra){
        for(let i = 0; i < props.palavra.length; i++){
            palavra[i] = (props.palavra[i])
        }
    }
    
    return(
        <div className='caixaJogo'>
            <img src={props.imagem} className='forca' alt='' />
            <div className='caixaBotaoPalavra'>
                <button className='botao' onClick={props.iniciarJogo} disabled={props.desabilitada}>Escolher Palavra</button>
                <span className='palavraJogo'>
                    {palavra.map((p)=> <strong key={p}> _ </strong>)}
                </span>
            </div>
        </div>
    )
}
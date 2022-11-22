import '../css/Jogo.css';
let palavraTentaiva = []
export default function Jogo(props){
    let palavra = []
    
    if(props.palavra){
        for(let i = 0; i < props.palavra.length; i++){
            palavra[i] = {id: i, letra: props.palavra[i]}
        }
    }
    function letra(p){
        if(p.letra === props.letra){
            palavraTentaiva[p.id] = (p.letra)
            return <strong key={p.id}>{p.letra}</strong>
        }else if(palavraTentaiva.find(e => e === p.letra)){
            return <strong key={p.id}>{palavraTentaiva.find(e => e === p.letra)}</strong>
        }else{
            return <strong key={p.id}> _ </strong>
        }
        
    }
    return(
        <div className='caixaJogo'>
            <img src={props.imagem} className='forca' alt='' />
            <div className='caixaBotaoPalavra'>
                <button className='botao' onClick={props.iniciarJogo} disabled={props.desabilitada}>Escolher Palavra</button>
                <span className='palavraJogo'>
                    {palavra.map((p) => letra(p))}
                </span>
            </div>
        </div>
    )
}
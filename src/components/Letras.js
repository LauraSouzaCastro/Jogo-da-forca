import '../css/Letra.css';

export default function Letras(){
    const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    return(
        <div className='caixaLetra'>
            {alfabeto.map((a) => (<button disabled className='letra' key={a}>{a}</button>))}
        </div>
    )
}
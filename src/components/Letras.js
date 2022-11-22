import '../css/Letra.css';

export default function Letras(){
    const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    return(
        <div className='caixaLetra'>
            {letras.map((l) => (<button className='letra'>{l}</button>))}
        </div>
    )
}
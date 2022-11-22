import '../css/Letra.css';

export default function Letras(props){
    const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    return(
        <div className='caixaLetra'>
            {alfabeto.map((a) => (<button disabled={props.desabilitada} className={props.classe} key={a} onClick={props.selecionarLetra}>{a}</button>))}
        </div>
    )
}
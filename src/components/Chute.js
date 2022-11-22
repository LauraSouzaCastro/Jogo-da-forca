import '../css/Chute.css';
export default function Chute(props){
    return(
        <div className='caixaChute'>
            <span className='texto'>Já sei a palavra!</span>
            <input disabled={props.desabilitada} className='inputChute'></input>
            <button disabled={props.desabilitada} className='botaoChutar'>Chutar</button>
        </div>
    )
}
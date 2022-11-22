import '../css/Chute.css';
export default function Chute(){
    return(
        <div className='caixaChute'>
            <span className='texto'>Já sei a palavra!</span>
            <input disabled className='inputChute'></input>
            <button disabled className='botaoChutar'>Chutar</button>
        </div>
    )
}
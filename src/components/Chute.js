import '../css/Chute.css';
export default function Chute(){
    return(
        <div className='caixaChute'>
            <span className='texto'>Já sei a palavra!</span>
            <input type={'text'} className='inputChute'></input>
            <button className='botaoChutar'>Chutar</button>
        </div>
    )
}
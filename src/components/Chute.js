import '../css/Chute.css';
import forca6 from '../assets/forca6.png';
export default function Chute({palavra, desabilitada, setChutou, setClassePalavra, desabilita, setImagem, chute, setChute, palavraSemAcento}){
    function chutar(){
        if(chute === palavra || chute === palavraSemAcento){
            setClassePalavra('verde')
        }else{
            setClassePalavra('vermelho')
            setImagem(forca6)
        }
        setChute("")
        setChutou(true)
        desabilita()
    }
    return(
        <div className='caixaChute'>
            <span className='texto'>Já sei a palavra!</span>
            <input disabled={desabilitada} className='inputChute' data-test="guess-input" onChange={((e) => {setChute(e.target.value)})} value={chute}></input>
            <button disabled={desabilitada} className='botaoChutar' onClick={chutar} data-test="guess-button">Chutar</button>
        </div>
    )
}
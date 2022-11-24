import '../css/Chute.css';
export default function Chute({palavra, desabilitada, setChutou, setClassePalavra, desabilita, setImagem, chute, setChute}){
    function chutar(){
        if(chute === palavra){
            setClassePalavra('verde')
        }else{
            setClassePalavra('vermelho')
            setImagem('./assets/forca6.png')
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
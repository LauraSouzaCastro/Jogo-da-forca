import '../css/Chute.css';
export default function Chute({palavra, desabilitada, setChutou, setClassePalavra, desabilita, setImagem}){
    function chutar(){
        const chute = document.querySelector(".inputChute").value
        if(chute === palavra){
            setClassePalavra('verde')
        }else{
            setClassePalavra('vermelho')
            setImagem('./assets/forca6.png')
        }
        document.querySelector(".inputChute").value = ''
        setChutou(true)
        desabilita()
    }
    return(
        <div className='caixaChute'>
            <span className='texto'>Já sei a palavra!</span>
            <input disabled={desabilitada} className='inputChute' data-test="guess-input"></input>
            <button disabled={desabilitada} className='botaoChutar' onClick={chutar} data-test="guess-button">Chutar</button>
        </div>
    )
}
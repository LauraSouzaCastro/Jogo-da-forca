import '../css/Jogo.css';

export default function Jogo(){
    return(
        <div className='caixaJogo'>
            <img src='./assets/forca0.png' className='forca' alt='' />
            <div className='caixaBotaoPalavra'>
                <button className='botao'>Escolher Palavra</button>
                <span className='palavraJogo escondido'>Palavra</span>
            </div>
        </div>
    )
}
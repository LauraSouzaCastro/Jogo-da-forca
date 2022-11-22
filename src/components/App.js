import '../css/App.css';
import Jogo from './Jogo';
import Letras from './Letras';
import Chute from './Chute';
import palavras from '../palavras';

function App() {
  return (
    <div className='container'>
      <Jogo />
      <Letras />
      <Chute />
    </div>
  );
}

export default App;

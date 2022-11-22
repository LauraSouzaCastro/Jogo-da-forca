import '../css/App.css';
import Jogo from './Jogo';
import Letras from './Letras';
import Chute from './Chute';

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

import Nastaveni_aplikace from './components/nastaveni_aplikace';
import './App.css';
import Btn from './components/jidelnicek';

function App() {
  return (
    
    <div className = "color">
      <h2> Jídelníček</h2>
      <Nastaveni_aplikace/>
      <Btn/>
      
    </div>
    
  );
}

export default App;

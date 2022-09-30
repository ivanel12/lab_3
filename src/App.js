import logo from './logo.svg';
import './App.css';
import Theme from './theme/Theme';
import Palette from './components/palette';
import Viewport from './components/viewport';
import './components/viewport/stilos.css';

function App() {
  return (
    <div className="App"> 
  <Theme>
        <Viewport/>
  </Theme>
      
    </div>
  );
}

export default App;

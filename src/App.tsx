import './App.css';
import { WorldSVG } from './views/WorldSVG/WorldSVG';

function App() {

  return (
    <div className="App">
      <div className="navBar">
        <ul className="navItems">
          <li>SVG</li>
          <li>Google</li>
          <li>About</li>
        </ul>
      </div>
      <h1>
        World of songs
      </h1>
      <WorldSVG />
    </div>
  );
}

export default App;

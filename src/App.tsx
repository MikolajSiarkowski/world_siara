import './App.css';
import { CountryContextWrapper } from './CountryContext';
import { Info } from './providers/bank-countries/Info';
import { WorldSVG } from './views/WorldSVG/WorldSVG';

function App() {
  return (
    <CountryContextWrapper>
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
          <div className="modal">
            <Info />
          </div>
      </div>
    </CountryContextWrapper>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Button } from './Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Functional (Stateless) Component
        </a>
      </header>
      <body>     
         <Button data-testid="Button1"/>
         <Button data-testid="Button2"/>
         <Button data-testid="Button3"/>
      </body>

    </div>
    
  );
}

export default App;

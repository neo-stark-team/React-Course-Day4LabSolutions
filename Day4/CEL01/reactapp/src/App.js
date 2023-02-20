import logo from './logo.svg';
import './App.css';
import { MyButton } from './Button';


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
          Class (Stateful) Components
        </a>
      </header>
      <body>     
         <MyButton data-testid='Button1'/>
         <MyButton data-testid='Button2'/>
         <MyButton data-testid='Button3'/>
      </body>

    </div>
    
  );
}

export default App;
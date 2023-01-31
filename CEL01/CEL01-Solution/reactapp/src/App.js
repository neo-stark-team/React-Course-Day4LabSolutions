import logo from './logo.svg';
import './App.css';
import MyClassComponent from './MyClassComponent';
import MyFuncComponent from './MyFuncComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Convert MyClassComponent to Functional Component using Hooks</p>
      
      <MyClassComponent/>
      <MyFuncComponent/>
      </header>
    </div>
  );
}

export default App;

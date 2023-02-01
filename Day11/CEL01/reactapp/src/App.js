import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import About from './pages/AboutUs';
import Users from './pages/Users';
import Home from './pages/HomePage';

function App() {
  return (
    <div>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

<Routes>      
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/users" element={<Users/>} />
          <Route exact path="/" element={<Home/>} />
</Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;

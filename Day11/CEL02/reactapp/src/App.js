import React ,{Fragment} from 'react';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Singers from './components/Singers';
import Albums from './components/Albums';

const singerslist=[
  {name: 'Lata Mangeshkar', year:'1929 - 2022'},
  {name: 'Michael Jackson', year:'1958 - 2009'},
  {name: 'Marvin Gaye', year:'1939 - 1984'},
  {name: 'S.P.Bala subramym', year:'1946 - 2020'}
]

const albumslist=[
  {name: 'Thriller', singer:'Michael Jackson'},
  {name: 'Save ME', singer:'Marvin Gaye'},
  {name: 'King Only', singer:'S.P.Bala'},
  {name: 'Busy Life', singer:'Lata Mangeshkar'},
  {name: 'Cuckoo', singer:'Santhosh'},
  {name: 'Hip Hop', singer:'Vishal'}
]

const App =()=>{
  return (
    <Router>
      <div className='App'>
        <Navbar />   
        <div className='container'>
            <Routes>
              <Route exact path='/' element={<Home/>} /> 
              <Route exact path='/singers' element={
              <Fragment>                
                    <Singers sings={singerslist}/>
                </Fragment>
                } />
                <Route exact path='/albums' element={
              <Fragment>                
                    <Albums sings={albumslist}/>
                </Fragment>
                } />
            </Routes>
            </div>
      </div>
      </Router>
)};
export default App;

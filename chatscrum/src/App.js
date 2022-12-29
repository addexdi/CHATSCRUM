import React from 'react';
import './App.css';
import Home from './Components/home/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './Components/Sign_in/sign_in';
import Signup from './Components/Sign_up/sign_up';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
        <Route exact path='/' component={Home} />
        <Route path='/signup' component={Signup} />
        <Route path='/signin' component={Signin} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

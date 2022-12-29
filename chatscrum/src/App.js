import React from 'react';
import './App.css';
import Home from './Components/home/home'
import Signin from './Components/Sign_in/sign_in';
import Signup from './Components/Sign_up/sign_up';

function App() {
  return (
    <div className="App">
      <h1>CHATSCRUM</h1>
      <Signup />
      <Signin />
      <Home />
    </div>
  );
}

export default App;

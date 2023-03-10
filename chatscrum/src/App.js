import React from "react";
import "./App.css";
import Home from "./Components/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Components/Sign_up/sign_up";
import Signin from "./Components/Sign_in/sign_in";
import Scrumboard from "./Components/scrumboard/scrumboard";

class App extends React.Component {
  render() {
    return (
      // linking components to eachother on the SPA
      // Always wrap the code with browserrouter
      // always wrap the route with routes first because of the new react version update
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/scrumboard" element={<Scrumboard />} />
          </Routes>
      </BrowserRouter>
    );
  }
}

export default App;

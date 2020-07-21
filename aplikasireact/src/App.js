import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavbarComp from './Component/Fungsional/NavbarComp';
import HomePage from './Component/Fungsional/HomePage';
import About from './Component/Fungsional/AboutComp';
//import logo from './logo.svg';
//import Home from './Component/Fungsional/Home';
//import Beranda from './Component/Class/Beranda';

//import './App.css';

const App = () => {
  return (
    <div className="App">
     
      <BrowserRouter>
      <NavbarComp />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
      </Switch>

    </BrowserRouter>
   

    </div>
  );
}

export default App;

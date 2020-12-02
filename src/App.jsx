import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.css';

import NavBar from './components/navbar';
import Footer from './components/footer';

import Home from './views/home';
import UserSpecs from './views/userspecs';

function App() {
  return (
    <div className="app">
      <NavBar/>
      <BrowserRouter>
        <Switch>
          <Route path='/:id' component={UserSpecs}/>
          <Route path='/' component={Home}/>
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

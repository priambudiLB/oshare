import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import Women from './Women';
import ShoppingBag from "./Icons/ShoppingBag";
import Cart from "./Cart";

function Navbar() {
  return (
    <nav className="navbar navbar-light fixed-top navbar-expand-lg bg-light">
      <a className="navbar-brand" href="/">
        <img src="Images/Logo.png" width="30" height="30" alt="logo"/>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="nav nav-fill">
          <li className="nav-item">
            <a className="nav-link" href="/">MEN <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/women">WOMEN</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">FAVORITES</a>
          </li>
          <li className="nav-item">
            <div className="row">
              <a className="nav-link" href="/cart"><ShoppingBag /> (0)</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>    
  )
}

function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/cart" component={Cart} />
          <Route path="/women" component={Women} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

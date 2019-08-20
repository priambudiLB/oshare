import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import Women from './Women';
import Checkout from './Checkout';
import ShoppingBag from "./Icons/ShoppingBag";
import Cart from "./Cart";
import Detail from "./Detail";

function Navbar() {
  return (
    <nav className="navbar navbar-custom fixed-top navbar-expand-lg">
    <Link to="/">
      <a className="navbar-brand" href="/">
        <img src="Images/Logo.png" width="30" height="30" alt="logo"/>
      </a>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">
        {/* <i class="fa fa-navicon"></i> */}
        </span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="nav nav-fill">
          <li className="nav-item">
          <Link to="/men">
            <a className="nav-link" href="/women">MEN</a>
            </Link>
          </li>
          <li className="nav-item">
          <Link to="/women">
            <a className="nav-link" href="/women">WOMEN</a>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">FAVORITES</a>
          </li>
          <li className="nav-item">
            <div className="row">
              <Link to="/cart">
                <a className="nav-link" href="/cart"><ShoppingBag /> (0)</a>
              </Link>
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
          <Route path="/men" component={Women} />
          <Route path="/women" component={Women} />
          <Route path="/detail" component={Detail} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

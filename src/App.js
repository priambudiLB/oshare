import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import Women from './Women';
import Checkout from './Checkout';
import ShoppingBag from "./Icons/ShoppingBag";
import WhatsApp from "./Icons/WhatsApp-white";
import Instagram from './Icons/Instagram-white';
import Email from "./Icons/Email";
import Cart from "./Cart";
import Detail from "./Detail";
import Login from "./Login";
import Signup from "./Signup";

  function Navbar() {
  return (
    <nav className="navbar navbar-custom fixed-top navbar-expand-sm">
    <Link to="/">
      <div className="navbar-brand">
        <img src="Images/Logo.png" width="30" height="30" alt="logo"/>
      </div>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">
        {/* <i class="fa fa-navicon"></i> */}
        </span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="nav nav-fill">
          <div className="dropdown">
            <li className="nav-item dropbtn">
              <Link to="/men">
                <div className="nav-link">MEN</div>
              </Link>
              <div className="dropdown-content">
                <Link to="/men"><div className="nav-link">Shoes</div></Link>
                <Link to="/men"><div className="nav-link">Clothes</div></Link>
                <Link to="/men"><div className="nav-link">Accesories</div></Link>
              </div>
            </li>
          </div>
          
          <li className="nav-item">
          <Link to="/women">
            <div className="nav-link">WOMEN</div>
            </Link>
          </li>
          <li className="nav-item">
            <div className="nav-link">FAVORITES</div>
          </li>
          <li className="nav-item">
            <div className="row">
              <Link to="/cart">
                <div className="nav-link" ><ShoppingBag /> (0)</div>
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <ul className="nav nav-fill navbar-right">
        <li className="nav-item">
          <Link to="/login">
            <div className="nav-link">LOGIN</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/signup">
            <div className="nav-link">SIGN UP</div>
          </Link>
        </li> 
      </ul>
      
    </nav>    
  )
}

function Footer(){
  return(
    <footer className="page-footer">
    <div className="footer-copyright text-center py-3">
      <p>
        <span className="highlights glacial-indifference text-white">Contact </span><span
        className="highlights kollektif-bold text-white">Us</span>
        <br></br>
        <span className="glacial-indifference" id="kantor">Alamat kantor Ruang Tenant DIIB</span>
        <br></br>
        <span className="glacial-indifference" id="gudang">Alamat Gudang, Jl. Otista 3 Komplek 4 H166 13340 </span>
      </p>
      <div className='text-center footer-socmed'>
        <div className="float-right"><Email /></div>
        <div className="float-left"><Instagram /></div>
        <div><WhatsApp /></div>
      </div>
    </div>
  </footer>
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
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import Women from "./Women";
import Checkout from "./Checkout";
import ShoppingBag from "./Icons/ShoppingBag";
import WhatsApp from "./Icons/WhatsApp-white";
import Instagram from "./Icons/Instagram-white";
import Email from "./Icons/Email";
import Cart from "./Cart";
import Detail from "./Detail";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import ConfirmPayment from "./ConfirmPayment";
import "./App.css";

function Navbar() {
  let item = [
    {"name": "TECHNOLOGY",
    "link": "tech"
    },
    {"name": "MEN",
    "link": "men"
    },
    {"name": "WOMEN",
    "link": "women"
    },
    {"name": "WISHLIST",
    "link": "wishlist"
    },
  ]
  return (
    <nav className="navbar navbar-custom fixed-top">
      <Link to="/">
        <div className="navbar-brand">
          <img src="Images/Logo.png" width="30" height="30" alt="logo" />
        </div>
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        {item.map((item, index)=>{
          return(
            <li className="nav-item" key={index}>
              <Link to={`/${item.link}`}>
                <div className="nav-link">{item.name}</div>
              </Link>
            </li>
          )
        })}
          <li className="nav-item">
            <Link to="/cart">
              <div className="nav-link">
                <ShoppingBag /> (0)
              </div>
            </Link>
          </li>
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
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              PROFILE
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                Order Details
              </a>
              <a class="dropdown-item" href="#">
                Personal Information
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-copyright text-center py-3">
        <p>
          <span className="highlights glacial-indifference text-white">
            Contact{" "}
          </span>
          <span className="highlights kollektif-bold text-white">Us</span>
          <br></br>
          <span className="glacial-indifference" id="kantor">
            Alamat kantor Ruang Tenant DIIB
          </span>
          <br></br>
          <span className="glacial-indifference" id="gudang">
            Jl. Otista 3 Komplek 4 H166 13340{" "}
          </span>
        </p>
        <div className="text-center footer-socmed">
          <div className="float-right">
            <Email />
          </div>
          <div className="float-left">
            <Instagram />
          </div>
          <div>
            <WhatsApp />
          </div>
        </div>
      </div>
    </footer>
  );
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
          <Route path="/profile" component={Profile} />
          <Route path="/confirm" component={ConfirmPayment} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

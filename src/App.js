import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import Women from "./Women";
import Men from "./Men";
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

function signOut() {
  let headers = { "Content-Type": "application/json", "Authorization":  "Token "+localStorage.getItem("token")};
  
  
  return fetch("http://o-share-backend.herokuapp.com/api/auth/logout", {
    headers,
    
    method: "POST"
  }).then(res => {
    if (res.status === 204) {
      localStorage.removeItem("token");
          window.location.assign("/");
    } else {
      console.log("Server Error!");
      throw res;
    }
  })
}
function Navbar() {
  let item = [
    { name: "TECHNOLOGY", link: "tech" },
    { name: "MEN", link: "men" },
    { name: "WOMEN", link: "women" },
    { name: "WISHLIST", link: "wishlist" }
  ];
  return (
    <nav className="navbar navbar-custom fixed-top navbar-expand-lg">
      <Link to="/">
        <div className="navbar-brand">
          <img src="Images/Logo.png" width="30" height="30" alt="logo" />
        </div>
      </Link>
      <button
        className="navbar-toggler"
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
          {item.map((item, index) => {
            return (
              <li className="nav-item" key={index}>
                <Link to={`/${item.link}`}>
                  <div className="nav-link">{item.name}</div>
                </Link>
              </li>
            );
          })}
          {localStorage.getItem("token") != null ? (
            <li className="nav-item">
            <Link to="/cart">
              <div className="nav-link">
                <ShoppingBag /> (0)
              </div>
            </Link>
          </li>
          ) : (
            <div />
          )}
          {localStorage.getItem("token") != null ? (
            <div />
          ) : (
            <li className="nav-item">
              <Link to="/login">
                <div className="nav-link">LOGIN</div>
              </Link>
            </li>
          )}
          {localStorage.getItem("token") != null ? (
            <div />
          ) : (
            <li className="nav-item">
              <Link to="/signup">
                <div className="nav-link">SIGN UP</div>
              </Link>
            </li>
          )}
          {localStorage.getItem("token") != null ? (
            <li className="nav-item">
              <div onClick={() => signOut()} className="nav-link">
                SIGN OUT
              </div>
            </li>
          ) : (
            <div />
          )}
          {localStorage.getItem("token") != null ? (
            <li className="nav-item">
              <div className="d-flex">
                <div className="btn-group">
                  <div
                    className="nav-link dropdown-toggle dropdown-toggle-split"
                    id="dropdownMenuReference"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-reference="parent"
                  >
                    PROFILE{" "}
                  </div>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuReference"
                  >
                    <a className="dropdown-item" href="/">
                      Order Details
                    </a>
                    <a className="dropdown-item" href="/">
                      Personal Information
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ) : (
            <div />
          )}
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
        </p>

        <div className="text-center footer-socmed py-3">
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

      <div className="text-center footer-link">
        <div className="row justify-content-center">
          <a href="/women">
            <span className="kollektif-bold text-white" id="links">
              Company Profile
            </span>
          </a>
          <a href="/women">
            <span className="kollektif-bold text-white" id="links">
              FAQ
            </span>
          </a>
          <a href="/women">
            <span className="kollektif-bold text-white" id="links">
              How to Order
            </span>
          </a>
        </div>
        <div className="row justify-content-center py-3">
          {/* <a href="/women">
            <span className="kollektif-bold text-white" id="links">
              Order Process
            </span>
          </a> */}
          <a href="/women">
            <span className="kollektif-bold text-white" id="links">
              Terms & Condition
            </span>
          </a>
        </div>
      </div>

      <div className="footer-support">
        <div className="row justify-content-center">
          <p>
            <span className="glacial-indifference text-white">Supported </span>
            <span className="kollektif-bold text-white">By</span>
          </p>
        </div>
        <div className="row justify-content-center py-3">
          <a href="https://diib.ui.ac.id/">
            <img
              src="https://files.sirclocdn.xyz/blankawear/files/logo%20diib.png"
              alt="logo diib"
            />
          </a>
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
          <Route path="/men" component={Men} />
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

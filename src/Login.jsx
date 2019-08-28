import React, { Component } from 'react';
import './App.css';

class Login extends Component {
  render() {
    return (
      <div id="login">
        <div className="container mw-100 p-3 mh-100">
            <div className="row justify-content-center align-items-center"id="login-row">
                <div className="col-sm-6" id="login-column">
                    <div className="col-sm-12" id="login-box">
                        <form action="" method="post" id="login-form">
                            <h3 className="kollektif">Login form</h3>
                            <div className="form-group">
                                <label for="email">Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email"></input>
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" className="form-control" placeholder="Password"></input>
                            </div>
                            <div className="text-right">
                                <a className="kollektif" href="/signup" id="register-text">Register Here</a>
                            </div>
                            <button type="submit" className="btn btn-dark btn-md">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Login;

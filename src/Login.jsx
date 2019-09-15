import React, { Component } from "react";
import "./App.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      email: "",
      password: ""
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }
  login = (email, password) => {
    console.log("login");
    let headers = { "Content-Type": "application/json" };
    let body = JSON.stringify({ email, password });
    console.log(body);
    return fetch("http://o-share-backend.herokuapp.com/api/auth/login", {
      headers,
      body,
      method: "POST"
    }).then(res => {
      if (res.status === 200) {
        return res.json().then(data => {
          this.setState({ token: data.token }, () => {
            localStorage.setItem("token", data.token);
            window.location.assign("/");
          });

          return { status: res.status, data };
        });
      } else {
        console.log("Server Error!");
        throw res;
      }
    });
  };
  componentDidMount() {
    // this.login("a@a.com", "asdqwe123")
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
    console.log(this.state.email);
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
    console.log(this.state.password);
  }

  render() {
    return (
      <div id="login">
        <div className="container mw-100 p-3 mh-100">
          <div
            className="row justify-content-center align-items-center"
            id="login-row"
          >
            <div className="col-sm-6" id="login-column">
              <div className="col-sm-12" id="login-box">
                <form action="" method="post" id="login-form">
                  <h3 className="kollektif">Login form</h3>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={this.handleChangeEmail}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handleChangePassword}
                    ></input>
                  </div>
                  <div className="text-right">
                    <a className="kollektif" href="/signup" id="register-text">
                      Register Here
                    </a>
                  </div>
                  <div
                    // type="submit"
                    className="btn btn-dark btn-md"
                    onClick={() =>
                      this.login(this.state.email, this.state.password)
                    }
                  >
                    Login
                  </div>
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

import React, { Component } from 'react';
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import { getBaseUrl } from "./Utils";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      name: '',
      day: '',
      month: '',
      year: '',
      gender: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword:'',
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDay = this.handleChangeDay.bind(this);
    this.handleChangeMonth = this.handleChangeMonth.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleChangeGender = this.handleChangeGender.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this);
  }

  signUp = (full_name, email, gender, phone_number, date_of_birth, password) => {
    console.log("signup");
    let headers = { "Content-Type": "application/json" };
    let body = JSON.stringify({ full_name, email, gender, phone_number, date_of_birth, password });
    console.log(body);
    return fetch(`http://${getBaseUrl}/api/auth/register`, {
      headers,
      body,
      method: "POST"
    }).then(res => {
      if (res.status === 200) {
        return res.json().then(data => {
          this.setState({ token: data.token }, () => {
            // localStorage.setItem("token", data.token);
            window.location.assign("/login");
          });
          return { status: res.status, data };
        });
      } else {
        console.log("Server Error!");
        throw res;
      }
    });
  };

  handleChangeName(event) {
    this.setState({ name: event.target.value });
    // console.log(this.state.name);
  }

  handleChangeDay(event) {
    this.setState({ day: event.target.value });
    // console.log(this.state.day);
  }

  handleChangeMonth(event) {
    this.setState({ month: event.target.value });
    // console.log(this.state.month);
  }

  handleChangeYear(event) {
    this.setState({ year: event.target.value });
    // console.log(this.state.year);
  }

  handleChangeGender(event) {
    this.setState({ gender: event.target.value });
    // console.log(this.state.gender);
  }

  handleChangePhone(event) {
    this.setState({ phone: event.target.value });
    // console.log(this.state.phone);
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
    // console.log(this.state.email);
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
    // console.log(this.state.password);
  }

  handleChangeConfirmPassword(event) {
    this.setState({ confirmPassword: event.target.value });
    // console.log(this.state.confirmPassword);
  }

  handleSUbmit = () =>{
    console.log(this.state)
    const{password,confirmPassword} = this.state;
    if(password!==confirmPassword){
      alert("Password don't match");
      return false;
    }else{
      this.signUp(
        this.state.name,
        this.state.email,
        this.state.gender,
        this.state.phone,
        this.parseDate(this.parseDay(this.state.day), this.parseDay(this.state.month), this.state.year),
        this.state.password
        )
    }
  }

  parseDate(day, month, year){
    return year+'-'+month+'-'+day
  }

  parseDay(day){
    let newDay = day < 10 ? this.zeroPad(day,2):day;
    return newDay.toString()
  }

  zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
  }
  
  render() {
    return (
      <div id="signup">
        <div className="container mw-100 p3 mh-100">
            <div className="row justify-content-center align-items-center" id="signup-row">
                <div className="col-sm-6" id="signup-column">
                    <div className="col-sm-12" id="signup-box">
                        <form action="" method="post" id="signup-form">
                            <h3 className="kollektif">Register</h3>
                            <div className="form-group">
                              <label className="col-form-label-sm" for="name">Fullname</label>
                              <input value={this.state.name}
                      onChange={this.handleChangeName} type="text" class="form-control form-control-sm" placeholder="Full name"></input>
                            </div>
                            <div className="form-group">
                              <label className="col-form-label-sm" for="date">Date of Birth</label>
                              <div className="form-row">
                                <div className="col">
                                  <input type="number" value={this.state.day}
                      onChange={this.handleChangeDay} className="form-control form-control-sm" placeholder="DD" min="1" max="31"></input>
                                </div>
                                <div className="col">
                                  <input type="number" value={this.state.month}
                      onChange={this.handleChangeMonth} className="form-control form-control-sm" placeholder="MM" min="1" max="12"></input>
                                </div>
                                <div className="col">
                                <input type="number" value={this.state.year}
                      onChange={this.handleChangeYear} className="form-control form-control-sm" placeholder="YYYY" min="1900" maxlength = "4"></input>
                                </div>
                            </div>
                            </div>
                            <div className="form-group">
                              <label className="col-form-label-sm mr-sm-2" for="gender">Gender</label>
                              <select value={this.state.gendeer}
                      onChange={this.handleChangeGender} className="custom-select mr-sm-2 form-control-sm">
                                <option selected>Choose...</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label className="col-form-label-sm" for="name">Phone Number</label>
                              <input value={this.state.phone}
                      onChange={this.handleChangePhone} type="text" class="form-control form-control-sm" placeholder="Phone number"></input>
                            </div>
                            <div className="form-group">
                              <label className="col-form-label-sm" for="email">Email address</label>
                              <input type="email" value={this.state.email}
                      onChange={this.handleChangeEmail} className="form-control form-control-sm" placeholder="Enter email"></input>
                              
                            </div>
                            <div className="form-group">
                              <label className="col-form-label-sm" for="password">Password</label>
                              <input value={this.state.password}
                      onChange={this.handleChangePassword} type="password" className="form-control form-control-sm" placeholder="Password"></input>
                              
                            </div>
                            <div className="form-group">
                              <label className="col-form-label-sm" for="password">Confirm Password</label>
                              <input type="password" className="form-control form-control-sm" placeholder="Confirm Password" value={this.state.confirmPassword}
                      onChange={this.handleChangeConfirmPassword}></input>
                              
                            </div>
                            <div className="form-group">
							                <span className="error" id="error"></span><br/>
						                </div>
                            <div onClick={this.handleSUbmit} className="btn btn-dark btn-md">Register</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Signup;

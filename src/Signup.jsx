import React, { Component } from 'react';
// import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './App.css';

class Signup extends Component {
  state = {
    startDate: new Date(),
    password: '',
    confirmPassword:'',
  };

  handleSUbmit = () =>{
    const{password,confirmPassword} = this.state;
    if(password!==confirmPassword){
      alert("Password don't match");
      return false;
    }else{
      return true;
    }
  }
 
  onChange = date => this.setState({ date })
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
                              <input type="text" class="form-control form-control-sm" placeholder="Full name"></input>
                            </div>
                            <div className="form-group">
                              <label className="col-form-label-sm" for="date">Date of Birth</label>
                              <div className="form-row">
                                <div className="col">
                                  <input type="number" className="form-control form-control-sm" placeholder="DD" min="1" max="31"></input>
                                </div>
                                <div className="col">
                                  <input type="number" className="form-control form-control-sm" placeholder="MM" min="1" max="12"></input>
                                </div>
                                <div className="col">
                                <input type="number" className="form-control form-control-sm" placeholder="YYYY" min="1900" maxlength = "4"></input>
                                </div>
                            </div>
                            </div>
                            <div className="form-group">
                              <label className="col-form-label-sm mr-sm-2" for="gender">Gender</label>
                              <select className="custom-select mr-sm-2 form-control-sm">
                                <option selected>Choose...</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label className="col-form-label-sm" for="email">Email address</label>
                              <input type="email" className="form-control form-control-sm" placeholder="Enter email"></input>
                              
                            </div>
                            <div className="form-group">
                              <label className="col-form-label-sm" for="password">Password</label>
                              <input type="password" className="form-control form-control-sm" placeholder="Password"></input>
                              
                            </div>
                            <div className="form-group">
                              <label className="col-form-label-sm" for="password">Confirm Password</label>
                              <input type="password" className="form-control form-control-sm" placeholder="Confirm Password" onChange={this.handleSUbmit}></input>
                              
                            </div>
                            <div className="form-group">
							                <span className="error" id="error"></span><br/>
						                </div>
                            <button type="submit" className="btn btn-dark btn-md">Register</button>
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

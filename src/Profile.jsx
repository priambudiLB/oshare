import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
      jalan: ''
    };
  }
  componentDidMount(){
    this.getProfile()
  }
  async getProfile() {
    let t = await fetch("http://o-share-backend.herokuapp.com/api/auth/detail", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token")
      }
    });
    let t2 = await t.json();
    console.log(t2);
    if (t2.detail === "Invalid token."){
      window.location.assign("/login")
    } else {
      this.setState({profile: t2, jalan: t2.default_address.street_name})
    }
  }
  render() {
    return (
      <div className="container" id="profile">
        <div className="row justify-content-center">
          <div className="card">
              <center><img src="./Images/Logo.png" className="card-img-top" alt="profile"/></center>
              <div className="card-body">
                  <h5 className="kollektif card-title">{this.state.profile.full_name}</h5>
              </div>
              <ul className="list-group list-group-flush">
                  <li className="kollektif list-group-item">
                    <span><h6 className="kollektif card-subtitle mb-2 text-muted">email</h6></span>
                    <span>{this.state.profile.email}</span>
                  </li>
                  <li className="kollektif list-group-item">
                    <span><h6 className="kollektif card-subtitle mb-2 text-muted">date of birth</h6></span>
                    <span>{this.state.profile.date_of_birth}</span>
                  </li>
                  <li className="kollektif list-group-item">
                    <span><h6 className="kollektif card-subtitle mb-2 text-muted">phone number</h6></span>
                    <span>{this.state.profile.phone_number}</span>
                  </li>
                  <li className="kollektif list-group-item">
                    <span><h6 className="kollektif card-subtitle mb-2 text-muted">gender</h6></span>
                    <span>{this.state.profile.phone_number}</span>
                  </li>
              </ul>
          </div>
          <div className="card">
              <div className="card-body" id="card-alamat">
                <h5 className="kollektif card-title">Address</h5>
                <div className="form-group">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                  <label className="form-check-label text-muted" for="gridRadios1" id="radio-label">
                    Use current address
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                  <label className="form-check-label" for="gridRadios2" id="radio-label">
                    New address
                  </label>
                </div>
                </div>
                <div className="form-group">
                  <label className="glacial indifference text-muted" id="alamat-label" for="inputEmail4">City</label>
                  <input type="email" className="form-control col-form-label-sm" id="inputEmail4" placeholder="Email"/>
                </div>
                <div className="form-group">
                  <label className="glacial indifference text-muted"  id="alamat-label" for="inputEmail4">Province</label>
                  <input type="email" className="form-control col-form-label-sm" id="inputEmail4" placeholder="Email"/>
                </div>
                <div className="form-group">
                  <label className="glacial indifference text-muted"  id="alamat-label" for="inputEmail4">Street Name</label>
                  <input type="email" className="form-control col-form-label-sm" id="inputEmail4" placeholder="Email"/>
                </div>
                <div className="form-group">
                  <label className="glacial indifference text-muted"  id="alamat-label" for="inputEmail4">Postal Code</label>
                  <input type="email" className="form-control col-form-label-sm" id="inputEmail4" placeholder="Email"/>
                </div>
                <div className="form-group">
                  <button className="btn btn-dark btn-sm" type="submit">
                    <span className="kollektif" id="address-submit-button">submit changes</span></button>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

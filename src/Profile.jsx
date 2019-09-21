import React, { Component } from 'react';
import './App.css';
import { getBaseUrl } from "./Utils";

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
    let t = await fetch(`http://${getBaseUrl}/api/auth/detail`, {
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
      this.setState({profile: t2, })
    }
  }
  render() {
    return (
      <div className="container" id="profile">
        <div className="card">
            <center><img src="./Images/Logo.png" className="card-img-top" alt="profile"/></center>
            <div className="card-body">
                <h5 class="kollektif card-title">{this.state.profile.full_name}</h5>
            </div>
        
            <ul class="list-group list-group-flush">
                <li class="kollektif list-group-item">{this.state.profile.email}</li>
                <li class="kollektif list-group-item">{this.state.profile.date_of_birth}</li>
                <li class="kollektif list-group-item">{this.state.profile.phone_number}</li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Profile;

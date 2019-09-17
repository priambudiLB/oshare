import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
  render() {
    return (
      <div className="container" id="profile">
        <div className="card">
            <center><img src="./Images/Logo.png" className="card-img-top" alt="profile"/></center>
            <div className="card-body">
                <h5 class="kollektif card-title">Nama</h5>
                <p class="kollektif card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        
            <ul class="list-group list-group-flush">
                <li class="kollektif list-group-item">Gender</li>
                <li class="kollektif list-group-item">Alamat</li>
                <li class="kollektif list-group-item">No HP</li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Profile;

import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
  render() {
    return (
      <div id="profile">
        <div className="card">
            <center><img src="./Images/Logo.png" className="card-img-top" alt="profile"/></center>
            <div className="card-body">
                <h5 class="kollektif card-title">Card title</h5>
                <p class="kollektif card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        
            <ul class="list-group list-group-flush">
                <li class="kollektif list-group-item">Cras justo odio</li>
                <li class="kollektif list-group-item">Dapibus ac facilisis in</li>
                <li class="kollektif list-group-item">Vestibulum at eros</li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Profile;

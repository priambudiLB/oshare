import React, { Component } from 'react';
import './App.css';
// import logo from 'Images/Logo.png';

// console.log(logo);

class Detail extends Component {
  state = {
    barang: [
      {
        nama: "Nama",
        harga: "20.000",
        imageUrl:"images/Logo.png"
      },
      {
        nama: "Nama",
        harga: "20.000",
        imageUrl:"images/Logo.png"
      },
      {
        nama: "Nama",
        harga: "20.000",
        imageUrl:"images/Logo.png"
      },
      {
        nama: "Nama",
        harga: "20.000",
        imageUrl:"images/Logo.png"
      },
      {
        nama: "Nama",
        harga: "20.000",
        imageUrl:"images/Logo.png"
      },
      {
        nama: "Nama",
        harga: "20.000",
        imageUrl:"images/Logo.png"
      },
      {
        nama: "Nama",
        harga: "20.000",
        imageUrl:"images/Logo.png"
      },
      {
        nama: "Nama",
        harga: "20.000",
        imageUrl:"images/Logo.png"
      },
  ],
  };
  render() {
    return (
      <div id="detail">
          <div className="card" style="width: 18rem;">
            <img className="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>
      </div>
    );
  }
}

export default Detail;

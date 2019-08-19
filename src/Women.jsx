import React, { Component } from 'react';
import './App.css';
import ItemCard from './ItemCard';
// import logo from 'Images/Logo.png';

// console.log(logo);

class Women extends Component {
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
      {
        nama: "Nama",
        harga: "20.000",
        imageUrl:"images/Logo.png"
      },
  ],
  };
  render() {
    return (
      <div id="women">
        <div className="container" id="container-1">
          <span className="highlights kollektif">Women</span>
          <div className="section-1">
          <div class="d-flex justify-content-start flex-wrap flex-row bd-highlight mb-3">
            {
              this.state.barang.map((item, index) => {
                return (
                  <div class="p-2" key={index}>
                    <ItemCard cardTitle={item.nama} imageUrl={item.imageUrl} harga={item.harga}/>
                  </div>

                )
              })
            }
          </div>
        </div>
        </div>
        
      </div>
    );
  }
}

export default Women;

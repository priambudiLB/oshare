import React, { Component } from 'react';
import './App.css';
import DetailCard from './DetailCard';

class Detail extends Component {
  state = {
    barang: [
      {
        nama: "Item 1",
        harga: "Rp200.000",
        deskripsi:"Smooth and finished leather (Available in size 36-40)",
        image:"./images/sepatu.jpg"
      }
    ],
  };
  render() {
    return (
      <div className="container" id="container-detail">
        {
          this.state.barang.map((item, index) => {
            return (
              <div class="p-2" key={index}>
                <DetailCard nama={item.nama} image={item.image} harga={item.harga} deskripsi={item.deskripsi}/>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Detail;

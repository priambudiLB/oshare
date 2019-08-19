import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class ItemCard extends Component {
  state = {
    barang: [],
    instagram: [],
  };

  componentDidMount() {
    const ig = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=261163481.72da9dd.8e4e214dc2c047a9b8482cb8110f4f15';
    const url = 'https://demo4294574.mockable.io/items/';
    axios.get(url).then((res) => {
      this.setState({
        barang: res.data.items,
      });
    });
    axios.get(ig).then((res) => {
      console.log(res.data.data);
      this.setState({
        instagram: res.data.data,
      });
      console.log(this.state.instagram[0].caption.text)
    })
  }

  render() {
    return (
        <div className="card" id="card-1">
        <center><h5 className="card-title">Card title</h5></center>
          <img className="card-img-top" src="/images/Logo.png"  alt="sepatu-1"/>
          <div className="card-body">
            <p className="card-text">Harga</p>
            <a href="/" className="btn btn-primary" id="cart-button">Add to cart</a>
          </div>
        </div>
    );
  }
}

export default ItemCard;

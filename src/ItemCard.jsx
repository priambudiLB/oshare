import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class ItemCard extends Component {
  state = {
    barang: [],
  };

  render() {
    return (
        <div className="card" id="card-1">
        <center><h5 className="card-title">{this.props.cardTitle}</h5></center>
          <img className="card-img-top" src={this.props.imageUrl}  alt="sepatu-1"/>
          <div className="card-body">
            <p className="card-text">{this.props.harga}</p>
            <a href="/" className="btn btn-primary" id="cart-button">Add to cart</a>
          </div>
        </div>
    );
  }
}

export default ItemCard;

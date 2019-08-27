import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class ItemCard extends Component {
  componentDidMount() {
    console.log("Item Card" + this.props.deskripsi)
  }

  render() {
        return (
          <Link
            to={{
              pathname: `/detail`,
              state: {
                title: this.props.cardTitle,
                imageUrl: this.props.imageUrl,
                harga: this.props.harga,
                deskripsi: this.props.deskripsi,
              },
            }}
          >
            <div className="card" id="card-1">
                <div id="card-2">
                    <center><h5 className="card-title">{this.props.cardTitle}</h5></center>
                    <center><img className="card-img-top" id="card-images" src={this.props.imageUrl} alt="sepatu-1" /></center>
                    <div className="card-body">
                        <p className="card-text">{this.props.harga}</p>
                      <Link to="/cart" >
                        <div className="btn btn-primary" id="cart-button">
                          <span className="glacial-indifference item-card thin" >ADD TO </span>
                          <span className="kollektif-bold item-card">CART</span>
                        </div>
                      </Link>
                    </div>
                </div>
            </div>
          </Link>
        );
    }
}

export default ItemCard;

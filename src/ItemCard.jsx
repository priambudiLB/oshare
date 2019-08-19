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
                <div id="card-2">
                    <center><h5 className="card-title">{this.props.cardTitle}</h5></center>
                    <center><img className="card-img-top" id="card-images" src={this.props.imageUrl} alt="sepatu-1" /></center>
                    <div className="card-body">
                        <p className="card-text">{this.props.harga}</p>
                        <a href="/" className="btn btn-primary" id="cart-button">
                        <span className="glacial-indifference item-card thin" >ADD TO </span>
                        <span className="kollektif-bold item-card">CART</span>
                        </a>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default ItemCard;

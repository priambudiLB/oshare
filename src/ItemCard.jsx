import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import {convertToRupiah} from "./ItemCheckout";

class ItemCard extends Component {
  componentDidMount() {
    
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
                catalogs: this.props.catalogs,
                id: this.props.id
              },
            }}
          >
            <div className="card" id="card-1">
                <div id="card-2">
                    <center><h5 className="card-title">{this.props.cardTitle}</h5></center>
                    <center><img className="card-img-top" id="card-images" src={this.props.imageUrl} alt="katalog" /></center>
                    <div className="card-body">
                        <p className="card-text">{convertToRupiah(this.props.harga)}</p>
                      
                    </div>
                </div>
            </div>
          </Link>
        );
    }
}

export default ItemCard;

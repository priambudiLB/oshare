import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import {convertToRupiah} from "./ItemCheckout";

class ItemCard extends Component {
  componentDidMount() {
    
  }

  async addToCart(id, size, quantity) {
    console.log("addtocart");
    let headers = { "Content-Type": "application/json", "Authorization":  "Token "+localStorage.getItem("token") };
    let body = JSON.stringify({ id, size, quantity });
    console.log(body);
    return fetch("http://o-share-backend.herokuapp.com/cart/increment", {
      headers,
      body,
      method: "POST"
    }).then(res => {
      if (res.status === 200) {
        return res.json().then(data => {
          this.setState({ token: data.token }, () => {
            // localStorage.setItem("token", data.token);
            window.location.assign("/cart");
          });

          return { status: res.status, data };
        });
      } else {
        console.log("Server Error!");
        throw res;
      }
    });
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
                    <center><img className="card-img-top" id="card-images" src={this.props.imageUrl} alt="sepatu-1" /></center>
                    <div className="card-body">
                        <p className="card-text">{convertToRupiah(this.props.harga)}</p>
                      
                        <div onClick={()=>this.addToCart(this.props.id, this.props.sizes, 1)} className="btn btn-primary" id="cart-button">
                          <span className="glacial-indifference item-card thin" >ADD TO </span>
                          <span className="kollektif-bold item-card">CART</span>
                        </div>
                      
                    </div>
                </div>
            </div>
          </Link>
        );
    }
}

export default ItemCard;

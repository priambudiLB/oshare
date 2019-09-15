import React, { Component } from "react";
import "./App.css";
import { convertToRupiah } from "./ItemCheckout";
// import Axios from 'axios';
// import qs from "query-string";

class DetailCard extends Component {
  deskripsi = this.props.deskripsi.split(";");
  constructor(props) {
    super(props);
    this.state = {
      sizeValue: "",
      quantityValue: '',
      maxValue: 0,
      isLoading: false,
    };
    this.handleSizeValue = this.handleSizeValue.bind(this);
    this.handleQuantityValue = this.handleQuantityValue.bind(this);
  }

  componentDidMount(){
    // this.addToCart(this.props.id, '39', '1')
    // console.log(this.props)
  }
  addToCart(product_id, size, quantity) {
    if(this.state.isLoading){
      return true
    }
    this.setState({isLoading: true})
    console.log("addtocart" + product_id);
    let headers = { 
      "Content-Type": "application/json", 
      "Authorization":  "Token "+localStorage.getItem("token")
    };
    let body = JSON.stringify({ product_id, size, quantity });
    console.log(headers);
    console.log(body);
    return fetch("http://o-share-backend.herokuapp.com/cart/add", {
      headers,
      body,
      method: "POST"
    }).then(res => {
      if (res.status === 201) {
        return res.json().then(data => {
          this.setState({ token: data.token }, () => {
            // localStorage.setItem("token", data.token);
            this.setState({isLoading: false})
            window.location.assign("/cart");
          });

          return { status: res.status, data };
        });
      } else {
        console.log("Server Error!");
        throw res;
      }
    });

    // let url = "http://o-share-backend.herokuapp.com/cart/add";
    // let body = {
    //   id: id,
    //   size: size,
    //   quantity: quantity,
    // };
    // console.log(body);
    // let config = {
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded"
    //   }
    // };
    // Axios.post(url, qs.stringify(body), config).catch(function(error) {
    //   console.log(error);
    // });
  }

  handleSizeValue(event) {
    this.setState({ sizeValue: event.target.value, maxValue: this.getMaxValueFromSize(event.target.value) });
  }

  handleQuantityValue(event) {
    this.setState({ quantityValue: event.target.value});
  }

  getMaxValueFromSize(size){
      let temp = 0;
    this.props.catalogs.forEach(element => {
          if(element.size === parseInt(size)){
              temp = element.quantity
          }
      });
      return temp
  }
  render() {
    return (
      <div className="detail-item">
        <div className="container" id="detail-height">
          <div className="row" id="row-1">
            <div className="col-sm-2"></div>
            <div className="col-sm-10">
              <span className="highlights kollektif" id="detail-title">
                {/* {this.props.nama} */}
              </span>
            </div>
          </div>
          <div className="row" id="row-2">
            <div className="col-xl-2" />
            <div className="col-xl-4">
              <div className="container" id="container-img">
                <img
                  className="card-img-top"
                  id="detail-images"
                  src={this.props.image}
                  alt="detail-item"
                />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card" id="detail-card">
                <div className="card-body" id="card-body-title">
                  <h5 className="highlights kollektif" id="product-title">
                    {this.props.nama}
                  </h5>
                  <p className="kollektif" id="detail-price">
                    {convertToRupiah(this.props.harga)}
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item kollektif" id="description">
                    {this.deskripsi.map((i, index) => {
                      return <div key={index}>{i}</div>;
                    })}
                  </li>
                  {/* <li className="list-group-item">WOMEN's SIZE</li> */}
                  <li className="list-group-item">
                    <form>
                      <div className="form-group row">
                        <label className="col-sm-2 col-form-label">SIZE</label>
                        <select
                          className="custom-select"
                          id="select-size"
                          value={this.state.sizeValue}
                          onChange={this.handleSizeValue}
                        >
                        <option/>
                          {this.props.catalogs.map((item, index) => {
                            return <option key={index}>{item.size}</option>;
                          })}
                        </select>
                        <label className="col-sm-1"></label>
                        <label className="col-sm-3 col-form-label">
                          QUANTITY
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          name="quantity"
                          min="1"
                          max={this.state.maxValue.toString()}
                          id="select-qty"
                          value={this.state.quantityValue}
                          onChange={this.handleQuantityValue}
                        />
                      </div>
                      <div className="form-group">
                        <div
                          onClick={()=>this.addToCart(this.props.id, this.state.sizeValue, this.state.quantityValue)}
                          className="btn btn-dark btn-sm btn-lg btn-block"
                        >
                          {this.state.isLoading ? <span className="kollektif" id="thin-word">
                            Loading...
                          </span> : <span><span className="kollektif" id="thin-word">
                            ADD TO{" "}
                          </span>
                          <span className="kollektif">CART</span></span>}
                        </div>
                      </div>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailCard;

import React, { Component } from "react";
import "./App.css";
import { convertToRupiah } from "./ItemCheckout";

class DetailCard extends Component {
  deskripsi = this.props.deskripsi.split(";");
  constructor(props) {
    super(props);
    this.state = {
      sizeValue: "",
      maxValue: 0,
    };
    this.handleSizeValue = this.handleSizeValue.bind(this);
  }

  handleSizeValue(event) {
    this.setState({ sizeValue: event.target.value, maxValue: this.getMaxValueFromSize(event.target.value) });
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
                {this.props.nama}
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
                  <li className="list-group-item">WOMEN's SIZE</li>
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
                        />
                      </div>
                      <div className="form-group">
                        <button
                          type=""
                          className="btn btn-dark btn-sm btn-lg btn-block"
                        >
                          <span className="kollektif" id="thin-word">
                            ADD TO{" "}
                          </span>
                          <span className="kollektif">CART</span>
                        </button>
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

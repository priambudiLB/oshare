import React, { Component } from "react";
import "./App.css";
import { convertToRupiah, ItemCheckout } from "./ItemCheckout";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      province: [],
      city: [],
      provinceValue: "",
      cityValue: "",
      deliveryFee: 0,
      addressBE: "-",
      address: "",
      radio: "1",

      barang:[],
      total_price:0,

    };
    this.handleChangeProvince = this.handleChangeProvince.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChecked1 = this.handleChecked1.bind(this);
    this.handleChecked2 = this.handleChecked2.bind(this);
  }
  async componentDidMount() {
    this.getCart()
    this.getProvinces();
  }

  async getCart() {
    let t = await fetch("http://o-share-backend.herokuapp.com/checkout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization":  "Token "+localStorage.getItem("token")
      }
    });
    let t2 = await t.json();
    if (!(t2 === undefined || t2.length === 0)) {
      this.setState({ barang: t2[0].items, total_price: t2[0].total_price, addressBE: t2[0].user.default_address.street_name });
  }
    console.log(t2)
  }

  handleChecked1() {
    this.setState({ radio: "1", address: this.state.addressBE });
    console.log("handle 1 " + this.state.radio);
  }

  checkout(isDefault, nama_jalan, kelurahan, kecamatan, kota, provinsi, kode_pos) {
    console.log("checkout");
    let headers = { 
      "Content-Type": "application/json", 
      "Authorization":  "Token "+localStorage.getItem("token") 
    };
    let body = JSON.stringify({ isDefault, nama_jalan, kelurahan, kecamatan, kota, provinsi, kode_pos });
    console.log(body);
    return fetch("http://o-share-backend.herokuapp.com/checkout/finalize", {
      headers,
      body,
      method: "POST"
    }).then(res => {
      if (res.status === 200) {
        return res.json().then(data => {
          this.setState({ token: data.token }, () => {
            // localStorage.setItem("token", data.token);
            window.location.assign("/");
          });

          return { status: res.status, data };
        });
      } else {
        console.log("Server Error!");
        throw res;
      }
    });
  }

  handleCheckout(){
    if(this.state.radio === "1"){
      this.checkout(
        'True', 
        '', 
        '',
        '',
        this.state.cityValue, 
        this.state.provinceValue.split(',')[1], 
        ''
      )
    } else{
      this.checkout(
        "False", 
        this.state.address, 
        'kelurahan',
        'kecamatan',
        this.state.cityValue, 
        this.state.provinceValue.split(',')[1], 
        'kode pos')
    }
  }

  handleChecked2() {
    this.setState({ radio: "2", address: "" });
    console.log("handle 2 " + this.state.radio);
  }

  handleChangeProvince(event) {
    this.setState({ provinceValue: event.target.value });
    this.getCity(event.target.value.split(',')[0]);
  }

  handleChangeCity(event) {
    this.setState({ cityValue: event.target.value });
    this.getCost(event.target.value);
  }

  clearContents(element) {
    element.value = '';
  }

  async getCity(province) {
    let t = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.rajaongkir.com/starter/city?province=${province}`,
      {
        method: "GET",
        headers: {
          key: "70748c94fb7d6b17105fc1118412c192",
          "Content-Type": "application/json"
        }
      }
    );
    let t2 = await t.json();
    this.setState({ city: t2.rajaongkir.results });
    console.log(t2.rajaongkir.results);
  }

  async getProvinces() {
    let t = await fetch(
      "https://cors-anywhere.herokuapp.com/https://api.rajaongkir.com/starter/province",
      {
        method: "GET",
        headers: {
          key: "70748c94fb7d6b17105fc1118412c192",
          "Content-Type": "application/json"
        }
      }
    );
    let t2 = await t.json();
    this.setState({ province: t2.rajaongkir.results });
    // console.log(t2.rajaongkir.results);
  }

  async getCost(destination) {
    let t = await fetch(
      "https://cors-anywhere.herokuapp.com/https://api.rajaongkir.com/starter/cost",
      {
        method: "POST",
        headers: {
          key: "70748c94fb7d6b17105fc1118412c192",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          origin: "154",
          destination: destination,
          weight: 1700,
          courier: "jne"
        })
      }
    );
    let t2 = await t.json();
    console.log(t2.rajaongkir.results[0].costs[0].cost[0].value);
    this.setState({
      deliveryFee: t2.rajaongkir.results[0].costs[0].cost[0].value
    });
  }

  render() {
    let totals = (name, price) => {
      return (
        <div className="row">
          <div className="col totals glacial-indifference-bold">{name}</div>
          <div className="col text-right totals glacial-indifference">
            {price}
          </div>
        </div>
      );
    };
    return (
      <div id="women">
        <div className="container" id="container-1">
          <span className="highlights glacial-indifference thin">
            CHECK<span className="highlights kollektif-bold">OUT</span>
          </span>

          <div className="row">
            <div className="col-sm-4">
              <div className="totals glacial-indifference-bold">YOUR CART</div>
              <div className="divider" />
              {this.state.barang == null?<div/>:this.state.barang.map((item)=>{
                return(
                  <ItemCheckout
                itemName={item.product.title}
                itemSize={item.product.size}
                itemPrice={parseInt(item.subtotal)}
                itemImage={item.product.images[0].image}
                itemQuantity={item.quantity}
              />
                  
                )
              })}
              <div className="divider" />
              {totals("SUBTOTAL", convertToRupiah(this.state.total_price))}
              <div className="divider" />
              {totals("DELIVERY FEE", convertToRupiah(this.state.deliveryFee))}
              <div className="divider" />
              {totals("TOTAL", convertToRupiah(this.state.total_price+this.state.deliveryFee))}
            </div>
            <div className="col-sm-8">
              <form>
                <div className="form-row">
                <div className="form-group col-md-6">
                    <label
                      className="kollektif-bold label"
                      htmlFor="inputPassword4"
                    >
                      PROVINCE
                    </label>
                    <select
                      value={this.state.provinceValue}
                      onChange={this.handleChangeProvince}
                      className="form-control"
                      id="inputPassword4"
                    >
                      <option>Choose...</option>
                      {this.state.province.map((item, index) => {
                        return (
                          <option key={index} value={`${item.province_id},${item.province}`}>
                            {item.province}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label className="kollektif-bold label" htmlFor="inputCity">
                      CITY
                    </label>
                    <select
                      value={this.state.cityValue}
                      onChange={this.handleChangeCity}
                      className="form-control"
                      id="inputCity"
                    >
                      <option>Choose...</option>
                      {this.state.city.map((item, index) => {
                        return (
                          <option key={index} value={item.city_name}>
                            {item.city_name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  
                </div>
                <div className="form-group">
                  <label
                    className="kollektif-bold label"
                    htmlFor="inputAddress"
                  >
                    Address
                  </label>
                  <div className="form-row">
                    <div className="form-check">
                      <input
                        onClick={this.handleChecked1}
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios1"
                        value="option1"
                        onChange={this.handleChecked1}
                        checked={this.state.radio === "1"}
                      ></input>
                      <label className="form-check-label" htmlFor="gridRadios1">
                        Use my default address
                      </label>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-check">
                      <input
                        onClick={this.handleChecked2}
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios2"
                        value="option2"
                      ></input>
                      <label className="form-check-label" htmlFor="gridRadios2">
                        Use new address
                      </label>
                    </div>
                  </div>
                  <div className="form-row">
                    {this.state.radio === "1" ? (
                      <textarea
                        className="span6 form-control"
                        rows="3"
                        value={this.state.address}
                        required
                        disabled
                      ></textarea>
                    ) : (
                      <textarea
                        className="span6 form-control"
                        rows="3"
                        placeholder={""}
                        required
                      ></textarea>
                    )}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label className="kollektif-bold label" htmlFor="inputCity">
                      POSTAL CODE
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                      placeholder="Postal Code"
                    />
                  </div>
                </div>
                <div
                  className="btn btn-primary"
                  onClick={
                    ()=>this.handleCheckout()
                    }
                >
                  CHECKOUT
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;

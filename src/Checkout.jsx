import React, { Component } from "react";
import "./App.css";
import {convertToRupiah, ItemCheckout} from "./ItemCheckout";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      province: [],
      city: [],
      provinceValue: '',
      cityValue: '',
      deliveryFee: 0,
      address: 'Alamat 1'
    };
    this.handleChangeProvince = this.handleChangeProvince.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
  }
  async componentDidMount() {
    this.getProvinces();
  }

  handleChangeProvince(event) {
    this.setState({provinceValue: event.target.value});
    this.getCity(event.target.value)
  }

  handleChangeCity(event) {
    this.setState({cityValue: event.target.value});
    this.getCost(event.target.value)
  }

  async getCity(province){
    let t = await fetch(`https://cors-anywhere.herokuapp.com/https://api.rajaongkir.com/starter/city?province=${province}`, {
      method: "GET",
      headers: {
        "key": "70748c94fb7d6b17105fc1118412c192",
        "Content-Type": 'application/json'
      },
    });
    let t2 = await t.json();
    this.setState({city: t2.rajaongkir.results})
    console.log(t2.rajaongkir.results)
  }

  async getProvinces(){
    let t = await fetch('https://cors-anywhere.herokuapp.com/https://api.rajaongkir.com/starter/province', {
      method: "GET",
      headers: {
        "key": "70748c94fb7d6b17105fc1118412c192",
        "Content-Type": 'application/json'
      },
    });
    let t2 = await t.json();
    this.setState({province: t2.rajaongkir.results})
    console.log(t2.rajaongkir.results)
  }

  async getCost(destination){
    let t = await fetch('https://cors-anywhere.herokuapp.com/https://api.rajaongkir.com/starter/cost', {
      method: "POST",
      headers: {
        "key": "70748c94fb7d6b17105fc1118412c192",
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        "origin": "154",
        "destination": destination,
        "weight": 1700,
        "courier": "jne"
      })
    });
    let t2 = await t.json();
    console.log(t2.rajaongkir.results[0].costs[0].cost[0].value)
    this.setState({deliveryFee: t2.rajaongkir.results[0].costs[0].cost[0].value})
  }

  render() {
    let totals = (name, price) => {
      return(
        <div className='row'>
          <div className='col totals glacial-indifference-bold'>{name}</div>
          <div className='col text-right totals glacial-indifference'>{price}</div>
        </div>
      )
    }
    return (
      <div id="women">
        <div className="container" id="container-1">
          <span className="highlights glacial-indifference thin">
            CHECK<span className="highlights kollektif-bold">OUT</span>
          </span>

          <div className="row">
            <div className="col-sm-4">
              <div className='totals glacial-indifference-bold'>YOUR CART</div>
              <div className='divider' />
              <ItemCheckout itemName={'Item 1'} itemSize={30} itemPrice={'300000'}/>
              <ItemCheckout itemName={'Item 2'} itemSize={40} itemPrice={'125000'}/>
              <div className='divider' />
              {totals('DELIVERY FEE', convertToRupiah(this.state.deliveryFee))}
              <div className='divider' />
              {totals('SUBTOTAL', 42)}
              <div className='divider' />
              {totals('ADMIN FEE', 42)}
              <div className='divider' />
              {totals('TOTAL', 42)}
            </div>
            <div className="col-sm-8">
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label className='kollektif-bold label' htmlFor="inputEmail4">FULL NAME</label>
                    <input type="text" className="form-control" id="inputEmail4" placeholder="Full Name"/>
                  </div>
                  <div className="form-group col-md-6">
                    <label className='kollektif-bold label' htmlFor="inputPassword4">PROVINCE</label>
                    <select value={this.state.provinceValue} onChange={this.handleChangeProvince} className="form-control" id="inputPassword4">
                      <option>Choose...</option>
                      {this.state.province.map((item, index)=>{
                        return(
                          <option key={index} value={item.province_id}>{item.province}</option>
                        )
                      })}
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label className='kollektif-bold label' htmlFor="inputEmail4">EMAIL ADDRESS</label>
                    <input type="text" className="form-control" id="inputEmail4" placeholder="Email Address"/>
                  </div>
                  <div className="form-group col-md-6">
                    <label className='kollektif-bold label' htmlFor="inputCity">CITY</label>
                    <select value={this.state.cityValue} onChange={this.handleChangeCity} className="form-control" id="inputCity">
                      <option>Choose...</option>
                      {this.state.city.map((item, index)=>{
                        return(
                          <option key={index} value={item.city_id}>{item.city_name}</option>
                        )
                      })}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className='kollektif-bold label' htmlFor="inputAddress">Address</label>
                  <div className="form-row">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked></input>
                      <label class="form-check-label" htmlFor="gridRadios1">
                        First radio
                      </label>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"></input>
                      <label className="form-check-label" htmlFor="gridRadios2">
                        Second radio
                      </label>
                    </div>
                  </div>
                  <div className="form-row">
                  <textarea className="span6 form-control" rows="3" placeholder={this.state.address} required></textarea>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label className='kollektif-bold label' htmlFor="inputCity">POSTAL CODE</label>
                    <input type="text" className="form-control" id="inputCity" placeholder="Postal Code"/>
                  </div>
                  <div className="form-group col-md-6">
                    <label className='kollektif-bold label' htmlFor="inputCity">MOBILE PHONE</label>
                    <input type="text" className="form-control" id="inputCity" placeholder="Mobile Phone"/>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary" disabled={true}>CHECKOUT</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;

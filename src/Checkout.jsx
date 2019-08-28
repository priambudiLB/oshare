import React, { Component } from "react";
import "./App.css";
import {ItemCheckout} from "./ItemCheckout";

class Checkout extends Component {
  state = {};
  async componentDidMount() {

    let data = {
      "origin": "501",
      "destination": "114",
      "weight": 1700,
      "courier": "jne"
    };
    let t = await fetch('https://api.rajaongkir.com/starter/cost', {
      method: "POST",
      mode: 'cors',
      headers: {
        "key": "70748c94fb7d6b17105fc1118412c192",
        "content-type": "application/x-www-form-urlencoded"
      },
      body: JSON.stringify(data)
    });
    // let t = await fetch({
    //   "method": "POST",
    //   "hostname": "api.rajaongkir.com",
    //   "port": null,
    //   "path": "/starter/cost",
    //   "headers": {
    //     "key": "70748c94fb7d6b17105fc1118412c192",
    //     "content-type": "application/x-www-form-urlencoded"
    //   }
    // });
    let t2 = await t.json();
    console.log(t2)
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
                    <select className="form-control" id="inputPassword4">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label className='kollektif-bold label' htmlFor="inputEmail4">EMAIL ADDRESS</label>
                    <input type="text" className="form-control" id="inputEmail4" placeholder="Email Address"/>
                  </div>
                  <div className="form-group col-md-6">
                    <label className='kollektif-bold label' htmlFor="inputPassword4">CITY</label>
                    <input type="text" className="form-control" id="inputPassword4" placeholder="City"/>
                  </div>
                </div>
                <div className="form-group">
                  <label className='kollektif-bold label' htmlFor="inputAddress">Address</label>
                  <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
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

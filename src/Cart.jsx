import React, { Component } from 'react';
import './App.css';
import {convertToRupiah, ItemCheckout} from "./ItemCheckout";
import {Link} from "react-router-dom";

class Cart extends Component {
  state = {
    barang: [],
  };

  componentDidMount() {
  }

  render() {
    let tableItem = (itemName, itemSize, price) => {
      return(
        <tr>
          <th scope="row"><ItemCheckout itemName={itemName} itemSize={itemSize} /></th>
          <td><span className='float-right'>{convertToRupiah((price))}</span></td>
          <td><div className='text-center'><img alt={'cart'} src={require('./Icons/Vector.png')} width="18" height="21" /></div></td>
        </tr>
      )
    }
    return (
      <div>
        <h1>test</h1>
        <section>
          <div className='container' style={{'margin-top': '5vh'}}>
            <span className="highlights glacial-indifference">Shopping </span><span
            className="highlights kollektif-bold">Cart</span>
            <table className="table">
              <thead>
              <tr>
                <th scope="col"><span className='float-left' style={{width: '16.66%'}}>Item</span></th>
                <th scope="col"><span className='float-right'>Price</span></th>
                <th scope="col" style={{width: '10%'}}></th>
              </tr>
              </thead>
              <tbody>
              {tableItem('item 1', 36, '120000')}
              {tableItem('item 1', 36, '120000')}
              {tableItem('item 1', 36, '120000')}
              </tbody>
            </table>
            <div className='divider' />
            <div className='container info'>
              <div className='row justify-content-between'>
                <div>SUBTOTAL</div>
                <div>125000</div>
              </div>
              <div className='row justify-content-between'>
                <div>ADMIN FEE</div>
                <div>10000</div>
              </div>
              <div className='row justify-content-between'>
                <div>TOTAL</div>
                <div>135000</div>
              </div>
              <div className='row continue justify-content-between'>
                <div className='btn btn-outline-primary'>CONTINUE SHOPPING</div>
                <Link to="/checkout">
                  <a href="/checkout">
                    <div className='btn btn-primary'>CHECKOUT</div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div style={{height: '10vh'}} />
      </div>
    );
  }
}

export default Cart;

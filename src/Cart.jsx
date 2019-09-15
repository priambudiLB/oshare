import React, { Component } from 'react';
import './App.css';
import {convertToRupiah, ItemCheckout} from "./ItemCheckout";
import {Link} from "react-router-dom";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barang:[],
      total_price:0,
    };
  }

  componentDidMount() {
    this.getCart()
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
    this.setState({ barang: t2[0].items, total_price: t2[0].total_price });
    console.log(t2)
  }

  render() {
    let tableItem = (itemName, itemSize, price, itemImage, itemQuantity) => {
      return(
        <tr>
          <th scope="row"><ItemCheckout itemQuantity={itemQuantity} itemImage={itemImage} itemName={itemName} itemSize={itemSize} /></th>
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
              {this.state.barang == null?<div/>:this.state.barang.map((item)=>{
                return(
                  tableItem(item.product.title, item.product.size, parseInt(item.subtotal), item.product.images[0].image, item.quantity)
                )
              })}
              </tbody>
            </table>
            <div className='divider' />
            <div className='container info'>
              <div className='row justify-content-between'>
                <div>TOTAL</div>
                <div>{convertToRupiah(this.state.total_price)}</div>
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

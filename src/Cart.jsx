import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Cart extends Component {
  state = {
    barang: [],
    instagram: [],
  };

  componentDidMount() {
    const ig = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=261163481.72da9dd.8e4e214dc2c047a9b8482cb8110f4f15';
    const url = 'https://demo4294574.mockable.io/items/';
    axios.get(url).then((res) => {
      this.setState({
        barang: res.data.items,
      });
    });
    axios.get(ig).then((res) => {
      console.log(res.data.data);
      this.setState({
        instagram: res.data.data,
      });
      console.log(this.state.instagram[0].caption.text)
    })
  }

  convertToRupiah(angka)
  {
    var rupiah = '';
    var angkarev = angka.toString().split('').reverse().join('');
    for(var i = 0; i < angkarev.length; i++) if(i%3 === 0) rupiah += angkarev.substr(i,3)+'.';
    return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
  }

  render() {
    let item = (itemName, itemSize) => {
      return(
        <div className='container'>
          <div className='row'>
            <img alt={'item'} src={require('./Icons/image.png')} width='100vw' height="140vw" />
            <div className='col'>
              <div className="glacial-indifference">{itemName}</div>
              <div className="glacial-indifference-bold">Size {itemSize}</div>
            </div>
          </div>
        </div>
      )
    }

    let tableItem = (itemName, itemSize, price) => {
      return(
        <tr>
          <th scope="row">{item(itemName, itemSize)}</th>
          <td><span className='float-right'>{this.convertToRupiah((price))}</span></td>
          <td><div className='text-center'><img alt={'cart'} src={require('./Icons/Vector.png')} width="18" height="21" /></div></td>
        </tr>
      )
    }
    return (
      <div>
        <h1>test</h1>
        <section>
          <div className='container'>
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
              {tableItem('item 1', 36, 120000)}
              {tableItem('item 1', 36, 120000)}
              {tableItem('item 1', 36, 120000)}
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
                <a href="/checkout">
                <div className='btn btn-primary'>CHECKOUT</div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Cart;

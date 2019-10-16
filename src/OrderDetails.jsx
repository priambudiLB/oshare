import React, { Component } from 'react';
import './App.css';
import { convertToRupiah } from "./ItemCheckout";
import { getBaseUrl } from "./Utils";

class OrderDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
      bankAccounts: [],
    };
  }
  componentDidMount(){
    this.getOrder()
    this.getBank()
  }
  async getOrder() {
    let t = await fetch(`${getBaseUrl}/checkout/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token")
      }
    });
    let t2 = await t.json();
    console.log(t2);
    if (t2.detail === "Invalid token."){
      window.location.assign("/login")
    } else {
      this.setState({order: t2})
    }
  }

  async getBank() {
    let t = await fetch(`${getBaseUrl}/api/auth/bank`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token")
      }
    });
    let t2 = await t.json();
    console.log(t2);
    if (t2.detail === "Invalid token.") {
      window.location.assign("/login");
    } else if (!(t2 === undefined || t2.length === 0)) {
      this.setState({ bankAccounts: t2 });
    }
  }

  render() {
    return (
      <div className="container" id="order">
          <div className="col text-center">
              <h1 className="highlights kollektif">Orders</h1>
              <p>Click an order below to submit Payment Details. Available Bank Accounts:</p>
              {this.state.bankAccounts.map((item, index)=>{
                  return(
                    <div>{`${item.bank} / ${item.nomor_rekening} / ${item.pemilik_nomor_rekening}`}</div>
                  )
                })}
                <p/>
          </div>
          
          <div className="row">
            
            <table class="table table-hover">
                <thead>
                    <tr className="kollektif">
                    <th scope="col">JNE Airwaybill</th>
                    <th scope="col">Date Issued</th>
                    {/* <th scope="col">Payment Deadline</th> */}
                    <th scope="col">Total</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.order.map((res, index)=>{
                  return(
                    
                    <tr key={index} onClick={()=>window.location.assign(`/confirm/${res.id}`)}>
                    <td>{res.no_resi}</td>
                    <td>{res.order_date}</td>
                    {/* <td>{res.order_date}</td> */}
                    <td>{convertToRupiah(res.total)}</td>
                    <td>{res.status}</td>
                    </tr>
                    
                  )
                })}
                </tbody>
            </table>
          </div>
          
      </div>
    );
  }
}

export default OrderDetails;

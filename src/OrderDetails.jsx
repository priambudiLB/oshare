import React, { Component } from 'react';
import './App.css';
import { convertToRupiah } from "./ItemCheckout";
import { getBaseUrl } from "./Utils";

class OrderDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
    };
  }
  componentDidMount(){
    this.getOrder()
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
  render() {
    return (
      <div className="container" id="order">
          <div className="col text-center">
              <h1 className="highlights kollektif">Orders</h1>
              <p>Click to submit Payment Details</p>
          </div>
          
          <div className="row">
            
            <table class="table table-hover">
                <thead>
                    <tr className="kollektif">
                    <th scope="col">Invoice</th>
                    <th scope="col">Date Issue</th>
                    <th scope="col">Payment Deadline</th>
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
                    <td>{res.order_date}</td>
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

import React, { Component } from 'react';
import './App.css';

class OrderDetails extends Component {
  render() {
    return (
      <div className="container" id="order">
          <div className="row justify-content-center">
              <h1 className="highlights kollektif">Orders</h1>
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
                    <tr>
                    <td>Resi 1</td>
                    <td>02-11-2018</td>
                    <td>03-11-2018</td>
                    <td>299000</td>
                    <td>Completed</td>
                    </tr>
                    <tr>
                    <td>Resi 2</td>
                    <td>02-11-2018</td>
                    <td>03-11-2018</td>
                    <td>190000</td>
                    <td>On Process</td>
                    </tr>
                    <tr>
                    <td>Resi 3</td>
                    <td>02-11-2018</td>
                    <td>03-11-2018</td>
                    <td>89000</td>
                    <td>Cancelled</td>
                    </tr>
                </tbody>
            </table>
          </div>
          
      </div>
    );
  }
}

export default OrderDetails;

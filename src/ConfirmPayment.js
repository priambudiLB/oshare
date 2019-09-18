import React, { Component } from "react";
import "./App.css";

class ConfirmPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
  }

  componentDidMount(){
    const { id } = this.props.match.params;
    console.log(id);
    this.setState({id: id})
    this.confirm()
  }

  confirm(id, nama, receipt, amount, payment_to) {
    console.log("checkout");
    let headers = { 
      "Content-Type": "application/json", 
      "Authorization":  "Token "+localStorage.getItem("token") 
    };
    let body = JSON.stringify({ id, nama, receipt, amount, payment_to });
    console.log(body);
    return fetch("http://o-share-backend.herokuapp.com/checkout/confirmation", {
      headers,
      body,
      method: "POST"
    }).then(res => {
      if (res.status === 200) {
        console.log(res)
      } else {
        console.log("Server Error!");
        throw res;
      }
    });
  }

  render() {
    return (
      <div id="confirm">
        <div className="container" id="container-1">
          <span className="highlights glacial-indifference thin">
            PAYMENT <span className="highlights kollektif-bold">CONFIRMATION</span>
          </span>
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label className="kollektif-bold label" htmlFor="inputEmail4">
                  Order ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group col-md-6">
                <label className="kollektif-bold label" htmlFor="inputEmail4">
                  Sender Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group col-md-6">
                <label className="kollektif-bold label" htmlFor="inputEmail4">
                  Amount Transferred
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group col-md-6">
                <label className="kollektif-bold label" htmlFor="inputEmail4">
                  Payment to
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group col-md-6">
                <label className="kollektif-bold label" htmlFor="inputEmail4">
                  Receipt File
                </label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1" />
              </div>
            </div>
            <div className="form-row"></div>

            <div onClick={()=>this.confirm()} className="btn btn-primary" disabled={true}>
              Confirm Payment
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ConfirmPayment;

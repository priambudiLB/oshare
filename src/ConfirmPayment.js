import React, { Component } from "react";
import "./App.css";
import axios from 'axios';

class ConfirmPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      file: "",
      name: "",
      amount: "",
      to: "",
      uploading: false
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
    this.handleTo = this.handleTo.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    this.setState({ id: id });
    // this.getConfirm(id)
  }

  handleFile(event) {
    console.log(event.target.files);
    console.log(this.state);
    this.setState({ file: event.target.files[0] });
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }

  handleAmount(event) {
    this.setState({ amount: event.target.value });
  }

  handleTo(event) {
    this.setState({ to: event.target.value });
  }

  confirm(order_id, nama, receipt, amount, payment_to) {
    console.log("checkout");
    this.setState({uploading: true})
    const body2 = new FormData()
    body2.append("order_id", order_id)
    body2.append("nama", nama)
    body2.append("receipt", receipt, receipt.name)
    body2.append("amount", amount)
    body2.append("payment_to", payment_to)
    axios.post("http://o-share-backend.herokuapp.com/checkout/confirmation", body2, {
      headers: {
        'content-type': 'multipart/form-data',
        'Authorization': "Token " + localStorage.getItem("token")
      }
    })
        .then(res => {
          this.setState({uploading: false})
          console.log(res.data);
          window.location.assign("/orders");
        })
        .catch(err => {console.log(err)
          this.setState({uploading: false})})
  }

  getConfirm(order_id) {
    console.log("checkout");
    let headers = {
      "Content-Type": "application/json",
      Authorization: "Token " + localStorage.getItem("token")
    };
    let body = JSON.stringify({ order_id });
    console.log(body);
    return fetch("http://o-share-backend.herokuapp.com/checkout/confirmation", {
      headers,
      body,
      method: "GET"
    }).then(res => {
      if (res.status === 200) {
        console.log(res);
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
            PAYMENT{" "}
            <span className="highlights kollektif-bold">CONFIRMATION</span>
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
                  value={this.state.id}
                  disabled
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group col-md-6">
                <label className="kollektif-bold label" htmlFor="inputEmail4">
                  Sender Name
                </label>
                <input
                  type="text"
                  onChange={this.handleName}
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Type..."
                />
              </div>
              <div className="form-group col-md-6">
                <label className="kollektif-bold label" htmlFor="inputEmail4">
                  Amount Transferred
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.handleAmount}
                  id="inputEmail4"
                  placeholder="Type..."
                />
              </div>
              <div className="form-group col-md-6">
                <label className="kollektif-bold label" htmlFor="inputEmail4">
                  Payment to
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.handleTo}
                  id="inputEmail4"
                  placeholder="Type..."
                />
              </div>
              <div className="form-group col-md-6">
                <label className="kollektif-bold label" htmlFor="inputEmail4">
                  Receipt File
                </label>
                <input
                  onChange={this.handleFile}
                  type="file"
                  class="form-control-file"
                  id="exampleFormControlFile1"
                />
              </div>
            </div>
            <div className="form-row"></div>
            {this.state.uploading ? (
              <div
                onClick={() =>
                  this.confirm(
                    this.state.id,
                    this.state.name,
                    this.state.file,
                    this.state.amount,
                    this.state.to
                  )
                }
                className="btn btn-primary"
                disabled
              >
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              </div>
            ) : (
              <div
                onClick={() =>
                  this.confirm(
                    this.state.id,
                    this.state.name,
                    this.state.file,
                    this.state.amount,
                    this.state.to
                  )
                }
                className="btn btn-primary"
              >
                Confirm Payment
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default ConfirmPayment;

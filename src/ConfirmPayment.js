import React, { Component } from "react";
import "./App.css";

class ConfirmPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
                  Transaction Date
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
                  Email
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

            <button type="submit" className="btn btn-primary" disabled={true}>
              Confirm Payment
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ConfirmPayment;

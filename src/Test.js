import React, { Component } from "react";
import "./App.css";
import { getBaseUrl } from "./Utils";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barang: [],
      total_price: 0,
      deleting: false,
      all: [],
      god: [],
    };
  }

  componentDidMount() {
    this.getCart();
  }

  async getCart() {
    let t = await fetch(`${getBaseUrl}/checkout`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token")
      }
    });
    let t2 = await t.json();
    console.log(t);
    console.log(t2);
    if (t2.detail === "Invalid token.") {
      window.location.assign("/login");
    } else if (!(t2 === undefined || t2.length === 0)) {
      this.setState({ god: t, all: t2, barang: t2[0].items, total_price: t2[0].total });
    }
  }

  render() {
    
    return (
      <div id="cart" style={{marginTop: "15vh"}}>
        <p>{JSON.stringify(this.state.all)}</p>
        <p>{localStorage.getItem("token")}</p>
        <p>{JSON.stringify(this.state.god.url)}</p>
        <p>{JSON.stringify(this.state.god.type)}</p>
        <p>{JSON.stringify(this.state.god.status)}</p>
        <p>{JSON.stringify(this.state.god.statusText)}</p>
      </div>
    );
  }
}

export default Test;

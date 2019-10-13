import React, { Component } from "react";
import "./App.css";
import { getBaseUrl } from "./Utils";

class HowToOrder extends Component {
  state = {
    faq: [],
  };

  componentDidMount() {
    this.getData()
  }

  async getData() {
    let t = await fetch(`${getBaseUrl}/api/auth/hot`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    let t2 = await t.json();
    console.log(t2)
    this.setState({ faq: t2 });
  }

  render() {
    return (
      <div className="container container-1" id="high" >
        <h1>How to Order</h1>
        {this.state.faq.map((item, index)=>{
          return(
            <div className="question" key={index}>
              <span className="glacial-indifference">{item.penjelasan}</span>
            </div>
          )
        })}
      </div>
    );
  }
}

export default HowToOrder;

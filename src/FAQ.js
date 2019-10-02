import React, { Component } from "react";
import "./App.css";
import { getBaseUrl } from "./Utils";

class FAQ extends Component {
  state = {
    faq: [],
  };

  componentDidMount() {
    this.getData()
  }

  async getData() {
    let t = await fetch(`${getBaseUrl}/api/auth/qa`, {
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
      <div className="container tech" id="high" >
        <h1>Frequently Asked Questions</h1>
        {this.state.faq.map((item, index)=>{
          return(
            <div className="question" key={index}>
              <h4 className="kollektif">{item.question}</h4>
              <span className="glacial-indifference">{item.answer}</span>
            </div>
          )
        })}
      </div>
    );
  }
}

export default FAQ;

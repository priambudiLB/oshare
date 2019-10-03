import React, { Component } from "react";
import "./App.css";
import { getBaseUrl } from "./Utils";

class Company extends Component {
  state = {
    company: [],
  };

  componentDidMount() {
    this.getData()
  }

  async getData() {
    let t = await fetch(`${getBaseUrl}/api/auth/companyprofile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    let t2 = await t.json();
    console.log(t2)
    this.setState({ company: t2 });
  }

  render() {
    return (
      <div className="container container-1" id="high" >
        <h1>Company Profile</h1>
        {this.state.company.map((item, index)=>{
          return(
            <div className="question" key={index}>
          <p align="justify" className="glacial-indifference">{item.penjelasan}</p>
        </div>
          )
        })}
      </div>
    );
  }
}

export default Company;

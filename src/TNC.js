import React, { Component } from "react";
import "./App.css";
import { getBaseUrl } from "./Utils";

class TNC extends Component {
  state = {
    tnc: [],
  };

  componentDidMount() {
    this.getTnC()
  }

  async getTnC() {
    let t = await fetch(`${getBaseUrl}/api/auth/tc`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    let t2 = await t.json();
    console.log(t2[0].url)
    // window.open(`${t2[0].url}`, '_bllank');
    window.location.assign(`${t2[0].url}`, '_bllank')
    this.setState({tnc: t2[0].url})
  }

  render() {
    return (
      <div className="container container-1" id="high" >
        
      </div>
    );
  }
}

export default TNC;

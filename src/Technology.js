import React, { Component } from "react";
import "./App.css";
import { getBaseUrl } from "./Utils";
import TechnologyCard from "./TechnologyCard";

class Technology extends Component {
  state = {
    faq: []
  };

  componentDidMount() {
    this.getData();
  }

  async getData() {
    let t = await fetch(`${getBaseUrl}/api/auth/technology`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    let t2 = await t.json();
    console.log(t2);
    this.setState({ faq: t2 });
  }

  items = paragraph => {
    return paragraph.map((item, index) => {
      return (
        <div className="question" key={index}>
          <p align="justify" className="glacial-indifference">
            {item.isi_paragraf}
          </p>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container container-1" id="high">
        <h1>Technology</h1>
        <div className="d-flex justify-content-start flex-wrap flex-row bd-highlight mb-3">
          {this.state.faq.map((item, index) => {
            return (
              <div className="p-2" key={index}>
                <TechnologyCard
                  cardTitle={item.judul}
                  imageUrl={item.gambar}
                  isi={item.isi_paragraf}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Technology;

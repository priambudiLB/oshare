import React, { Component } from "react";
import "./App.css";
import ItemCard from "./ItemCard";
import { getBaseUrl } from "./Utils";

class Men extends Component {
  state = {
    barang: [],
    isLoaded: false
  };

  componentDidMount() {
    this.getData();
    window.scrollTo(0, 0);
  }

  async getData() {
    let t = await fetch(`${getBaseUrl}/product/men`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    let t2 = await t.json();
    this.setState({ barang: t2, isLoaded: true });
  }

  render() {
    return (
      <div id="high">
        <div className="container" id="container-1">
          <span className="highlights kollektif">Men</span>
          <div className="section-1">
            <div className="d-flex justify-content-start flex-wrap flex-row bd-highlight mb-3">
              {this.state.isLoaded ? (
                this.state.barang.length === 0 ? (
                  <span className="glacial-indifference">
                    No item.
                  </span>
                ) : (
                  this.state.barang.map((item, index) => {
                    return (
                      <div className="p-2" key={index}>
                        <ItemCard
                          cardTitle={item.title}
                          imageUrl={
                            item.images.length === 0
                              ? "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjmlMvNrNDkAhWXfCsKHW4pCU8QjRx6BAgBEAQ&url=http%3A%2F%2Fgizi.unida.gontor.ac.id%2F&psig=AOvVaw2KJnu0WuMDRFF0G994bnXM&ust=1568551704739678"
                              : item.images[0].image
                          }
                          harga={item.price}
                          deskripsi={item.description}
                          catalogs={item.catalogs}
                          id={item.id}
                          size={item.catalogs.length === 0 ? 0 : item.catalogs[0].size}
                        />
                      </div>
                    );
                  })
                )
              ) : (
                <div className="clearfix">
                  <div className="spinner-border float-right" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Men;

import React, { Component } from 'react';
import './App.css';
import ItemCard from './ItemCard';
// import logo from 'Images/Logo.png';

// console.log(logo);

class Women extends Component {
  state = {
    barang: [1, 2, 3, 4, 5],
  };
  render() {
    return (
      <div id="women">
        <div className="container" id="container-1">
          <span className="highlights kollektif">Women</span>
          <div className="section-1">
          <div class="d-flex flex-wrap flex-row bd-highlight mb-1">
            {
              this.state.barang.map((item, index) => {
                return (
                  <div class="p-2">
                    <ItemCard />
                  </div>

                )
              })
            }
          </div>
        </div>
        </div>
        
      </div>
    );
  }
}

export default Women;

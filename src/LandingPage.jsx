import React, { Component } from 'react';
import './App.css';
import Carousel from 'nuka-carousel';
import CardItem from './CardItem';
import Instagram from './Icons/Instagram';
import WhatsApp from './Icons/WhatsApp';
import axios from 'axios';

class LandingPage extends Component {
  state = {
    barang: [],
  };

  componentWillMount() {
    const url = 'https://demo4294574.mockable.io/items/';
    axios.get(url).then((res) => {
      console.log(res.data.items);
      this.setState({
        barang: res.data.items,
      })
      console.log(this.state.barang[0])
    })
  }

  render() {
    return (
      <div>
        <div id="home" className="home">
          <div className="container text-vcenter">
            <Instagram />
            <br />
            <WhatsApp />
          </div>
        </div>
        <div className="section">
          <div className="container content">
            <div className="text-center">
              <span className="highlights glacial-indifference">Our </span><span
              className="highlights kollektif">Highlights</span>
              <hr/>
            </div>
            <Carousel>
              {this.state.barang.map((item, i) => (
                <div className="row" key={i}>
                  <div className="col-sm-4"/>
                  <CardItem
                    title={item.name}
                    image={item.image}
                    price={item.price}
                  />
                  <div className="col-sm-4"/>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="content videoWrapper">
          <iframe  title="Business Model Oshare"width="560" height="315" src="https://www.youtube.com/embed/36Zy9N2BbOg" frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen />
        </div>
      </div>
    );
  }
}

export default LandingPage;

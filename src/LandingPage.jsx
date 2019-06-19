import React, { Component } from 'react';
import './App.css';
import Carousel from 'nuka-carousel';
import CardItem from './CardItem';
import Instagram from './Icons/Instagram';
import WhatsApp from './Icons/WhatsApp';
import axios from 'axios';
import InstagramCard from "./InstagramCard";

class LandingPage extends Component {
  state = {
    barang: [],
    instagram: [],
  };

  componentDidMount() {
    const ig = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=261163481.72da9dd.8e4e214dc2c047a9b8482cb8110f4f15';
    const url = 'https://demo4294574.mockable.io/items/';
    axios.get(url).then((res) => {
      this.setState({
        barang: res.data.items,
      });
    });
    axios.get(ig).then((res) => {
      console.log(res.data.data);
      this.setState({
        instagram: res.data.data,
      });
      console.log(this.state.instagram[0].caption.text)
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
        <div className="section">
          <div className="container content">
            <div className="text-center">
              <span className="highlights glacial-indifference">Recent </span><span
              className="highlights kollektif">Posts</span>
              <hr/>
            </div>
            <div className="row">
              {this.state.instagram.map((item, i) => (
                <InstagramCard
                  key={i}
                  image={item.images.standard_resolution.url}
                  link={item.link}
                />
                )).slice(0,6)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;

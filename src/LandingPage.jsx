import React, { Component } from 'react';
import './App.css';
import Carousel from 'nuka-carousel';
import CardItem from './CardItem';
import Instagram from './Icons/Instagram';
import WhatsApp from './Icons/WhatsApp';

class LandingPage extends Component {
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
              <div className="row">
                <CardItem
                  title="naomi olive"
                  image="https://s1.bukalapak.com/img/1650748293/w-1000/sepatu_wakai_original__wakai_shoes_ori_size_40_ready_Good_Pr.jpg"
                  price="Rp. 350.000"
                />
                <CardItem
                  title="naomi olive"
                  image="https://s1.bukalapak.com/img/1650748293/w-1000/sepatu_wakai_original__wakai_shoes_ori_size_40_ready_Good_Pr.jpg"
                  price="Rp. 350.000"
                />
                <CardItem
                  title="naomi olive"
                  image="https://s1.bukalapak.com/img/1650748293/w-1000/sepatu_wakai_original__wakai_shoes_ori_size_40_ready_Good_Pr.jpg"
                  price="Rp. 350.000"
                />
              </div>
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

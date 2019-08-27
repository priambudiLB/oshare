import React, { Component } from 'react';
import './App.css';
import Instagram from './Icons/Instagram';
import WhatsApp from './Icons/WhatsApp';
// import axios from 'axios';
import ItemCard from './ItemCard';
import './alice-carousel.css'
import AliceCarousel from 'react-alice-carousel';

const Gallery = () => {
  const handleOnDragStart = e => e.preventDefault()
  return (
    <AliceCarousel autoPlay autoPlayInterval={5000} mouseDragEnabled responsive={{
      0: { items: 1 },
      1024: { items: 3 },
    }} >
      <div className="yours-custom-class carousel-card" onDragStart={handleOnDragStart} >
        <ItemCard
          cardTitle={"1"}
          imageUrl={"./images/sepatu.jpg"}
          price={10000}
          deskripsi={'deskripsi landing page 1'}
        />
      </div>
      <div className="yours-custom-class carousel-card" onDragStart={handleOnDragStart}>
        <ItemCard
          cardTitle={"2"}
          imageUrl={"./images/sepatu.jpg"}
          price={10000}
          deskripsi={'deskripsi landing page 2'}
        />
      </div>
      <div className="yours-custom-class carousel-card" onDragStart={handleOnDragStart}>
        <ItemCard
          cardTitle={"3"}
          imageUrl={"./images/sepatu.jpg"}
          price={10000}
          deskripsi={'deskripsi landing page 3'}
        />
      </div>
      <div className="yours-custom-class carousel-card" onDragStart={handleOnDragStart}>
        <ItemCard
          cardTitle={"4"}
          imageUrl={"./images/sepatu.jpg"}
          price={10000}
          deskripsi={'deskripsi landing page 4'}
        />
      </div>
      <div className="yours-custom-class carousel-card" onDragStart={handleOnDragStart}>
        <ItemCard
          cardTitle={"5"}
          imageUrl={"./images/sepatu.jpg"}
          price={10000}
          deskripsi={'deskripsi landing page 5'}
        />
      </div>
      <div className="yours-custom-class carousel-card" onDragStart={handleOnDragStart}>
        <ItemCard
          cardTitle={"6"}
          imageUrl={"./images/sepatu.jpg"}
          price={10000}
          deskripsi={'deskripsi landing page 6'}
        />
      </div>
    </AliceCarousel>
  )
}
class LandingPage extends Component {
  state = {
    barang: ['./images/sepatu.jpg', './images/sepatu.jpg', './images/sepatu.jpg'],
    instagram: [],
  };

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div id="hero" />
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
              className="highlights kollektif-bold">Highlights</span>
              <hr/>
            </div>
            <Gallery/>
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
              className="highlights kollektif-bold">Posts</span>
              <hr/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;

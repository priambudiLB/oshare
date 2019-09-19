import React, { Component } from "react";
import "./App.css";
// import Instagram from "./Icons/Instagram";
// import WhatsApp from "./Icons/WhatsApp";
// import axios from 'axios';
import ItemCard from "./ItemCard";
import "./alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

class LandingPage extends Component {
  state = {
    barang: []
  };

  componentDidMount() {
    this.getData();
  }

  async getData() {
    let t = await fetch("http://o-share-backend.herokuapp.com/product/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    let t2 = await t.json();
    this.setState({ barang: t2 });
  }

  render() {
    const Gallery = () => {
      const handleOnDragStart = e => e.preventDefault();
      return (
        <AliceCarousel
          autoPlay
          autoPlayInterval={5000}
          mouseDragEnabled
          responsive={{
            0: { items: 1 },
            512: { items: 2 },
            1024: { items: 3 }
          }}
        >
          {this.state.barang.map((item, index) => {
            return (
              <div
                className="yours-custom-class carousel-card"
                onDragStart={handleOnDragStart}
                key={index}
              >
                <ItemCard
                  cardTitle={item.title}
                  imageUrl={
                    item.images[0].image === undefined
                      ? "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjmlMvNrNDkAhWXfCsKHW4pCU8QjRx6BAgBEAQ&url=http%3A%2F%2Fgizi.unida.gontor.ac.id%2F&psig=AOvVaw2KJnu0WuMDRFF0G994bnXM&ust=1568551704739678"
                      : item.images[0].image
                  }
                  harga={item.price}
                  deskripsi={item.description}
                  catalogs={item.catalogs}
                  id={item.id}
                />
              </div>
            );
          })}
        </AliceCarousel>
      );
    };
    return (
      <div>
        <div id="hero" />
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://img1.cgtrader.com/items/969151/f347a7ad25/white-all-star-shoes-hd-photoscanned-pbr-4k-with-lods-3d-model-low-poly-obj-fbx-ma-mb-mtl.jpg"
                alt="logo diib"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://img1.cgtrader.com/items/969151/f347a7ad25/white-all-star-shoes-hd-photoscanned-pbr-4k-with-lods-3d-model-low-poly-obj-fbx-ma-mb-mtl.jpg"
                alt="logo diib"
                class="d-block w-100"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        {/* <div id="home" className="home">
          <div className="container text-vcenter">
            <Instagram />
            <br />
            <WhatsApp />
          </div>
        </div> */}
        <div className="section">
          <div className="container content">
            <div className="text-center">
              <span className="highlights glacial-indifference">Our </span>
              <span className="highlights kollektif-bold">Highlights</span>
              <hr />
            </div>
            <Gallery />
          </div>
        </div>
        <div className="content videoWrapper">
          <iframe
            title="Business Model Oshare"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/36Zy9N2BbOg"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="section">
          <div className="container content">
            <div className="text-center">
              <span className="highlights glacial-indifference">Recent </span>
              <span className="highlights kollektif-bold">Posts</span>
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;

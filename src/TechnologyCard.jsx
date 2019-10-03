import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";

class TechnologyCard extends Component {
  componentDidMount() {}

  render() {
    return (
      <Link
        to={{
          pathname: `/technology/detail/${this.props.cardTitle}`,
          state: {
            title: this.props.cardTitle,
            imageUrl: this.props.imageUrl,
            isi: this.props.isi
          }
        }}
      >
        <div className="card" id="card-tech">
          <img src={this.props.imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="tech-text">
              {this.props.cardTitle}
            </p>
          </div>
        </div>
      </Link>
    );
  }
}

export default TechnologyCard;

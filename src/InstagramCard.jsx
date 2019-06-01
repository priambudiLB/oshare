import React, { Component } from "react";

class InstagramCard extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <div className="card text-center card-block d-flex">
          <a href={this.props.link}>
            <img className="card-img-top"
                 src={this.props.image}
                 alt="instagram"/>
          </a>
        </div>
        <br/>
      </div>
    );
  }
}

export default InstagramCard;
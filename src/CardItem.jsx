import React, { Component } from "react";

class CardItem extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <div className="card text-center card-block d-flex">
          <br/>
          <span className="card-item-title">{this.props.title}</span>
          <img className="card-img-top"
               src={this.props.image}
               alt={this.props.title}/>
          <div className="card-body">
            <h6 className="card-item-price">{this.props.price}</h6>
            <button className="btn btn-primary btn-card glacial-indifference">add to cart</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CardItem;
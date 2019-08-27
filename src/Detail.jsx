import React, { Component } from 'react';
import './App.css';
import DetailCard from './DetailCard';

class Detail extends Component {
  componentDidMount() {
    console.log(this.props.location.state)
  }

  render() {
    return (
      <div className="container" style={{'minHeight': 'calc(100vh - 200px)'}}>
        <div className="">
          <DetailCard nama={this.props.location.state.title} image={this.props.location.state.imageUrl} harga={this.props.location.state.harga} deskripsi={this.props.location.state.deskripsi}/>
        </div>
      </div>
    );
  }
}

export default Detail;

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
          <DetailCard 
            id={this.props.location.state.id} 
            nama={this.props.location.state.title} 
            image={this.props.location.state.images} 
            harga={this.props.location.state.harga} 
            deskripsi={this.props.location.state.deskripsi} 
            catalogs={this.props.location.state.catalogs}
          />
        </div>
      </div>
    );
  }
}

export default Detail;

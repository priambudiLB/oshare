import React, { Component } from "react";
import "./App.css";

class TechnologyDetail extends Component {
  state = {
    faq: [],
    title: '',
  };

  componentDidMount() {
    const { slug } = this.props.match.params;
    this.setState({title: slug})
    console.log(this.props.location.state.isi)
  }


  paragraphs = (paragraph) =>{
    return(
        <div className="question">
          <p align="justify" className="glacial-indifference">{paragraph}</p>
        </div>
      )
  }
  render() {
    return (
      <div className="container container-1" id="high" >
        <h1>{this.state.title}</h1>
        {/* id={this.props.location.state.id}  */}
        {this.paragraphs(this.props.location.state.isi)}
      </div>
    );
  }
}

export default TechnologyDetail;

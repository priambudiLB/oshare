import React, { Component } from 'react';
import './App.css';

class DetailCard extends Component {
    deskripsi = this.props.deskripsi.split(';');

    render() {
        return (
            <div className="detail-item">
                <div className="row" id="row-1">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-10">
                        <span className="highlights kollektif" id="detail-title">{this.props.nama}</span>
                    </div>  
                </div>
                <div className="row" id="row-2">
                    <div className="col-xl-2"></div>
                    <div className="col-xl-4">
                        <div className="container" id="container-img">
                            <img className="card-img-top" id="detail-images" src={this.props.image} alt="detail-item" />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card" id="detail-card">
                            <div className="card-body" id="card-body-title">
                            <h5 className="highlights kollektif"id="product-title">{this.props.nama}</h5>
                            <p className="kollektif" id="detail-price">{this.props.harga}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item kollektif" id="description">
                                    {this.deskripsi.map(i=>{
                                        return(
                                          <div>
                                              {i}
                                          </div>
                                        )
                                    })}
                                </li>
                            <li className="list-group-item">WOMEN's SIZE</li>
                            <li className="list-group-item">
                                <form>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">SIZE</label>
                                    <select className="custom-select" id="select-size">
                                    <option value="">   </option>
                                    <option>36</option>
                                    <option>37</option>
                                    <option>38</option>
                                    <option>39</option>
                                    <option>40</option>
                                    </select>
                                    <label className="col-sm-1"></label>
                                    <label className="col-sm-3 col-form-label">QUANTITY</label>
                                    <input type="number" class="form-control" min="1" id="select-qty" placeholder=""/>
                                    
                                </div>
                                <div className="form-group row">
                                    <button type="submit" class="btn btn-dark btn-sm btn-lg btn-block">
                                    <span className="kollektif" id="thin-word">ADD TO </span>
                                    <span className="kollektif">CART</span>
                                    </button>
                                </div >
                                </form>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailCard;

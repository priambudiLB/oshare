import React, { Component } from "react";
import "./App.css";
import { getBaseUrl } from "./Utils";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
      cityValue: "",
      city: [],
      provinceValue: "",
      province: [],
      kecamatan: "",
      kelurahan: "",
      street: "",
      postal: "",
      cityLoading: false,
      defaultAddress: []
    };
    this.handleChangeProvince = this.handleChangeProvince.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeKecamatan = this.handleChangeKecamatan.bind(this);
    this.handleChangeKelurahan = this.handleChangeKelurahan.bind(this);
    this.handleChangeStreet = this.handleChangeStreet.bind(this);
    this.handleChangePostalCode = this.handleChangePostalCode.bind(this);
  }
  componentDidMount() {
    this.getProfile();
    this.getProvinces();
  }

  handleChangeProvince(event) {
    this.setState({ provinceValue: event.target.value.split(",")[1], cityLoading: true });
    this.getCity(event.target.value.split(",")[0]);
  }

  handleChangeCity(event) {
    this.setState({ cityValue: event.target.value.split(",")[1] });
  }

  handleChangeKecamatan(event) {
    this.setState({ kecamatan: event.target.value });
  }
  handleChangeKelurahan(event) {
    this.setState({ kelurahan: event.target.value });
  }
  handleChangeStreet(event) {
    this.setState({ street: event.target.value });
  }
  handleChangePostalCode(event) {
    this.setState({ postal: event.target.value });
  }

  async getCity(province) {
    let t = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.rajaongkir.com/starter/city?province=${province}`,
      {
        method: "GET",
        headers: {
          key: "70748c94fb7d6b17105fc1118412c192",
          "Content-Type": "application/json"
        }
      }
    );
    let t2 = await t.json();
    this.setState({ city: t2.rajaongkir.results, cityLoading: false });
  }

  async getProvinces() {
    let t = await fetch(
      "https://cors-anywhere.herokuapp.com/https://api.rajaongkir.com/starter/province",
      {
        method: "GET",
        headers: {
          key: "70748c94fb7d6b17105fc1118412c192",
          "Content-Type": "application/json"
        }
      }
    );
    let t2 = await t.json();
    this.setState({ province: t2.rajaongkir.results });
    // console.log(t2.rajaongkir.results);
  }

  async getProfile() {
    let t = await fetch(`http://${getBaseUrl}/api/auth/detail`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token")
      }
    });
    let t2 = await t.json();
    console.log(t2);
    if (t2.detail === "Invalid token.") {
      window.location.assign("/login");
    } else {
      this.setState({ profile: t2 });
      if(t2.default_address != null){
        this.setState({ 
          provinceValue: t2.default_address.provinsi,
          cityValue: t2.default_address.kota,
          street: t2.default_address.street_name,
          postal: t2.default_address.postal_code,
          kelurahan: t2.default_address.kelurahan,
          kecamatan: t2.default_address.kecamatan,
        }, ()=>console.log(this.state));
      }
    }
  }

  editProfile(nama_jalan, kelurahan, kecamatan, kota, provinsi, kode_pos) {
    let headers = {
      "Content-Type": "application/json",
      Authorization: "Token " + localStorage.getItem("token")
    };
    let body = JSON.stringify({
      nama_jalan,
      kelurahan,
      kecamatan,
      kota,
      provinsi,
      kode_pos
    });
    console.log(body);
    console.log(this.state)
    return fetch(`http://${getBaseUrl}/api/auth/address`, {
      headers,
      body,
      method: "POST"
    }).then(res => {
      if (res.status < 300) {
        window.location.assign("/profile");
      } else {
        console.log("Server Error!");
        throw res;
      }
    });
  }
  render() {
    return (
      <div className="container" id="profile">
        <div className="row justify-content-center">
          <div className="card">
            <center>
              <img
                src="./Images/Logo.png"
                className="card-img-top"
                alt="profile"
              />
            </center>
            <div className="card-body">
              <h5 className="kollektif card-title">
                {this.state.profile.full_name}
              </h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="kollektif list-group-item">
                <span>
                  <h6 className="kollektif card-subtitle mb-2 text-muted">
                    email
                  </h6>
                </span>
                <span>{this.state.profile.email}</span>
              </li>
              <li className="kollektif list-group-item">
                <span>
                  <h6 className="kollektif card-subtitle mb-2 text-muted">
                    date of birth
                  </h6>
                </span>
                <span>{this.state.profile.date_of_birth}</span>
              </li>
              <li className="kollektif list-group-item">
                <span>
                  <h6 className="kollektif card-subtitle mb-2 text-muted">
                    phone number
                  </h6>
                </span>
                <span>{this.state.profile.phone_number}</span>
              </li>
              <li className="kollektif list-group-item">
                <span>
                  <h6 className="kollektif card-subtitle mb-2 text-muted">
                    gender
                  </h6>
                </span>
                <span>{this.state.profile.gender}</span>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="card-body" id="card-alamat">
              <h5 className="kollektif card-title">Address</h5>
              <div className="form-group">
                <label
                  className="glacial indifference text-muted"
                  id="alamat-label"
                  for="inputEmail4"
                >
                  Province
                </label>
                <select
                  value={this.state.provinceValue}
                  onChange={this.handleChangeProvince}
                  className="form-control"
                  id="inputPassword4"
                  required
                >
                  <option>{this.state.profile.default_address === null?"Choose...":this.state.provinceValue}</option>
                  {this.state.province.map((item, index) => {
                    return (
                      <option
                        key={index}
                        value={`${item.province_id},${item.province}`}
                      >
                        {item.province}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-group">
                <label
                  className="glacial indifference text-muted"
                  id="alamat-label"
                  for="inputEmail4"
                >
                  City
                </label>
                <select
                  value={this.state.cityValue}
                  onChange={this.handleChangeCity}
                  className="form-control"
                  id="inputCity"
                  disabled={this.state.cityLoading}
                >
                  <option>
                    {this.state.cityLoading ? "Loading..." : this.state.profile.default_address === null?"Choose...":this.state.cityValue}
                  </option>
                  {this.state.city.map((item, index) => {
                    return (
                      <option
                        key={index}
                        value={`${item.city_id},${item.city_name}`}
                      >
                        {item.city_name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="form-group">
                <label
                  className="glacial indifference text-muted"
                  id="alamat-label"
                  for="inputEmail4"
                >
                  Street Name
                </label>
                <input
                  className="span6 form-control"
                  // rows="3"
                  placeholder={this.state.profile.default_address === null?"Type...":this.state.street}
                  onChange={this.handleChangeStreet}
                  value={this.state.street}
                  required
                />
              </div>
              <div className="form-group">
                <label
                  id="alamat-label"
                  className="glacial indifference text-muted"
                  htmlFor="inputCity"
                >
                  Kelurahan
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.handleChangeKelurahan}
                  id="inputCity"
                  placeholder={this.state.profile.default_address === null?"Type...":this.state.kelurahan}
                  required
                  value={this.state.kelurahan}
                />
              </div>
              <div className="form-group">
                <label
                  id="alamat-label"
                  className="glacial indifference text-muted"
                  htmlFor="inputCity"
                >
                  Kecamatan
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  required
                  onChange={this.handleChangeKecamatan}
                  value={this.state.kecamatan}
                  placeholder={this.state.profile.default_address === null?"Type...":this.state.kecamatan}
                />
              </div>
              <div className="form-group">
                <label
                  className="glacial indifference text-muted"
                  id="alamat-label"
                  for="inputEmail4"
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  onChange={this.handleChangePostalCode}
                  required
                  value={this.state.postal}
                  placeholder={this.state.profile.default_address === null?"Type...":this.state.postal}
                />
              </div>
              <div className="form-group">
                <div
                  onClick={() =>
                    this.editProfile(
                      this.state.street,
                      this.state.kelurahan,
                      this.state.kecamatan,
                      this.state.cityValue,
                      this.state.provinceValue,
                      this.state.postal
                    )
                  }
                  className="btn btn-primary btn-sm"
                >
                  <span className="kollektif" id="address-submit-button">
                    Submit Changes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

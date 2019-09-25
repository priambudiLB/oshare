import React, { Component } from "react";
import "./App.css";
import { convertToRupiah, ItemCheckout } from "./ItemCheckout";
import { getBaseUrl } from "./Utils";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      province: [],
      city: [],
      provinceValue: "",
      cityValue: "",
      deliveryFee: 0,
      addressBE: null,
      address: "",
      kecamatan: "",
      kelurahan: "",
      street: "",
      postal: "",
      radio: "1",
      options: [],
      optionsLoaded: false,
      method: "",
      barang: [],
      total_price: 0,
      loading: false,
      provinceLoad: false,
      cityLoad: false,
    };
    this.handleChangeProvince = this.handleChangeProvince.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeKecamatan = this.handleChangeKecamatan.bind(this);
    this.handleChangeKelurahan = this.handleChangeKelurahan.bind(this);
    this.handleChangeStreet = this.handleChangeStreet.bind(this);
    this.handleChangePostalCode = this.handleChangePostalCode.bind(this);
    this.handleChecked1 = this.handleChecked1.bind(this);
    this.handleChecked2 = this.handleChecked2.bind(this);
    this.handleChecked3 = this.handleChecked3.bind(this);
  }
  async componentDidMount() {
    this.getCart();
    this.getProvinces();
  }

  async getCart() {
    let t = await fetch(`http://${getBaseUrl}/checkout`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token")
      }
    });
    let t2 = await t.json();
    if (!(t2 === undefined || t2.length === 0)) {
      this.setState({
        barang: t2[0].items,
        total_price: t2[0].total,
        addressBE: t2[0].user.default_address,
        totalWeight: this.countWeight(t2[0].items)
      });
    }
  }

  countWeight(list){
    let total = 0;
    for (let i = 0; i < list.length; i++) {
      total += list[i].quantity;
    }
    return total;
  }
  handleChecked1() {
    this.setState({ radio: "1", address: this.state.addressBE });
    this.getCost(this.state.addressBE.cityid);
  }

  checkout(
    isDefault,
    nama_jalan,
    kelurahan,
    kecamatan,
    kota,
    provinsi,
    kode_pos,
    ongkir,
    jasa_pengiriman
  ) {
    let headers = {
      "Content-Type": "application/json",
      Authorization: "Token " + localStorage.getItem("token")
    };
    let body = JSON.stringify({
      isDefault,
      nama_jalan,
      kelurahan,
      kecamatan,
      kota,
      provinsi,
      kode_pos,
      ongkir,
      jasa_pengiriman
    });
    return fetch(`http://${getBaseUrl}/checkout/finalize`, {
      headers,
      body,
      method: "POST"
    }).then(res => {
      if (res.status < 300) {
        return res.json().then(data => {
          this.setState({ token: data.token }, () => {
            window.location.assign("/orders");
          });

          return { status: res.status, data };
        });
      } else {
        console.log("Server Error!");
        throw res;
      }
    });
  }

  handleCheckout() {
    if (this.state.radio === "1") {
      this.checkout(
        "True",
        "",
        "",
        "",
        this.state.cityValue.split(",")[1],
        this.state.provinceValue.split(",")[1],
        "",
        this.state.deliveryFee,
        this.state.method,
      );
    } else {
      this.checkout(
        "False",
        this.state.street,
        this.state.kelurahan,
        this.state.kecamatan,
        this.state.cityValue.split(",")[1],
        this.state.provinceValue.split(",")[1],
        this.state.postal,
        this.state.deliveryFee,
        this.state.method,
      );
    }
  }

  handleChecked2() {
    this.setState({ radio: "2", address: "" });
  }

  handleChecked3(event) {
    this.setState({
      method: event.target.value.split(",")[0]+' '+event.target.value.split(",")[2],
      deliveryFee: parseInt(event.target.value.split(",")[1])
    });
  }

  handleChangeProvince(event) {
    this.setState({ provinceValue: event.target.value });
    this.getCity(event.target.value.split(",")[0]);
  }

  handleChangeCity(event) {
    this.setState({ cityValue: event.target.value });
    this.getCost(event.target.value.split(",")[0]);
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

  clearContents(element) {
    element.value = "";
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
    this.setState({ city: t2.rajaongkir.results, cityLoad: true });
  }

  async getProvinces() {
    this.setState({ provinceLoad: true})
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
    this.setState({ province: t2.rajaongkir.results, provinceLoad: false });
  }

  async getCost(destination) {
    let t = await fetch(
      "https://cors-anywhere.herokuapp.com/https://api.rajaongkir.com/starter/cost",
      {
        method: "POST",
        headers: {
          key: "70748c94fb7d6b17105fc1118412c192",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          origin: "154",
          destination: destination,
          weight: this.state.totalWeight * 1000,
          courier: "jne"
        })
      }
    );
    let t2 = await t.json();
    if (t2.rajaongkir.results[0].costs.length !== 0) {
      this.setState({
        options: t2.rajaongkir.results[0].costs
      });
    }
    this.setState({
      optionsLoaded: true,
      deliveryFee: 0
    });
  }

  render() {
    let totals = (name, price) => {
      return (
        <div className="row">
          <div className="col totals glacial-indifference-bold">{name}</div>
          <div className="col text-right totals glacial-indifference">
            {price}
          </div>
        </div>
      );
    };
    return (
      <div id="women">
        <div className="container" id="container-1">
          <span className="highlights glacial-indifference thin">
            CHECK<span className="highlights kollektif-bold">OUT</span>
          </span>

          <div className="row">
            <div className="col-sm-4">
              <div className="totals glacial-indifference-bold">YOUR CART</div>
              <div className="divider" />
              {this.state.barang == null ? (
                <div />
              ) : (
                this.state.barang.map((item, index) => {
                  return (
                    <div key={index}>
                    <ItemCheckout
                      itemName={item.product.title}
                      itemSize={item.product.size}
                      itemPrice={parseInt(item.subtotal)}
                      itemImage={item.product.images[0].image}
                      itemQuantity={item.quantity}
                    />
                    </div>
                  );
                })
              )}
              <div className="divider" />
              {totals("SUBTOTAL", convertToRupiah(this.state.total_price))}
              <div className="divider" />
              {totals("DELIVERY FEE", convertToRupiah(this.state.deliveryFee))}
              <div className="divider" />
              {totals(
                "TOTAL",
                convertToRupiah(this.state.total_price + this.state.deliveryFee)
              )}
            </div>
            <div className="col-sm-8">
              <form>
              {this.state.addressBE === null ? <div/>:<div className="form-row">
                  <div className="form-check">
                    <input
                      onClick={this.handleChecked1}
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios1"
                      value="option1"
                      disabled
                      onChange={this.handleChecked1}
                    ></input>
                    <label className="form-check-label" htmlFor="gridRadios1">
                      Use my default address (Coming soon)
                    </label>
                  </div>
                </div>}
                
                <div className="form-row">
                  <div className="form-check">
                    <input
                      onChange={this.handleChecked2}
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios2"
                      checked={this.state.radio === "2"}
                      value="option2"
                    ></input>
                    <label className="form-check-label" htmlFor="gridRadios2">
                      Use new address
                    </label>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label
                      className="kollektif-bold label"
                      htmlFor="inputPassword4"
                    >
                      PROVINCE
                    </label>
                    {this.state.radio === "1" ? (
                      <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                        disabled
                        value={this.state.address.provinsi}
                      />
                    ) : (
                      <select
                        value={this.state.provinceValue}
                        onChange={this.handleChangeProvince}
                        className="form-control"
                        id="inputPassword4"
                        required
                        disabled={this.state.provinceLoad}
                      >
                        <option>{this.state.provinceLoad ? "Getting provinces...": "Choose..."}</option>
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
                    )}
                  </div>
                  <div className="form-group col-md-6">
                    <label className="kollektif-bold label" htmlFor="inputCity">
                      CITY
                    </label>
                    {this.state.radio === "1" ? (
                      <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                        disabled
                        value={this.state.address.kota}
                      />
                    ) : (
                      <select
                        value={this.state.cityValue}
                        onChange={this.handleChangeCity}
                        className="form-control"
                        id="inputCity"
                        disabled={!(this.state.provinceValue !== "" && this.state.cityLoad)}
                      >
                        <option>{this.state.provinceValue !== "" ? "Getting cities...": "Choose..."}</option>
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
                    )}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label className="kollektif-bold label" htmlFor="inputCity">
                      KELURAHAN
                    </label>
                    {this.state.radio === "1" ? (
                      <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                        disabled
                        value={this.state.address.kelurahan}
                      />
                    ) : (
                      <input
                        type="text"
                        className="form-control"
                        onChange={this.handleChangeKelurahan}
                        id="inputCity"
                        placeholder={"Type..."}
                        required
                      />
                    )}
                  </div>
                  <div className="form-group col-md-6">
                    <label className="kollektif-bold label" htmlFor="inputCity">
                      KECAMATAN
                    </label>
                    {this.state.radio === "1" ? (
                      <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                        disabled
                        value={this.state.address.kecamatan}
                      />
                    ) : (
                      <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                        required
                        onChange={this.handleChangeKecamatan}
                        placeholder={"Type..."}
                      />
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <label
                    className="kollektif-bold label"
                    htmlFor="inputAddress"
                  >
                    Street Name
                  </label>

                  <div className="form-row">
                    {this.state.radio === "1" ? (
                      <textarea
                        className="span6 form-control"
                        value={this.state.address.street_name}
                        required
                        disabled
                      ></textarea>
                    ) : (
                      <textarea
                        className="span6 form-control"
                        placeholder={"Type..."}
                        onChange={this.handleChangeStreet}
                        required
                      ></textarea>
                    )}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label className="kollektif-bold label" htmlFor="inputCity">
                      POSTAL CODE
                    </label>
                    {this.state.radio === "1" ? (
                      <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                        disabled
                        value={this.state.address.postal_code}
                      />
                    ) : (
                      <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                        onChange={this.handleChangePostalCode}
                        required
                        placeholder={"Type..."}
                      />
                    )}
                  </div>
                  <div className="form-row">
                    {this.state.options.length !== 0 ? (
                      this.state.options.map((item, index) => {
                        return (
                          <div className="form-check">
                            <input
                              onClick={this.handleChecked3}
                              className="form-check-input"
                              type="radio"
                              name={"method"}
                              id={"gridRadio" + index}
                              // checked={this.state.method === item.description}
                              value={
                                item.description + "," + item.cost[0].value + "," + item.cost[0].etd
                              }
                            ></input>
                            <label
                              className="form-check-label"
                              htmlFor={"gridRadio" + index}
                            >
                              {item.description +
                                " / " +
                                item.cost[0].etd +
                                " hari / " +
                                convertToRupiah(item.cost[0].value)}
                            </label>
                          </div>
                        );
                      })
                    ) : this.state.optionsLoaded ? (
                      <div className="form-check">
                        <input
                          onClick={this.handleChecked3}
                          className="form-check-input"
                          type="radio"
                          name="method"
                          id={"gridRadio0"}
                          checked
                          value={"WA"}
                        ></input>
                        <label
                          className="form-check-label"
                          htmlFor={"gridRadio0"}
                        >
                          Tidak terdapat metode pengiriman. Hubungi WhatsApp
                          087779729477.
                        </label>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>
                </div>
                <div
                  className="btn btn-primary"
                  onClick={() => this.handleCheckout()}
                >
                  {this.state.isLoading ? <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : "CHECKOUT"}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;

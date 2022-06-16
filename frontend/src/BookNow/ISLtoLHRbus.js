import React, { Component } from "react";
import sania from "../images/Img7.png";
import "./ISLtoLHRbus.css";
import fan from "../images/icons/fan.png";
import cup from "../images/icons/cup.png";
import lcd from "../images/icons/lcd.png";
import location1 from "../images/icons/location1.png";
import wifi from "../images/icons/wifi.png";
import percentage from "../images/icons/percentage.png";
class ISLtoLHRbus extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="bus-item" style={{ padding: 10 }}>
          <div className="accordion" id="accordionDefault">
            <div className="card border bord-rad">
              <div className="card-header" id="headingTwo">
                <div className="row align-items-sm-center flex-row">
                  <div className="col-12 col-sm-6 col-md-4 mb-xs-1 text-xs-center">
                    <img src={sania} alt="SILK LINE" width={200} height={70} />
                    <p className="p-0 m-0">
                      <span className="pr-1  text-black-50">Lahore</span>
                      <img src={location1} alt="" />
                      <span className=" font-weight-500 ">-------</span>
                      <img src={location1} alt="" />
                      <span className="pl-1  text-black-50">Multan</span>
                    </p>
                  </div>
                  <div className="col-12 col-sm-6 col-md-3 text-center time-info">
                    <img
                      src={wifi}
                      className=" custom-text-size-icon mr-2 "
                      data-toggle="tooltip"
                      title="Free Wifi"
                      alt=""
                    />
                    <img
                      src={lcd}
                      className=" custom-text-size-icon mr-2  "
                      data-toggle="tooltip"
                      title="Tabs"
                      alt=""
                    />
                    <img
                      src={cup}
                      className=" custom-text-size-icon mr-2 "
                      data-toggle="tooltip"
                      title="Refreshment"
                      alt=""
                    />
                    <img
                      src={fan}
                      className=" custom-text-size-icon mr-2 "
                      data-toggle="tooltip"
                      title="Air Condition"
                      alt=""
                    />
                    <p className="p-0 m-0 mt-4">
                      <span className="bg-success px-3 py-1 rounded-pill  text-white">
                        1 Departure Time
                      </span>
                    </p>
                  </div>

                  <div className="col-6 col-sm-6 col-md-3 text-center d-none d-sm-block time-info">
                    <span
                      className=" price_size  d-block"
                      style={{ color: "#f6941c !important" }}
                    >
                      <img src={percentage} className="price-mob" />
                      Pkr 732
                    </span>
                    <del className="orange_color">
                      <span className="  text-dark">
                        1220<small>Rs</small>
                      </span>
                    </del>
                    <br />
                    <p className="p-0 m-0 mt-3">
                      <span className="px-1 py-1 Exective_color -blue font-weight-600">
                        Executive
                      </span>
                    </p>
                  </div>

                  <div
                    className="col-12 col-sm-6 col-md-2 text-center margin-btn-mob"
                    style={{ paddingRight: "5px" }}
                  >
                    <div className=" mb-0 mb-sm-1 order-2 blink_text perce_size">
                      40 % off
                    </div>
                    <button
                      className="btn btn-sm blue_btn_backgroung text-white shadow-none"
                      data-toggle="collapse"
                      data-target="#collapseTwo_076"
                      aria-expanded="true"
                      aria-controls="collapseTwo_076"
                    >
                      View Timing
                    </button>
                  </div>
                </div>

                <div
                  v
                  id="collapseTwo_076"
                  className="collapse show"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionDefault"
                  style={{}}
                >
                  <div className="text-1 bg-light-3 border border-right-0 border-left-0 py-2 px-3">
                    <div className="row">
                      <div className="col col-sm-3">
                        <span className="d-none d-sm-block">Operators</span>
                      </div>
                      <div className="col col-sm-2 text-center">Departure</div>
                      <div className="col-sm-2 text-center d-none d-sm-block">
                        Seats
                      </div>
                      <div className="col col-sm-2 text-center">Arrival</div>
                      <div className="col col-sm-3 text-center d-none d-sm-block">
                        Price
                      </div>
                    </div>
                  </div>
                  <div className="card-body px-0 pb-3 pt-0 padd-mob">
                    <div className="bus-item px-3 py-2 bg-bk-blue">
                      <div className="row align-items-sm-center flex-row pt-1 pb-2 px-1">
                        <div className="col-12 col-sm-12 col-md-6 c-pad">
                          <div className="row p-0 m-0">
                            <div className="col-4 col-sm-4 col-md-4 p-0 m-0">
                              <span className="text-1 text-bk font-weight-600 operator-name">
                                Departure
                              </span>
                              <p className="p-0 m-0">
                                <span className="text-4 text-white">
                                  Lahore
                                </span>
                                <span className="text-3 text-white d-block line-height-1">
                                  23:45
                                </span>
                              </p>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4 p-0 m-0">
                              <span className="d-inline-block pt-2">
                                <img src="images/route.png" width={60} />
                              </span>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4 p-0 m-0">
                              <span className="text-1 text-bk font-weight-600 operator-name">
                                Arrival
                              </span>
                              <p className="p-0 m-0">
                                <span className="text-4 text-white">
                                  Multan
                                </span>
                                <span className="text-3 text-white d-block line-height-1">
                                  04:10
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 text-center d-sm-block time-info c-pad">
                          <span className="bg-danger px-3 py-1 rounded-pill text-2 text-white duration">
                            27 seats remaining
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 align-self-center text-right text-sm-center mt-2 mt-sm-0 c-pad">
                          <div className="d-inline-block d-sm-block text-white text-3 price mb-sm-1 q-pad">
                            RS 1220
                          </div>
                          <a
                            data-toggle="modal"
                            data-target="#login-signup"
                            href="#"
                            className="btn btn-sm btn-outline-bk shadow-none width-mob-link"
                          >
                            {" "}
                            <i
                              className="fas fa-ellipsis-h d-sm-block d-none d-lg-none"
                              data-toggle="tooltip"
                              title="Please login or register in order to select seats"
                            />{" "}
                            <span className="d-block d-sm-none d-lg-block">
                              Select Seats
                            </span>
                          </a>
                        </div>
                        <div className="container mt-3 text-center">
                          <div className="row">
                            <div className="col-sm">
                              <div className="alert alert-warning">
                                <strong>Please</strong> Login or Register in
                                order to book seats.
                                <br />
                                <h6>
                                  {" "}
                                  نشستوں کو بک کرنے کے لیے لاگ ان یا رجسٹر کریں
                                  <strong> برائے مہربانی </strong>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ISLtoLHRbus;

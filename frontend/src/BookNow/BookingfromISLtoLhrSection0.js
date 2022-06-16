import React from "react";
import "./BookingfromISLtoLhrSection0.css";
import ISLtoLHRbus from "./ISLtoLHRbus";
const BookingfromISLtoLhrSection0 = () => {
  return (
    <div>
      <section className="complete-width">
        <div>
          <div className="row py-5 justify-content-center">
            <div className="col-11 bg-light custom-shadow rounded">
              <div className="row">
                <div className="col-md-6 p-3 pl-4">
                  <div className="mb-3">
                    <h2 className="text-6">
                      Islamabad <small className="mx-2">to</small>Lahore
                    </h2>
                  </div>
                  <div className="btn-group mb-3">
                    <button
                      id="pre"
                      className="btn btn-sm btn-outline-primary shadow-none change"
                    >
                      {" "}
                      &lt;{" "}
                    </button>
                    <button
                      className="btn btn-sm outline disabled shadow-none"
                      id="getdate"
                      data-date="2022-04-05"
                    >
                      {" "}
                      2022-04-05{" "}
                    </button>
                    <button
                      id="next"
                      className="btn btn-sm btn-outline-primary shadow-none change"
                    >
                      {" "}
                      &gt;{" "}
                    </button>
                  </div>
                  {"  "}
                  <button
                    className="collapsed btn btn-sm btn-primary shadow-none mb-3"
                    data-toggle="collapse"
                    data-target="#collapse_search"
                    aria-expanded="false"
                    aria-controls="collapse_search"
                  >
                    Modify Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-3">
              <div className="row justify-content-center">
                <div className="col-9 ">
                  <div className="bg-light custom-shadow rounded p-3 sticky-top">
                    <div className="d-flex justify-content-between">
                      <h3 className="text-5">Filter</h3>
                    </div>
                    <div
                      className="accordion accordion-alternate style-2"
                      id="toggleAlternate"
                    >
                      <div className="card">
                        <div className="card-header" id="busType">
                          <h5 className="mb-0 blue_color"> Bus Type </h5>
                        </div>
                        <div
                          id="togglebusType"
                          className="collapse show"
                          aria-labelledby="busType"
                        >
                          <div
                            className="card-body bustypeFilterCheck"
                            id="bustypeFilters"
                          >
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                id="Executive"
                                name="Executive"
                                className="custom-control-input"
                              />
                              <label
                                className="custom-control-label text-0"
                                for="Executive"
                              >
                                Executive
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                id="Executive Plus"
                                name="ExecutivePlus"
                                className="custom-control-input"
                              />
                              <label
                                className="custom-control-label text-0"
                                for="Executive Plus"
                              >
                                Executive Plus
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                id="Business className"
                                name="BusinessclassName"
                                className="custom-control-input"
                              />
                              <label
                                className="custom-control-label text-0"
                                for="Business className"
                              >
                                Business className
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="busOperators">
                          <h5 className="mb-0 blue_color"> Bus Operator </h5>
                        </div>
                        <div
                          id="togglebusOperators"
                          className="collapse show"
                          aria-labelledby="busOperators"
                        >
                          <div
                            className="card-body OperatorFilterCheck"
                            id="operatorFilters"
                          >
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                id="1"
                                name="FaisalMovers"
                                className="custom-control-input"
                              />
                              <label
                                className="custom-control-label text-0"
                                for="1"
                              >
                                Faisal Movers
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                id="2"
                                name="SaniaExpress"
                                className="custom-control-input"
                              />
                              <label
                                className="custom-control-label text-0"
                                for="2"
                              >
                                Sania Express
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="p-0 m-0 mt-2 text-center">
                        <button
                          className="btn btn-primary rounded px-4 py-2"
                          id="BusListFilters"
                        >
                          Filter Results
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="row justify-content-center">
                <div className="col-11 ">
                  <div className="bg-light custom-shadow  rounded p-3 sticky-top">
                    <div className="d-flex justify-content-center ">
                      <h3 className="text-5 ">Islamabad to Lahore</h3>
                    </div>
                    <hr className="blue_color" />
                    <div className="row use_textaligned ">
                      <div className="col">Operator</div>
                      <div className="col text-center">Service Type</div>
                      <div className="col text-center">Price</div>
                      <div className="col text-center">Amenities</div>
                    </div>
                    <hr className="blue_color" />

                    <ISLtoLHRbus />
                    <div
                      className="accordion accordion-alternate style-2"
                      id="toggleAlternate"
                    >
                      <p className="p-0 m-0 mt-2 text-center">
                        <button
                          className="btn btn-primary rounded px-4 py-2"
                          id="BusListFilters"
                        >
                          Filter Results
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingfromISLtoLhrSection0;

import React from "react";
import "./Secondnav.css";
const Secondnav = () => {
  return (
    <div>
      <section className="page-header  background-blue ">
        <div className="second_nav">
          <div className="row  align-items-center">
            <div className="col-md-8 ">
              <h1>Booking Times </h1>
            </div>
            <div className="col-md-4 ">
              <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                <li>
                  <a href="/" className="orange">
                    Home {">"}{" "}
                  </a>
                </li>
                <li>Bus {">"}</li>
                <li className="active">Booking Times</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Secondnav;

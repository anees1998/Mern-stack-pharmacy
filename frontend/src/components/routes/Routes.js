import React from "react";
import style from "./routes.module.css";
// import BookNow from "../BookNow/BookNow";
import { Link } from "react-router-dom";
function Routes() {

  // const handlebookclick=()=>{
  //   <BookNow/>
  // }

  return (
    <div className={style.main}>
      <h2>Popular Routes</h2>
      <h4>Search Hotels, Flights, Trains & Bus</h4>
      <div className={style.bus}>
        <p>BUS</p>
      </div>

      <div className={style.columns}>
        <div className={style.column1}>
          <div className={style.element}>
            <p>Lahore To Muzaffargarh</p>
            <Link className="btn btn-outline-primary" to="/booknow">Book Now</Link>
          </div>
          <div className={style.element}>
            <p>Lahore To Multan</p>
            <Link className="btn btn-outline-primary"to="/booknow">Book Now</Link>
          </div>
          <div className={style.element}>
            <p>Bahawalpur To LahoreLahore</p>
            <Link className="btn btn-outline-primary"to="/booknow">Book Now</Link>
          </div>
        </div>

        <div className={style.column2}>
          <div className={style.element}>
            <p>Lahore To Isalamabad</p>
            <Link className="btn btn-outline-primary"to="/booknow">Book Now</Link>
          </div>
          <div className={style.element}>
            <p>Isalamabad To Lahore</p>
            <Link className="btn btn-outline-primary"to="/booknow">Book Now</Link>
          </div>
          <div className={style.element}>
            <p>Lahore To Peshawar</p>
            <Link  className="btn btn-outline-primary"to="/booknow" >Book Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Routes;

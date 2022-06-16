import React from "react";
import style from "./blue.module.css";

function Blue() {
  return (
    <div className={style.main}>
      <div>
        <i className="icon-basic-lock"></i>
        <h5>100% Secure Payments</h5>
        <p>
          Moving your card details to a much <br /> more secured place.
        </p>
      </div>
      <div>
        <i className="icon-basic-heart"></i>
        <h5>Trust pay</h5>
        <p>100% Payment Protection.</p>
      </div>
      <div>
        <i className="icon-basic-cup"></i>
        <h5>Deals & Offers</h5>
        <p>Best Deals & Offers For You.</p>
      </div>
      <div>
        <i className="icon-basic-world"></i>
        <h5>24X7 Support</h5>
        <p>
          We're here to help. Have a query and <br /> need help ?
        </p>
      </div>
    </div>
  );
}

export default Blue;
<div className={style.main}>
</div>;

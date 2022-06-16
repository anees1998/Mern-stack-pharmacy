import React from "react";
import style from "./download.module.css";
import image1 from "../../images/google-play-store.png";
import image2 from "../../images/app-store.png";
import image3 from "../../images/pharmacy_app_screen.jpeg";

function Download() {
  return (
    <div className={style.main}>
      <div>
        <h2>
          Download Our Medical pharmacy <br /> Mobile App Now
        </h2>
        <h5>
          Download our app for the fastest, most convenient way <br /> to Buy
          Medicines Online
        </h5>
        <p className={style.text}>
          Our app has a lot of Medicine categories: Secure payment channels,
          easy <br /> 2-step Buying process, and sleek user designs. What more
          could you ask for?
        </p>
        <ul>
          <li>Find Medicine Online</li>
          <li>Add to cart</li>
          <li>Secure payments</li>
          <li>and much more.....</li>
        </ul>
        <a href="">
          <img className={style.btn} src={image1} alt="google" />
        </a>
        <a href="">
          <img className={style.btn} src={image2} alt="" />
        </a>
      </div>
      <div className={style.image}>
        <img src={image3} alt="" />
      </div>
    </div>
  );
}

export default Download;

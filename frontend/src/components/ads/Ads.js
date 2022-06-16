import React from "react";
import style from "./ads.module.css";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";

function Ads() {
  return (
    <div className={style.main}>
      <div>
        <img src={img1} alt="image1" />
      </div>
      <div>
        <img src={img2} alt="image2" />
      </div>
      <div>
        <img src={img3} alt="image2" />
      </div>
    </div>
  );
}

export default Ads;

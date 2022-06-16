import React from "react";
import style from "./partners.module.css";
import image1 from "../../images/gsk2.png";
import image2 from "../../images/abbot.png";
import image3 from "../../images/beurer.jpg";
import image4 from "../../images/durex.png";
import image5 from "../../images/Roche.jpg";
import image6 from "../../images/lilly.png";
function Partners() {
  return (
    <div className={style.main}>
      <h3>Our Partners</h3>
      <div className={style.bus_background}>
        <p>Brands</p>
      </div>
      <div className={style.box}>
        <div className={style.images}>

        {/* <div class={style.container}>
          <img src={image1} class={style.image} />
            <div class={style.middle}>
            <a href="https://www.gsk.com/en-gb/"><div class={style.text}>John Doe</div></a>
          </div>
        </div> */}
          <a href="https://www.gsk.com/en-gb/"><img src={image1} alt="" className={style.imgs} style={{marginLeft:"50px"}}></img></a>
          <a href="https://www.abbott.com"><img src={image2} alt="" className={style.imgs}></img></a>
          <a href="https://www.beurer.com/web/us/"><img src={image3} alt="" className={style.imgs}></img></a>
          <a href="https://www.durexusa.com"><img src={image4} alt="" className={style.imgs}></img></a>
          <a href="https://www.gsk.com/en-gb/"><img src={image6} alt="" className={style.imgs}></img></a>
          <a href="https://www.gsk.com/en-gb/"><img src={image5} alt="" className={style.imgs}></img></a>
          {/* <img src={image2} alt=""></img>
          <img src={image3} alt=""></img>
          <img src={image4} alt=""></img>
          <img src={image6} alt=""></img>
          <img src={image5} alt=""></img> */}
          
        </div>
      </div>
    </div>
  );
}

export default Partners;

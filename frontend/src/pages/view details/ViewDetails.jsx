import React from 'react';
import style from "./ViewDetails.module.css";
export default function ViewDetails(props) {
    return(
        <div className={style.app}>
        
              <div className={style.details} >
                <div className={style.big-img}>
                  <img src={props.item.img} alt=""/>
                </div>
  
                <div className={style.box}>
                  <div className={style.row}>
                    <h2>{props.item.Name}</h2>
                    <span>${props.item.Price}</span>
                  </div>
                  {/* <Colors colors={item.colors} /> */}
  
                  <p>{props.item.description}</p>
                  <p>{props.item.content}</p>
  
                  <DetailsThumb images={props.item.img} tab={this.handleTab} myRef={this.myRef} />
                  <button className={style.cart}>Add to cart</button>
                </div>
              </div>
            )
          
        </div>
      )
}

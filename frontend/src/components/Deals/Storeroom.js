import React, { Component } from 'react'
import Topdeals from './Topdeals';
import meds from "../../images/meds.jpg"
import beuty from "../../images/beuty.jpeg"
import Surgical from "../../images/surgical.png"
import lifestyle from "../../images/lifestyle.jpg"
import './Storeroom.css'
class Storeroom extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        offers : [
            {img:meds,name:"Medicene", discount:"30%", item1:"Halothane", item2:"Panadol"},
            {img:beuty,name:"Beauty", discount:"10%", item1:"Facial Cleanser", item2:"Face Toner"},
            {img:Surgical,name:"Surgical", discount:"40%", item1:"Syringes ", item2:"Bandages"},
            {img:lifestyle,name:"Care", discount:"20%", item1:"Perfumes ", item2:"Body Wash"}
          ]
     }
    render() { 
        return (
            <div className='py-5 cardii'>
                <h2
          style={{
            textAlign: "center",
            color: "black",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            marginTop: "10px",
            color:"#7D5A50"
            
          }}
        >
          {this.props.Heading}
        </h2>
            <div  style={{display:"flex",justifyContent:"space-evenly"}}>
            {this.state.offers.map(offers => (
                <Topdeals Dealimg={offers.img} DealName={offers.name} DealDiscount={offers.discount} DealItem1={offers.item1} DealItem2={offers.item2} DealItem3={offers.item3} />
            ))}
        </div>
        </div> 
        );
    }
}
 
export default Storeroom;
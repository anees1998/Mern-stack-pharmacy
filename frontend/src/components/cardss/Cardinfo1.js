import React, { Component } from "react";
import { getdata } from "./carddata";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./card.css";
import style from "./Cardbg.module.css";
import { Link } from "react-router-dom";
// import ProductDetails from "../productDetails/ProductDetails";

class Cardinfo extends Component {



  state = {
    
    data: getdata(),
  };
  render() {
    return (
      <div className={style.main}>
        <h2
          style={{
            textAlign: "center",
            color: "black",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            marginTop: "30px",
            marginBottom: "-30px",
          }}
        >
         {this.props.Heading}
        </h2>

        <div className="mx-auto"
          style={{
            display: "flex",
            
            justifyContent: "space-between",
            color: "white",
            flexWrap: "wrap",
            marginBottom:"20px",
            width:"80%"

          }}
        >
          
          {this.state.data.map((item,index) => (
            <Card
              className="buycard"
              style={{
                width: "18rem",
                height: "380px",
                marginTop: "35px", 
                marginLeft: "10px",
                marginRight: "10px",   
                
              }}
            >
              <Card.Img
                style={{
                  borderRadius: "22px 22px 0px 0px",
                  width: "100%",
                  height: "55%"
                }}
                variant="top"
                src={item.img}
              />
              <Card.Body
              
              style={{backgroundColor:"#BEAEE2",
              borderRadius: "0px 0px 22px 22px",
              color:"white"
              
              }}>

                <Card.Title>{item.Name}</Card.Title>
                <Card.Text style={{ marginLeft: "80px" }} >
                <Card.Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>{item.Discount} Rs</Card.Text>
                  {item.Price} Rs 
                </Card.Text>
                
                
                {/* <Link  to="/details">
                <Button variant="dark" >View Details</Button></Link> */}
                <Link  to="">
                <Button style={{ marginLeft: "60px" }} variant="dark" onClick={() => this.props.handleClick(item)} >
                  Add to Cart
                </Button></Link>
              </Card.Body>
            </Card>)
  )}
        </div>
      </div>
    );
  }
}

export default Cardinfo;

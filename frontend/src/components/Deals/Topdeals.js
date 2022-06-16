import React, { Component } from "react";
import { Link } from "react-router-dom";
import logi from "../../images/pharmacy_logo_1_1.png";
import "./Topdeals.css";
class Topdeals extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      
      <div >
      <div className=" cardmainbody" style={{ width: "16rem" , borderRadius:"22px 22px 22px 22px"  }}>
        <img src={this.props.Dealimg} className="card-img-top" alt="..." />
        <div className="card-body cbody">
        <div >
          <h5 className="card-title"> {this.props.DealName}</h5>
          <p className="card-text">Discount:{this.props.DealDiscount}</p>
        </div>
        
        <ul className="list-group list-group-flush" >
        <div className="card-content">
          <li className="list-group-item itm ">{this.props.DealItem1}</li>
          <li className="list-group-item itm ">{this.props.DealItem2}</li>
        
          </div>
        </ul>
        
        <div className="card-body cbody">
          <Link to={`/${this.props.DealName}`} className="card-link">
            View
          </Link>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Topdeals;

import React from "react";
import Form from "../../components/form/Form";
// import Sidebar from "../../components/sidebar/Sidebar";
// import bg from "./vi-bg.jpg";

function Signuppage(props) {

  // const HomeFunc= (values)=>{ props.func(values); }

  return (
    <div style={{backgroundColor:"#3C415C"}}>
      
      <div className="row" style={{ width: "99vw" }}>
        
        <div className="col-5">
          
          <Form />
          
        </div>
      </div>
    </div>
  );
}

export default Signuppage;

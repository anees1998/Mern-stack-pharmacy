import React from "react";
import "./form.css";
import {LoginApplicant} from "../../Services/Api"
import { Link } from 'react-router-dom';

// import Image from "../Image/Image";
import { useFormik } from "formik";

function Form(props) {

  const formik = useFormik({  
    
    initialValues: {
      email: "",
      password: "",
    },
    
    onSubmit: async (values) => { 

      const logedin= await LoginApplicant(values);
      console.log(logedin)
      if(logedin.data==200){
        
        props.userAuthrize(true);
        alert("Login Succesfully");
      }else{
        props.userAuthrize(false);
        alert("Invalid credtionals");
      }
     },

    validate: (values) => {
    

      let errors = {};



      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email format";
      }

      if (!values.password) {
        errors.password = "Password is required";
      } else if (
        !/^[a-zA-Z0-9@$&]{6,10}$/.test(values.password)
      ) {
        errors.password = "Invalid password";
      }

     

       return errors;
    },
  });

  return (
    <div className="heroFrom row" style={{color:"white"}}>

    <div className="col-4">
       
       </div>

    <div className="col-5">
    <form onSubmit={formik.handleSubmit}>
      <h1 className="heading">Login</h1>
      
       {/* new field */}



      <div className="marg" >
        <div className="form-group  " >
          <label className="col-2" htmlFor="exampleFormControlInput1">
            Email
          </label>
          <input
            type="email"
            //step5
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="form-control col-2"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        {/* error display */}
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="marg" >
        <div className="form-group " >
          <label className="col-2" htmlFor="exampleFormControlInput1">
            Password
          </label>
          <input
            type="password"
            //step5
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="form-control col-1"
            id="exampleFormControlInput1"
            placeholder="abc123@"
          />
        </div>
        {/* error display */}
        {formik.touched.email && formik.errors.password ? (
          <div className="error">{formik.errors.password}</div>
        ) : null}
      </div>

    <div className="marg">
        
     </div>
      {/* <div className="col-4">
      <Image />
      </div> */}
      <div className="row">
        <div className="col-4"></div>
        <input type="submit" disabled={!formik.isValid} className="btn btn-light btn-block col-2 " value="Login" style={{marginTop:"10px"}} />
        <div className="col-1"></div>
        <input type="reset" disabled={!formik.isValid} className="btn btn-light btn-block col-2" style={{marginTop:"10px"}}/>
      
      </div>
      <div className="row">
      <div className="col-4"></div>
       <div className=" col-5"  style={{marginTop:"20px",marginLeft:"20px"}}> <p>Not a member? <Link to="/signup" className="signlog">  <b  > SignUp</b> </Link></p></div>
      </div>
          {/* <button type ="reset"className="btn btn-light btn-block col-5">Reset</button> */}
    </form>
    </div>
  </div>
  );
}

export default Form;

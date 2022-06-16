import React from "react";
import "./form.css";
// import {addApplicant} from "../../Services/Api"
import Image from "./signupbg.jpg";
import { useFormik } from "formik";

function Form(props) {

  const formik = useFormik({  
    
    initialValues: {
      fname:"",
      email: "",
      password: "",
      gender: "",
    },
    
    onSubmit: async (values) => { 
      // // props.func(values) ;
      // await addApplicant(values);
     },

    validate: (values) => {
    

      let errors = {};

      if (!values.fname) {
        errors.fname = "UserName is required";
      } else if (
        !/^[a-zA-Z0-9@$&]{8,12}$/.test(values.fname)
      ) {
        errors.fname = "Invalid Uername format";
      }
// ^[a-zA-Z0-9]*$


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

      // if (!values.Event) {
      //   errors.Event = "Select an event ";
      // }

      if (!values.gender) {
        errors.gender =
          "Choose gender";
      }

      // if (!values.date) {
      //   errors.date = "Syelect date";
      // }

       return errors;
    },
  });
  // formik provides us with a lot of properties some of them are these under
  //console.log("Form values:",formik.values)
  //console.log("Form errors:",formik.errors)

  return (
    <div className="heroFrom row" style={{color:"white"}}>

      <div className="col-4">
         
         </div>

      <div className="col-5">
      <form onSubmit={formik.handleSubmit}>
        <h1 className="heading">SignUp</h1>
        
        {/* new field */}
        <div className="marg" >
          <div className="form-group " >
            <label  htmlFor="exampleFormControlInputname1">
              Name
            </label>
            <input
              type="text"
              name="fname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fname}
              className="form-control col-2"
              id="exampleFormControlInputname1"
              placeholder="First Name"
            />
          </div>
          {/* error display */}
          {formik.touched.fname && formik.errors.fname ? (
            <div className="error">{formik.errors.fname}</div>
          ) : null}
        </div>
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
          
        
          
        <div className="marg">
          <div className="form-group ">
            <p >Gender:</p>
            <div className="">
              <input
                type="radio"
                id="male"
                name="gender"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value="Male"
              />
              <label for="male">Male</label>
              <br />
              <input
                type="radio"
                id="female"
                name="gender"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value="Female"
              />
              <label for="female">Female</label>
            </div>
          </div>
          {/* Error display */}
          {formik.touched.gender && formik.errors.gender ? <div className="error">{formik.errors.gender}</div> : null}
        </div>


        </div>
        {/* <div className="col-4">
        <Image />
        </div> */}
        <div className="row">
          <div className="col-2"></div>
          <input type="submit" disabled={!formik.isValid} className="btn btn-light btn-block col-2" />
          <div className="col-1"></div>
          <input type="reset" disabled={!formik.isValid} className="btn btn-light btn-block col-2" />

        </div>
            {/* <button type ="reset"className="btn btn-light btn-block col-5">Reset</button> */}
      </form>
      </div>
    </div>
  );
}

export default Form;

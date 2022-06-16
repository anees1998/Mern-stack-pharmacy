import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
// import '../index.css'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import NErrorMessage from "./errorMessage";

const validationSchema = yup.object({
  name: yup
  .string().required("Name is Required!"),
   
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Must Contain 8 Characters, 1 Uppercase & Lowercase, 1 Number, special Character"
    )
    .required("Password is Required!"),

  birthday: yup
  .string().required("Please enter your Date Of Birth!"),

  phone: yup
    .number()
    .required("Phone is Required!"),


  gender: yup.string().required("Gender is Required!"),

  email: yup
  .string()
  .required("Email is Required!"),


  
});


const Login = () => {



    return (
      <div>
<section className="vh-100 gradient-custom" >
  <div className="container py-5 h-100">
    <div className="row justify-content-center align-items-center h-100" >
      <div className="col-12 col-lg-9 col-xl-7">
        <div className=" shadow-2-strong card-registration" 
        style={{borderRadius: "15px",marginTop:"-20px",backgroundColor:"Gray"  }}>
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-4" style={{color:"white", marginTop:"-20px",fontFamily:"sans-serif", textAlign:"center"}} >Sign up</h3>



<Formik validationSchema={validationSchema}
        initialValues={{
          name: "",
          password: "",
          birthday: "",
          gender: "",
          email: "",
          phone: "",
          

        }}>


            
        {({ values }) => (
          <div className='my-2' >
            <Form >

              <div className="row" style={{color:"white", fontFamily:"sans-serif",marginBottom:"10px"}} >

                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <Field name="name" type="text" id="firstName" className="form-control form-control-lg" />
                    <label className="form-label" for="firstName">Name</label>
                    <NErrorMessage name="name" />
                  </div>
                </div>



                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <Field name="password" type="password" id="lastName" className="form-control form-control-lg" />
                    <label className="form-label" for="lastName">Password</label>
                    <NErrorMessage name="password" />
                  </div>

                </div>
              </div>


              <div className="row" style={{color:"white", fontFamily:"sans-serif"}} >
                <div className="col-md-6 mb-4 d-flex align-items-center">

                  <div className="form-outline datepicker w-100">
                    <Field name="birthday"
                      type="text"
                      className="form-control form-control-lg"
                      id="birthdayDate"
                    />
                    <label for="birthdayDate" className="form-label">Birthday</label>
                    <NErrorMessage name="birthday" />
                  </div>
                </div>


                <div className="col-md-6 mb-4">
                  <h6 className="mb-2 pb-1">Gender: </h6>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="femaleGender"
                      value="option1"
                      checked
                    />
                    <label className="form-check-label" for="femaleGender">Female</label>
                  </div>


                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="maleGender"
                      value="option2"
                    />
                    <label className="form-check-label" for="maleGender">Male</label>
                  </div>
                </div>
              </div>



              <div className="row" style={{color:"white", fontFamily:"sans-serif"}} >
                <div className="col-md-6 mb-4 pb-2">
                  <div className="form-outline">
                    <Field name="email" type="email" id="emailAddress" className="form-control form-control-lg" />
                    <label className="form-label" for="emailAddress">Email</label>
                    <NErrorMessage name="email" />
                  </div>
                </div>



                <div className="col-md-6 mb-4 pb-2">
                  <div className="form-outline">
                    <Field name="phone" type="phone" id="phoneNumber" className="form-control form-control-lg" />
                    <label className="form-label" for="phoneNumber">Phone Number</label>
                    <NErrorMessage name="phone" />
                  </div>
                </div>
              </div>



              <div style={{marginTop:"-20px"}}>
                <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
              </div>
          
            </Form>
            </div>
          )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </div>
    );
  };

 
export default Login; 
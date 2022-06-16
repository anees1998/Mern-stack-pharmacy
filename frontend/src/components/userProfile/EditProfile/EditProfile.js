import React from 'react'
import "./EditProfile.css"
import { Link } from 'react-router-dom';




export default function EditProfile() {
  const { useState } = React;
const [selectedFile, setSelectedFile] = useState();
const [checkFile, setCheckFile] = useState(false);

const imageHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setCheckFile(true);
}

const imagesubmission = () => {
  if (checkFile) {
      alert("File Uploaded");
      console.log(selectedFile);
  } else {
      alert("select a file");
  }
}
  return (
    <div style={{backgroundColor:"#d0d0d0",marginTop:"-40px",height:"90vh"}}>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span className="font-weight-bold">Edogaru</span><span className="text-black-50">edogaru@mail.com.my</span><span> </span></div>


          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="text-right">Personal Details</h5>
              </div>
              <div className="row mt-2">
                <div className="col-md-6"> <label className="labels">Name</label> <input type="text" className="form-control" placeholder="first name"  />  </div>
                <div className="col-md-6"><label className="labels">Middle Name</label><input type="text" className="form-control"  placeholder="middle name" /></div>
              </div>
              
              <div className="row mt-3">
                <div className="col-md-12"><label className="labels">SurName</label><input type="text" className="form-control" placeholder="surname"  /></div>
                <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="+92 31234567"  /></div>
                <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="example@hotmail.com"  /></div>

              </div>
             
              <div className="mt-5 text-center"> <Link to ="/profile"><button className="btn btn-primary profile-button" type="button">Save Profile</button></Link></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center experience"><span>Address Details</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus" />&nbsp;Address</span></div><br />
              <div className="col-md-12"><label className="labels">Address</label><input type="text" className="form-control" placeholder="address"  /></div> <br />
              <div className="col-md-12"><label className="labels">Postel Code</label><input type="text" className="form-control" placeholder="35403"  /></div>
              <div className="row mt-3">
                <div className="col-md-6" style={{marginLeft:"1px"}}><label className="labels">Country</label><input type="text" className="form-control" placeholder="country"  /></div>
                <div className="col-md-6" style={{marginLeft:"-5px"}}><label className="labels">State/Region</label><input type="text" className="form-control"  placeholder="state" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

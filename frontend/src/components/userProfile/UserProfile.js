import React from 'react';
import { Link } from 'react-router-dom';
import manavatar from "./manavatar.jpg"
import womenavatar from "./womenavatar.png"
import "./Userprofile.css"
import { getProfileData,RefreshProfileData} from "../../Services/Api";
import { useState , useEffect} from "react";



export default function UserpProfile() {
  
  const [userValues, setUserValues] = useState([]);
  useEffect( ()=>{
      ProfileDetails();
    } , [] );

  const ProfileDetails = async () => {
    // console.log("profile det")
      const dat=await (await getProfileData()).data;
    setUserValues(dat);
  };

  
  return (
    <div className='bodyProfile '>
      <div className="container  d-flex justify-content-center">
        <div className="cardProfile p-3 py-4">
          <div className="text-center"> 
            {(userValues.gender=="Male")? 
            <img src={manavatar} width={100} className="rounded-circle" />
            : <img src={womenavatar} width={100} className="rounded-circle" />}

        
            <h3 className="mt-2">{userValues.fname}</h3>
            <span className="mt-1 clearfix">{userValues.email}</span>
      
            <hr className="line" />
            <small className="mt-4">I am an android developer working at google Inc at california,USA</small>
            <div className="social-buttons mt-5"> 
              <button className="neo-button"><i className="fa fa-facebook fa-1x" /> </button> 
              <button className="neo-button"><i className="fa fa-linkedin fa-1x" /></button> 
              <button className="neo-button"><i className="fa fa-google fa-1x" /> </button> 
              <button className="neo-button"><i className="fa fa-youtube fa-1x" /> </button>
              <button className="neo-button"><i className="fa fa-twitter fa-1x" /> </button>
            </div>
            <div className="profile mt-5">
            <Link to="/editprofile">
                <button className="profile_button px-5">Edit profile</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from "react";
import image from "./GetmedsLogo1.png";
import style from "./Navbar.module.css";
import { Link } from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { AuthorizeUser,Logoutuser } from "../../Services/Api";
import { useEffect} from "react";


function Navbar(props) {

  useEffect( ()=>{    let interval=setInterval(()=>{ Authorize();},1000*30);
    return ()=>clearInterval(interval);
  } , [] );
  
  const Authorize =async()=>{

    const auth= await AuthorizeUser();
    console.log(auth.data);
    props.userAuthrize(auth.data)
   }
const handlelogout= (e)=>{
  
  // e.preventdefault();
  const res= Logoutuser();
  window.location.reload();
  props.userAuthrize(false)
  alert("logout");
}


  return (
    <div className={style.main}>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className={style.logo} src={image} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className={`${style.navigation} navbar-nav`}>
              <Link className={`${style.navlink} nav-link active`} aria-current="page" to="/">
                Home
              </Link>
              <Link className={`${style.navlink} nav-link active`} aria-current="page" to="/product">
              Products
              </Link>
              <Link className={`${style.navlink} nav-link active`} aria-current="page" to="/profile">
                Profile 
              </Link>

              
              <Link className={`${style.navlink} nav-link active`} to="/list">
                List
              </Link>
              <Link className={`${style.navlink} nav-link active`} to="/contact">
                Contact Us
              </Link>
            </div>
          </div>

          <div className={style.nav_assistence}>
          
         
            <p>
              Need an Assistence with GETMEDS? <br /> Call us now:03111999560
            </p>
          </div>
          <div>
        
        {!props.userAuth?
        <div>
        <Link className={`${style.navlink2} nav-link active`} to="/signup">
                Login / Sign up
        </Link>
        </div>:
          <div onClick={(e)=>handlelogout(e)}>
            <Link className={`${style.navlink2} nav-link active`} aria-current="page" to="/">
                Logout 
              </Link>
          </div>}
            {/* <form className="d-flex">
            
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-dark" type="submit">
                Search
              </button>
            </form> */}
          </div>
          <div>
        
          <div>
            <Link
              to='/cart'
              className={`${style.navlink2} nav-links`}
              onClick={() => props.setShow()}
            >
              <AiOutlineShoppingCart/>{props.size} 
            </Link>
         
          
            </div>
            {/* <form className="d-flex">
            
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-dark" type="submit">
                Search
              </button>
            </form> */}
          </div>
          
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

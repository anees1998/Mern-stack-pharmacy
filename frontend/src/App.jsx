import React from "react";
import Home from "./Home";
import BookNow from "./BookNow/BookNow";
import Login from "./components/Login/Login";
import NavbarNew from "./components/navbar/Navbar";
// import Blue from "./components/blue/Blue";
import Footer from "./components/footer/Footer";
import NotFound from "./components/notfound/NotFound";
import SignupForm from "./components/form/Form"
import Loginform from "./components/form/LoginformFinal"
import UserProfile from "../src/components/userProfile/UserProfile"
import {  useEffect} from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ProductDetails from "./components/productDetails/ProductDetails";
import Cart from "./components/Cart/cart";
import Topdeals from "./components/Deals/Topdeals";
import Storeroom from "./components/Deals/Storeroom";
import ContactUs from "./components/Contactus/ContactUs";
import Cardinfo from "./components/cardss/Cardinfo1";
import List from "./components/list/List";
import EditProfile from "./components/userProfile/EditProfile/EditProfile";
import { AuthorizeUser, RefreshProfileData } from "./Services/Api";

function App() {
  const [userAuth, setuserAuth] = useState(false);
  const userAuthrize = (value) => { setuserAuth(value);  };


  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  


  return (
    <>
   <Router>
    <NavbarNew userAuth={userAuth} userAuthrize={userAuthrize} setShow={setShow} size={cart.length}/>
    <Routes>
          <Route exact path="/" element={<Home handleClick={handleClick}/>}/> 
          <Route exact path="/profile" element={!userAuth ?<Loginform userAuthrize={userAuthrize}/> :<UserProfile/> }/>
          {/* <Route exact path="/profile" element={<UserProfile/>}/> */}
          <Route exact path="/signup" element={<SignupForm/>}/>
          <Route exact path="/login" element={<Loginform  userAuthrize={userAuthrize}/>}/>
          <Route exact path="/list" element={!userAuth ?<Loginform userAuthrize={userAuthrize}/> :<List/>}/>
          <Route exact path="/editprofile" element={<EditProfile/>}/>
          {/* <Route exact path="/booknow" element={<BookNow/>}/> */}
          <Route exact path="/contact" element={<ContactUs/>}/>
          <Route exact path="/product" element={<Storeroom Heading="Products"/>}/>
          {/* <Route exact path="/details" element={<ProductDetails/>}/> */}
          <Route exact path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>}/>
          <Route path="*" element={<NotFound/>} />
          <Route exact path="/Medicene" element={<Cardinfo Heading="Medicene" handleClick={handleClick}/>}/>

          <Route exact path="/Beauty" element={<Cardinfo Heading="Beauty" handleClick={handleClick}/>}/>

          <Route exact path="/Surgical" element={<Cardinfo Heading="Surgical" handleClick={handleClick}/>}/>

          <Route exact path="/Care" element={<Cardinfo Heading="Care" handleClick={handleClick}/>}/>

    </Routes>
    <Footer />
    </Router>
    </>
  );
}

export default App;

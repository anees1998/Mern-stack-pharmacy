import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import {AiOutlineShoppingCart} from 'react-icons/ai'
function Navbar(props) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 900) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 900) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          DawaiLo
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link
              to='/product'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Product
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/login'
              className='nav-links '
              onClick={closeMobileMenu}
            >
              Sign in/Register
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/cart'
              className='nav-links'
              onClick={() => props.setShow()}
            >
              <AiOutlineShoppingCart/>{props.size} 
            </Link>
            {dropdown && <Dropdown />}
          </li>
        </ul>
        
      </nav>
    </>
  );
}
export default Navbar;

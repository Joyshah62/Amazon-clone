import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaShoppingBasket,FaSearch } from 'react-icons/fa';
import { useStateValue } from "./StateProvider"; 
import { auth } from "./firebase";
function Header() {
  const [{basket,user}] = useStateValue();

  const login = () => {
    if(user) {
      auth.signOut();
    }
  }

  return( 

  <nav className="header">
        {/* logo on the left -> img */}
        <Link to="/">
           <img 
             className="header__logo" 
             src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
             alt=""
            />
        </Link>


        {/* search box */}
        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <FaSearch className="header__searchIcon"/>
        </div>
        {/* 3 links */}
        <div className="header__nav">
            {/* 1st link */}

            <Link to={!user && "/login"} className="header__link">
              <div onClick={login} className="header__option">
                <span className="header__optionLineOne"> Hello, User </span>
                <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'} </span>
              </div>
            </Link>

            {/* 2nd link */}
            <Link to="/" className="header__link">
              <div className="header__option">
                <span className="header__optionLineOne"> Returns </span>
                <span className="header__optionLineTwo"> & orders </span>
              </div>
            </Link>


            {/* 3rd link */}
            <Link to="/" className="header__link">
              <div className="header__option">
                <span className="header__optionLineOne"> Your </span>
                <span className="header__optionLineTwo"> Prime </span>
              </div>
            </Link>

            
            {/* 4th link */}
            <Link to="/checkout" className="header__link">
              <div className="header__optionBasket">
                  {/* shopping basket */}
                  <FaShoppingBasket/>
                  { /* No of items  */ }
                  <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
              </div>
            </Link>
        </div>
        {/* basket icon */}
    </nav>
  );
}

export default Header
import { Search, Shop, ShoppingBasket } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div className="navbar">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="Amazon Logo"
          className="nav_logo"
        />
      </Link>
      <div className="search_container">
        <input type="text" className="nav_search" />
        <Search className="nav_search_icon" />
      </div>

      <div className="nav">
        <Link to="/login" className="nav_link">
          <div className="nav_option">
            <span className="option_l1">Hello, Rohan Singh</span>
            <span className="option_l2">Sign In</span>
          </div>
        </Link>
        <Link to="/orders" className="nav_link">
          <div className="nav_option">
            <span className="option_l1">Return</span>
            <span className="option_l2">Order</span>
          </div>
        </Link>
        <Link to="/prime" className="nav_link">
          <div className="nav_option">
            <span className="option_l1">Your</span>
            <span className="option_l2">Prime</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="option_checkout">
            <ShoppingBasket />
            <span className="option_l2 basket_count">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

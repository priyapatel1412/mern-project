import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";
import Header from "../layout/Header/Header";
import { Person, Search, ShoppingCart } from "@mui/icons-material";
import applogo from "../../images/applogo.png";
import { useSelector } from "react-redux";
import UserOptions from "../layout/Header/UserOptions";

const Topbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <div className="topbar">
      <div className="topLeft">
        <img src={applogo} alt="" className="appLogo" />
        {/* <Header /> */}
      </div>
      <div className="topMiddle">
        <Link to="/" className="link">
          <span className="linkName">HOME</span>
        </Link>
        <Link to="/products" className="link">
          <span className="linkName">PRODUCTS</span>
        </Link>
        <Link to="/contacts" className="link">
          <span className="linkName">CONTACTS</span>
        </Link>
        <Link to="/about" className="link">
          <span className="linkName">ABOUT</span>
        </Link>
      </div>
      <div className="topRight">
        <div className="icon">
          <Link className="link" to="/login">
            {" "}
            <Person />
          </Link>
        </div>
        <div className="icon">
          <Link className="link" to="/search">
            {" "}
            <Search />
          </Link>
        </div>
        <div className="icon">
          <Link className="link" to="/cart">
            <ShoppingCart />
            <span className="cartValue"> {cartItems.length}</span>
          </Link>
        </div>
        <div>{isAuthenticated && <UserOptions user={user} />}</div>
      </div>
    </div>
  );
};

export default Topbar;

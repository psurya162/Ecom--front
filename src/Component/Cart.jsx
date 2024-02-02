import React, { useState } from "react";
import "./Cart.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faShoppingCart);
import { useNavigate } from "react-router-dom";




const Cart = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Navigate to the signup page when the "Login" button is clicked
    navigate('/login');
    setLogin("Hello")
  };
  const [login,setLogin]=useState("Login")
  return (
    <>
      <div className="Cart-cntainer">
        <h1>SHOPIFY CART</h1>
        <input type="text" placeholder="Search For Productes , Brands And More" />
        <div className="left-side">
          <button className="cart-icon">
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
            <sup>0</sup>
          </button>
          <h1 className="login-btn">
            <button onClick={handleLoginClick}>{login}</button>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Cart;

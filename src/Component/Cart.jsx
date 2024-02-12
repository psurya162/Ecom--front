import React, { useEffect, useState } from "react";
import "./Cart.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faShoppingCart);
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../feature/cartSllice";




const Cart = () => {

  const{cart,totalQuantity} = useSelector((state)=>state.allCarts)
  const dispatch =useDispatch()
  useEffect(()=>{
    dispatch(getCartTotal())
  },[cart])
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Navigate to the signup page when the "Login" button is clicked
    navigate('/login');
    setLogin("Hello")
  };

  const handleCheckOut=()=>{
    navigate('/checkout')
  }
  const [login,setLogin]=useState("Login")
  return (
    <>
      <div className="Cart-cntainer">
        <h1>SHOPIFY CART</h1>
        <input type="text" placeholder="Search For Productes , Brands And More" />
        <div className="left-side" >
          <button className="cart-icon" onClick={handleCheckOut}>
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
            <sup>{totalQuantity}</sup>
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

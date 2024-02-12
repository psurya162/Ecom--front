import React from "react";
import { useContext } from "react";
import { Store } from "./Store/store";
import { useNavigate, useParams } from "react-router-dom";
import "./Dynamic.css";
import { addtoCart } from "../feature/cartSllice";
import { useDispatch } from "react-redux";

const DynamicCompo = () => {
  const Paramid = useParams().id;
  const dispatch = useDispatch();

  const { data } = useContext(Store);
  // const Navigate = useNavigate();

  const Dynamic = data.filter((item) => item.id == parseInt(Paramid));
  return (
    <>
      <div className="Dynamic-Contianer">
        {Dynamic.map((item) => (
          <div className="Main">
            <div className="image-Container">
              <img src={item.image} alt="" />
            </div>
            <div className="description">
              <h1>{item.name}</h1>
              <h1>{item.price}</h1>
              <span style={{ color: "gold", fontSize: "24px" }}>
                &#9733; &#9733; &#9733;
              </span>
              <h1>Available offers </h1>
              <h1>(Limited Offer )</h1>
              <p> 📌 Bank Offer 5% Cashback on Flipkart Axis Bank Card T&C</p>
              <p>
                {" "}
                📌 Special PriceGet extra ₹3000 off (price inclusive of
                cashback/coupon
              </p>
              <p> 📌 Buy This Product and get ₹500 Off on Next AC Purchase*</p>
              <p>Description : {item.description}</p>
              <h2>
                <button onClick={() => dispatch(addtoCart(item))}>
                  Add To cart
                </button>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DynamicCompo;

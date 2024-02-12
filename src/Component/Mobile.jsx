import React, { useContext } from "react";
import { Store } from "./Store/store";
import { NavLink } from "react-router-dom";
import {useSelector} from 'react-redux'
import { addtoCart } from "../feature/cartSllice";
import { useDispatch } from "react-redux";

const Mobile = () => {

  
  const { data } = useContext(Store);
  const dispatch=useDispatch()

  const MobilePost = data.filter((item) => item.category === "MOBILE");
  return (
    <div  className="Parent_container">
      {MobilePost.map((item) => (
         <div className="main"  key={item.id}>
         <NavLink to={`/dynamic/${item.id}`} className="image">
           <img src={item.image} alt="" />
         </NavLink>
         <NavLink className="Dynamic-navlink" to={`/dynamic/${item.id}`}>
         <h3>{item.name.slice(0,15)}</h3>
         </NavLink>
         <span style={{ color: 'gold', fontSize: '24px' }}>&#9733;    &#9733;   &#9733;</span>
         
         <h2>{item.price}</h2>
         <h2><button onClick={()=>dispatch(addtoCart(item))}>Add To cart</button></h2>
         
       </div>
      ))}
    </div>
  );
};

export default Mobile;



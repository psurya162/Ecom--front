import React, { useContext } from "react";
import { Store } from "./Store/store";
import { NavLink } from "react-router-dom";

const HeadPhone = () => {
  const { data, addToCart } = useContext(Store);

  const HeadphonePost = data.filter((item) => item.category === "HEADPHONE");

  const handleAddToCart = (item) => {
    // Call the addToCart function from your context
    addToCart(item);
  };

  return (
    <div className="Parent_container">
      {HeadphonePost.map((item) => (
        <div className="main" key={item.id}>
          <NavLink to={`/dynamic/${item.id}`} className="image">
            <img src={item.image} alt="" />
          </NavLink>
          <NavLink className="Dynamic-navlink" to={`/dynamic/${item.id}`}>
            <h3>{item.name.slice(0, 20)}</h3>
          </NavLink>
          <span style={{ color: 'gold', fontSize: '24px' }}>&#9733; &#9733; &#9733;</span>
          <h2>{item.price}</h2>
          <h2>
            <button onClick={() => handleAddToCart(item)}>Add To Cart</button>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default HeadPhone;

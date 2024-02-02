import React from "react";
import { useContext } from "react";
import { Store } from "./Store/store";
import { NavLink } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  const { data } = useContext(Store);

  const randomdata = data.filter((item) => item.id % 4 === 0);
  const randomdata2 = data.filter((item) => item.id % 6 === 0);
  const randomdata3 = data.filter((item) => item.id % 8 === 0);

  return (
    <>
      
      <div className="Parent_container">
        {randomdata.map((item) => (
          <div className="main"  key={item.id}>
            <NavLink to={`/dynamic/${item.id}`} className="image">
              <img src={item.image} alt="" />
            </NavLink>
            <NavLink className="Dynamic-navlink" to={`/dynamic/${item.id}`}>
              <h3>{item.name.slice(0, 15)}</h3>
            </NavLink>

            <h2>{item.price}</h2>
            <h2 className="add-cart-btn">
              <button>Add To cart</button>
            </h2>
          </div>
        ))}
      </div>
      <div className="Parent_container">
        {randomdata2.map((item) => (
          <div className="main"  key={item.id}>
            <NavLink to={`/dynamic/${item.id}`} className="image">
              <img src={item.image} alt="" />
            </NavLink>
            <NavLink className="Dynamic-navlink" to={`/dynamic/${item.id}`}>
              <h3>{item.name.slice(0, 15)}</h3>
            </NavLink>

            <h2>{item.price}</h2>
            <h2 className="add-cart-btn">
              <button>Add To cart</button>
            </h2>
          </div>
        ))}
      </div>
      <div className="Parent_container">
        {randomdata3.map((item) => (
          <div className="main"  key={item.id}>
            <NavLink to={`/dynamic/${item.id}`} className="image">
              <img src={item.image} alt="" />
            </NavLink>
            <NavLink className="Dynamic-navlink" to={`/dynamic/${item.id}`}>
              <h3>{item.name.slice(0, 15)}</h3>
            </NavLink>

            <h2>{item.price}</h2>
            <h2 className="add-cart-btn">
              <button>Add To cart</button>
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;

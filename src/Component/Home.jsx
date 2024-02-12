import React, { useContext } from "react";
import { Store } from '../Component/Store/store'; // Adjust the path as needed
import { NavLink } from "react-router-dom";
import { addtoCart } from "../feature/cartSllice";
import { useDispatch } from "react-redux";

const Home = () => {
  const { data } = useContext(Store);
  const dispatch=useDispatch()

  const filteredData = (mod) => data.filter((item) => item.id % mod === 0);

  return (
    <>
      {[4, 6, 8].map(mod => (
        <div className="Parent_container" key={mod}>
          {filteredData(mod).map((item) => (
            <div className="main" key={item.id}>
              <NavLink to={`/dynamic/${item.id}`} className="image">
                <img src={item.image} alt="" />
              </NavLink>
              <NavLink className="Dynamic-navlink" to={`/dynamic/${item.id}`}>
                <h3>{item.name.slice(0, 15)}</h3>
              </NavLink>
              <h2>{item.price}</h2>
              <h2 className="add-cart-btn">
                <button onClick={()=>dispatch(addtoCart(item))}>Add To cart</button>
              </h2>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Home;

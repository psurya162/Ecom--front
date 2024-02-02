import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import Camera from "./Camera";
import Laptop from "./laptop";
import HeadPhone from "./HeadPhone";
import Mobile from "./Mobile";
import "./Navbar.css";
import SignUp from "./Sign";
import Login from "./Login";

import DataCompo from "./Store/store";
import DynamicCompo from "./DynamicCompo";

const Navbar = () => {

  const [menuOpen, setMenuopen] = useState(false);
  const togglemenu = () => {
    setMenuopen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuopen(false)
  }
  return (
    <>
      
        
        <div className="navbar">
        <div className="menu" onClick={togglemenu}>
          <i
            class={menuOpen ? "fa-solid fa-square-xmark" : "fa-solid fa-bars"}
          ></i>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/camera" onClick={closeMenu}>
              Camera
            </NavLink>
          </li>
          <li>
            <NavLink to="/mobile" onClick={closeMenu}>
              Mobile
            </NavLink>
          </li>
          <li>
            <NavLink to="/laptop" onClick={closeMenu}>
              Laptop
            </NavLink>
          </li>
          <li>
            <NavLink to="headphone" onClick={closeMenu}>
              HeadPhone
            </NavLink>
          </li>
          
        </ul>
      </div>
          <DataCompo>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/camera" element={<Camera />} />
              <Route path="/mobile" element={<Mobile />} />
              <Route path="/laptop" element={<Laptop />} />
              <Route path="/headphone" element={<HeadPhone />} />
              <Route path="/dynamic/:id" element={<DynamicCompo />} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<SignUp/>}/>
            </Routes>
          </DataCompo>
        
      
    </>
  );
};

export default Navbar;



      
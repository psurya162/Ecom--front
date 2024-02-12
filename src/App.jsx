import React from "react";
import "./App.css";
import Header from "./Component/Header";

import Cart from "./Component/Cart";

import Navbar from "./Component/Navbar";

const App = () => {
  return (
    <div>
      <Cart />
      <Header />
      <Navbar />
    </div>
  );
};

export default App;

import { React, createContext, useEffect, useState } from "react";

import axios from "axios";

export const Store = createContext();

const DataCompo = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData=async()=>{
        try{
            const Response = await axios.get("http://localhost:5500/api/ecom")
            setData(Response.data)
        }
        catch(err){
            console.log("Errorn Fetching")
        }
        
    }
    fetchData()
  },[])

  return <Store.Provider value={{ data }}>{children}</Store.Provider>;
};

export default DataCompo;

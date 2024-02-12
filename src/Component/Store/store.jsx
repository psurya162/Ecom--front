import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { setItems } from "../../feature/cartSllice"; // Adjust the import path based on the location of your Redux slice file

export const Store = createContext();

const DataCompo = ({ children }) => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch(); // Get dispatch function from Redux

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://back-endd-ha9h.onrender.com/api/ecom");
                setData(response.data);
                dispatch(setItems(response.data)); // Dispatch action to set items in Redux store
            } catch (error) {
                console.log("Error Fetching Data");
            }
        };

        fetchData();
    }, [dispatch]);

    return <Store.Provider value={{ data }}>{children}</Store.Provider>;
};

export default DataCompo;

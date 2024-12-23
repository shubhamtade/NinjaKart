import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [productId, setProductId] = useState(null);
  const [loading, setLoading] = useState(true);

  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        console.log(response.data);
        setProductList(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <MyContext.Provider
      value={{
        productList,
        setProductId,
        loading,
        productId,
        itemCount,
        setItemCount,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;

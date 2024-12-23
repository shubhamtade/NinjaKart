import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MyContext } from "../Context";

const Cart = () => {
  const { cartItem, setCartItem } = useContext(MyContext);
  const [products, setProducts] = useState({});

  useEffect(() => {
    const fetchProductDetails = async (itemId) => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${itemId}`
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    const fetchAllProducts = async () => {
      const productPromises = cartItem.map((item) =>
        fetchProductDetails(item.itemId)
      );
      const productArray = await Promise.all(productPromises);
      const productMap = {};
      productArray.forEach((product) => {
        productMap[product.id] = product;
      });
      setProducts(productMap);
    };

    fetchAllProducts();
  }, [cartItem]);

  const increaseQuantity = (itemId) => {
    setCartItem((prevCart) =>
      prevCart.map((item) =>
        item.itemId === itemId ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItem((prevCart) =>
      prevCart.map((item) =>
        item.itemId === itemId && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItem
      .reduce((total, item) => {
        const product = products[item.itemId];
        return total + (product ? product.price * item.count : 0);
      }, 0)
      .toFixed(2);
  };

  console.log(cartItem);

  return (
    <div className="w-full mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cartItem.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItem.map((item) => {
          const product = products[item.itemId];
          return (
            <div className="flex gap-4 flex-wrap" key={item.itemId}>
              <div className="flex flex-row md:flex-row gap-6 border p-4 rounded-lg shadow-md w-full md:w-1/4">
                <div className="md:w-1/4">
                  {product ? (
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-auto rounded-lg"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-300 rounded-md animate-pulse"></div>
                  )}
                </div>
                <div className="md:w-3/4 flex-grow">
                  <h2 className="text-xl font-semibold">
                    {product ? product.title : "Loading..."}
                  </h2>
                  <p className="text-gray-600">
                    Category: {product ? product.category : "Loading..."}
                  </p>
                  <p className="text-gray-600">
                    Brand: {product ? product.brand : "Loading..."}
                  </p>
                  <p className="text-gray-600">
                    SKU: {product ? product.sku : "Loading..."}
                  </p>
                  <p className="text-green-600 font-bold text-lg mt-2">
                    ${product ? product.price.toFixed(2) : "Loading..."}
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <button
                      onClick={() => decreaseQuantity(item.itemId)}
                      className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span className="text-lg">{item.count}</span>
                    <button
                      onClick={() => increaseQuantity(item.itemId)}
                      className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
      <div className="flex justify-between items-center mt-6">
        <h3 className="text-xl font-semibold">
          Total Price: ${getTotalPrice()}
        </h3>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

import React, { useState } from "react";

const product = {
  id: 1,
  title: "Essence Mascara Lash Princess",
  category: "beauty",
  price: 9.99,
  discountPercentage: 7.17,
  rating: 4.94,
  brand: "Essence",
  sku: "RCH45Q1A",
  warrantyInformation: "1 month warranty",
  shippingInformation: "Ships in 1 month",
  availabilityStatus: "Low Stock",
  returnPolicy: "30 days return policy",
  thumbnail:
    "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
};

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <div className="w-fit mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="flex gap-4 flex-wrap">
        <div className="flex flex-row md:flex-row gap-6 border p-4 rounded-lg shadow-md w-full md:w-1/4">
          <div className="md:w-1/4">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-3/4 flex-grow">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-600">Category: {product.category}</p>
            <p className="text-gray-600">Brand: {product.brand}</p>
            <p className="text-gray-600">SKU: {product.sku}</p>
            <p className="text-green-600 font-bold text-lg mt-2">
              ${product.price.toFixed(2)}
            </p>
            <div className="mt-4 flex items-center gap-4">
              <button
                onClick={decreaseQuantity}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* ---------------- */}

        <div className="flex flex-row md:flex-row gap-6 border p-4 rounded-lg shadow-md w-full md:w-1/4">
          <div className="md:w-1/4">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-3/4 flex-grow">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-600">Category: {product.category}</p>
            <p className="text-gray-600">Brand: {product.brand}</p>
            <p className="text-gray-600">SKU: {product.sku}</p>
            <p className="text-green-600 font-bold text-lg mt-2">
              ${product.price.toFixed(2)}
            </p>
            <div className="mt-4 flex items-center gap-4">
              <button
                onClick={decreaseQuantity}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-6">
        <h3 className="text-xl font-semibold">Total Price: ${totalPrice}</h3>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MyContext } from "../Context";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { itemCount, setItemCount } = useContext(MyContext);

  const { id } = useParams();

  console.log("This is params", id);

  const [singleProduct, setSingleProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        console.log(response.data.title);
        setSingleProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container p-5 mx-auto my-2 sm:my-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="p-[30px] md:p-0 md:w-1/2 lg:w-1/3 border rounded-lg shadow-md">
          <img
            src={singleProduct.thumbnail}
            alt={singleProduct.title}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="md:w-1/2 lg:w-2/3 flex-grow">
          <h1 className="text-3xl font-bold mb-2">{singleProduct.title}</h1>
          <p className="text-gray-700 mb-4">{singleProduct.description}</p>
          <p className="text-xl font-semibold text-green-600 mb-4">
            ${singleProduct.price?.toFixed(2)}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-sm text-gray-600">
              Category: {singleProduct.category}
            </span>
            <span className="text-sm text-gray-600">
              Brand: {singleProduct.brand}
            </span>
            <span className="text-sm text-gray-600">
              SKU: {singleProduct.sku}
            </span>
            <span className="text-sm text-gray-600">
              Weight: {singleProduct.weight}g
            </span>
            <span className="text-sm text-gray-600">
              Dimensions: {singleProduct.dimensions?.width} x{" "}
              {singleProduct.dimensions?.height} x{" "}
              {singleProduct.dimensions?.depth} cm
            </span>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <h2 className="text-lg font-semibold mb-2">Product Details</h2>
            <ul className="space-y-2 text-gray-600">
              <li>Warranty: {singleProduct.warrantyInformation}</li>
              <li>Shipping: {singleProduct.shippingInformation}</li>
              <li>Availability: {singleProduct.availabilityStatus}</li>
              <li>Return Policy: {singleProduct.returnPolicy}</li>
              <li>
                Minimum Order Quantity: {singleProduct.minimumOrderQuantity}
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Reviews</h2>
            {singleProduct.reviews?.map((review, index) => (
              <div key={index} className="border-t border-gray-200 pt-2 mt-2">
                <p className="text-sm text-gray-600">Rating: {review.rating}</p>
                <p className="text-sm text-gray-600">
                  Comment: {review.comment}
                </p>
                <p className="text-sm text-gray-600">
                  Reviewer: {review.reviewerName}
                </p>
                <p className="text-sm text-gray-600">
                  Date: {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <button
          className="border border-black py-2 px-5 rounded-lg cursor-pointer hover:text-green-600 hover:border-green-600 hover:bg-white hover:py-3 hover:px-6 duration-300"
          onClick={() => {
            setItemCount(itemCount + 1);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;

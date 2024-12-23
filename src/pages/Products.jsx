import React, { useContext } from "react";
import { MyContext } from "../Context";
import { Link } from "react-router-dom";

const Products = () => {
  const { productList, loading, setProductId } = useContext(MyContext);

  const renderSkeleton = (key) => (
    <div className="border p-4 rounded-lg shadow-md animate-pulse" key={key}>
      <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>
      <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
      <div className="h-4 bg-gray-300 rounded-md mb-2"></div>
      <div className="h-4 bg-gray-300 rounded-md mb-2"></div>
    </div>
  );

  if (loading) {
    return (
      <div className="container mx-auto my-2 sm:my-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => renderSkeleton(index))}
        </div>
      </div>
    );
  }

  return (
    <div className="container p-2 sm:mx-auto sm:my-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productList.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-md  relative"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-auto max-h-48 object-contain rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600 line-clamp-2">{product.description}</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>

            <Link to={`/product/${product.id}`}>
              <button className="bg-black absolute bottom-4 right-4 rounded-md text-white text-[12px] p-1 cursor-pointer hover:bg-white hover:border-black hover:text-black border">
                See Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

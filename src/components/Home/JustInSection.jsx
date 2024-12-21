import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";

const JustInSection = () => {
  const items = Array.from({ length: 4 }, (_, index) => (
    <div key={index} className="group relative">
      <img
        src="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg"
        alt=""
        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
      />
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0"></span>
              Basic Tee
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">Black</p>
        </div>
        <p className="text-sm font-medium text-gray-900">$35</p>
      </div>
    </div>
  ));

  return (
    <div className="my-3 md:my-5 mx-[10%]">
      <div className="flex justify-between items-center pb-4 opacity-80">
        <h3 className="text-3xl font-semibold">Just In</h3>
        <div>
          <FiberManualRecordIcon />
          <FiberManualRecordOutlinedIcon />
          <FiberManualRecordOutlinedIcon />
        </div>
      </div>

      <div className="bg-white flex justify-center">
        <div className="max-w-2xl lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-4 xl:gap-x-8">
            {items}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JustInSection;

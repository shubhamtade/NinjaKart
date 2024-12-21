import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Model1 from "../../assets/JustInModel1.jpg";
import Rating from "@mui/material/Rating";

const JustInSection = () => {
  const items = Array.from({ length: 5 }, (_, index) => (
    <div>
      <div
        key={index}
        className="bg-slate-600 w-[200px] h-[250px] rounded-xl relative flex justify-center items-center bg-cover bg-center group"
        style={{ backgroundImage: `url(${Model1})` }}
      >
        <div className="">
          <p className="bg-white px-2 rounded-sm text-[12px] absolute top-3 left-3">
            NEW
          </p>
          <FavoriteBorderOutlinedIcon className="bg-white p-1 rounded-full absolute top-3 right-3" />
        </div>
        <button className="hidden group-hover:block bg-black absolute bottom-3 w-[90%] text-center text-white py-2 text-[12px] rounded-lg transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
          Add to cart
        </button>
      </div>
      <div className="mt-1">
        <Rating name="simple-controlled" value="3" size="small" />
        <p className="font-black text-[12px]">Product Cloth Name</p>
        <p className="font-bold text-[12px]">Product Category</p>
        <p className="font-bold text-[12px]">₹ 500</p>
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

      <div className="flex justify-center flex-wrap gap-5">{items}</div>
    </div>
  );
};

export default JustInSection;

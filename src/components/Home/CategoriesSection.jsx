import React from "react";
import PufferCatImg from "../../assets/PufferCat.webp";

const CategoriesSection = () => {
  return (
    <div>
      <div className="my-3 md:my-5 mx-[10%]">
        <div className="py-4">
          <h3 className="text-3xl font-semibold text-center">
            Shop by Categories
          </h3>
          <div className="pt-7 flex gap-4 justify-center flex-wrap">
            <div className="flex flex-col items-center">
              <img
                src={PufferCatImg}
                className="w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] rounded-full object-cover"
              />
              <p>Puffer</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={PufferCatImg}
                className="w-[8rem] h-[8rem]  md:w-[10rem] md:h-[10rem] rounded-full object-cover"
              />
              <p>Puffer</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={PufferCatImg}
                className="w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] rounded-full object-cover"
              />
              <p>Puffer</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={PufferCatImg}
                className="w-[8rem] h-[8rem]  md:w-[10rem] md:h-[10rem] rounded-full object-cover"
              />
              <p>Puffer</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={PufferCatImg}
                className="w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] rounded-full object-cover"
              />
              <p>Puffer</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={PufferCatImg}
                className="w-[8rem] h-[8rem]  md:w-[10rem] md:h-[10rem] rounded-full object-cover"
              />
              <p>Puffer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;

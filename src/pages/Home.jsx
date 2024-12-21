import React from "react";
import ImgMain from "../assets/Hero.png";
import MdImagMain from "../assets/MdHero.png";

const Home = () => {
  return (
    <div className="cursor-pointer">
      <img src={`${ImgMain}`} alt="" className="hidden sm:block" />
      <img src={`${MdImagMain}`} alt="" className="sm:hidden w-[100%]" />
    </div>
  );
};

export default Home;

import React from "react";

import ImgMain from "../../assets/Hero.png";
import MdImagMain from "../../assets/MdHero.png";

const Hero = () => {
  return (
    <div className="cursor-pointer">
      <img src={`${ImgMain}`} alt="" className="hidden md:block" />
      <img src={`${MdImagMain}`} alt="" className="md:hidden w-[100%]" />
    </div>
  );
};

export default Hero;

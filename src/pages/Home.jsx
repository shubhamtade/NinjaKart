import React from "react";
import Hero from "../components/Home/Hero";
import TrendingBrand from "../components/Home/TrendingBrand";
import JustInSection from "../components/Home/JustInSection";
import CategoriesSection from "../components/Home/CategoriesSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="md:container md:mx-auto">
        <TrendingBrand />
        <JustInSection />
        <CategoriesSection />
      </div>
    </div>
  );
};

export default Home;

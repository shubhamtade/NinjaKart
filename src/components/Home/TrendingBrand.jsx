import React from "react";
import Logo1 from "../../assets/logo/logoipsum-288.svg";
import Logo2 from "../../assets/logo/logoipsum-321.svg";
import Logo3 from "../../assets/logo/logoipsum-330.svg";
// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/scrollbar";

const TrendingBrand = () => {
  return (
    <div className="my-3 md:my-5 mx-[10%] text-center">
      <h3 className="text-2xl md:text-xl font-bold md:mb-3 opacity-50 :opacity-100">
        Trending Brands
      </h3>
      <div className="hidden md:flex justify-around items-center grayscale opacity-50">
        <img src={Logo1} alt="Brand 1" className="w-24 h-24" />
        <img src={Logo2} alt="Brand 2" className="w-24 h-24" />
        <img src={Logo3} alt="Brand 3" className="w-24 h-24" />
        <img src={Logo1} alt="Brand 1" className="w-24 h-24" />
        <img src={Logo2} alt="Brand 2" className="w-24 h-24" />
        <img src={Logo3} alt="Brand 3" className="w-24 h-24" />
      </div>
      <div className="md:hidden grayscale opacity-50 flex justify-evenly">
      <img src={Logo1} alt="Brand 1" className="w-24 h-24" />
        <img src={Logo2} alt="Brand 2" className="w-24 h-24" />
        <img src={Logo3} alt="Brand 3" className="w-24 h-24" />
        {/* <Swiper spaceBetween={10} slidesPerView={3} loop={true}>
          <SwiperSlide>
            <img src={Logo1} alt="Brand 1" className="w-24 h-24" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Logo2} alt="Brand 2" className="w-24 h-24" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Logo3} alt="Brand 3" className="w-24 h-24" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Logo1} alt="Brand 1" className="w-24 h-24" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Logo2} alt="Brand 2" className="w-24 h-24" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Logo3} alt="Brand 3" className="w-24 h-24" />
          </SwiperSlide>
        </Swiper> */}
      </div>
    </div>
  );
};

export default TrendingBrand;

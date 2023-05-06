import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { heroImg1, heroImg2, heroImg3 } from "../assets";

const Hero = () => {
  return (
    <div className=" max-w-[500px] md:max-w-[1240px] w-full mx-auto h-full py-10">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        <SwiperSlide>
          <div className=" flex  flex-col md:flex-row justify-between items-center px-5 gap-y-10 md:pl-16">
            <div className=" pr-2 mx-auto">
              <h2 className=" md:text-[55px] text-[35px] text-center md:text-left font-extrabold leading-none mb-7 text-[#333]">
                New milestone for world-leading English test
              </h2>
              <p className=" text-lg text-center md:text-left md:text-2xl font-medium mb-3 ">
                IELTS trusted by more than 11,000 organisations across the globe
              </p>
              <div className="  flex justify-center md:justify-start">
                <button className=" bg-prigaryRed py-3 px-8 text-center text-white font-semibold rounded-lg text-lg">
                  Find out more information
                </button>
              </div>
            </div>
            <img className=" w-[550px] mt-7" src={heroImg1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col md:flex-row justify-between items-center px-5 md:px-20">
            <div className=" pr-2 mx-auto">
              <h2 className=" md:text-[55px] text-[35px] text-center md:text-left font-extrabold leading-none mb-7 text-[#333]">
                USA says yes to IELTS
              </h2>
              <p className=" text-lg text-center md:text-left md:text-2xl font-medium mb-3 ">
                IELTS is accepted by over 3,400 institutions in the USA.
              </p>
              <div className="  flex justify-center md:justify-start">
                <button className=" bg-prigaryRed py-3 px-8 text-center text-white font-semibold rounded-lg text-lg">
                  Find out more about IELTS in the USA
                </button>
              </div>
            </div>
            <img className=" w-[550px] mt-7" src={heroImg2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col md:flex-row justify-between items-center px-5 md:px-20">
            <div className=" pr-2 mx-auto">
              <h2 className=" md:text-[55px] text-[35px] text-center md:text-left font-extrabold leading-none mb-7 text-[#333]">
                IELTS official practice test
              </h2>
              <p className=" text-lg text-center md:text-left md:text-2xl font-medium mb-3 ">
                'IELTS Progress Check' is an official online practice test
                marked by IELTS experts.
              </p>
              <div className="  flex justify-center md:justify-start">
                <button className=" bg-prigaryRed py-3 px-8 text-center text-white font-semibold rounded-lg text-lg">
                  Purchase IELTS Progress Check today
                </button>
              </div>
            </div>
            <img className=" w-[550px] mt-7" src={heroImg3} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;

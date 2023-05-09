import React from "react";
import { learnMore1, learnMore2 } from "../assets";

const LearnMore = () => {
  return (
    <div className=" max-w-[500px] md:max-w-[1240px] w-full mx-auto h-full py-10">
      <div className=" flex flex-col md:flex-row justify-center items-center">
        <div className=" relative ">
          <img src={learnMore1} alt="" className=" w-[600px] " />

          <div className="top-24 py-4 absolute text-center translate-x-28  md:translate-x-36 translate-y-10 md:translate-y-20 ">
            <h2 className=" text-4xl md:text-5xl mb-4 font-bold ml-1  md:ml-8 mt-11 text-white  z-50">
              Are you a <br /> teacher?
            </h2>
            <p className=" text-lg md:text-xl text-white font-semibold mb-8">We have resources for you!</p>
            <a href="#" className=" bg-white px-10 py-3 text-lg font-semibold rounded-md text-prigaryRed ">Learn More</a>
          </div>
        </div>
        <div className=" relative ">
          <img src={learnMore2} alt="" className=" w-[600px] " />

          <div className="top-24 py-4 absolute text-center translate-x-24    md:translate-x-32 translate-y-10 md:translate-y-20 ">
            <h2 className=" text-4xl md:text-5xl mb-4 font-bold ml-1  md:ml-8 mt-11 text-white  z-50">
            Are you a <br /> researcher?
            </h2>
            <p className=" text-lg md:text-xl text-white font-semibold mb-8">Check out our research reports!</p>
            <a href="#" className=" bg-white px-10 py-3 text-lg font-semibold rounded-md text-prigaryRed ">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;

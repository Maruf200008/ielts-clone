import React from "react";
import { score } from "../assets";

const Scores = () => {
  return (
    <div className=" max-w-[500px] md:max-w-[1240px] w-full mx-auto h-full py-10">
      <div className=" md:mx-16 bg-white md:shadow-2xl rounded-lg">
        <div className=" md:p-10 flex flex-col md:flex-row items-center justify-center gap-x-8">
          <div>
            <div className="">
              <div>
                <h2 className=" text-center md:text-left text-[20px] md:text-[45px] font-bold md:leading-[55px] text-[#333]">
                  <span className=" text-prigaryRed">
                    {" "}
                    Over 11,000 organisations{" "}
                  </span>{" "}
                  have chosen IELTS for language skills verification!
                </h2>
              </div>
              <div className=" mt-10 mx-24 md:mx-0">
                <a
                  href="#"
                  className=" text-xl font-bold bg-prigaryRed px-6 py-3 rounded-md text-white"
                >
                  Why accept IELTS scores?
                </a>
              </div>
            </div>
          </div>
          <div className=" order-first md:order-last">
            <img src={score} alt="" className=" w-[350px] md:w-[650px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scores;

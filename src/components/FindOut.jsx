import React from "react";

import { FaArrowRight } from "react-icons/fa";

const FindOut = () => {
  return (
    <div className=" max-w-[500px] md:max-w-[1240px] w-full mx-auto h-full py-10">
      <div className="  grid grid-cols-2 md:grid-cols-4 gap-x-7 gap-y-7 md:gap-x-12">
        <div className=" bg-white shadow-lg flex-1 rounded-md">
          <img
            src="https://www.ielts.org/-/media/images/resources/01_ielts_ns_4_0893.ashx?iar=0&hash=C6AE0717D67FCFD165A22A952B69F4FC"
            alt=""
            className=" rounded-md"
          />
          <div className=" p-3">
            <h2 className=" text-2xl font-bold">
              Ensuring quality and fairness
            </h2>
            <p>
              An overview of some of the key features of IELTS and how they
              contribute to reliable, relevant and fair language assessment.
            </p>
            <a href="#" className=" text-xl font-bold text-prigaryRed">
              Ensuring quality and fairness
            </a>
          </div>
        </div>
        <div className=" bg-white shadow-lg flex-1 rounded-md">
          <img
            src="https://www.ielts.org/-/media/content-blocks/01_ielts_ns_3_0658.ashx?iar=0&hash=C94FBDD3874BDCF059D636702D513399"
            alt=""
            className=" rounded-md"
          />
          <div className=" p-3">
            <h2 className=" text-2xl font-bold">IELTS assessment criteria</h2>
            <p>
              Learn more about how IELTS is scored and download the band
              descriptors which describe written and spoken performance at each
              of the nine IELTS bands.
            </p>
            <a href="#" className=" text-xl font-bold text-prigaryRed">
              Ensuring quality and fairness
            </a>
          </div>
        </div>
        <div className=" bg-white shadow-lg flex-1 rounded-md">
          <img
            src="https://www.ielts.org/-/media/images/resources/test-preparation.ashx?iar=0&hash=191467D1601897E0C7703B0FCBD94EF7"
            alt=""
            className=" rounded-md"
          />
          <div className=" p-3">
            <h2 className=" text-2xl font-bold">Prepare for the test</h2>
            <p className=" mb-16">
              An overview of some of the key features of IELTS and how they
              contribute to reliable, relevant and fair language assessment.
            </p>
            <a href="#" className=" text-xl font-bold text-prigaryRed ">
              How to prepare
            </a>
          </div>
        </div>
        <div className=" bg-[#2d2d2d] shadow-lg flex-1 rounded-md">
          <div className=" p-3 ">
            <h2 className=" text-4xl font-bold mt-36 text-white  ">
              Find out <br /> more about IELTS
            </h2>
            <FaArrowRight size={35} className=" mt-4 text-prigaryRed" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindOut;

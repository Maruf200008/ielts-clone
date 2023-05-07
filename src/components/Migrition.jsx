import React from "react";

const Migrition = () => {
  return (
    <div className=" max-w-[500px] md:max-w-[1240px] w-full mx-auto h-full py-10">
      <div className=" flex items-center flex-col">
        <h2 className=" text-center text-4xl font-bold text-[#2d2d2d] py-10">
          Where can IELTS take you
        </h2>
        <div className=" grid md:grid-cols-5 gap-x-5 gap-y-16">
          <div className=" flex justify-center flex-col items-center gap-y-4 ">
            <img
              className=" w-[100px]"
              src="https://www.ielts.org/-/media/icons/countries/australia.ashx?iar=0&hash=43CE8C7106C80C51B6244547FA64D2EE"
              alt=""
            />
            <div>
              <h3 className=" text-xl md:text-2xl font-bold text-[#2d2d2d]">
                Australia
              </h3>
            </div>
          </div>
          <div className=" flex justify-center flex-col items-center gap-y-4 ">
            <img
              className=" w-[100px]"
              src="https://www.ielts.org/-/media/icons/countries/canada.ashx?iar=0&hash=AB1E3AB4D84E79A32099B56DFC593F00"
              alt=""
            />
            <div>
              <h3 className=" text-xl md:text-2xl font-bold text-[#2d2d2d]">
                Canada
              </h3>
            </div>
          </div>
          <div className=" flex justify-center flex-col items-center gap-y-4 ">
            <img
              className=" w-[100px]"
              src="https://www.ielts.org/-/media/icons/countries/new-zealand.ashx?iar=0&hash=EAD28C8C543554CF0DCD27456781640B"
              alt=""
            />
            <div>
              <h3 className=" text-xl md:text-2xl font-bold text-[#2d2d2d]">
                New Zealand
              </h3>
            </div>
          </div>
          <div className=" flex justify-center flex-col items-center gap-y-4 ">
            <img
              className=" w-[70px] object-cover"
              src="https://www.ielts.org/-/media/icons/countries/united-kingdom.ashx?iar=0&hash=814DA7A2CD8CC34A6CB9A7A0A58778D8"
              alt=""
            />
            <div>
              <h3 className=" text-xl md:text-2xl font-bold text-[#2d2d2d]">
                United Kingdom
              </h3>
            </div>
          </div>
          <div className=" flex justify-center flex-col items-center gap-y-4 ">
            <img
              className=" w-[100px] object-cover"
              src="https://www.ielts.org/-/media/icons/countries/usa.ashx?iar=0&hash=29374D0DCAD599CE953F14D16F7ED131"
              alt=""
            />
            <div>
              <h3 className=" text-xl md:text-2xl font-bold text-[#2d2d2d]">
                United States
              </h3>
            </div>
          </div>
        </div>
        <a className=" cursor-pointer hover:text-prigaryRed transition text-center mt-10 px-10 rounded-lg text-white font-bold py-3 text-lg bg-[#2d2d2d]">
          IELTS for migration
        </a>
      </div>
    </div>
  );
};

export default Migrition;

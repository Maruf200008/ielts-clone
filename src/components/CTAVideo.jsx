import React from "react";

const CTAVideo = () => {
  return (
    <div className=" bg-gray-200 ">
      <div className=" max-w-[500px] md:max-w-[1240px] w-full mx-auto h-full py-10">
        <div className=" flex p-10 gap-x-10 flex-col md:flex-row ">
          <div className="">
            <iframe
              className=" rounded-lg w-[400px] h-[230px] md:h-[300px] md:w-[550px]"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/PO58e0Z4dbE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className=" space-y-5 text-center md:text-left">
            <h2 className=" text-[30px] md:text-[60px] font-bold mt-5 md:mt-0">
              What is IELTS?
            </h2>
            <p className=" text-gray-700">
              IELTS is an English language test for study, migration or work.
              Over three million people take our test every year. IELTS is
              accepted by more than 11,000 employers, universities, schools and
              immigration bodies around the world.
            </p>
            <div className=" flex flex-col md:flex-row gap-y-3 justify-start w-full gap-x-5">
              <a
                href="#"
                className=" bg-white py-3 px-5 rounded-lg border border-black font-semibold text-lg text-gray-700"
              >
                Learn more about the test
              </a>
              <a
                href="#"
                className=" bg-prigaryRed py-3 px-5 rounded-lg border  font-semibold text-lg text-white"
              >
                Who accepts IELTS scores?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAVideo;

import React from "react";

const IconBlog = () => {
  return (
    <div className=" bg-white ">
      <div className=" max-w-[500px] md:max-w-[1240px] w-full mx-auto h-full py-10 flex flex-col justify-center items-center">
        <div className=" flex flex-col md:flex-row px-10 md:px-1 justify-center items-center gap-x-5">
          <div className=" flex items-center flex-col text-center cursor-pointer">
            <img
              className=" w-[70px]"
              src="https://www.ielts.org/-/media/icons/graduation2x.ashx?iar=0&hash=0ACD965443707A105E12C36F70655F26"
              alt=""
            />
            <div className=" py-4 space-y-4">
              <h3 className=" text-2xl font-bold">IELTS for study</h3>
              <p>
                IELTS is recognised by more than 11,000 education and training
                providers worldwide.
              </p>
            </div>
          </div>
          <div className=" flex items-center flex-col text-center cursor-pointer">
            <img
              className=" w-[70px]"
              src="https://www.ielts.org/-/media/icons/migration2x.ashx?iar=0&hash=70A5B2061BDA4DC76097989249BBDE80"
              alt=""
            />
            <div className=" py-4 space-y-4">
              <h3 className=" text-2xl font-bold">IELTS for migration</h3>
              <p>
                Take IELTS to migrate to Australia, Canada, New Zealand and the
                UK.
              </p>
            </div>
          </div>
          <div className=" flex items-center flex-col text-center cursor-pointer">
            <img
              className=" w-[70px]"
              src="https://www.ielts.org/-/media/icons/work.ashx?iar=0&hash=02AC509199AC859F29FB806E93DCE34F"
              alt=""
            />
            <div className=" py-4 space-y-4">
              <h3 className=" text-2xl font-bold">IELTS for work</h3>
              <p>
                Organisations around the world rely on IELTS to help them select
                the right people.
              </p>
            </div>
          </div>
        </div>
        <p className=" text-center bg-[#2d2d2d] py-3 hover:text-prigaryRed transition px-10 rounded-lg text-lg text-white font-bold cursor-pointer mt-5">
          IELTS test types
        </p>
      </div>
    </div>
  );
};

export default IconBlog;

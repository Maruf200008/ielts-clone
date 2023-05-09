import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <div className=" bg-[#333] mt-14">
        <div className="max-w-[500px] md:max-w-[1040px] w-full mx-auto h-full py-10">
          <div className=" flex justify-center gap-x-14">
            <div>
              <img
                src="https://www.ielts.org/-/media/partners/svg/british_council.ashx?iar=0&hash=BB1CC7F5DEC83569567BACB3F79105A2"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://www.ielts.org/-/media/partners/svg/idp.ashx?iar=0&hash=1135DACF89204FF1FA2C73E8178FBE37"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://www.ielts.org/-/media/partners/cambridge_english_logo_updated.ashx?iar=0&hash=2E7599442800E90ED24EB55FC19432EA"
                alt=""
              />
            </div>
          </div>
          <div className=" text-center my-8 md:my-14 text-lg text-white">
            <p>
              IELTS is jointly owned by the British Council; IDP IELTS; and
              Cambridge University Press & Assessment
            </p>
          </div>
          <div className=" hidden md:grid grid-cols-5 gap-x-8">
            <div className=" ">
              <h2 className=" text-white text-lg font-bold mb-5">
                About IELTS
              </h2>
              <ul className=" space-y-3 text-[14px] text-gray-300">
                <li className=" cursor-pointer">What is IELTS?</li>
                <li className=" cursor-pointer">IELTS test types</li>
                <li className=" cursor-pointer">Ways to take IELTS</li>
                <li className=" cursor-pointer">IELTS on computer</li>
                <li className=" cursor-pointer">IELTS for migration</li>
                <li className=" cursor-pointer">IELTS for study</li>
                <li className=" cursor-pointer">IELTS for work</li>
                <li className=" cursor-pointer">IELTS Indicator</li>
                <li className=" cursor-pointer">Video-call Speaking test</li>
                <li className=" cursor-pointer">Who accepts IELTS scores?</li>
                <li className=" cursor-pointer">How we develop the test</li>
                <li className=" cursor-pointer">
                  Ensuring quality and fairness
                </li>
                <li className=" cursor-pointer">Test security</li>
                <li className=" cursor-pointer">IELTS in CEFR scale</li>
                <li className=" cursor-pointer">Downloads</li>
              </ul>
            </div>
            <div className=" ">
              <h2 className=" text-white text-lg font-bold mb-5">
                For Test Takers
              </h2>
              <ul className=" space-y-3 text-[14px] text-gray-300">
                <li className=" cursor-pointer">Why choose IELTS</li>
                <li className=" cursor-pointer">How to prepare</li>
                <li className=" cursor-pointer">How to register</li>
                <li className=" cursor-pointer">IELTS Online</li>
                <li className=" cursor-pointer">Test format</li>
                <li className=" cursor-pointer">Sample test questions</li>
                <li className=" cursor-pointer">Book a test</li>
                <li className=" cursor-pointer">On test day</li>
                <li className=" cursor-pointer">Special requirements</li>
                <li className=" cursor-pointer">Results</li>
                <li className=" cursor-pointer">How IELTS is scored</li>
                <li className=" cursor-pointer">Resitting the test</li>
                <li className=" cursor-pointer">IELTS One Skill Retake</li>
                <li className=" cursor-pointer">IELTS Complaints Policy</li>
                <li className=" cursor-pointer">
                  Cancellations, refunds and transfers
                </li>
                <li className=" cursor-pointer">Special Consideration</li>
                <li className=" cursor-pointer">owing to exceptional</li>
                <li className=" cursor-pointer">circumstances</li>
              </ul>
            </div>
            <div className=" ">
              <h2 className=" text-white text-lg font-bold mb-5">
                For Organisations
              </h2>
              <ul className=" space-y-3 text-[14px] text-gray-300">
                <li className=" cursor-pointer">Why accept IELTS scores?</li>
                <li className=" cursor-pointer">Setting IELTS entry scores</li>
                <li className=" cursor-pointer">Accept IELTS results</li>
                <li className=" cursor-pointer">IELTS scoring in detail</li>
                <li className=" cursor-pointer">Verifying IELTS results</li>
                <li className=" cursor-pointer">IELTS Results Service</li>
                <li className=" cursor-pointer">How to use IELTS results</li>
                <li className=" cursor-pointer">
                  Comparing IELTS to other tests
                </li>
                <li className=" cursor-pointer">IELTS Online</li>
                <li className=" cursor-pointer">IELTS One Skill Retake</li>
                <li className=" cursor-pointer">
                  IELTS Academic or Duolingo English Test: how do they compare?
                </li>
                <li className=" cursor-pointer">
                  A brighter future: broadening access to higher education with
                  IELTS Online
                </li>
                <li className=" cursor-pointer">
                  IELTS – helping universities to recruit students with the
                  right skills
                </li>
              </ul>
            </div>
            <div className=" ">
              <h2 className=" text-white text-lg font-bold mb-5">
                For Researchers
              </h2>
              <ul className=" space-y-3 text-[14px] text-gray-300">
                <li className=" cursor-pointer">Test statistics</li>
                <li className=" cursor-pointer">Research reports</li>
                <li className=" cursor-pointer">
                  List of grant recipients and research topics
                </li>
                <li className=" cursor-pointer">Grants and awards</li>
                <li className=" cursor-pointer">Call for research proposals</li>
                <li className=" cursor-pointer">Research support</li>
              </ul>
            </div>
            <div className=" ">
              <h2 className=" text-white text-lg font-bold mb-5">
                For Teachers
              </h2>
              <ul className=" space-y-3 text-[14px] text-gray-300">
                <li className=" cursor-pointer">IELTS for teachers</li>
                <li className=" cursor-pointer">
                  Examiner recruitment and training
                </li>
                <li className=" cursor-pointer">Blog for teachers</li>
              </ul>
            </div>
          </div>
          <div className=" mt-20 md:hidden">
            <ul className=" space-y-5">
              <li className=" flex justify-center items-center space-x-1  text-white font-semibold">
                <a href="#">About IELTS</a>
                <IoIosArrowDown size={25} />
              </li>
              <li className=" flex justify-center items-center space-x-1 text-white font-semibold">
                <a href="#">For Test Takers</a>
                <IoIosArrowDown size={25} />
              </li>
              <li className=" flex justify-center items-center space-x-1 text-white font-semibold">
                <a href="#">For Organisations</a>
                <IoIosArrowDown size={25} />
              </li>
              <li className=" flex justify-center items-center space-x-1 text-white font-semibold">
                <a href="#">For Researchers</a>
                <IoIosArrowDown size={25} />
              </li>
              <li className=" flex justify-center items-center space-x-1 text-white font-semibold">
                <a href="#">For Teachers</a>
                <IoIosArrowDown size={25} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" bg-black">
        <div className="max-w-[500px] md:max-w-[1040px] w-full mx-auto h-full py-16">
          <div className=" flex flex-col md:flex-row items-center justify-between">
            <img
              className=" w-[100px]"
              src="https://www.ielts.org/-/media/images/resources/mainlogo-white.ashx?iar=0&hash=585EAD380FD588F4BDE144624975636E"
              alt=""
            />

            <div className=" text-gray-300 font-semibold text-[14px]">
              <ul className=" flex flex-col md:flex-row  justify-center items-center gap-x-6 mt-10 md:mt-0 space-y-3">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Accessibility</a>
                </li>
                <li>
                  <a href="#">Disclaimer</a>
                </li>
                <li>
                  <a href="#">Legal</a>
                </li>
                <li>
                  <a href="#">Copyright notice</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Site map</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

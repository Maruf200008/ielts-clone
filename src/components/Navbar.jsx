import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaBars, FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowDown, IoLogoYoutube } from "react-icons/io";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { iltsLogo } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  return (
    <div className=" w-full h-[70px]  md:h-[200px]  bg-white shadow-xl">
      <div className=" max-w-[500px] md:max-w-[1240px] w-full mx-auto h-full">
        <div className=" flex justify-between mt-5 ">
          <img
            src={iltsLogo}
            alt="iltsLogo"
            className=" w-[120px] md:w-[200px]"
          />
          <div className="flex items-center md:hidden">
            <ul className=" flex gap-x-5">
              <li
                className=" flex items-center gap-x-2 hover:text-red-600 transition"
                onClick={() => setShowArrow(!showArrow)}
              >
                <a href="#"> English (UK)</a>
                {showArrow ? (
                  <MdOutlineKeyboardArrowUp className=" font-bold" />
                ) : (
                  <IoIosArrowDown className=" font-bold" />
                )}
              </li>
              <li className=" flex items-center gap-x-2 ">
                {isShow ? (
                  <RxCross2
                    className=" font-bold"
                    onClick={() => setIsShow(!isShow)}
                  />
                ) : (
                  <FaBars
                    className=" font-bold"
                    onClick={() => setIsShow(!isShow)}
                  />
                )}
                <a href="#"> Manu</a>
              </li>
            </ul>
          </div>
          <div className=" hidden md:flex items-center">
            <ul className=" flex gap-x-6 items-center">
              <li className="cursor-pointer">
                <BsFacebook
                  size={25}
                  className=" hover:text-red-600 transition"
                />
              </li>
              <li className="cursor-pointer hover:text-red-600 transition">
                <FaLinkedinIn size={25} />
              </li>
              <li className="cursor-pointer hover:text-red-600 transition">
                <IoLogoYoutube size={25} />
              </li>
              <li className="cursor-pointer hover:text-red-600 transition">
                <BsInstagram size={25} />
              </li>
              <li className=" text-xl font-bold hover:text-red-600 transition">
                <a href="#">IELTS News</a>
              </li>
              <li className=" text-xl font-bold hover:text-red-600 transition">
                <a href="#">Contact Us</a>
              </li>
              <li
                className=" flex items-center gap-x-2 hover:text-red-600 transition cursor-pointer"
                onClick={() => setShowArrow(!showArrow)}
              >
                <a href="#"> English (UK)</a>
                {showArrow ? (
                  <MdOutlineKeyboardArrowUp className=" font-bold" />
                ) : (
                  <IoIosArrowDown className=" font-bold" />
                )}
              </li>
              <li className="rounded border py-3 px-2 cursor-pointer">
                {toggle ? (
                  <div className=" flex">
                    <input
                      type="text"
                      className=" outline-none text-sm px-2"
                      placeholder="Search"
                    />
                    <BiSearch
                      size={20}
                      className=""
                      onClick={() => setToggle(!toggle)}
                    />
                  </div>
                ) : (
                  <BiSearch
                    size={20}
                    className=""
                    onClick={() => setToggle(!toggle)}
                  />
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className=" my-10 hidden md:block">
          <ul className="flex justify-between gap-x-6 text-xl font-bold">
            <li>
              <a href="#">About IELTS</a>
            </li>
            <li>
              <a href="#">For Test Takers</a>
            </li>
            <li>
              <a href="#">For Organisations</a>
            </li>
            <li>
              <a href="#">For Researchers</a>
            </li>
            <li>
              <a href="#">For Teachers</a>
            </li>
            <li>
              <a href="#">Book a test</a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={
          isShow
            ? " absolute z-10  w-full px-8 bg-white md:hidden text-center"
            : " hidden"
        }
      >
        <div className=" ">
          <div className="  flex items-center">
            <input
              type="text"
              className=" border w-full rounded py-2 px-3 outline-none"
              placeholder="Search"
            />
            <BiSearch
              size={20}
              className=" absolute right-10"
              onClick={() => setToggle(!toggle)}
            />
          </div>
        </div>
        <ul className=" flex items-center flex-col py-[60px] gap-y-4 border-b-4 border-black">
          <li className=" flex items-center gap-x-3 text-center font-bold">
            About IELTS
            <IoIosArrowDown className=" font-bold" />
          </li>
          <li className=" flex items-center gap-x-3 text-center font-bold">
            For Test Takers
            <IoIosArrowDown className=" font-bold" />
          </li>
          <li className=" flex items-center gap-x-3 text-center font-bold">
            For Organisations
            <IoIosArrowDown className=" font-bold" />
          </li>
          <li className=" flex items-center gap-x-3 text-center font-bold">
            For Researchers
            <IoIosArrowDown className=" font-bold" />
          </li>
          <li className=" flex items-center gap-x-3 text-center font-bold">
            For Teachers
            <IoIosArrowDown className=" font-bold" />
          </li>
          <li className=" flex items-center gap-x-3 text-center font-bold">
            Book a test
            <IoIosArrowDown className=" font-bold" />
          </li>
        </ul>
        <div className=" py-5">
          <ul className=" flex gap-x-6 items-center justify-center">
            <li className="cursor-pointer">
              <BsFacebook
                size={25}
                className=" hover:text-red-600 transition"
              />
            </li>
            <li className="cursor-pointer hover:text-red-600 transition">
              <FaLinkedinIn size={25} />
            </li>
            <li className="cursor-pointer hover:text-red-600 transition">
              <IoLogoYoutube size={25} />
            </li>
            <li className="cursor-pointer hover:text-red-600 transition">
              <BsInstagram size={25} />
            </li>
            <li className=" text-xl font-bold hover:text-red-600 transition">
              <a href="#">IELTS News</a>
            </li>
            <li className=" text-xl font-bold hover:text-red-600 transition">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

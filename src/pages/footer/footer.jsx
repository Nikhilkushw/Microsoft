import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { HiOutlineStar } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";

const footer = () => {
  return (
    <>
      <div
        className="w-3/4 bg-white h-12 rounded-t-xl flex ml-36"
        style={{ marginTop: "245px",boxShadow:'5px 5px 60px rgba(0,0,0,0.7)' }}
      >
        <div
          className="flex gap-4 ml-6 h-8 mt-2 rounded-xl px-3 text-sm"
          style={{ border: "1px solid #D1D1D1" }}
        >
          <h1 className="mt-1 font-semibold text-blue-700">Discover</h1>
          <h1 className="mt-1">Following</h1>
        </div>
        <div className="flex gap-6 ml-5 mt-3 text-sm">
          <h1>News</h1>
          <h1>Sports</h1>
          <h1>Play</h1>
          <h1>Money</h1>
          <h1>Gaming</h1>
          <h1>Weather</h1>
        </div>
        <HiOutlineDotsHorizontal className="ml-20 mt-4 text-sm"/>
        <div className="flex gap-3 ml-6 rounded-3xl h-8 px-3 mt-2" style={{border:'1px solid black'}}>
          <HiOutlineStar className="text-xl mt-1" />
          <h1 className="text-sm mt-1">Customize feed</h1>
        </div>
        <div className="flex gap-1 ml-2 rounded-3xl h-8 px-3 mt-2" style={{border:'1px solid black'}}>
          <h1 className="text-sm mt-1">Headings</h1>
          <IoIosArrowDown className="text-xl mt-1.5" />
        </div>
      </div>
    </>
  );
};

export default footer;

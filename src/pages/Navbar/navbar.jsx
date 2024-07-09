import React from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { GrRefresh } from "react-icons/gr";
import { GoHome } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { LuSplitSquareHorizontal } from "react-icons/lu";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { LiaDownloadSolid } from "react-icons/lia";
import { TbHeartbeat } from "react-icons/tb";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { GoCopilot } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";

const navbar = () => {
  return (
    <div>
      <div
        className="py-1.5 flex flex-row"
        style={{ backgroundColor: "#dddddd" }}
      >
        <IoIosArrowRoundBack className="text-3xl mx-3" />
        <IoIosArrowRoundForward className="text-3xl" />
        <GrRefresh className="text-xl mx-4 my-1" />
        <a href="https://www.msn.com/en-in?pc=NMTE">
          <GoHome className="text-xl ml-2 mr-6 my-1" />
        </a>
        <input
          type="text"
          className="rounded-2xl pl-14 border-cyan-300 focus:outline-none focus:ring-2 relative"
          style={{ width: "750px" }}
          placeholder="Search or enter web address"
        />
        <IoIosSearch
          className="text-xl ml-52 absolute"
          style={{ marginTop: "6px" }}
        />
        <CiStar
          className="text-2xl absolute"
          style={{ marginLeft: "910px", marginTop: "2px" }}
        />
        <IoExtensionPuzzleOutline className="text-xl ml-6 mt-1" />
        <h1 className="mx-4 font-thin">|</h1>
        <LuSplitSquareHorizontal className="text-xl mt-1" />
        <FaRegStarHalfStroke className="text-xl ml-6 mt-1" />
        <LiaDownloadSolid className="text-xl ml-6 mt-1" />
        <TbHeartbeat className="text-xl ml-6 mt-1" />
        <HiOutlineDotsHorizontal className="text-xl ml-6 mt-1" />
        <GoCopilot className="text-xl ml-6 mt-1" />
      </div>
    </div>
  );
};
export default navbar;

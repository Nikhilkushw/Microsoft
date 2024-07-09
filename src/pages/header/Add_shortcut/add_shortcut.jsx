import React from "react";
import { RxCross1 } from "react-icons/rx";
import outLook from "./Images/out_look.jfif";

const add_shortcut = () => {
  return (
    <div className="w-[320px] h-[383px] bg-white rounded-md">
      <div className="flex justify-between ml-3 mr-3 pt-3">
        <h1 className="font-semibold">Add a website</h1>
        <div className="pl-1 pr-1 pt-[5px] bg-[#f8f6f6] hover:bg-[#e5e5e5]">
          <RxCross1 className="text-sm"/>
        </div>
      </div>

      <div className="flex flex-col ml-3.5 mt-3">
        <h1 className="mb-1">Name</h1>
        <input
          type="text"
          className="w-72 h-8 pl-2 border focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 bg-[#f7f7f7]"
          style={{ border: "1px solid #b6b6b6" }}
        />
      </div>

      <div className="flex flex-col ml-3.5 mt-4">
        <h1 className="mb-1">URL</h1>
        <input
          type="text"
          className="w-72 h-8 pl-2 border focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
          style={{ border: "1px solid #b6b6b6", backgroundColor: "#f7f7f7" }}
        />
      </div>

      <div className="flex gap-2 justify-center mt-6">
        <div className="bg-gray-200 w-[140px] h-[32px] pt-[3px] text-center hover:bg-gray-300 cursor-pointer">
          Add
        </div>
        <div className="bg-gray-200 w-[140px] h-[32px] pt-[3px] text-center hover:bg-gray-300 cursor-pointer">
          Cancel
        </div>
      </div>

      <div className="ml-4 mt-3">
        <h1 className="mb-3">Suggestions</h1>
        <div className="w-[104px] h-[84px] bg-white shadow-[0_0_5px_rgba(0,0,0,0.4)] rounded-[3px] flex flex-col items-center">
          <div className="bg-white w-8 h-8  mb-3 mt-4 flex flex-col justify-center items-center rounded-[4px]">
            <img src={outLook} alt="" className="w-[10px] h-[10px]" />
          </div>
          <p className="text-[12px]">Outlook</p>
        </div>
      </div>
    </div>
  );
};

export default add_shortcut;

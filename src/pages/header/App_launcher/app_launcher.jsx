import React from "react";
import out_look from "./Image/out_look.jfif";
import word from "./Image/word.png";
import powerpoint from "./Image/powerpoint.webp";
import ToDo from "./Image/ToDo.jfif";
import skype from "./Image/Skype.png";
import onedrive from "./Image/onedrive.png";
import excel from "./Image/excel.png";
import oneNote from "./Image/oneNote.jfif";
import calender from "./Image/calender.webp";
import { PiArrowRightThin } from "react-icons/pi";

const app_launcher = () => {
  return (
    <div
      className="flex flex-col flex-wrap rounded-lg ml-6 relative z-50"
      style={{
        width: "320px",
        height: "340px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
        backgroundColor: "#f7f7f7",
      }}
    >
      <div className="gap-16 flex ml-6 mt-4">
        <h1 className="text-sm font-semibold">Microsoft 365</h1>
        <h1 className="flex text-sm text-blue-500 hover:border-b-[1.3px] hover:border-blue-500 cursor-pointer">
          Microsoft 365 <PiArrowRightThin className="ml-2 size-6" />
        </h1>
      </div>
      <div
        className=" bg-white flex flex-col flex-wrap rounded-lg mt-14 absolute"
        style={{
          width: "300px",
          height: "260px",
          backgroundColor: "#f7f7f7",
        }}
      >
        {[
          {
            icon: <img src={out_look} className="w-5 h-5" alt="" />,
            label: "Outlook",
          },
          {
            icon: <img src={word} className="w-5 h-5" alt="" />,
            label: "Word",
          },
          {
            icon: <img src={powerpoint} className="w-5 h-5" alt="" />,
            label: "PowerPoint",
          },
          {
            icon: <img src={ToDo} className="w-5 h-5" alt="" />,
            label: "ToDo",
          },
          {
            icon: <img src={skype} className="w-5 h-5" alt="" />,
            label: "Skype",
          },
          {
            icon: <img src={onedrive} className="w-5 h-4 mt-1" alt="" />,
            label: "OneDrive",
          },
          {
            icon: <img src={excel} className="w-5 h-5" alt="" />,
            label: "Excel",
          },
          {
            icon: <img src={oneNote} className="w-5 h-5" alt="" />,
            label: "OneNote",
          },
          {
            icon: <img src={calender} className="w-5 h-5" alt="" />,
            label: "Calender",
          },
        ].map((item, index) => (
          <div className="flex flex-col ml-3 pl-3 pt-2 w-[140px] h-9 mt-2 cursor-pointer hover:bg-[#e5e5e5] hover:shadow-lg">
            <div
              key={index}
              className="flex gap-2 text-sm"
            >
              {item.icon} {item.label}
            </div>
          </div>
        ))}
      </div>
      <h1 className="flex text-sm text-blue-500 ml-6 z-10 cursor-pointer absolute top-[305px] hover:border-b-[1.4px] hover:border-blue-500">
        All Apps <PiArrowRightThin className="ml-2 size-6" />
      </h1>
    </div>
  );
};

export default app_launcher;

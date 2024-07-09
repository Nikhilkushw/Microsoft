import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import Full_page from "./Image/Full_page.svg";
import Partial_view from "./Image/Partial_view.svg";
import Headings from "./Image/Headings.svg";
import edit from "./Image/edit.svg";
import "./page_setting.css";
import { LuPencil } from "react-icons/lu";
import { LuDot } from "react-icons/lu";

const app_launcher = () => {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(false);
  const [checkbox5, setCheckbox5] = useState(false);

  const [outline, setOutline] = useState(false);
  return (
    <div
      className="flex flex-col rounded-md ml-2 z-auto relative overflow-auto"
      style={{
        width: "330px",
        height: "400px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
        backgroundColor: "#f7f7f7",
      }}
    >
      <div
        className="flex justify-between sticky top-0 pb-3 z-10"
        style={{ backgroundColor: "#f7f7f7" }}
      >
        <h1 className="font-semibold ml-4 mt-3">Page settings</h1>
        <RxCross1 className="mt-4 mr-3" />
      </div>

      <div
        className=" bg-white flex flex-col rounded-md ml-2.5 pb-4 mt-3 relative"
        style={{
          width: "300px",
          height: "100px",
          boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.3)",
        }}
      >
        <h1 className="text-sm font-semibold mt-2.5 ml-3 mb-3">
          Region & Language
        </h1>
        <select
          className={`h-8 ml-3 text-sm cursor-pointer rounded-md outline-none`}
          style={{
            width: "276px",
            border: "1px solid #b6b6b6",
            borderRadius: "5px",
          }}
        >
          {[
            { language: "English (India)" },
            { language: "English (United States)" },
            { language: "Spanish (Spain)" },
            { language: "Spanish (Mexico)" },
            { language: "French (France)" },
            { language: "French (Canada)" },
            { language: "German (Germany)" },
            { language: "German (Austria)" },
            { language: "Chinese (China)" },
            { language: "Chinese (Taiwan)" },
            { language: "Japanese (Japan)" },
            { language: "Korean (South Korea)" },
            { language: "Hindi (India)" },
            { language: "Bengali (Bangladesh)" },
            { language: "Portuguese (Portugal)" },
            { language: "Portuguese (Brazil)" },
            { language: "Russian (Russia)" },
            { language: "Italian (Italy)" },
            { language: "Dutch (Netherlands)" },
            { language: "Turkish (Turkey)" },
            { language: "Arabic (Saudi Arabia)" },
            { language: "Arabic (Egypt)" },
          ].map((item, index) => (
            <option key={index}>{item.language}</option>
          ))}
        </select>
      </div>

      <div
        className=" bg-white flex flex-col flex-wrap rounded-md ml-2.5 mt-6 relative"
        style={{
          width: "300px",
          height: "170px",
          boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.3)",
        }}
      >
        <h1 className="text-sm font-semibold mt-2.5 ml-3 mb-2">
          Quick links & search
        </h1>
        <div className="flex text-sm justify-between mt-3">
          <h1 className="font-semibold ml-3">Quick links</h1>
          <select
            className="h-7 mr-3 text-sm"
            style={{
              width: "120px",
              border: "1px solid #b6b6b6",
              borderRadius: "5px",
            }}
          >
            <option>Off</option>
            <option>1 row</option>
            <option>2 rows</option>
          </select>
        </div>
        <div className="flex justify-between">
          <h1 className="text-sm font-semibold mt-2.5 ml-3 mb-3">
            Show promoted links
          </h1>
          <div className="flex gap-2 mr-3">
            <h1 className="mt-2.5 text-sm">{checkbox1 ? "On" : "Off"}</h1>
            <label className="switch mt-3">
              <input type="checkbox" onClick={() => setCheckbox1(!checkbox1)} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className="flex justify-between">
          <h1 className="text-sm font-semibold mt-2.5 ml-3 mb-3">
            Open in a new tab
          </h1>
          <div className="flex gap-2 mr-3">
            <h1 className="mt-2.5 text-sm">{checkbox2 ? "On" : "Off"}</h1>
            <label className="switch mt-3">
              <input type="checkbox" onClick={() => setCheckbox2(!checkbox2)} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>

      <div
        className=" bg-white flex flex-col flex-wrap rounded-md ml-2.5 mt-6 pb-4 relative"
        style={{
          width: "300px",
          height: "170px",
          boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="flex justify-between">
          <h1 className="text-sm font-semibold mt-2.5 ml-3 mb-3">Show feed</h1>
          <div className="flex gap-2 mr-3">
            <h1 className="mt-2.5 text-sm">{checkbox3 ? "On" : "Off"}</h1>
            <label className="switch mt-3">
              <input type="checkbox" onClick={() => setCheckbox3(!checkbox3)} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className="flex ml-3.5 gap-2">
          {[
            { img: <img src={Full_page} alt="" />, label: "Full page" },
            { img: <img src={Partial_view} alt="" />, label: "Partial view" },
            { img: <img src={Headings} alt="" />, label: "Headings" },
          ].map((item, index) => (
            <div
              key={index}
              onClick={() => setOutline(index)}
              className={`text-sm p-2 rounded-md cursor-pointer ${
                outline===index ? "outline outline-blue-700" : ""
              }`}
              style={{ border: "1px solid #dddddd" }}
            >
              {item.img}
              {item.label}
            </div>
          ))}
        </div>
      </div>

      <div
        className=" bg-white flex flex-col flex-wrap rounded-md ml-2.5 mt-6 pb-3 relative"
        style={{
          width: "300px",
          height: "170px",
          boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="flex justify-between">
          <h1 className="text-sm font-semibold mt-2.5 ml-3 mb-3">Background</h1>
          <div className="flex gap-2 mr-3">
            <h1 className="mt-2.5 text-sm">{checkbox4 ? "On" : "Off"}</h1>
            <label className="switch mt-3">
              <input type="checkbox" onClick={() => setCheckbox4(!checkbox4)} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div
          className="h-8 ml-3.5 flex justify-center cursor-pointer"
          style={{ width: "270px", border: "1px solid #b6b6b6" }}
        >
          <img src={edit} alt="" />
          <h1 className="text-sm mt-1">Edit background</h1>
        </div>
      </div>

      <div
        className=" bg-white flex flex-col flex-wrap rounded-md ml-2.5 mt-6 pb-1 relative"
        style={{
          width: "300px",
          height: "100px",
          boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="flex justify-between mt-2">
          <h1 className="text-sm font-semibold mt-2.5 ml-3 mb-3">
            Show weather
          </h1>
          <div className="flex gap-2 mr-3">
            <h1 className="mt-2.5 text-sm">{checkbox5 ? "On" : "Off"}</h1>
            <label className="switch mt-3">
              <input type="checkbox" onClick={() => setCheckbox5(!checkbox5)} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>

      <div
        className=" bg-white flex flex-col flex-wrap rounded-md ml-2.5 mt-6 pb-3 relative"
        style={{
          width: "300px",
          height: "100px",
          boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="flex justify-between">
          <h1 className="text-sm font-semibold mt-2.5 ml-3 mb-3">
            Content settings
          </h1>
        </div>
        <div
          className="h-8 ml-3.5 flex justify-center gap-1 cursor-pointer"
          style={{ width: "270px", border: "1px solid #b6b6b6" }}
        >
          <LuPencil className="mt-2" />
          <h1 className="text-sm mt-1">Manage</h1>
        </div>
      </div>

      <div
        className=" bg-white flex flex-col flex-wrap rounded-md ml-2.5 mt-6 pb-3 relative"
        style={{
          width: "300px",
          height: "100px",
          boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="flex justify-between">
          <h1 className="text-sm font-semibold mt-2.5 ml-3 mb-3">
            Notification settings
          </h1>
        </div>
        <div
          className="h-8 ml-3.5 flex justify-center gap-1 cursor-pointer"
          style={{ width: "270px", border: "1px solid #b6b6b6" }}
        >
          <LuPencil className="mt-2" />
          <h1 className="text-sm mt-1">Manage</h1>
        </div>
      </div>

      <div
        className="flex flex-wrap mt-3 ml-5 cursor-pointer"
        style={{ color: "#707070" }}
      >
        <div className="flex">
          <p style={{ fontSize: "12px" }}>Privacy</p>
        </div>
        <div className="flex">
          <LuDot className="mt-0.5" />
          <p style={{ fontSize: "12px" }}>Terms of use</p>
        </div>
        <div className="flex">
          <LuDot className="mt-0.5" />
          <p style={{ fontSize: "12px" }}>About our ads</p>
        </div>
        <div className="flex">
          <LuDot className="mt-0.5" />
          <p style={{ fontSize: "12px" }}>Help</p>
        </div>
        <div className="flex">
          <LuDot className="mt-0.5" style={{ marginLeft: "-5px" }} />
          <p style={{ fontSize: "12px" }}>Feedback</p>
        </div>
      </div>

      <p
        style={{
          fontSize: "12px",
          color: "#707070",
          margin: "15px 0px 20px 22px",
        }}
      >
        Microsoft may earn an affiliate commission if you purchase something
        through links on this page.
      </p>
    </div>
  );
};

export default app_launcher;

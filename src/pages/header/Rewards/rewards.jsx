import React from "react";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import { BsLaptopFill } from "react-icons/bs";

const Rewards = () => {
  return (
    <div
      className="rounded-md pb-3"
      style={{ boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",backgroundColor: "white" }}
    >
      <div
        style={{ width: "320px", height: "370px" }}
        className="rounded-md"
      >
        <div
          className="flex justify-between pt-2.5 pb-2.5"
          style={{ borderBottom: "1px solid #ddd", color: "#837d7d" }}
        >
          <h1 className="ml-3 font-normal cursor-pointer hover:text-[#666]" style={{ fontSize: "16px" }}>
            Microsoft Rewards
          </h1>
          <SlArrowRight className="mr-3 cursor-pointer" />
        </div>

        <div
          className="flex justify-between pt-2.5 pb-2.5"
          style={{ color: "#666" }}
        >
          <h1 className="ml-3 font-bold cursor-pointer" style={{ fontSize: "12px" }}>
            MORE ACTIVITIES
          </h1>
          <SlArrowUp className="mr-3 cursor-pointer" />
        </div>

        <div style={{ borderBottom: "1px solid #ddd", paddingBottom: "16px" }}>
          {[
            {
              gif: "https://i.pinimg.com/originals/04/d6/93/04d6930ab0c145131cefa0a72626c152.gif",
              title: "Do you know the answer?",
              label: "Challenge yourself with these trivia questions",
              mark: "+5",
            },
            {
              gif: "https://i.pinimg.com/originals/c7/ae/06/c7ae0615b9d39b2837dddfd98e63e42c.gif",
              title: "Soccer legend",
              label: "Do you think this soccer player is the best of all time?",
              mark: "+5",
            },
            {
              gif: "https://i.pinimg.com/originals/84/92/10/849210d020077dbce43eca13997fe667.gif",
              title: "Dinner ideas",
              label: "Get inspired with these dinner recipes",
              mark: "+5",
            },
          ].map((item, index) => (
            <div key={index} className=" mt-1 p-2 flex hover:bg-[#f9f3f3d6] cursor-pointer">
              <img
                src={item.gif}
                alt=""
                className="w-[50px] h-[50px] ml-[10px]"
              />
              <div className="ml-3 w-52 flex-wrap">
                <h1
                  className="font-bold flex justify-between"
                  style={{ fontSize: "14px" }}
                >
                  {item.title}
                </h1>
                <h1 style={{ fontSize: "11px"}}>
                  {item.label}
                </h1>
              </div>
              <h1><span className="font-bold" style={{color:'#bd8d00'}}>+</span><span className="text-sm font-bold">5</span></h1>
            </div>
          ))}
        </div>

        <div className="ml-3 mt-3">
          <h1 className="font-bold" style={{ fontSize: "12px", color: "#666" }}>
            EARNINGS
          </h1>
          <div className="flex gap-1.5 mt-1" style={{ fontSize: "15px" }}>
            <BsLaptopFill className="mt-1" style={{ color: "#666" }} />
            PC search: 0/30
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;

import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const notification = () => {
  const Top_story = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 6.5c0-.28.22-.5.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zM10.5 9a.5.5 0 000 1h2a.5.5 0 000-1h-2zm-.5 3.5c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zM5.5 9a.5.5 0 00-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zm.5 3v-2h2v2H6zM2 5c0-1.1.9-2 2-2h10a2 2 0 012 2v1a2 2 0 012 2v5.5a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 13.5V5zm13 0a1 1 0 00-1-1H4a1 1 0 00-1 1v8.5c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5V8a1 1 0 00-1-1v6.5a.5.5 0 01-1 0V5z"></path>
    </svg>
  );
  return (
    <div
      className="w-[360px] h-[380px] bg-white overflow-auto pb-3"
      style={{ borderRadius: "5px", boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
    >
      <div className="flex justify-between pl-4 pr-4 pt-3 pb-4 sticky top-0 bg-white">
        <h1 className="font-semibold">Notification</h1>
        <div className="flex gap-3 text-blue-600">
          <IoSettingsOutline className="mt-1.5" />
          <h1>Settings</h1>
        </div>
      </div>
      {[
        {
          title: "Top story",
          text: "SC rejects West Bengal government's plea against High Court order directing CBI probe into allegations in Sandeshkhali",
          src: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1mnwtM.img?h=128&w=128&m=6",
          date: "Firstpost - 2h ago",
        },
        {
          title: "Top story",
          text: "IMD Forecasts More Rains in Parts of Mumbai Till Tomorrow, UP To Witness Heavy Showers on July 10-11",
          src: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1pAURy.img?h=128&w=128&m=6",
          date: "News18 - 2h ago",
        },
        {
          title: "Top story",
          text: "Gold Rate Falls In India: Check 22 Carat Price In Your City On July 08 - News18",
          src: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1iiY2W.img?h=128&w=128&m=6",
          date: "News18 - 3h ago",
        },
        {
          title: "Top story",
          text: "Jharkhand CM Hemant Soren wins trust vote in assembly amid opposition walkout",
          src: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1pAuih.img?h=128&w=128&m=6",
          date: "The Times of India - 4h ago",
        },
        {
          title: "Top story",
          text: "Madhya Pradesh Cabinet sees expansion, Ramniwas Rawat inducted as minister",
          src: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1pAsnJ.img?h=128&w=128&m=6",
          date: "India Today - 5h ago",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="pb-3"
          style={{ borderTop: "1px solid #e2e2e2" }}
        >
          <div className="flex justify-between ml-3 mr-3 mt-2">
            <div className="flex gap-2 ml-2">
              <span className="mt-0.5">{Top_story}</span>
              <h1 className="text-[12px]" style={{ color: "#707070" }}>
                {item.title}
              </h1>
            </div>
            <div className="p-1 hover:bg-[#e5e5e5]">
              <HiOutlineDotsHorizontal />
            </div>
          </div>

          <div className="flex ml-12 justify-between hover:underline hover:text-black">
            <h1 className="text-[14px] w-[220px]">
              {item.text.length > 85
                ? `${item.text.slice(0, 85)}...`
                : item.text}
            </h1>
            <img className="w-16 h-16" src={item.src} alt="" />
          </div>
          <h1 className="text-[12px] ml-12" style={{ color: "#707070" }}>
            {item.date}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default notification;

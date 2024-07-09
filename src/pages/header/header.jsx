import React, { useEffect, useRef, useState } from "react";
import App_launcher from "./App_launcher/app_launcher";
import Page_setting from "./Page_setting/page_setting";
import Rewards from "./Rewards/rewards";
import Shortcut from "./Add_shortcut/add_shortcut";
import QR_Code from "./GetApp/getApp"
import Notification from "./Notification/notification";
import microsoft from "./Images/microsoft_Image.png";
import whether from "./Images/whether_Image.png";
import instagram from "./Images/instagram_Image.webp";
import { PiDotsNineBold } from "react-icons/pi";
import { GoDot } from "react-icons/go";
import { CiMobile1 } from "react-icons/ci";
import { PiMedalMilitary } from "react-icons/pi";
import { GoBell } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { LiaPlusSolid } from "react-icons/lia";

const header = () => {
  const [launcher, setLauncher] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const [medals, setMedals] = useState(false);
  const [addShortcut, setAddShortcut] = useState();
  const [mobile, setMobile] = useState(false);
  const [bell,setBell] = useState(false);

  const launcherRef = useRef(null);

  const handleAddShortcut = (index) => {
    setAddShortcut(index);
    console.log(index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (launcherRef.current && !launcherRef.current.contains(event.target)) {
        setLauncher(false);
        setShowSetting(false);
        setMedals(false);
        setAddShortcut(false);
        setMobile(false);
        setBell(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="relative">
      <div
        className="m-6 flex flex-row"
        style={{ justifyContent: "space-between" }}
      >
        <div className="flex flex-row">
          <PiDotsNineBold
            className="text-3xl ml-8 cursor-pointer"
            onClick={() => setLauncher(!launcher)}
          />
          {launcher && (
            <div ref={launcherRef} className="absolute mt-12">
              <App_launcher />
            </div>
          )}
          <a
            href="https://www.msn.com/en-in/feed?ocid=msedgntp&pc=W099&cvid=8eb80bdac9c04608852c1df61522ad24&ei=44"
            className="flex"
          >
            <img
              src={microsoft}
              alt=""
              className="ml-3"
              style={{ width: "22px", height: "22px", marginTop: "4px" }}
            />
            <h1 className="ml-1 mt-0.5 font-semibold text-gray-500">
              Microsoft Start
            </h1>
          </a>
        </div>

        <div className="flex flex-row cursor-pointer relative">
          <a href="https://www.msn.com/en-in/weather/forecast/in-Raghurajnagar,Madhya-Pradesh?loc=eyJsIjoiUmFnaHVyYWpuYWdhciIsInIiOiJNYWRoeWEgUHJhZGVzaCIsImMiOiJJbmRpYSIsImkiOiJJTiIsImciOiJlbi1pbiIsIngiOiI4MC44MjY1OTkxMjEwOTM3NSIsInkiOiIyNC41NTIzMTY2NjU2NDk0MTQifQ%3D%3D&weadegreetype=C&ocid=msedgntp&cvid=8eb80bdac9c04608852c1df61522ad24" className="flex">
            <h1>Bhopal</h1>
            <img
              src={whether}
              alt=""
              style={{
                width: "30px",
                height: "30px",
                marginLeft: "10px",
                marginBottom: "10px",
              }}
            />
            <p className="ml-2 cursor-pointer">26</p>
            <span>
              <GoDot
                className="cursor-pointer"
                style={{ fontSize: "7px", marginTop: "5px" }}
              />
            </span>
            <p className="pb-2 cursor-pointer">C</p>
          </a>

          <CiMobile1 className="text-2xl mt-1 ml-5 cursor-pointer relative" onClick={() => setMobile(!mobile)} />
          {mobile && (
            <div ref={launcherRef} className="absolute mt-12 ml-[-160px] z-50"> 
              <QR_Code/>
            </div>
          )}

          <PiMedalMilitary
            className="text-3xl ml-3 cursor-pointer"
            onClick={() => setMedals(!medals)}
          />

          <GoBell className="text-2xl mt-1 ml-3 cursor-pointer" onClick={() => setBell(!bell)} />
          {
            bell && 
            <div ref={launcherRef} className="absolute mt-12 ml-[-100px] z-30">
              <Notification/>
            </div>
          }

          <IoSettingsOutline
            className="text-2xl mt-1 ml-3 cursor-pointer relative"
            onClick={() => setShowSetting(!showSetting)}
          />
        </div>

        {medals && (
          <div
            ref={launcherRef}
            className="absolute top-10 left-[850px] z-[9]"
          >
            <Rewards />
          </div>
        )}

        {showSetting && (
          <div
            ref={launcherRef}
            className="absolute top-10 left-[910px]"
          >
            <Page_setting />
          </div>
        )}
      </div>

      <div className="flex justify-center top-10">
        <input
          type="text"
          className="w-2/5 rounded-full pl-14 p-3 focus:outline-none relative"
          placeholder="Search the web"
          style={{ boxShadow: "0px 3px 40px rgba(0,0,0,0.2)" }}
        />
        <IoIosSearch
          className="text-2xl absolute"
          style={{ marginTop: "12px", marginRight: "450px", color: "gray" }}
        />
      </div>

      <div
        className="flex justyfy-center gap-4"
        style={{ marginLeft: "410px" }}
      >
        {[
          {
            icon: <FaYoutube className="text-2xl text-red-500" />,
            label: "YouTube",
            links: "https://www.youtube.com/",
          },
          {
            icon: <RiWhatsappFill className="text-2xl text-green-500" />,
            label: "Whatsapp",
            links: "https://web.whatsapp.com/",
          },
          {
            icon: <img src={instagram} alt="" className="w-6 h-6" />,
            label: "Instagram",
            links: "https://www.instagram.com/",
          },
          {
            icon: <FaFacebook className="text-2xl text-blue-500" />,
            label: "Facebook",
            links: "https://www.facebook.com/",
          },
          {
            icon: <FaTelegram className="text-2xl text-blue-400" />,
            label: "Telegram",
            links: "https://web.telegram.org/k/",
          },
          { icon: <LiaPlusSolid className="text-xl" />, label: "Add shortcut" },
        ].map((item, index) => (
          <a key={index} href={item.links}>
            <div
              key={index}
              className="w-16 h-16 cursor-pointer"
              onClick={() => handleAddShortcut(index)}
            >
              <div
                className="w-10 h-10 mt-4 ml-3 bg-white rounded-xl flex justify-center items-center"
                style={{ boxShadow: "0px 0px 1px grey" }}
                ref={launcherRef}
              >
                {item.icon}
              </div>
              <p className="text-center" style={{ fontSize: "0.695rem" }}>
                {item.label}
              </p>
            </div>
          </a>
        ))}
        {addShortcut == 5 && (
          <div
            ref={launcherRef}
            className="absolute left-[880px] top-[95px]"
            style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
          >
            <Shortcut />
          </div>
        )}
      </div>
    </div>
  );
};

export default header;

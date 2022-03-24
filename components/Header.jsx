import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HeaderLink from "./HeaderLink";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { Avatar } from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "../public/logo2.svg";

const Header = () => {
  return (
    <header className="flex justify-around items-center">
      {/* left */}
      <section className="flex items-center space-x-2 w-full max-w-xs">
        <Image src={logo} width={45} height={45} />
        <div className="flex space-x-1 dark:md:bg-gray-700 py-2.5 px-4 rounded w-4">
          <SearchRoundedIcon />
          <input
            type="text"
            placeholder="Search"
            className="hidden md:inline-flex bg-transparent text-sm focus:outline-none placeholder:text-black/70 dark:placeholder:text-white/75 flex-grow"
          />
        </div>
      </section>
      {/* right */}
      <section className="flex items-center space-x-6">
        <HeaderLink Icon={HomeRoundedIcon} text="Home" feed active />
        <HeaderLink Icon={GroupIcon} text="My Network" feed />
        <HeaderLink Icon={BusinessCenterIcon} text="Jobs" feed hidden />
        <HeaderLink Icon={ChatIcon} text="Messaging" feed />
        <HeaderLink Icon={NotificationsIcon} text="Notifications" feed />
        <HeaderLink Icon={Avatar} text="Me" feed avatar hidden />
        <HeaderLink Icon={AppsOutlinedIcon} text="Work" feed hidden />

        {/* Dark Mode Toggler */}
        <div
          className={`bg-gray-600 flex items-center px-0.5 rounded-full h-6 w-12 cursor-pointer flex-shrink-0 relative`}
        >
          <span className="absolute left-0">🌜</span>
          {/* motion.div */}
          <span className="absolute right-0.5">🌞</span>
        </div>
      </section>
    </header>
  );
};

export default Header;

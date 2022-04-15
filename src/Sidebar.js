import React from "react";
import "./sidebar.css";
import { BsTwitter } from "react-icons/bs";
import SidebarOption from "./SidebarOption";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { BsMessenger } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";
import { RiFileListFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { GiPlayButton } from "react-icons/gi";

function Sidebar() {
  return (
    <div className="sidebar">
      <BsTwitter className="sidebar_twitterIcon" />
      <SidebarOption
        className="sidebarIcons"
        Icons={AiFillHome}
        text={"Home"}
      />
      <SidebarOption
        className="sidebarIcons"
        Icons={FaSearch}
        text={"Explore"}
      />
      <SidebarOption
        className="sidebarIcons"
        Icons={IoMdNotifications}
        text={"Notification"}
      />
      <SidebarOption
        className="sidebarIcons"
        Icons={BsMessenger}
        text={"Message"}
      />
      <SidebarOption
        className="sidebarIcons"
        Icons={BsBookmarkFill}
        text={"Bookmark"}
      />
      <SidebarOption
        className="sidebarIcons"
        Icons={RiFileListFill}
        text={"List"}
      />
      <SidebarOption
        className="sidebarIcons"
        Icons={CgProfile}
        text={"Profile"}
      />
      <SidebarOption
        className="sidebarIcons"
        Icons={MdOutlineMoreHoriz}
        text={"More"}
      />

      <GiPlayButton className="sidebar_twitterButton" variant="outlined" />
    </div>
  );
}

export default Sidebar;

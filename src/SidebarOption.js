import React from "react";
import "./sidebarOption.css";

function SidebarOption({ active, text, Icons }) {
  return (
    <div className="sidebarOption">
      <Icons />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;

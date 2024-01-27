import React from "react";
import { activitiedIcon, logoutIcon, settingsIcon, sidebarUserProfileIcon } from "../../assets";
import '../../styles/user/profileeditable.css'
export default function Profilesidebar() {
  return (
    <div className="sidebar-container">
      <p id="sidebar-items">
        {" "}
        <img src={sidebarUserProfileIcon} alt="" id="sidebar-icon" />
        Profile
      </p>
      <p id="sidebar-items">
        {" "}
        <img src={activitiedIcon} alt="" id="sidebar-icon" />
        My activity
      </p>
      <p id="sidebar-items">
        {" "}
        <img src={settingsIcon} alt="" id="sidebar-icon" />
        Settings
      </p>
      <p id="sidebar-items">
        {" "}
        <img src={logoutIcon} alt="" id="sidebar-icon" />
        Logout
      </p>
    </div>
  );
}

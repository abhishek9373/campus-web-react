import React from "react";
import "../../styles/user/profile.css";
import { editIcon, userIcon } from "../../assets";
import Profilesidebar from "./Profilesidebar";
import Profilemaincontainer from "./Profilemaincontainer";
export default function Profile() {
  return (
    <div className="profile-page-container">
      <Profilesidebar />
      <Profilemaincontainer />
    </div>
  );
}

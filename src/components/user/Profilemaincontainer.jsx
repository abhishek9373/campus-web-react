import React, { useState } from "react";
import { editIcon, userIcon } from "../../assets";
import Profileeditable from "./Profileeditable";

export default function Profilemaincontainer() {
  const [isEditable, setEditable] = useState(false);
    const setIsEditable = (value) =>{
        setEditable(value);
    }
  return (
    <div className="profile-main-container">
      {isEditable ? 
        <Profileeditable setVisibility={setIsEditable}/>
       : 
        <>
          <div className="profile-image-container">
            <img src={userIcon} alt="" id="main-profile-image" />
            <img src={editIcon} alt="" id="edit-icon" onClick={()=>setEditable(true)}/>
          </div>
          <p className="profile-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus
          </p>
          <div className="profile-text-container">
            <label htmlFor="name">Name</label>
            <p className="profile-name profile-info-card" id="name">
              Abhishek Gund
            </p>

            <label htmlFor="age">Age</label>
            <p className="profile-age profile-info-card" id="name">
              21
            </p>

            <label htmlFor="age">Gender</label>
            <p className="profile-age profile-info-card" id="name">
              Male
            </p>

            <label htmlFor="age">College</label>
            <p className="profile-age profile-info-card" id="name">
              Sinhgad College Of Engineering.
            </p>

            <label htmlFor="age">Branch</label>
            <p className="profile-age profile-info-card" id="name">
              COMP
            </p>

            <label htmlFor="age">Year</label>
            <p className="profile-age profile-info-card" id="name">
              4
            </p>
          </div>
        </>
      }
    </div>
  );
}

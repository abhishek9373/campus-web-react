import React from "react";
import { userIcon } from "../../assets";

export default function Profileeditable({ setVisibility }) {
  return (
    <>
      <div className="navigation-aligner">
        <p id="profile-navbar-aligner" onClick={()=>setVisibility(false)}>cancel</p>
        <p id="profile-navbar-aligner" onClick={()=>setVisibility(false)}>update</p>
      </div>
      <div className="profile-image-container">
        <img src={userIcon} alt="" id="main-profile-image" />
      </div>
      <div className="profile-text-container">
        <label htmlFor="description">Description</label>
        <input
          className="profile-description profile-info-card"
          id="description"
          placeholder="Abhishek Gund"
        />
        <label htmlFor="name">Name</label>
        <input
          className="profile-name profile-info-card"
          id="name"
          placeholder="Abhishek Gund"
        />
        <label htmlFor="age">Age</label>
        <input
          className="profile-age profile-info-card"
          id="name"
          placeholder="21"
        />
        <label htmlFor="age">Gender</label>
        <select className="profile-gender profile-info-card" id="gender">
          <option value="Male">Male</option>
          <option value="Male">Female</option>
          <option value="Male">Other</option>
        </select>
        <label htmlFor="age">College</label>
        <select className="profile-college profile-info-card" id="college">
          <option value="Male">SKNCOE</option>
          <option value="Male">SCOE</option>
          <option value="Male">AISSM</option>
        </select>
        <label htmlFor="age">Branch</label>
        <select className="profile-branch profile-info-card" id="branch">
          <option value="Male">COMP</option>
          <option value="Male">IT</option>
          <option value="Male">MECHANICAL</option>
          <option value="Male">CIVIL</option>
          <option value="Male">ARCHITECT</option>
          <option value="Male">ME</option>
          <option value="Male">MBA</option>
          <option value="Male">LAW</option>
          <option value="Male">COMMERCE</option>
        </select>
        <label htmlFor="age">Year</label>
        <select className="profile-year profile-info-card" id="year">
          <option value="Male">First</option>
          <option value="Male">Second</option>
          <option value="Male">Third</option>
          <option value="Male">Fourth</option>
          <option value="Male">Fifth</option>
          <option value="Male">Sixth</option>
          <option value="Male">Seventh</option>
        </select>
      </div>
    </>
  );
}

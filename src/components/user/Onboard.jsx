import React from "react";
import "../../styles/user/onboard.css";
import { editIcon, profilePicker } from "../../assets";
import { ImagePicker } from "react-file-picker";

export default function Onboard() {
  return (
    <div className="auth-container-onboard">
      <div className="wrapper-onboard login-wrapper" id="login-wrapper">
        <h3 id="onboard-heading">Welcome to Campus!</h3>
        <div className="profile-image-container">
          <ImagePicker
            extensions={["jpg", "jpeg", "png"]}
            dims={{
              minWidth: 100,
              maxWidth: 500,
              minHeight: 100,
              maxHeight: 500,
            }}
            onChange={(base64) => console.log("object")}
            onError={(errMsg) => console.log("object")}
          >
            <img src={profilePicker} alt="" id="picker-image"/>
          </ImagePicker>
        </div>
        <div className="profile-text-container">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="profile-description profile-info-card"
            id="description"
            placeholder="Tell us about yourself..."
          />
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            className="profile-name profile-info-card"
            id="name"
            placeholder="John"
          />
          Last Name
          <input
            type="text"
            className="profile-name profile-info-card"
            id="name"
            placeholder="John"
          />
          <label htmlFor="age">Age</label>
          <input
            type="date"
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
        <button id="onboard-button">Next</button>
      </div>
    </div>
  );
}

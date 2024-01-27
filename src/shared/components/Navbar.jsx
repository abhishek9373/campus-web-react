import React from "react";
import "../../styles/navbar.css";
import { useNavigate } from "react-router-dom";
import {
  buyandsellIcon,
  foodhubIcon,
  househubIcon,
  profileIcon,
  thaliImage1,
  userIcon,
} from "../../assets";

export default function Navbar() {
  const navigate = useNavigate();
  // hide services items on navbar
  const hideServicesDropDown = () => {
    var x = document.getElementById("services-hide-show");
    x.style.display = "hidden";
  }
  return (
    <div className="navbar">
      <p className="menu logo" onClick={() => navigate("/")}>
        Campus
      </p>
      <p className="menu right user-icon">
        <span id="services-navitem">Services</span>
        <div id="services-hide-show">
          <img src={househubIcon} alt="" id="services-image" onClick={()=> { navigate('/househub'); hideServicesDropDown() } }/>
          Househub
          <img src={foodhubIcon} alt="" id="services-image" onClick={()=> { navigate('/foodhub'); hideServicesDropDown(); } }/>
          Foodhub
          <img src={buyandsellIcon} alt="" id="services-image" />
          BuyandSell
        </div>
        <img src={userIcon} alt="" id="user-profile-photo" onClick={()=> navigate('/user/profile')}/>
        {/* Login */}
      </p>
    </div>
  );
}

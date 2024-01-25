import React from "react";
import "../../styles/home/servicesicons.css"
import { househubIcon, foodhubIcon, buyandsellIcon } from "../../assets";
import { useNavigate } from 'react-router-dom';

export default function ServicesLogo() {
  const navigate = useNavigate();
  return (
    <div className="services-container">
      <div className="services-container">
        <div className="service-card">
          <img src={househubIcon} alt="" className="service-image" />
          <p className="service-name">Househub</p>
        </div>
        <div className="service-card" onClick={()=>navigate("/foodhub")}>
          <img src={foodhubIcon} alt="" className="service-image" />
          <p className="service-name">FoodHub</p>
        </div>
        <div className="service-card">
          <img src={buyandsellIcon} alt="" className="service-image" />
          <p className="service-name">Buy And Sell</p>
        </div>
      </div>
    </div>
  );
}

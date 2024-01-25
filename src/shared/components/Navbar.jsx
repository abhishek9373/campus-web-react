import React from "react";
import "../../styles/navbar.css";
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <p className="menu logo" onClick={()=>navigate("/")}>Campus</p>
      <p className="menu right user-icon">
        <img
          hidden
          src="assets/icons/user-icon.svg"
          alt=""
          id="user-profile-photo"
        />
        Login
      </p>
    </div>
  );
}

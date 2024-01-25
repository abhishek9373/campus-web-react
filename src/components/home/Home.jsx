import React from "react";
import Carousels from "./Carosal";
import ServicesLogo from "./ServicesLogo";
import "../../styles/home/home.css";
import Househub from "./HousehubHome";
import Foodhub from "./FoodhubHome";
import Buyandsell from "./BuyandsellHome";
export default function Home() {
  return (
    <div className="home-container">
      <Carousels />
      <ServicesLogo />
      <Househub />
      <Foodhub />
      <Buyandsell />
    </div>
  );
}

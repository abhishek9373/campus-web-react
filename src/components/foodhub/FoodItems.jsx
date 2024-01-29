import React, { useEffect } from "react";
import "../../styles/foodhub/fooditems.css";
import { searchIcon } from "../../assets";
export default function FoodItems() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="food-items-container">
        <div className="food-items">
          <p className="food-type">Lunch</p>
          <p className="food-type">BreakFast</p>
          <p className="food-type">Veg Thali</p>
          <p className="food-type">Non-Veg Thali</p>
          <p className="food-type">Biryani</p>
          <p className="food-type">Nashta</p>
          <p className="food-type">Snacks</p>
        </div>
        <div className="food-search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Malai Paneer"
          />
          <img src={searchIcon} alt="" id="search-icon" />
        </div>
      </div>
    </>
  );
}

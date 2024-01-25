import React from "react";
import '../../styles/foodhub/fooditems.css'
import { searchIcon } from "../../assets";
export default function FoodItems() {
  return (
    <>
      <div class="food-items-container">
        <div class="food-items">
          <p class="food-type">Lunch</p>
          <p class="food-type">BreakFast</p>
          <p class="food-type">Veg Thali</p>
          <p class="food-type">Non-Veg Thali</p>
          <p class="food-type">Biryani</p>
          <p class="food-type">Nashta</p>
          <p class="food-type">Snacks</p>
        </div>
        <div class="food-search">
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

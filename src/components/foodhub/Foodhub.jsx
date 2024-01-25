import React from "react";
import FoodItems from "./FoodItems";
import RecommendedFood from "./Recommendedfood";
import Foodlisting from "./Foodlisting";
import '../../styles/foodhub/foodhub.css'
export default function foodhub() {
  return (
    <div className="foodhub-container">
      <FoodItems />
      <RecommendedFood />
      <Foodlisting/>
    </div>
  );
}

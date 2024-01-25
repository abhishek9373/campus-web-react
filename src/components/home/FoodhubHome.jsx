import React from "react";
import "../../styles/home/foodhub.css";
import { thaliImage1, thaliImage2, thaliImage3 } from "../../assets";

export default function Foodhub() {
  return (
    <>
      <div id="services-heading-2">
        <p class="left-text">Are you Hungry?</p>
        <p class="right-text">Discover</p>
      </div>

      <div class="services-container">
        <div class="food-card">
          {/* <p class="stars">⭐⭐⭐⭐⭐</p> */}
          <div class="food-aligner">
            <img src={thaliImage1} alt="" id="food" />
          </div>
          <div className="food-details">
            <div class="thali-haeding">
              <p id="heading-text">
                Special Dal Bati at 80Rs
                <span id="limited-or-unlimited">Unlimited</span>
              </p>
            </div>
            {/* <p id="thali-description">
              In thali: Dal, Bati, 1 Laddu, Onion, Tomato, Cucumber etc.
            </p> */}
            <p class="serve-by">
              Serve by <span id="mess-name">Shivshree Mess</span> near sinhgad
              law college <br />
              hurry Up closing soon
            </p>
          </div>
        </div>

        <div class="food-card">
          {/* <p class="stars">⭐⭐⭐⭐⭐</p> */}
          <div class="food-aligner">
            <img src={thaliImage2} alt="" id="food" />
          </div>
          <div className="food-details">
            <div class="thali-haeding">
              <p id="heading-text">
                Special Dal Bati at 80Rs
                <span id="limited-or-unlimited">Unlimited</span>
              </p>
            </div>
            {/* <p id="thali-description">
              In thali: Dal, Bati, 1 Laddu, Onion, TOmato, Cucumber etc.
            </p> */}
            <p class="serve-by">
              Serve by <span id="mess-name">Shivshree Mess</span> near sinhgad
              law college <br />
              hurry Up closing soon
            </p>
          </div>
        </div>

        <div class="food-card">
          {/* <p class="stars">⭐⭐⭐⭐⭐</p> */}
          <div class="food-aligner">
            <img src={thaliImage3} alt="" id="food" />
          </div>
          <div className="food-details">
            <div class="thali-haeding">
              <p id="heading-text">
                Special Dal Bati at 80Rs
                <span id="limited-or-unlimited">Unlimited</span>
              </p>
            </div>
            {/* <p id="thali-description">
              In thali: Dal, Bati, 1 Laddu, Onion, TOmato, Cucumber etc.
            </p> */}
            <p class="serve-by">
              Serve by <span id="mess-name">Shivshree Mess</span> near sinhgad
              law college <br />
              hurry Up closing soon
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

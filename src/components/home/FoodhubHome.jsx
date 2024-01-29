import React from "react";
import "../../styles/home/foodhub.css";
import { thaliImage1, thaliImage2, thaliImage3 } from "../../assets";
import { useNavigate } from 'react-router-dom'
export default function Foodhub() {
  const navigate = useNavigate()
  return (
    <>
      <div id="services-heading-2">
        <p className="left-text">Are you Hungry?</p>
        <p className="right-text" onClick={()=> navigate('/foodhub')}>Discover</p>
      </div>

      <div className="services-container">
        <div className="food-card">
          {/* <p className="stars">⭐⭐⭐⭐⭐</p> */}
            <img src={thaliImage1} alt="" id="food" />
          <div className="food-details">
            <div className="thali-haeding">
              <p id="heading-text">
                Special Dal Bati at 80Rs
                <span id="limited-or-unlimited">Unlimited</span>
              </p>
            </div>
            {/* <p id="thali-description">
              In thali: Dal, Bati, 1 Laddu, Onion, Tomato, Cucumber etc.
            </p> */}
            <p className="serve-by">
              Serve by <span id="mess-name">Shivshree Mess</span> near sinhgad
              law college <br />
              hurry Up closing soon
            </p>
          </div>
        </div>

        <div className="food-card">
          {/* <p className="stars">⭐⭐⭐⭐⭐</p> */}
          <div className="food-aligner">
            <img src={thaliImage2} alt="" id="food" />
          </div>
          <div className="food-details">
            <div className="thali-haeding">
              <p id="heading-text">
                Special Dal Bati at 80Rs
                <span id="limited-or-unlimited">Unlimited</span>
              </p>
            </div>
            {/* <p id="thali-description">
              In thali: Dal, Bati, 1 Laddu, Onion, TOmato, Cucumber etc.
            </p> */}
            <p className="serve-by">
              Serve by <span id="mess-name">Shivshree Mess</span> near sinhgad
              law college <br />
              hurry Up closing soon
            </p>
          </div>
        </div>

        <div className="food-card">
          {/* <p className="stars">⭐⭐⭐⭐⭐</p> */}
          <div className="food-aligner">
            <img src={thaliImage3} alt="" id="food" />
          </div>
          <div className="food-details">
            <div className="thali-haeding">
              <p id="heading-text">
                Special Dal Bati at 80Rs
                <span id="limited-or-unlimited">Unlimited</span>
              </p>
            </div>
            {/* <p id="thali-description">
              In thali: Dal, Bati, 1 Laddu, Onion, TOmato, Cucumber etc.
            </p> */}
            <p className="serve-by">
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

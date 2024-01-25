import React from "react";
import "../../styles/home/househub.css";
import { flatImage1, flatImage2 } from "../../assets";
import StarRatings from "react-star-ratings";

export default function Househub() {
  return (
    <>
      <div id="services-heading-2">
        <p className="left-text">Stay on Campus</p>
        <p className="right-text">Discover</p>
      </div>

      <div className="services-container">
        <div className="househub-card">
          <img src={flatImage1} alt="" className="househub-icon" />
          <div className="house-info">
            <StarRatings
              rating={3.5}
              starRatedColor="red"
              // changeRating={this.changeRating}
              numberOfStars={5}
              name="rating"
              starDimension="17px"
              starSpacing="4px"
            />
            <div className="price-and-furnished">
              <p className="price">12K/month</p>
              <p className="furnished">Furnished</p>
            </div>
            <p className="boys-girls-tag">2BHK Available for boys</p>
            <p className="description">
              0.2km away fron Smt.kashibai navale college of engineering Pune
            </p>
            <p className="owner-name">Owner: Mr. John Doe</p>
          </div>
        </div>

        <div className="househub-card">
          <img src={flatImage2} alt="" className="househub-icon" />
          <div className="house-info">
            <StarRatings
              rating={3.5}
              starRatedColor="red"
              // changeRating={this.changeRating}
              numberOfStars={5}
              name="rating"
              starDimension="17px"
              starSpacing="4px"
            />
            <div className="price-and-furnished">
              <p className="price">12K/month</p>
              <p className="furnished">Furnished</p>
            </div>
            <p className="boys-girls-tag">2BHK Available for boys</p>
            <p className="description">
              0.2km away fron Smt.kashibai navale college of engineering Pune
            </p>
            <p className="owner-name">Owner: Mr. John Doe</p>
          </div>
        </div>
      </div>
    </>
  );
}

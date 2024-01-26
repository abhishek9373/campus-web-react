import React from "react";
import { bedImage, bookImage, laptopImage, profileIcon, userIcon } from "../../assets";
import "../../styles/home/buyandsell.css";
import StarRatings from "react-star-ratings";

export default function Buyandsell() {
  return (
    <>
      <div id="services-heading-2">
        <p className="left-text">Want to Buy or Sell Something?</p>
        <p className="right-text">Discover</p>
      </div>

      <div className="services-container">
        <div className="food-card">
          <div className="food-aligner">
            <img src={laptopImage} alt="" id="food" />
          </div>
          <div className="info-section">
            <div className="user-info-section">
              <p>
                <img src={profileIcon} alt="" />
              </p>
              <p id="user-name">John Smith</p>
              <p className="star-rating">
                <StarRatings
                  rating={3.5}
                  starRatedColor="red"
                  // changeRating={this.changeRating}
                  numberOfStars={5}
                  name="rating"
                  starDimension="17px"
                  starSpacing="4px"
                />
              </p>
            </div>
            <div className="thali-haeding">
              <p id="heading-text">
                Lenovo Thinkpad at 12k
                <span id="limited-or-unlimited">1 year old</span>
              </p>
            </div>
            {/* <p id="thali-description">
            with laptop charger, Antivirus, mouse, keyboard etc.
          </p> */}
            <p className="serve-by">2 Peoples interested</p>
          </div>
        </div>

        <div className="food-card">
          <div className="food-aligner">
            <img src={bedImage} alt="" id="food" />
          </div>
          <div className="info-section">
            <div className="user-info-section">
              <p>
                <img src={profileIcon} alt="" id="profile-icon" />
              </p>
              <p id="user-name">John Smith</p>
              <p className="star-rating">
                <StarRatings
                  rating={3.5}
                  starRatedColor="red"
                  // changeRating={this.changeRating}
                  numberOfStars={5}
                  name="rating"
                  starDimension="17px"
                  starSpacing="4px"
                />
              </p>
            </div>
            <div className="thali-haeding">
              <p id="heading-text">
                Special Dal Bati at 80Rs
                <span id="limited-or-unlimited">Unlimited</span>
              </p>
            </div>
            {/* <p id="thali-description">
            with laptop charger, Antivirus, mouse, keyboard etc.
          </p> */}
            <p className="serve-by">2 Peoples interested</p>
          </div>
        </div>

        <div className="food-card">
          <div className="food-aligner">
            <img src={bookImage} alt="" id="food" />
          </div>
          <div className="info-section">
            <div className="user-info-section">
              <p>
                <img src={profileIcon} alt="" id="profile-icon" />
              </p>
              <p id="user-name">John Smith</p>
              <p className="star-rating">
                <StarRatings
                  rating={3.5}
                  starRatedColor="red"
                  // changeRating={this.changeRating}
                  numberOfStars={5}
                  name="rating"
                  starDimension="17px"
                  starSpacing="4px"
                />
              </p>
            </div>
            <div className="thali-haeding">
              <p id="heading-text">
                Lenovo Thinkpad at 12k
                <span id="limited-or-unlimited">1 year old</span>
              </p>
            </div>
            {/* <p id="thali-description">
            with laptop charger, Antivirus, mouse, keyboard etc.
          </p> */}
            <p className="serve-by">2 Peoples interested</p>
          </div>
        </div>
      </div>
    </>
  );
}

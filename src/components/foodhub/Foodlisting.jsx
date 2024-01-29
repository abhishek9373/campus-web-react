import React from "react";
import "../../styles/foodhub/foodhublistings.css";
import StarRatings from "react-star-ratings";
import { thaliImage1, thaliImage2, thaliImage3 } from "../../assets";

export default function Foodlisting() {
  return (
    <>
      <div className="heading">
        <h5>Latest updated</h5>
      </div>

      <div className="data-container">
        <div className="todays-special-listing-container">
          <div className="food-card-listings">
            <div className="food-aligner-listings">
              <img src={thaliImage1} alt="" id="food-listings" />
            </div>
            <div className="foodlistings-thali-info">
              <StarRatings
                rating={3.5}
                starRatedColor="red"
                // changeRating={this.changeRating}
                numberOfStars={5}
                name="rating"
                starDimension="17px"
                starSpacing="4px"
              />
              <div className="thali-haeding">
                <p id="heading-text">
                  Special Dal Bati at 80Rs
                  <span id="limited-or-unlimited">Unlimited</span>
                </p>
              </div>
              <p id="thali-description">
                In thali: Dal, Bati, 1 Laddu, Onion, Tomato, Cucumber etc.
              </p>
              <p className="serve-by">
                Serve by <span id="mess-name">Shivshree Mess</span> near sinhgad
                law college <br />
                hurry Up closing soon
              </p>
            </div>
          </div>

          <div className="food-card-listings">
            <div className="food-aligner-listings">
              <img src={thaliImage2} alt="" id="food-listings" />
            </div>
            <div className="foodlistings-thali-info">
              <StarRatings
                rating={3.5}
                starRatedColor="red"
                // changeRating={this.changeRating}
                numberOfStars={5}
                name="rating"
                starDimension="17px"
                starSpacing="4px"
              />
              <div className="thali-haeding">
                <p id="heading-text">
                  Special Dal Bati at 80Rs
                  <span id="limited-or-unlimited">Unlimited</span>
                </p>
              </div>
              <p id="thali-description">
                In thali: Dal, Bati, 1 Laddu, Onion, Tomato, Cucumber etc.
              </p>
              <p className="serve-by">
                Serve by <span id="mess-name">Shivshree Mess</span> near sinhgad
                law college <br />
                hurry Up closing soon
              </p>
            </div>
          </div>

          <div className="food-card-listings">
            <div className="food-aligner-listings">
              <img src={thaliImage3} alt="" id="food-listings" />
            </div>
            <div className="foodlistings-thali-info">
              <StarRatings
                rating={3.5}
                starRatedColor="red"
                // changeRating={this.changeRating}
                numberOfStars={5}
                name="rating"
                starDimension="17px"
                starSpacing="4px"
              />
              <div className="thali-haeding">
                <p id="heading-text">
                  Special Dal Bati at 80Rs
                  <span id="limited-or-unlimited">Unlimited</span>
                </p>
              </div>
              <p id="thali-description">
                In thali: Dal, Bati, 1 Laddu, Onion, Tomato, Cucumber etc.
              </p>
              <p className="serve-by">
                Serve by <span id="mess-name">Shivshree Mess</span> near sinhgad
                law college <br />
                hurry Up closing soon
              </p>
            </div>
          </div>

          <div className="food-card-listings">
            <div className="food-aligner-listings">
              <img src={thaliImage1} alt="" id="food-listings" />
            </div>
            <div className="foodlistings-thali-info">
              <StarRatings
                rating={3.5}
                starRatedColor="red"
                // changeRating={this.changeRating}
                numberOfStars={5}
                name="rating"
                starDimension="17px"
                starSpacing="4px"
              />
              <div className="thali-haeding">
                <p id="heading-text">
                  Special Dal Bati at 80Rs
                  <span id="limited-or-unlimited">Unlimited</span>
                </p>
              </div>
              <p id="thali-description">
                In thali: Dal, Bati, 1 Laddu, Onion, Tomato, Cucumber etc.
              </p>
              <p className="serve-by">
                Serve by <span id="mess-name">Shivshree Mess</span> near sinhgad
                law college <br />
                hurry Up closing soon
              </p>
            </div>
          </div>

          <div className="food-card-listings">
            <div className="food-aligner-listings">
              <img src={thaliImage2} alt="" id="food-listings" />
            </div>
            <div className="foodlistings-thali-info">
              <StarRatings
                rating={3.5}
                starRatedColor="red"
                // changeRating={this.changeRating}
                numberOfStars={5}
                name="rating"
                starDimension="17px"
                starSpacing="4px"
              />
              <div className="thali-haeding">
                <p id="heading-text">
                  Special Dal Bati at 80Rs
                  <span id="limited-or-unlimited">Unlimited</span>
                </p>
              </div>
              <p id="thali-description">
                In thali: Dal, Bati, 1 Laddu, Onion, Tomato, Cucumber etc.
              </p>
              <p className="serve-by">
                Serve by <span id="mess-name">Shivshree Mess</span> near sinhgad
                law college <br />
                hurry Up closing soon
              </p>
            </div>
          </div>

          <div className="food-card-listings">
            <div className="food-aligner-listings">
              <img src={thaliImage3} alt="" id="food-listings" />
            </div>
            <div className="foodlistings-thali-info">
              <StarRatings
                rating={3.5}
                starRatedColor="red"
                // changeRating={this.changeRating}
                numberOfStars={5}
                name="rating"
                starDimension="17px"
                starSpacing="4px"
              />
              <div className="thali-haeding">
                <p id="heading-text">
                  Special Dal Bati at 80Rs
                  <span id="limited-or-unlimited">Unlimited</span>
                </p>
              </div>
              <p id="thali-description">
                In thali: Dal, Bati, 1 Laddu, Onion, Tomato, Cucumber etc.
              </p>
              <p className="serve-by">
                Serve by <span id="mess-name">Shivshree Mess</span> near sinhgad
                law college <br />
                hurry Up closing soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

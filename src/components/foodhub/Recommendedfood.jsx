import React from "react";
import "../../styles/foodhub/recommendedlistings.css";
import StarRatings from "react-star-ratings";
import { thaliImage2 } from "../../assets";

export default function RecommendedFood() {
  return (
    <>
      <div className="heading">
        <h5>Recommended for you</h5>
      </div>

      <div className="data-container">
        <div className="todays-special-listing-container">
          <div className="food-card-recommendation">
            <div className="food-aligner-recommendation">
              <img src={thaliImage2} alt="" id="food-recommendation" />
            </div>
            <div className="recommendation-info">
              <StarRatings
                rating={3.5}
                starRatedColor="red"
                // changeRating={this.changeRating}
                numberOfStars={5}
                name="rating"
                starDimension="17px"
                starSpacing="4px"
              />
              <div className="food-aligner-recommendation">
                <img
                  src="assets/icons/dal-bati-thali.svg"
                  alt=""
                  id="food-recommendation"
                />
              </div>
              <div className="thali-heading">
                <p id="heading-text">
                  Special Dal Bati at 80Rs
                  <span id="limited-or-unlimited">Unlimited</span>
                </p>
              </div>
              <p id="thali-description-recommended">
                In thali: Dal, Bati, 1 Laddu, Onion, TOmato, Cucumber etc.
              </p>
              <p className="serve-by-recommended">
                Serve by <span id="mess-name">Shivshree Mess</span> near sinhgad
                law college <br />
                hurry Up closing soon
              </p>
            </div>
          </div>

          <div className="food-card-recommendation">
            <div className="food-aligner-recommendation">
              <img src={thaliImage2} alt="" id="food-recommendation" />
            </div>
            <div className="recommendation-info">
              <StarRatings
                rating={3.5}
                starRatedColor="red"
                // changeRating={this.changeRating}
                numberOfStars={5}
                name="rating"
                starDimension="17px"
                starSpacing="4px"
              />
              <div className="food-aligner-recommendation">
                <img
                  src="assets/icons/dal-bati-thali.svg"
                  alt=""
                  id="food-recommendation"
                />
              </div>
              <div className="thali-heading">
                <p id="heading-text">
                  Special Dal Bati at 80Rs
                  <span id="limited-or-unlimited">Unlimited</span>
                </p>
              </div>
              <p id="thali-description-recommended">
                In thali: Dal, Bati, 1 Laddu, Onion, TOmato, Cucumber etc.
              </p>
              <p className="serve-by-recommended">
                Serve by <span id="mess-name">Shivshree Mess</span> near sinhgad
                law college <br />
                hurry Up closing soon
              </p>
            </div>
          </div>

          <div className="food-card-recommendation">
            <div className="food-aligner-recommendation">
              <img src={thaliImage2} alt="" id="food-recommendation" />
            </div>
            <div className="recommendation-info">
              <StarRatings
                rating={3.5}
                starRatedColor="red"
                // changeRating={this.changeRating}
                numberOfStars={5}
                name="rating"
                starDimension="17px"
                starSpacing="4px"
              />
              <div className="food-aligner-recommendation">
                <img
                  src="assets/icons/dal-bati-thali.svg"
                  alt=""
                  id="food-recommendation"
                />
              </div>
              <div className="thali-heading">
                <p id="heading-text">
                  Special Dal Bati at 80Rs
                  <span id="limited-or-unlimited">Unlimited</span>
                </p>
              </div>
              <p id="thali-description-recommended">
                In thali: Dal, Bati, 1 Laddu, Onion, TOmato, Cucumber etc.
              </p>
              <p className="serve-by-recommended">
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

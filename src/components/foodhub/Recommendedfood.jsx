import React from "react";
import "../../styles/foodhub/recommendedlistings.css";
import StarRatings from "react-star-ratings";
import { thaliImage1 } from "../../assets";

export default function RecommendedFood() {
  return (
    <>
      <div class="heading">
        <h5>Recommended for you</h5>
      </div>

      <div class="data-container">
        <div class="todays-special-listing-container">
          <div class="food-card-recommendation">
            <div class="food-aligner-recommendation">
              <img src={thaliImage1} alt="" id="food-recommendation" />
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
              <div class="food-aligner-recommendation">
                <img
                  src="assets/icons/dal-bati-thali.svg"
                  alt=""
                  id="food-recommendation"
                />
              </div>
              <div class="thali-haeding">
                <p id="heading-text">
                  Special Dal Bati at 80Rs
                  <span id="limited-or-unlimited">Unlimited</span>
                </p>
              </div>
              <p id="thali-description">
                In thali: Dal, Bati, 1 Laddu, Onion, TOmato, Cucumber etc.
              </p>
              <p class="serve-by">
                Serve by <span id="mess-name">Shivshree Mess</span> near sinhgad
                law college <br />
                hurry Up closing soon
              </p>
            </div>
          </div>

          <div class="food-card-recommendation">
            <div class="food-aligner-recommendation">
              <img src={thaliImage1} alt="" id="food-recommendation" />
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
              <div class="food-aligner-recommendation">
                <img
                  src="assets/icons/dal-bati-thali.svg"
                  alt=""
                  id="food-recommendation"
                />
              </div>
              <div class="thali-haeding">
                <p id="heading-text">
                  Special Dal Bati at 80Rs
                  <span id="limited-or-unlimited">Unlimited</span>
                </p>
              </div>
              <p id="thali-description">
                In thali: Dal, Bati, 1 Laddu, Onion, TOmato, Cucumber etc.
              </p>
              <p class="serve-by">
                Serve by <span id="mess-name">Shivshree Mess</span> near sinhgad
                law college <br />
                hurry Up closing soon
              </p>
            </div>
          </div>

          <div class="food-card-recommendation">
            <div class="food-aligner-recommendation">
              <img src={thaliImage1} alt="" id="food-recommendation" />
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
              <div class="food-aligner-recommendation">
                <img
                  src="assets/icons/dal-bati-thali.svg"
                  alt=""
                  id="food-recommendation"
                />
              </div>
              <div class="thali-haeding">
                <p id="heading-text">
                  Special Dal Bati at 80Rs
                  <span id="limited-or-unlimited">Unlimited</span>
                </p>
              </div>
              <p id="thali-description">
                In thali: Dal, Bati, 1 Laddu, Onion, TOmato, Cucumber etc.
              </p>
              <p class="serve-by">
                Serve by <span id="mess-name">Shivshree Mess</span> near sinhgad
                law college <br />
                hurry Up closing soon
              </p>
            </div>
          </div>

          <div class="food-card-recommendation">
            <div class="food-aligner-recommendation">
              <img src={thaliImage1} alt="" id="food-recommendation" />
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
              <div class="food-aligner-recommendation">
                <img
                  src="assets/icons/dal-bati-thali.svg"
                  alt=""
                  id="food-recommendation"
                />
              </div>
              <div class="thali-haeding">
                <p id="heading-text">
                  Special Dal Bati at 80Rs
                  <span id="limited-or-unlimited">Unlimited</span>
                </p>
              </div>
              <p id="thali-description">
                In thali: Dal, Bati, 1 Laddu, Onion, TOmato, Cucumber etc.
              </p>
              <p class="serve-by">
                Serve by <span id="mess-name">Shivshree Mess</span> near sinhgad
                law college <br />
                hurry Up closing soon
              </p>
            </div>
          </div>

          <div class="food-card-recommendation">
            <div class="food-aligner-recommendation">
              <img src={thaliImage1} alt="" id="food-recommendation" />
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
              <div class="food-aligner-recommendation">
                <img
                  src="assets/icons/dal-bati-thali.svg"
                  alt=""
                  id="food-recommendation"
                />
              </div>
              <div class="thali-haeding">
                <p id="heading-text">
                  Special Dal Bati at 80Rs
                  <span id="limited-or-unlimited">Unlimited</span>
                </p>
              </div>
              <p id="thali-description">
                In thali: Dal, Bati, 1 Laddu, Onion, TOmato, Cucumber etc.
              </p>
              <p class="serve-by">
                Serve by <span id="mess-name">Shivshree Mess</span> near sinhgad
                law college <br />
                hurry Up closing soon
              </p>
            </div>
          </div>

          <div class="food-card-recommendation">
            <div class="food-aligner-recommendation">
              <img src={thaliImage1} alt="" id="food-recommendation" />
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
              <div class="food-aligner-recommendation">
                <img
                  src="assets/icons/dal-bati-thali.svg"
                  alt=""
                  id="food-recommendation"
                />
              </div>
              <div class="thali-haeding">
                <p id="heading-text">
                  Special Dal Bati at 80Rs
                  <span id="limited-or-unlimited">Unlimited</span>
                </p>
              </div>
              <p id="thali-description">
                In thali: Dal, Bati, 1 Laddu, Onion, TOmato, Cucumber etc.
              </p>
              <p class="serve-by">
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

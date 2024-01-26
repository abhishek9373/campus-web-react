import React, { useEffect } from "react";
import {
  bath,
  bed,
  car,
  create,
  flatImage1,
  list,
  scrollDown,
  share,
  sortDown,
  sortUp,
} from "../../assets";
import "../../styles/househub/main.css";
export default function Househub() {
  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="househub-hero-image-container">
        <p id="househub-hero-text">Let's find and share House on Campus.</p>
        <div className="filter-and-navbar-container">
          <div className="nav-section">
            <div className="nav-option">
              Share <img src={share} alt="" id="nav-icon"/>
            </div>
            <div className="nav-option">
              Create <img src={create} alt="" id="nav-icon"/>
            </div>
            <div className="nav-option">
              My properties <img src={list} alt="" id="nav-icon"/>
            </div>
          </div>
          <div className="filter-section">
            <input type="text" name="keywords" placeholder="keywords" />
            <input type="text" name="city" placeholder="City.." />
            <input type="text" name="price" placeholder="Rs.." />
            {/* <label htmlFor="select-gender">Gender</label> */}
            <select id="select-gender" name="gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="btn-aligner">
            <p className="filter-apply-button">Apply</p>
          </div>
        </div>
      </div>

      <div className="househub-listings-container-aligner">
        <div className="househub-listings-container">
          <div className="sort-section">
            <p className="property-date-down">
              Property Date
              <img
                src={sortDown}
                alt="No image"
                id="sort-image"
                className="sort-image-down"
              />
            </p>
            <p>
              <img src={scrollDown} alt="" id="scroll-down" onClick={()=>window.scrollTo({ left: 0, top: 0, behavior: "smooth" })}/>
            </p>
            <p className="property-date-up">
              Property Price
              <img src={sortUp} alt="" id="sort-image" />
            </p>
          </div>

          <div className="househub-normal-listings">
            <div className="househub-listing-card">
              <img src={flatImage1} className="househub-flat-image" alt="" />
              <div className="househub-listing-info">
                <p id="flat-title">SUPER NICE VILLA</p>
                <p className="househub-card-chip">
                  <p id="flat-price">12K/month</p>
                  <p id="chip">Furnished</p>
                  <p id="chip">Boys</p>
                </p>
                <p id="description">
                  200m Away from SMT Kashibai Navale College.
                </p>
                <p id="owner-name">Owner: Mr. John Doe</p>
                <div className="fetures-container">
                  (1) <img src={bed} alt="" id="feature" />
                  (1) <img src={bath} alt="" id="feature" />
                  (1) <img src={car} alt="" id="feature" />
                </div>
              </div>
            </div>

            <div className="househub-listing-card">
              <img src={flatImage1} className="househub-flat-image" alt="" />
              <div className="househub-listing-info">
                <p id="flat-title">SUPER NICE VILLA</p>
                <p className="househub-card-chip">
                  <p id="flat-price">12K/month</p>
                  <p id="chip">Furnished</p>
                  <p id="chip">Boys</p>
                </p>
                <p id="description">
                  200m Away from SMT Kashibai Navale College.
                </p>
                <p id="owner-name">Owner: Mr. John Doe</p>
                <div className="fetures-container">
                  (1) <img src={bed} alt="" id="feature" />
                  (1) <img src={bath} alt="" id="feature" />
                  (1) <img src={car} alt="" id="feature" />
                </div>
              </div>
            </div>

            <div className="househub-listing-card">
              <img src={flatImage1} className="househub-flat-image" alt="" />
              <div className="househub-listing-info">
                <p id="flat-title">SUPER NICE VILLA</p>
                <p className="househub-card-chip">
                  <p id="flat-price">12K/month</p>
                  <p id="chip">Furnished</p>
                  <p id="chip">Boys</p>
                </p>
                <p id="description">
                  200m Away from SMT Kashibai Navale College.
                </p>
                <p id="owner-name">Owner: Mr. John Doe</p>
                <div className="fetures-container">
                  (1) <img src={bed} alt="" id="feature" />
                  (1) <img src={bath} alt="" id="feature" />
                  (1) <img src={car} alt="" id="feature" />
                </div>
              </div>
            </div>

            <div className="househub-listing-card">
              <img src={flatImage1} className="househub-flat-image" alt="" />
              <div className="househub-listing-info">
                <p id="flat-title">SUPER NICE VILLA</p>
                <p className="househub-card-chip">
                  <p id="flat-price">12K/month</p>
                  <p id="chip">Furnished</p>
                  <p id="chip">Boys</p>
                </p>
                <p id="description">
                  200m Away from SMT Kashibai Navale College.
                </p>
                <p id="owner-name">Owner: Mr. John Doe</p>
                <div className="fetures-container">
                  (1) <img src={bed} alt="" id="feature" />
                  (1) <img src={bath} alt="" id="feature" />
                  (1) <img src={car} alt="" id="feature" />
                </div>
              </div>
            </div>

            <div className="househub-listing-card">
              <img src={flatImage1} className="househub-flat-image" alt="" />
              <div className="househub-listing-info">
                <p id="flat-title">SUPER NICE VILLA</p>
                <p className="househub-card-chip">
                  <p id="flat-price">12K/month</p>
                  <p id="chip">Furnished</p>
                  <p id="chip">Boys</p>
                </p>
                <p id="description">
                  200m Away from SMT Kashibai Navale College.
                </p>
                <p id="owner-name">Owner: Mr. John Doe</p>
                <div className="fetures-container">
                  (1) <img src={bed} alt="" id="feature" />
                  (1) <img src={bath} alt="" id="feature" />
                  (1) <img src={car} alt="" id="feature" />
                </div>
              </div>
            </div>

            <div className="househub-listing-card">
              <img src={flatImage1} className="househub-flat-image" alt="" />
              <div className="househub-listing-info">
                <p id="flat-title">SUPER NICE VILLA</p>
                <p className="househub-card-chip">
                  <p id="flat-price">12K/month</p>
                  <p id="chip">Furnished</p>
                  <p id="chip">Boys</p>
                </p>
                <p id="description">
                  200m Away from SMT Kashibai Navale College.
                </p>
                <p id="owner-name">Owner: Mr. John Doe</p>
                <div className="fetures-container">
                  (1) <img src={bed} alt="" id="feature" />
                  (1) <img src={bath} alt="" id="feature" />
                  (1) <img src={car} alt="" id="feature" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="recommended-flats">
          <p className="recommended-heading">Recommeded</p>
          <div className="recommended-listings">
            <div className="househub-recommended-listing-card">
              <img
                src={flatImage1}
                className="househub-recommended-flat-image"
                alt=""
              />
              <div className="househub-recommended-listing-info">
                <p id="recommended-flat-title">SUPER NICE VILLA</p>
                <p className="recommended-househub-card-chip">
                  <p id="recommended-flat-price">12K/month</p>
                  <p id="recommended-chip">Furnished</p>
                  <p id="recommended-chip">Boys</p>
                </p>
                <p id="recommended-description">200m Away from mg road</p>
                <p id="recommended-owner-name">Owner: Mr. John Doe</p>
                {/* <div className="fetures-container">
                  (1) <img src={bed} alt="" id="feature" />
                  (1) <img src={bath} alt="" id="feature" />
                  (1) <img src={car} alt="" id="feature" />
                </div> */}
              </div>
            </div>

            <div className="househub-recommended-listing-card">
              <img
                src={flatImage1}
                className="househub-recommended-flat-image"
                alt=""
              />
              <div className="househub-recommended-listing-info">
                <p id="recommended-flat-title">SUPER NICE VILLA</p>
                <p className="recommended-househub-card-chip">
                  <p id="recommended-flat-price">12K/month</p>
                  <p id="recommended-chip">Furnished</p>
                  <p id="recommended-chip">Boys</p>
                </p>
                <p id="recommended-description">200m Away from mg road</p>
                <p id="recommended-owner-name">Owner: Mr. John Doe</p>
                {/* <div className="fetures-container">
                  (1) <img src={bed} alt="" id="feature" />
                  (1) <img src={bath} alt="" id="feature" />
                  (1) <img src={car} alt="" id="feature" />
                </div> */}
              </div>
            </div>

            <div className="househub-recommended-listing-card">
              <img
                src={flatImage1}
                className="househub-recommended-flat-image"
                alt=""
              />
              <div className="househub-recommended-listing-info">
                <p id="recommended-flat-title">SUPER NICE VILLA</p>
                <p className="recommended-househub-card-chip">
                  <p id="recommended-flat-price">12K/month</p>
                  <p id="recommended-chip">Furnished</p>
                  <p id="recommended-chip">Boys</p>
                </p>
                <p id="recommended-description">200m Away from mg road</p>
                <p id="recommended-owner-name">Owner: Mr. John Doe</p>
                {/* <div className="fetures-container">
                  (1) <img src={bed} alt="" id="feature" />
                  (1) <img src={bath} alt="" id="feature" />
                  (1) <img src={car} alt="" id="feature" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

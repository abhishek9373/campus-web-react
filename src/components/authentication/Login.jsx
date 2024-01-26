import React from "react";
import "../../styles/user/login.css";

export default function Login() {
    const handleNext=()=>{
        const otpWrapper = document.getElementById("otp-wrapper");
        document.getElementById('login-wrapper').style.display = "none";
        otpWrapper.style.display = "flex";
        otpWrapper.style.animation = "slideIn 0.17s ease-in";
    }
    const handleBack=()=>{
        document.getElementById("otp-wrapper").style.display = "none";
        document.getElementById('login-wrapper').style.display = "flex";
    }

  return (
    <div className="auth-container">
      <div className="wrapper login-wrapper" id="login-wrapper">
        <h3 id="heading">Campus Login </h3>
        <label htmlFor="mobile-input">Enter mobile number</label>
        <div className="mobile-country">
          <select name="country" id="country-dropdown">
            <option value="+91">+91 INDIA</option>
            <option value="+91">+92 PAKISTAN</option>
            <option value="null" selected>
              +91IND
            </option>
          </select>
          <input type="number" name="mobile" id="mobile-input" />
        </div>
        <button id="next-button" onClick={handleNext}>Next</button>
      </div>

      <div className="wrapper otp-wrapper" id="otp-wrapper">
        <p id="back" onClick={handleBack}>Back</p>
        <h3 id="heading">Campus Login </h3>
        <label htmlFor="mobile-input">Enter otp send to you</label>
        <div className="otp-container">
          <form action="">
            <input type="number" maxLength="1" name="otp" id="otp-input" />
            <input type="number" maxLength="1" name="otp" id="otp-input" />
            <input type="number" maxLength="1" name="otp" id="otp-input" />
            <input type="number" maxLength="1" name="otp" id="otp-input" />
            <input type="number" maxLength="1" name="otp" id="otp-input" />
            <input type="number" maxLength="1" name="otp" id="otp-input" />
          </form>
        </div>
        <button id="next-button">Login</button>
      </div>
    </div>
  );
}

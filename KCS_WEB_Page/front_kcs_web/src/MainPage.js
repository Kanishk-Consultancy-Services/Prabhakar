import React from "react";
import "./MainPage.css";
import LandingImage1 from "./images/Permanent Staffing Service Provider.jpg";
import LandingImage2 from "./images/securityagencies.webp";
import LandingImage3 from "./images/MAINPAFE PIN.jpg";

const MainPage = () => {
  return (
    <div className="image-container">
      <div className="image-wrapper">
        <img className="image" src={LandingImage1} alt="Landing1" />

        <img
          className="image"
          width="100%"
          src={LandingImage3}
          alt="Landing2"
        />

        <img className="image" src={LandingImage2} alt="Landing3" />
      </div>
    </div>
  );
};

export default MainPage;

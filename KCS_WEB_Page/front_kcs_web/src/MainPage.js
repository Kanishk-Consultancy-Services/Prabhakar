import React, { useState, useEffect } from "react";
import "./MainPage.css";
import LandingImage1 from "./images/Permanent Staffing Service Provider.jpg";
import LandingImage2 from "./images/securityagencies.webp";
import LandingImage3 from "./images/MAINPAFE PIN.jpg";
import "./EnquiryForm.css";

import EnquiryForm from "./EnquiryForm";

const MainPage = () => {
  const carousel_images = [LandingImage1, LandingImage2, LandingImage3];

  const [currentIndex, setCurrentIndex] = useState(0);

  const moveSlide = (step) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + step;
      if (newIndex >= carousel_images.length) return 0;
      if (newIndex < 0) return carousel_images.length - 1;
      return newIndex;
    });
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      moveSlide(1); // Move to the next image every 3 seconds
    }, 3000);
    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);
  return (
    <div className="image-container">
      <div className="image-wrapper">
        <img
          className="image"
          src={carousel_images[currentIndex]}
          alt={`Images ${currentIndex + 1}`}
        />

        {/* <img className="image" src={LandingImage3} alt="Landing2" />

        <img className="image" src={LandingImage2} alt="Landing3" /> */}
      </div>
      <div>
        <EnquiryForm></EnquiryForm>
      </div>
    </div>
  );
};

export default MainPage;

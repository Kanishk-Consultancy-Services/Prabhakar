import React, { useState, useEffect } from "react";
import "./MainPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faPinterest,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import LandingImage1 from "./images/Let Kaapro find the right fit for your company_-Photoroom.png";
import LandingImage2 from "./images/Permanent Staffing Service Provider.jpg";
import LandingImage3 from "./images/MAINPAFE PIN.jpg";
import KcsLogo1 from "./images/KCS_Official_Logo.PNG";

const MainPage = () => {
  // const [imageLoaded, setImageLoaded] = useState(false);

  // useEffect(() => {
  //   if (imageLoaded) {
  //     const image = document.querySelector(".LandingImage3");
  //     image.classList.add("loaded");
  //   }
  // }, [imageLoaded]);

  // const handleImageLoad = () => {
  //   setImageLoaded(true); // Set image as loaded when onLoad event is triggered
  // };

  return (
    <div className="TopNavContainer">
      <div className="TopNavigationFieldsContainer">
        <div className="logo">
          <img className="KcsLogo" src={KcsLogo1} alt="KcsLogo" />
          {/* <h1>logo</h1> */}
        </div>
        <div className="TopNavigationFields">
          <p>Home</p>
          <p>About Us</p>
          <p>Trainings</p>
          <p>Services</p>
          <p>Others</p>
          <p>Blog</p>
          <p>Others</p>
          <p>Contact Us</p>
        </div>
      </div>

      <div className="imageContainer">
        <div className="imageWrapper">
          <img
            className="LandingImage3"
            src={LandingImage3}
            alt="LandingImage"
            // onLoad={handleImageLoad}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;

{
  /* <div className='TopNavigation'>
          <div className='TopBarLine'>
              <div className='TopBarText'> */
}
{
  /* <h1>&#128222; New Course Enquiry : +91 9346811821</h1> */
}
{
  /* <div className='AllIcons'>
                      <p><FontAwesomeIcon icon={faFacebook} /></p>
                      <p><FontAwesomeIcon icon={faGoogle} /></p>
                      <p><FontAwesomeIcon icon={faInstagram} /></p>
                      <p><FontAwesomeIcon icon={faLinkedin} /></p>
                      <p><FontAwesomeIcon icon={faPinterest} /></p>
                      <p><FontAwesomeIcon icon={faTwitter} /></p>
                      <p><FontAwesomeIcon icon={faYoutube} /></p>
                  </div>
                  <button>Upcoming Batches</button>

              </div>
          </div>
      </div> */
}

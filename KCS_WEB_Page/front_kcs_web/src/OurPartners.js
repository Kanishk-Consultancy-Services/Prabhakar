import React from "react";
import "./OurPartners.css";
import barndsLogoImg from "./images/brandlogsofkanishk webpage.PNG";
import techmahindraLogo from "./images/techmahindralogo.png";
import genpactLogo from "./images/Genpact_logo.png";
// import kcsBanner from './images/te.png'
// import kcsBanner from './images/te1.png'
// import kcsBanner1 from './images/kcs_banner_12.PNG'
import kcsBanner1 from "./images/kcs_banner22.png";

const OurPartners = () => {
  return (
    <>
      <div className="ourPartnersContainer">
        <h1>Our Partners</h1>
        <div className="brandLogos">
          <center>
            <img className="brandLogoImg" src={kcsBanner1} alt="Brand Logo" />
          </center>
        </div>
      </div>
    </>
  );
};

export default OurPartners;

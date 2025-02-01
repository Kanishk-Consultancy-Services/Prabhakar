import React from "react";
import "./Services.css";
import SOCImage from "./images/manpower.jpg";
import SplunkImage from "./images/trainingandplacement.png";
import CrowdstrikeImage from "./images/itande-non-it.jpg";
import DevOpsImage from "./images/securityagencies.webp";
import AWSImage from "./images/vendor-partner-programs.jpg";
import PythonImage from "./images/internship.webp";

function Services() {
  return (
    <div id="services" className="service-container">
      <h2>Our Services</h2>
      <div className="service-grid">
        <div className="service-card">
          <img src={SOCImage} alt="Man Power agencies" />
          <h3 className="images">Man Power Agency</h3>
        </div>
        <div className="service-card">
          <img src={SplunkImage} alt="Trainings And Placements" />
          <h3 className="images">Trainings And Placements</h3>
        </div>
        <div className="service-card">
          <img src={CrowdstrikeImage} alt="IT Jobs & Non-IT Jobs" />
          <h3 className="images">IT Jobs And Non-IT Jobs</h3>
        </div>
        <div className="service-card">
          <img src={DevOpsImage} alt="Security Agency" />
          <h3 className="images">Security Agency</h3>
        </div>
        <div className="service-card">
          <img src={AWSImage} alt="Vendor Ship Firm" />
          <h3 className="images">Vendor Ship Firm</h3>
        </div>
        <div className="service-card">
          <img src={PythonImage} alt="Internships" />
          <h3 className="images">Internships </h3>
        </div>
      </div>
    </div>
  );
}

export default Services;

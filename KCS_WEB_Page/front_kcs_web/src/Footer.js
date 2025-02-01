import React from "react";
import "./Footer.css";
import KcsLogo1 from "./images/KCS_Official_Logo.PNG";
// import whatsapp from './images/icons8-whatsapp-48.png'
// import whatsappbusiness from './images/whatsapp-business.webp'
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

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div id="contact" className="firstCol">
          <div className="footerLogo">
            <img className="FooterKcsLogo" src={KcsLogo1} alt="FooterKcsLogo" />
            {/* <h1>Logo</h1> */}
          </div>

          <div className="compInfo">
            {/* <h1>KANISHK SERVICES</h1> */}

            <p>
              Call Now For enquiry: <h3> +91 93468 11821</h3>
            </p>

            <p>
              Call Now For Business: <h3> +91 95332 55508</h3>
            </p>

            <p>© Registered as KANISHK SERVICES |</p>
            <p>Conditions | Cancellation & Refund Policy | Privacy & Policy </p>
          </div>
        </div>

        {/* second column */}

        <div className="secondCol">
          <div className="navigationFileds">
            <p>Navigation</p>
            <p>Home</p>
            <p>About Us</p>
            <p>Job Openings</p>
            <p>Traings</p>
            <p>Our Services</p>
            <p>Contact</p>
          </div>
        </div>

        {/* footer text */}

        <div className="footerText">
          <div className="endText">
            <p>Call Now</p>
            <p>and get quick response from our team </p>
            <p>we are on the way to build your carrier </p>
            <p>Join with us...</p>
            <div className="FooterAllIcons">
              <a
                href="https://www.facebook.com/kanishk.reddy.902"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <FontAwesomeIcon icon={faFacebook} />
                </p>
              </a>
              <a
                href="https://kanishkservices.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <FontAwesomeIcon icon={faGoogle} />
                </p>
              </a>
              <a
                href="https://www.instagram.com/kcs_consultancy_services/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <FontAwesomeIcon icon={faInstagram} />
                </p>
              </a>
              <a
                href="https://www.linkedin.com/in/kanishk-services-6b3380202/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <FontAwesomeIcon icon={faLinkedin} />
                </p>
              </a>
              <a
                href="https://www.facebook.com/kanishk.reddy.902"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <FontAwesomeIcon icon={faPinterest} />
                </p>
              </a>
              <a
                href="https://x.com/KCS12275758"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <FontAwesomeIcon icon={faTwitter} />
                </p>
              </a>
              <a
                href="https://www.youtube.com/@kanishkservices9490"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <FontAwesomeIcon icon={faYoutube} />
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

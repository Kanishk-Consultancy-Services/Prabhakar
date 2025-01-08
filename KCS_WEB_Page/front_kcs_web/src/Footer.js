import React from 'react'
import './Footer.css'
import KcsLogo1 from './images/KCS_Official_Logo.PNG'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { 
    faFacebook,
    faGoogle,
    faPinterest,
    faInstagram,
    faLinkedin,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
    <div className='footerContainer'>

      <div className='firstCol'>
        <div className='footerLogo'>
        <img className='FooterKcsLogo' src={KcsLogo1} alt='FooterKcsLogo'/>
         {/* <h1>Logo</h1> */}
          </div>
    
        <div className='compInfo'>
        <h1>KANISHK SERVICES</h1>
        {/* <h2>Recrutment - Placements - Trainings</h2> */}
        <p>Call Now For enquiry:</p>
        <p>+91 93468 11821</p>
        </div>
      </div>

      {/* second column */}

      <div className='secondCol'>
      <div className='navigationFileds'>
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

      <div className='footerText'>
       <div className='endText'>
       <p>Call Now</p>
       <p>and get quick response from our team </p>
       <p>we are on the way to build your carrier </p>
       <p>Join with us...</p>
       <div className='FooterAllIcons'>
                             <p><FontAwesomeIcon icon={faFacebook} /></p>
                             <p><FontAwesomeIcon icon={faGoogle} /></p>
                             <p><FontAwesomeIcon icon={faInstagram} /></p>
                             <p><FontAwesomeIcon icon={faLinkedin} /></p>
                             <p><FontAwesomeIcon icon={faPinterest} /></p>
                             <p><FontAwesomeIcon icon={faTwitter} /></p>
                             <p><FontAwesomeIcon icon={faYoutube} /></p>
                         </div>
       </div>
      </div>
    </div>
    </>
  )
}

export default Footer

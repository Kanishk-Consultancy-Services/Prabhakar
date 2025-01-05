import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className='footerContainer'>

      <div className='firstCol'>
        <div className='footerLogo'>
         <h1>Logo</h1>
        </div>
    
        <div className='compInfo'>
        <h1>KANISHK SERVICES</h1>
        <h2>Recrutment - Placements - Trainings</h2>
        <p>Call Now For enquiry:</p>
        <p>+91 91083 18017</p>
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
       </div>
      </div>
    </div>
    </>
  )
}

export default Footer

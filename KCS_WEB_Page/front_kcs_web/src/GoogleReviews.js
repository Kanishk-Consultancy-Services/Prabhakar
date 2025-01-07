import React from 'react'
import barndsLogoImg from './images/brandlogsofkanishk webpage.PNG'
import './GoogleReviews.css'

const GoogleReviews = () => {
  return (
    <>
    <div className="container">
          {/* <h1>hello</h1> */}
        <div className="googleReviews">
          <h1>Google Reviews</h1>
        </div>
        <button className="sideBtn">
                 &lt;
              </button>
        <div className="reviewBoxes">
         <div className="revBox">
          <h2>Overall, online courses are a fantastic way to upgrade skills,
             explore new subjects, and advance your career. They provide a 
             wealth of resources and flexibility unmatched by traditional 
             education methods. I highly recommend considering one if you're
              looking to learn or grow in any field!</h2>
              <br/>
              <h3>Rating: 4.6/5
             <br/>
             ⭐⭐⭐⭐
             </h3>
         </div>
         <div className="revBox">
          <h2>
    Taking an online course is an empowering way to expand your knowledge 
    and gain new skills. The ability to learn at your own pace makes it 
    suitable for busy schedules, and the diverse range of topics ensures 
    there’s something for everyone. Courses are thoughtfully designed, often
     including videos, interactive quizzes, and assignments that enhance the 
     learning experience.The access to industry experts and global communities of 
     learners adds another layer of value, making learning collaborative and insightful. 
    Whether you’re aiming to advance your career, explore a hobby, or stay 
    updated in your field, online courses are a fantastic choice for 
    accessible and impactful education.</h2>
    <br/>
    <h3>Rating: 4.8/5
      <br/>
      ⭐⭐⭐⭐⭐
    </h3>
         </div>
        </div>
        <center><button className="viewMoreBtn">View More &rarr; </button></center>
        </div>
    
        </>
      
  )
}

export default GoogleReviews

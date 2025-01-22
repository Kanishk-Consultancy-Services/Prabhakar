import React from "react";
import barndsLogoImg from "./images/brandlogsofkanishk webpage.PNG";
import "./GoogleReviews.css";

const GoogleReviews = () => {
  return (
    <>
      <div className="container">
        {/* <h1>hello</h1> */}
        <div className="googleReviews">
          <h1>Google Reviews</h1>
        </div>
        {/* <button className="sideBtn">
                 &lt;
              </button> */}
        <div className="reviewBoxes">
          <div className="revBox">
            <h2>
              Overall, online courses are a fantastic way to upgrade skills,
              explore new subjects, and advance your career. They provide a
              wealth of resources and flexibility unmatched by traditional
              education methods. I highly recommend considering one if you're
              looking to learn or grow in any field!
            </h2>
            <br />
            <h3>
              Rating: 4.6/5
              <br />
              ⭐⭐⭐⭐
            </h3>
          </div>
          <div className="revBox">
            <h2>
              Kanishk Consultancy Services provided exceptional support in my
              job search. Their guidance in resume building, interview
              preparation, and market insights was invaluable. With their help,
              I secured a job that perfectly matches my skills and goals. I
              highly recommend their services to any one looking to advance
              their career.
            </h2>
            <br />
            <h3>
              Rating: 4.8/5
              <br />
              ⭐⭐⭐⭐⭐
            </h3>
          </div>
        </div>
        <center>
          <button className="viewMoreBtn">View More &rarr; </button>
        </center>
      </div>
    </>
  );
};

export default GoogleReviews;

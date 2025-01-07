import React from "react";
import './App.css'
import MainPage from "./MainPage";
import GoogleReviews from "./GoogleReviews";
import Footer from "./Footer";
import Scrolling from "./Scrolling";
import AboutUs from "./AboutUs";
import OurPartners from "./OurPartners";

function App() {
  return (
    <>
    <MainPage></MainPage>
    <AboutUs></AboutUs>
    <GoogleReviews></GoogleReviews>
    <OurPartners></OurPartners>
    <Scrolling></Scrolling>
    <Footer></Footer>
    </>
  );
}

export default App;

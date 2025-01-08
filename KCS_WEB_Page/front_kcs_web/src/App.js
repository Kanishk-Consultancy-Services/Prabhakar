import React from "react";
import './App.css'
import MainPage from "./MainPage";
import GoogleReviews from "./GoogleReviews";
import Footer from "./Footer";
import Scrolling from "./Scrolling";
import AboutUs from "./AboutUs";
import OurPartners from "./OurPartners";
import Jobs from "./Jobs";
import Trainings from "./Trainings";
import Services from "./Services";

function App() {
  return (
    <>
    <MainPage></MainPage>
    <Jobs></Jobs>
    <Trainings></Trainings>
    <Services></Services>
    <AboutUs></AboutUs>
    <GoogleReviews></GoogleReviews>
    <OurPartners></OurPartners>
    <Scrolling></Scrolling>
    <Footer></Footer>
    </>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero row align-items-center">
      <div className="col-12">
        <h6 className="text-uppercase">
          <div className="wide-dash"></div>
          New Trend
        </h6>
        <h1 className="text-uppercase display-4">
            AUTUMN Sale Stylish
        </h1>
        <h1 className="text-uppercase display-4 font-weight-bold">WOMEN</h1>
        <Link to="/">DISCOVER MORE</Link>
      </div>
      {/* <div className="col-lg-5 d-md-none d-lg-block">
        <img src={heroImg} alt="Her-img" className="hero-img" />
      </div> */}
    </div>
  );
};

export default Hero;

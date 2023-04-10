import React from "react";
import { Link } from "react-router-dom";
import "./banner.scss";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__container">
        <div className="banner__wrapper">
          <div className="banner__title">
            <h3>
              Make Your Fashion <br />
              Look Swanky{" "}
            </h3>
          </div>
          <div className="banner__btn">
            <Link to="/">
              <button>SHOP NOW</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

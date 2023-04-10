import React from "react";
import "./home.scss";
import Banner from "./components/Banner/Banner";
import Services from "./components/Services/Services";
import Trends from "./components/Trends/Trends";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Services />
      <Trends />
    </div>
  );
};

export default Home;

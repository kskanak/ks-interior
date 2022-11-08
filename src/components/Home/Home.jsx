import React from "react";
import Info from "./Info/Info";
import Offers from "./Offers/Offers";
import Service from "./Service/Service";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Service></Service>
      <Info></Info>
      <Offers></Offers>
    </div>
  );
};

export default Home;

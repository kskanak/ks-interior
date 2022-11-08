import React from "react";
import useTitle from "../../useTitle/UseTitle";
import Info from "./Info/Info";
import Offers from "./Offers/Offers";
import Service from "./Service/Service";
import Slider from "./Slider/Slider";

const Home = () => {
  useTitle("Home");
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

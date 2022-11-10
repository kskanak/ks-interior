import React, { useContext } from "react";
import { AuthContext } from "../../routes/AuthProvider";
import useTitle from "../../useTitle/UseTitle";
import Info from "./Info/Info";
import Offers from "./Offers/Offers";
import Service from "./Service/Service";
import Slider from "./Slider/Slider";

const Home = () => {
  useTitle("Home");
  const { loader } = useContext(AuthContext);

  if (loader) {
    return (
      <div className="loader-spinner flex justify-center items-center my-44">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400 text-center"></div>
      </div>
    );
  }
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

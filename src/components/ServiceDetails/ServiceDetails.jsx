import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ServiceDetails = () => {
  const { about, details, image, _id, price, ratings, service_name } =
    useLoaderData();

  return (
    <div className="my-8 mx-8 md:mx-24">
      <div className="details-section ">
        {/* service tilte */}
        <h2 className="text-3xl font-medium mb-8 rounded-lg py-1 border-2  bg-gradient-to-br from-teal-200 via-green-400 to-orange-300">
          {service_name} Details
        </h2>

        <div className="details-container flex">
          {/* service image */}
          <div className="image-section w-2/4 flex items-center">
            <img
              src={image}
              alt=""
              className="rounded-lg border-accent border-8"
            />
          </div>

          {/* details container */}
          <div className="details-container w-2/4 text-left ml-6 space-y-2">
            <h2 className="text-2xl font-medium">Service : {service_name}</h2>
            <h2 className="text-sm font-medium">About : {about}</h2>
            <h2 className="text-sm font-medium flex items-center">
              Cost : ${price}{" "}
            </h2>
            <h2 className="text-sm font-medium flex items-center">
              Ratings : {ratings} <FaStar className="text-yellow-500 ml-1" />
            </h2>
            <h2 className="text-sm font-medium flex items-center">
              Service_Details : {details}{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

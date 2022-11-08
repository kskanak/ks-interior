import React from "react";
import { PhotoView } from "react-photo-view";

const ServiceCard = ({ service }) => {
  const { _id, image, about, ratings, price, service_name } = service;
  return (
    <div>
      <div className="w-full rounded-md shadow-lg dark:bg-gray-900 dark:text-gray-100">
        <PhotoView src={image}>
          <img
            src={image}
            alt={service_name}
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
        </PhotoView>
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              {service_name}
            </h2>
            <div className="flex justify-around">
              <p className="dark:text-gray-100 font-medium">Price: $ {price}</p>
              <p className="dark:text-gray-100 font-medium">
                Ratings: {ratings}
              </p>
            </div>
            <p className="dark:text-gray-100 text-justify h-48">{about}</p>
            <div className="details-btn">
              <button className="px-3 py-2 bg-slate-800 rounded-lg text-white font-semibold hover:bg-gradient-to-l from-teal-800 via-lime-500 to-green-700 ">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

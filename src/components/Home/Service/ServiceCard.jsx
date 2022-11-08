import React from "react";

const ServiceCard = ({ service }) => {
  const { _id, image, about, ratings, price, service_name } = service;
  return (
    <div>
      <div className="w-full rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img
          src={image}
          alt={service_name}
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

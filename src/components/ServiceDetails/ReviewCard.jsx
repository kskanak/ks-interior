import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { comments, image, name, ratings, service_id, service_name, time } =
    review;
  console.log(time);

  return (
    <div>
      <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gradient-to-br from-violet-500 via-teal-300 to-pink-100 dark:text-gray-100">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4 h-16">
            <div>
              <img
                src={image}
                alt=""
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div>

            <div className="text-left">
              <h4 className="font-bold">{name}</h4>
              <span className="text-xs dark:text-gray-400">
                <span className="font-medium">Posted</span> :{" "}
                {time ? time : "N/A"}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2 dark:text-yellow-500">
            <FaStar className="text-yellow-500 ml-1 text-2xl" />
            <span className="text-xl font-bold">{ratings}</span>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
          <p className="text-justify h-20">{comments}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

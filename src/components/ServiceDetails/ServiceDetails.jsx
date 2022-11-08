import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import ReviewCard from "./ReviewCard";
import { AuthContext } from "../../routes/AuthProvider";
import Reviewform from "./Reviewform";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const {
    service_id,
    about,
    details,
    image,

    price,
    ratings,
    service_name,
  } = useLoaderData();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => toast.error(error.message));
  }, []);
  console.log(reviews);
  const serviceReviews = reviews.filter(
    (review) => review.service_id === service_id
  );
  console.log(serviceReviews);
  return (
    <div className="my-8 mx-8 md:mx-24">
      {/* details -section */}
      <div className="details-section ">
        {/* service tilte */}
        <h2 className="text-3xl font-medium mb-8 rounded-lg py-1 border-2  bg-gradient-to-br from-teal-200 via-green-400 to-orange-300">
          {service_name} Details
        </h2>

        <div className="details-container md:flex">
          {/* service image */}
          <div className="image-section md:w-2/4 flex items-center">
            <img
              src={image}
              alt=""
              className="rounded-lg border-accent border-8"
            />
          </div>

          {/* details container */}
          <div className="details-container md:w-2/4 text-left ml-6 space-y-2 mt-10 md:mt-0">
            <h2 className="text-2xl font-medium text-center md:text-left">
              Service : {service_name}
            </h2>
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

      {/* review section */}
      <div className="review-sections div my-32">
        <h2 className="text-3xl font-medium mb-8 rounded-lg py-1 border-2  bg-gradient-to-br from-teal-200 via-green-400 to-orange-300">
          Client Review on {service_name}
        </h2>
        <div className="review-container grid md:grid-cols-2 gap-5">
          {serviceReviews.map((review) => (
            <ReviewCard key={review._id} review={review}></ReviewCard>
          ))}
        </div>
      </div>
      <div className="user-review-section">
        {user ? (
          <Reviewform
            service_id={service_id}
            service_name={service_name}
          ></Reviewform>
        ) : (
          <p className="text-3xl font-medium mb-8 rounded-lg py-1 ">
            Please{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>{" "}
            to send your Reviews
          </p>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;

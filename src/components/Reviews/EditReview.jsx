import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../useTitle/UseTitle";

const EditReview = () => {
  useTitle("EditReview");
  const review = useLoaderData();

  const [updateReview, setUpdateReview] = useState(review);

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/reviews/${review._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const handleBlue = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReview = { ...updateReview };
    newReview[field] = value;
    setUpdateReview(newReview);
    console.log(newReview, updateReview);
  };
  return (
    <div className="mx-8 md:mx-32 my-10">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">
          Update Review for {review.service_name}
        </h1>
      </div>
      <form
        noValidate=""
        action=""
        onSubmit={handleUpdate}
        className="space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm text-left">
              Ratings
            </label>
            <input
              type="text"
              name="ratings"
              id="Ratings"
              onBlur={handleBlue}
              defaultValue={review.ratings}
              placeholder=" between 1-5"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="comments" className="text-sm">
                Your Review
              </label>
            </div>
            <input
              type="text"
              name="comments"
              id="comments"
              defaultValue={review.comments}
              onBlur={handleBlue}
              className="w-full px-3 py-2 h-32  border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 dark:text-gray-900">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditReview;

import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../routes/AuthProvider";
import useTitle from "../../useTitle/UseTitle";
import Reviewrow from "./Reviewrow";

const Reviews = () => {
  useTitle("Reviews");
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews/?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => toast.error(error.message));
  }, [user?.email]);

  const handleDelete = (_id) => {
    const agree = window.confirm("You wanna delete this comment?");
    if (agree) {
      fetch(`http://localhost:5000/reviews/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const restReview = reviews.filter((review) => review._id !== _id);
            setReviews(restReview);
            toast.info("Review Deleted");
          }
          console.log(data);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      {reviews.length === 0 ? (
        <p>You have no reviews to show... </p>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  <></>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <Reviewrow
                  key={review._id}
                  review={review}
                  handleDelete={handleDelete}
                ></Reviewrow>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Reviews;

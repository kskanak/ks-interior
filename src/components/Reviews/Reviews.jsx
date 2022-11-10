import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../routes/AuthProvider";
import useTitle from "../../useTitle/UseTitle";
import Reviewrow from "./Reviewrow";
import noReviewImg from "../../assets/slider_image/no-review-found.png";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const Reviews = () => {
  useTitle("My_Reviews");
  const { user, handleLogout } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if (!user?.email) {
      return;
    }
    fetch(
      `https://ks-interior-server-side.vercel.app/reviews/?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("ks-Interior-Token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return handleLogout();
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => toast.error(error.message));
  }, [user?.email, handleLogout]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://ks-interior-server-side.vercel.app/reviews/${_id}`, {
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
    });
  };

  return (
    <div className="mx-8 md:mx-18 mb-32">
      {reviews?.length === 0 ? (
        <img src={noReviewImg} alt="No review to show" className="" />
      ) : (
        <div className="overflow-x-auto w-full">
          <h2 className="text-4xl font-bold my-8 underline text-emerald-700">
            My reviews
          </h2>
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>
                  <></>
                </th>
                <th>Service</th>
                <th>Review and ratings</th>
                <th>Posted</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {reviews?.map((review) => (
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

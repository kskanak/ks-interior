import React, { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../routes/AuthProvider";

const Reviewform = ({ service_name, service_id }) => {
  const { user } = useContext(AuthContext);

  const hanldeCheckSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = user?.displayName;
    const image = user?.photoURL;
    const email = user?.email || "unregistered";
    const ratings = form.ratings.value;

    const comments = form.message.value;
    const review = {
      service_id: service_id,
      service_name: service_name,
      name: name,
      image,
      comments,
      ratings,
      email,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.info("Your Review has sent");
          form.reset();
        }
        console.log(data);
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
        <form
          noValidate=""
          onSubmit={hanldeCheckSubmit}
          action=""
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900 text-white">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  readOnly
                  required
                  defaultValue={user?.email}
                  className="w-full rounded-md h-12 p-5 mt-3 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900 font-semibold"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Ratings
                </label>
                <input
                  id="ratings"
                  type="text"
                  name="ratings"
                  required
                  placeholder="rate between 1-5"
                  className="w-full rounded-md h-12 p-5 mt-3  focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900 font-semibold"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm ">
                  Review
                </label>
                <input
                  id="address"
                  type="text"
                  name="message"
                  placeholder="Your Review"
                  className="w-full rounded-md  h-32 p-5 mt-3 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900 font-semibold"
                />
              </div>

              <div className="submit-btn col-span-full text-center">
                <button className="px-4 py-2 w-3/4 mx-auto border bg-color-orange rounded-md dark:border-gray-100">
                  Send Review
                </button>
              </div>
            </div>
            <div className="space-y-2 col-span-full lg:col-span-1 flex  flex-col justify-center order-first md:order-last">
              <p className="font-medium">Review Form</p>
              <p className="text-xs">
                Send me your experience and review about the services
              </p>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default Reviewform;

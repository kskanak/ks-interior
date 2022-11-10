import React from "react";
import { toast } from "react-toastify";
import useTitle from "../../useTitle/UseTitle";

const AddServices = () => {
  useTitle("AddServices");

  const hanldeCheckSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const service_name = form.service_name.value;
    const image = form.image.value;
    const ratings = form.ratings.value;
    const price = form.price.value;
    const about = form.about.value;
    const service = {
      service_name,
      price,
      image,
      ratings,
      about,
    };
    console.log(service);
    fetch("https://ks-interior-server-side.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.info("Your service has added");
          form.reset();
        }
        console.log(data);
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div>
      <h2 className="my-8 font-bold text-4xl text-accent underline">
        Add New Service
      </h2>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
        <form
          noValidate=""
          onSubmit={hanldeCheckSubmit}
          action=""
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gradient-to-t from-sky-800 via-green-500 to-slate-800 border-2 text-white">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="service_name" className="text-sm">
                  Service_Name
                </label>
                <input
                  id="service_name"
                  type="text"
                  name="service_name"
                  placeholder="service_name"
                  required
                  className="w-full rounded-md h-12 p-5 mt-3 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900 font-semibold"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="image" className="text-sm">
                  Service_image
                </label>
                <input
                  id="image"
                  type="text"
                  name="image"
                  required
                  placeholder="Give image URL"
                  className="w-full rounded-md h-12 p-5 mt-3  focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900 font-semibold"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="service_cost" className="text-sm">
                  Service_Cost
                </label>
                <input
                  id="service_cost"
                  type="text"
                  name="price"
                  placeholder="Cost"
                  required
                  className="w-full rounded-md h-12 p-5 mt-3 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900 font-semibold"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="ratings" className="text-sm">
                  Service_Ratings
                </label>
                <input
                  id="ratings"
                  type="text"
                  name="ratings"
                  required
                  placeholder="Give service ratings"
                  className="w-full rounded-md h-12 p-5 mt-3  focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900 font-semibold"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="about" className="text-sm ">
                  About_service
                </label>
                <input
                  id="about"
                  type="text"
                  name="about"
                  placeholder="Write about service"
                  className="w-full rounded-md  h-32 p-5 flex  mt-3 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900 font-semibold"
                />
              </div>

              <div className="submit-btn col-span-full text-center">
                <button className="px-4 py-2 w-3/4 mx-auto border bg-gradient-to-bl from-fuchsia-100 via-emerald-800 to-emerald-500 rounded-md font-medium text-xl hover:bg-gradient-to-br from-blue-900 via-lime-400 to-gray-300">
                  Add Service
                </button>
              </div>
            </div>
            <div className="space-y-2 col-span-full lg:col-span-1 flex  flex-col justify-center order-first md:order-last">
              <p className="font-medium text-3xl">Add a Service</p>
              <p className="text-xs">
                Add a service to serve best for the Others.
              </p>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddServices;

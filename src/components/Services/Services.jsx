import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import useTitle from "../../useTitle/UseTitle";
import Offers from "../Home/Offers/Offers";
import ServiceCard from "../Home/Service/ServiceCard";

const Services = () => {
  useTitle("Services");
  // const services = useLoaderData();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://ks-interior-server-side.vercel.app/allservices")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => toast.error(error.message));
  }, []);

  return (
    <div>
      <div className="my-10 mx-8 md:mx-24">
        <h2 className="text-4xl font-bold mb-8 text-white rounded-lg py-1 border-2  bg-gradient-to-br from-teal-200 via-green-400 to-orange-300">
          All Services
        </h2>
        {services.length === 0 && (
          <div className="loader-spinner flex justify-center items-center my-44">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400 text-center"></div>
          </div>
        )}
        <div className="service-container grid md:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
      <Offers></Offers>
    </div>
  );
};

export default Services;

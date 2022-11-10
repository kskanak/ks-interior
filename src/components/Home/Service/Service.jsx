import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => toast.error(error.message));
  }, []);

  return (
    <div className="my-10 mx-8 md:mx-24">
      <h2 className="text-3xl font-bold mb-8 text-white rounded-lg py-1 border-2  bg-gradient-to-tl from-blue-300 via-emerald-500 to-lime-600 ">
        Services
      </h2>
      <div className="service-container grid md:grid-cols-3 gap-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="see-all-btn my-8">
        <Link to="/services">
          <button className="px-8 py-2 bg-gradient-to-tl text-xl  from-teal-500 via-teal-600 to-amber-800 rounded-lg text-white font-semibold hover:px-5 hover:bg-gradient-to-r from-purple-500 via-teal-600 to-orange-300 duration-200">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Service;

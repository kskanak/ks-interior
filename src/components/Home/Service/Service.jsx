import React, { useEffect, useState } from "react";
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
      <h2 className="text-3xl font-medium mb-8">Services</h2>
      <div className="service-container grid md:grid-cols-3 gap-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Service;

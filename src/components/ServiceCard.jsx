import React from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  return (
    <div className="card bg-base-100 shadow-sm md:hover:scale-102 md:transition ease-in-out rounded-2xl p-2">
      <div className="py-2 px-2">
        <img
          src={service.image}
          alt={service.serviceName}
          className="w-full rounded-t-xl  h-48 object-cover"
        />
      </div>

      <div className="p-2 pb-7 space-y-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {service.serviceName}
        </h3>

        <div className="flex justify-between items-center text-sm text-gray-500">
          <span className="flex justify-center items-center">
            <FaStar className="pb-0.5 text-yellow-500" /> {service.rating}
          </span>
          <span className="font-medium text-purple-600">${service.price}</span>
        </div>

        <Link
          to={`/service/${service.serviceId}`}
          className="btn w-full bg-gradient-to-br from-[#632ee3] to-[#9f62f2] text-white hover:opacity-90 border-0 mt-3"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

import React, { useState } from "react";
import { useParams } from "react-router";
import { useFetchAllServices } from "../hooks/service";
import LoadingSpinner from "../pages/LoadingSpinner";
import BookNow from "./BookNow";
import { FaStar } from "react-icons/fa6";
import iconh from "../assets/iconh.png";
import iconp from "../assets/iconp.png";

const ServiceDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const { id } = useParams();
  const { services, serviceLoading } = useFetchAllServices();

  if (serviceLoading) {
    return <LoadingSpinner />;
  }
  const serviceDetails = services.find(
    (service) => service.serviceId === Number(id)
  );

  //  If not found → show ErrorPage
  if (!serviceDetails) {
    return <ErrorPage message="Service not found. Please check the link." />;
  }

  // console.log(id, serviceDetails);
  const {
    category,
    description,
    image,
    price,
    providerEmail,
    providerName,
    rating,
    serviceName,
    slotsAvailable,
  } = serviceDetails || {};

  return (
    <div className="overflow-y-auto md:overflow-y-visible h-[500px] md:h-auto pr-2 scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-transparent">
      <div className="flex md:gap-25 gap-0 flex-col md:flex-row ">
        <div className="mt-5 md:mx-0 mx-3 space-y-4">
          <div className="">
            <img className="md:w-[500px]" src={image} alt="" />
          </div>
          <div className=" md:flex justify-between md:w-[500px] px-2">
            <p className="">
              Category:
              <span className="text-gray-700 font-semibold"> {category}</span>
            </p>
            <p>
              Price:
              <span className="text-gray-700 font-semibold"> ${price}</span>
            </p>
            <p className="flex text-gray-700 font-semibold">
              <span className="mt-1">
                <FaStar className=" text-yellow-600" />{" "}
              </span>
              {rating}
            </p>
          </div>
          <div className=" md:flex justify-between md:w-[500px] px-2">
            <p>
              Service Care:
              <span className="text-gray-700 font-semibold">
                {" "}
                {providerName}
              </span>
            </p>
            <p className="text-gray-700 font-semibold">{providerEmail}</p>
          </div>

          <div className=" md:flex justify-between md:w-[500px] px-2">
            <p>
              Service:
              <span className="text-gray-700 font-semibold">
                {" "}
                {serviceName}
              </span>
            </p>
            <p>
              AvailableSlots:
              <span className="text-gray-700 font-semibold">
                {" "}
                {slotsAvailable}
              </span>
            </p>
          </div>
          <div>
            <button
              className="btn btn-secondary"
              onClick={() => setShowForm((prev) => !prev)}
            >
              {showForm ? "Booking" : "Book Now"}
            </button>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-600">Description</h3>
            <p className="md:w-[500px] text-gray-500">{description}</p>
          </div>
        </div>
        <div>
          {showForm ? (
            <BookNow />
          ) : (
            <div>
              <h1 className="md:mt-20 md:text-5xl font-bold mt-10">
                <img
                  className="inline-block md:h-20 md:w-20 h-8 w-8"
                  src={iconh}
                  alt=""
                />
                You are in the right place.For best pet consultancy Care.
                <img
                  className="inline-block md:h-20 md:w-20 h-8 w-8"
                  src={iconp}
                  alt=""
                />
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

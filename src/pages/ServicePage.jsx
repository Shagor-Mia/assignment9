import React from "react";
import { useFetchAllServices } from "../hooks/service";
import ServiceCard from "../components/ServiceCard";
import LoadingSpinner from "./LoadingSpinner";

const ServicePage = () => {
  const { services, serviceLoading } = useFetchAllServices();

  if (!services || services.length === 0 || serviceLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="mx-auto py-10 flex flex-col flex-1">
      <h2 className="md:text-5xl text-2xl font-bold text-center mb-8">
        Our All Best Services
      </h2>

      {/*  Scroll */}
      <div className="overflow-y-auto md:overflow-y-visible h-[500px] md:h-auto pr-2 scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-transparent">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 md:px-0">
          {services.map((service) => (
            <ServiceCard key={service.serviceId} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePage;

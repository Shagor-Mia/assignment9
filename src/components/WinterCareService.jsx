import { Link } from "react-router";
import ServiceCard from "./ServiceCard";
import { useFetchAllServices } from "../hooks/service";
import LoadingSpinner from "../pages/LoadingSpinner";
import { FaArrowAltCircleRight } from "react-icons/fa";

const WinterCareServices = () => {
  const { services } = useFetchAllServices();

  if (!services || services.length === 0) {
    return <LoadingSpinner />;
  }
  const popularServices = services.slice(0, 6);
  return (
    <section className=" py-10 bg-gray-200 lg:px-12 rounded-xl">
      <h2 className="md:text-5xl text-3xl font-bold text-center mb-8 text-purple-600">
        Winter Pet Care Services
      </h2>
      {/* scroll */}
      <div className="overflow-y-auto md:overflow-y-visible h-[500px] md:h-auto pr-2 scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-transparent">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularServices.map((service) => (
            <ServiceCard key={service.serviceId} service={service} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <Link to={"/service"} className=" btn btn-secondary mt-10">
          All Our Services
        </Link>
      </div>
    </section>
  );
};

export default WinterCareServices;

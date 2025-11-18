import React from "react";
import { FaHeart } from "react-icons/fa6";

const AdoptPetSection = () => {
  const adoptablePets = [
    {
      id: 1,
      name: "Bella",
      species: "Dog",
      breed: "Golden Retriever",
      age: "2 years",
      image: "https://i.ibb.co.com/b57KyzDK/golden-1.jpg",
      description:
        "Bella is a gentle and playful Golden Retriever who loves cuddles and outdoor walks. She’s fully vaccinated and ready for a loving family.",
    },
    {
      id: 2,
      name: "Milo",
      species: "Cat",
      breed: "Persian",
      age: "1.5 years",
      image: "https://i.ibb.co.com/tpGpwYn6/persian-1.jpg",
      description:
        "Milo is a calm and affectionate Persian cat who enjoys naps and cozy corners. He’s neutered, litter-trained, and perfect for apartment life.",
    },
    {
      id: 3,
      name: "Charlie",
      species: "Dog",
      breed: "Beagle",
      age: "3 years",
      image: "https://i.ibb.co.com/G4SV3dSP/beagle-1.jpg",
      description:
        "Charlie is an energetic Beagle who loves to play fetch and go on adventures. Great with kids and other pets — waiting for his forever home.",
    },
    {
      id: 4,
      name: "Luna",
      species: "Cat",
      breed: "Siamese",
      age: "2.5 years",
      image: "https://i.ibb.co.com/1JGs3cvH/siamese-1.jpg",
      description:
        "Luna is a smart, curious Siamese cat with a playful personality. She enjoys human company and will brighten up your home instantly.",
    },
  ];

  return (
    <section className="mx-auto py-12">
      <h2 className="text-3xl font-bold flex text-center justify-center items-center gap-2 text-purple-600 mb-8">
        Adopt a Pet — Give Them a Forever Home{" "}
        <FaHeart className="text-red-600" />
      </h2>
      <div className="overflow-y-auto md:overflow-y-visible h-[500px] md:h-auto pr-2 scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-transparent">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {adoptablePets.map((pet) => (
            <div
              key={pet.id}
              className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <figure>
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-56 object-cover p-2 rounded-t-2xl"
                />
              </figure>
              <div className="card-body">
                <h3 className="text-lg font-semibold text-gray-800">
                  {pet.name} ({pet.species})
                </h3>
                <p className="text-sm text-gray-500">
                  {pet.breed} • {pet.age}
                </p>
                <p className="text-gray-700 text-sm mt-2">{pet.description}</p>
                <button className="btn btn-secondary mt-4">Adopt Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-10 space-y-3">
        <h1 className="text-gray-700 text-2xl font-bold">
          {" "}
          for adopting a pet
        </h1>
        <a
          href="https://perrossinnombre.org/"
          target="_blank"
          rel="noopener noreferrer"
          className=" btn bg-amber-400 text-white hover:text-red-400 hover:bg-amber-300  border-0"
        >
          Please visit
        </a>
      </div>
    </section>
  );
};

export default AdoptPetSection;

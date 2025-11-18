import React from "react";

const expertVets = [
  {
    id: 1,
    name: "Dr. Sarah Thompson",
    specialization: "Veterinary Surgeon",
    experience: "12 years",
    image: "https://i.ibb.co.com/TB6c5KWK/sarah-1.jpg",
    bio: "Dr. Sarah Thompson has over 12 years of experience in veterinary surgery. She specializes in small animals, providing compassionate care and advanced surgical treatments to ensure pets stay healthy and safe.",
  },
  {
    id: 2,
    name: "Dr. Michael Rivera",
    specialization: "Pet Nutritionist",
    experience: "8 years",
    image: "https://i.ibb.co.com/wZWMxhgs/michela-1.jpg",
    bio: "Dr. Michael Rivera focuses on pet nutrition and wellness. With 8 years of experience, he creates customized diet plans that promote immunity, weight management, and overall health for pets of all ages.",
  },
  {
    id: 3,
    name: "Dr. Emily Johnson",
    specialization: "Animal Behaviorist",
    experience: "10 years",
    image: "https://i.ibb.co.com/99Z8jBpP/emily-1.jpg",
    bio: "Dr. Emily Johnson is an expert in animal behavior and training. Over the past 10 years, she has helped pets overcome anxiety, aggression, and behavioral challenges using positive reinforcement methods.",
  },
  {
    id: 4,
    name: "Dr. Robert Kim",
    specialization: "Exotic Animal Specialist",
    experience: "9 years",
    image: "https://i.ibb.co.com/CpZGcv5R/robert-1.jpg",
    bio: "Dr. Robert Kim specializes in exotic and small mammals. With 9 years of experience, he provides expert care for reptiles, birds, and other exotic pets, ensuring their unique health needs are properly managed.",
  },
];

const ExpertVets = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 py-10 bg-gray-200 rounded-xl">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-700 text-center mb-10">
        Meet Our Expert Vets
      </h1>
      <div className="overflow-y-auto md:overflow-y-visible h-[500px] md:h-auto pr-2 scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-transparent">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {expertVets.map((vet) => (
            <div
              key={vet.id}
              className="card bg-white shadow-md rounded-xl overflow-hidden flex flex-col items-center text-center p-5"
            >
              <img
                src={vet.image}
                alt={vet.name}
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mb-4"
              />
              <h2 className="text-xl md:text-2xl font-bold">{vet.name}</h2>
              <p className="text-sm md:text-base text-gray-500 mb-2">
                {vet.specialization} • {vet.experience}
              </p>
              <p className="text-gray-600 text-sm md:text-base">{vet.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertVets;

import React from "react";

const petTips = [
  {
    id: 1,
    title: "Keep Pets Warm Indoors",
    description:
      "Provide pets with a cozy, draft-free area indoors with blankets or heated pads. This helps prevent them from getting cold, ensures comfort during chilly nights, and protects smaller or short-haired pets from winter-related health issues.",
    image: "https://i.ibb.co.com/hJ2gLffc/heatedbed-1.jpg",
    category: "Indoor Care",
  },
  {
    id: 2,
    title: "Protect Their Paws",
    description:
      "Cold, ice, and salt can hurt pets’ paws. Use pet-safe booties or paw balm to protect them. Clean paws after walks to remove debris, preventing irritation, cracks, or frostbite during the winter months.",
    image: "https://i.ibb.co.com/yFqzdWtv/walkinggear.jpg",
    category: "Outdoor Care",
  },
  {
    id: 3,
    title: "Maintain Proper Nutrition",
    description:
      "Provide a balanced, energy-rich diet to help pets stay warm and healthy. Ensure fresh water is available at all times, and adjust portion sizes if needed to maintain their weight during colder months.",
    image: "https://i.ibb.co.com/7xtKn1L0/petnutration.jpg",
    category: "Nutrition",
  },
  {
    id: 4,
    title: "Regular Exercise",
    description:
      "Keep pets active during winter through indoor play or short outdoor walks. Proper exercise prevents lethargy, maintains weight, improves health, and provides mental stimulation despite cold weather and shorter daylight hours.",
    image: "https://i.ibb.co.com/9mHrqS7D/indorplay-1.jpg",
    category: "Exercise",
  },
];

const Tips = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 py-10 bg-amber-50 rounded-xl">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-700 text-center mb-10">
        Winter Care Tips for Pets
      </h1>
      <div className="overflow-y-auto md:overflow-y-visible h-[500px] md:h-auto pr-2 scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-transparent">
        <div className="grid md:grid-cols-2 gap-4">
          {petTips.map((tip) => (
            <div
              key={tip.id}
              className="card bg-base-100 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-10 p-3 md:p-5"
            >
              {/* Image */}
              <img
                className="w-full md:w-48 h-48 object-cover rounded-xl flex-shrink-0"
                src={tip.image}
                alt={tip.title}
              />

              {/* Content */}
              <div className="flex flex-col gap-3 md:flex-1">
                <h2 className="text-xl md:text-2xl font-bold">{tip.title}</h2>
                <span className="text-sm text-gray-500">{tip.category}</span>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tips;

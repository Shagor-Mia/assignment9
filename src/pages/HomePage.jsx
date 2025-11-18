import React from "react";
import Hero from "../components/Hero";
import WinterCareServices from "../components/WinterCareService";
import Tips from "../components/Tips";
import ExpertVets from "../components/ExpertVets";
import AdoptPetSection from "../components/Adopt";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-5">
      <Hero />
      <WinterCareServices />
      <Tips />
      <ExpertVets />
      <AdoptPetSection />
    </div>
  );
};

export default HomePage;

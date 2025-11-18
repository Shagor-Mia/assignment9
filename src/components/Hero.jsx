import React, { useEffect, useState } from "react";
import petlogo from "../assets/petbg.jpg";
import hero1 from "../assets/hero-1.jpg";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";
import dog1 from "../assets/dogfit1.jpg";
import dog2 from "../assets/dogfit2.jpeg";
import cat1 from "../assets/catfit1.jpg";
import cat2 from "../assets/catfit2.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

const Hero = () => {
  const bgImages = [hero1, hero2, hero3, petlogo];
  const petImages = [cat1, dog1, cat2, dog2];

  const [bgIndex, setBgIndex] = useState(0);
  const [petIndex, setPetIndex] = useState(0);

  // Background auto-slide every 5s
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 8000);
    return () => clearInterval(bgInterval);
  }, [bgImages.length]);

  // Pet image auto-slide every 3s
  useEffect(() => {
    const petInterval = setInterval(() => {
      setPetIndex((prev) => (prev + 1) % petImages.length);
    }, 4000);
    return () => clearInterval(petInterval);
  }, [petImages.length]);

  return (
    <div className="relative w-full md:rounded-2xl rounded-xl overflow-hidden min-h-[300px]  md:min-h-[500px] lg:min-h-[600px]">
      {/* Background carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={bgImages[bgIndex]}
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${bgImages[bgIndex]})` }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>
      </AnimatePresence>

      {/* Overlay content */}
      <div className="absolute inset-0 md:p-10 lg:p-20 flex flex-col md:flex-row items-center justify-center z-20 lg:gap-5">
        <div className="space-y-5 text-center md:text-left">
          <h1 className="md:text-5xl text-3xl font-bold text-white">
            Love your Pets?
          </h1>
          <p className="font-semibold md:text-xl text-xs text-white">
            Wanna make them warm and comfortable this Winter?
          </p>
          <Link
            to="/service"
            className="btn bg-gradient-to-br from-[#632ee3] to-[#9f62f2] text-white hover:opacity-90 border-0 pointer-events-auto"
          >
            Contact Us
          </Link>
        </div>

        {/* Pet image carousel */}
        <div className="relative md:h-[300px] md:w-[500px] lg:h-[400px] lg:w-[650px] rounded-2xl overflow-hidden mt-6 md:mt-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={petImages[petIndex]}
              src={petImages[petIndex]}
              alt="Pet"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 h-full w-full object-cover rounded-2xl"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Hero;

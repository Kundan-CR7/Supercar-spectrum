import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import { motion } from 'framer-motion';

// Car Images
import Pic1 from "/cars/Pic1.jpg";
import Pic2 from "/cars/Pic2.jpg";
import Pic3 from "/cars/Pic3.avif";
import Pic4 from "/cars/Pic4.avif";
import Pic5 from "/cars/Pic5.avif";
import Pic6 from "/cars/Pic6.avif";
import Pic7 from "/cars/Pic7.avif";
import Pic8 from "/cars/Pic8.webp";
import Pic9 from "/cars/Pic9.webp";
import Pic10 from "/cars/Pic10.avif";
import Pic11 from "/cars/Pic11.jpg";

// Brand Logos
import LamborghiniLogo from "../assets/brands/Lamborghini.svg";
import SSCLogo from "../assets/brands/SSC.svg";
import BugattiLogo from "../assets/brands/Bugatti.svg"
import AstonMartinLogo from "../assets/brands/Aston Martin.svg"
import DodgeLogo from "../assets/brands/Dodge.svg"
import FerrariLogo from "../assets/brands/Ferrari.svg"
import JaguarLogo from "../assets/brands/Jaguar.svg"
import LexusLogo from "../assets/brands/Lexus.svg"
import McLarenLogo from "../assets/brands/McLaren.svg"
import MustangLogo from "../assets/brands/Mustang.svg"
import PorsheaLogo from "../assets/brands/Porshea.svg"

const allModels = [
  {
    name: "Aventador Ultimae",
    brand: "Lamborghini",
    image: Pic1,
    logo: LamborghiniLogo,
    description: "A V12 farewell — ultimate expression of Lamborghini's raw power."
  },
  {
    name: "Tuatara",
    brand: "SSC",
    image: Pic2,
    logo: SSCLogo,
    description: "Pushing the limits — the pursuit of world speed records."
  },
  {
    name: "Chiron Pur Sport",
    brand: "Bugatti",
    image: Pic3,
    logo: BugattiLogo,
    description: "Precision handling meets Bugatti power and elegance."
  },
  {
    name: "Valkyrie AMR Pro",
    brand: "Aston Martin",
    image: Pic4,
    logo: AstonMartinLogo,
    description: "Track-only performance — a race car reborn for the elite."
  },
  {
    name: "Challenger SRT Demon",
    brand: "Dodge",
    image: Pic5,
    logo: DodgeLogo,
    description: "Drag strip dominance — American muscle, unleashed."
  },
  {
    name: "SF90 Stradale",
    brand: "Ferrari",
    image: Pic6,
    logo: FerrariLogo,
    description: "Hybrid performance meets Italian craftsmanship."
  },
  {
    name: "F-Type R",
    brand: "Jaguar",
    image: Pic7,
    logo: JaguarLogo,
    description: "Grace, space, and pace — a British sports car icon."
  },
  {
    name: "LFA",
    brand: "Lexus",
    image: Pic8,
    logo: LexusLogo,
    description: "A V10 symphony — Lexus' rare masterpiece of precision."
  },
  {
    name: "720S",
    brand: "McLaren",
    image: Pic9,
    logo: McLarenLogo,
    description: "Lightweight agility and relentless speed — a true driver's machine."
  },
  {
    name: "Mustang GTD",
    brand: "Mustang",
    image: Pic10,
    logo: MustangLogo,
    description: "Track-ready Mustang bred from GT3 racing bloodlines."
  },
  {
    name: "911 Turbo S",
    brand: "Porsche",
    image: Pic11,
    logo: PorsheaLogo,
    description: "Timeless design meets daily supercar capability."
  }
];

const Models = () => {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const uniqueBrands = ["All", ...new Set(allModels.map(model => model.brand))];
  const filteredModels = selectedBrand === "All"
    ? allModels
    : allModels.filter(model => model.brand === selectedBrand);

  useEffect(() => {
    setVisibleCount(6);
  }, [selectedBrand]);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <section id="models" className="py-20 bg-[#342E37] text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-yellow-500 drop-shadow-lg mb-4">
            LEGENDS
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From the adrenaline-pumping roar of a V12 to the silent surge of electric power —
            explore models that blend <span className="text-white font-semibold">passion</span>, 
            <span className="text-white font-semibold"> technology</span>, and 
            <span className="text-white font-semibold"> design</span> to create automotive icons.
          </p>
        </div>

        <div className="text-3xl md:text-4xl font-extrabold text-center mb-12 tracking-wider text-white">
          <span className="text-yellow-500">
            <ReactTyped
              strings={[
                "Unleashing Power and Precision",
                "Explore Hypercars by Brand",
                "Refined Engineering. Raw Emotion."
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </span>
        </div>

        <div className="mb-12 text-center">
          <label className="block mb-2 text-lg font-medium text-gray-300">
            Choose Your Brand
          </label>
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="px-6 py-3 text-base md:text-lg rounded-full bg-zinc-800 text-white border-2 border-yellow-500 hover:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          >
            {uniqueBrands.map((brand, index) => (
              <option key={index} value={brand} className="bg-zinc-900 text-white">
                {brand}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredModels.slice(0, visibleCount).map((model, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl overflow-hidden bg-zinc-900 shadow-lg group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <img 
                src={model.image} 
                alt={model.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                <h3 className="text-xl font-bold text-yellow-400">{model.name}</h3>
                <p className="text-sm text-gray-300 mt-1">{model.description}</p>
              </div>

              <div className="absolute top-3 left-3 backdrop-blur-md bg-white/20 p-1.5 rounded-full shadow-inner border-white/30">
                <img 
                  src={model.logo} 
                  alt={`${model.brand} logo`} 
                  className="w-8 h-8 object-contain mix-blend-luminosity hover:mix-blend-normal transition duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < filteredModels.length && (
          <div className="text-center mt-10">
            <button
              onClick={handleShowMore}
              className="px-8 py-3 rounded-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold transition"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Models;

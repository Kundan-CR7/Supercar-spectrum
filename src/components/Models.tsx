import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import { motion } from 'framer-motion';

// Car Images
import Pic1 from "/cars/Pic1.jpg";
import Pic2 from "/cars/Pic2.jpg";
import Pic3 from "/cars/Pic3.jpg";
import Pic4 from "/cars/Pic44.jpg";
import Pic5 from "/cars/Pic5.jpg";
import Pic6 from "/cars/Pic6.jpg";
import Pic7 from "/cars/Pic7.jpg";
import Pic8 from "/cars/Pic8.jpg";
import Pic9 from "/cars/Pic9.jpg";
import Pic10 from "/cars/Pic10.jpg";
import Pic11 from "/cars/Pic11.jpg";

// Brand Logos
import LamborghiniLogo from "../assets/brands/Lamborghini.svg";
import SSCLogo from "../assets/brands/SSC.svg";
import BugattiLogo from "../assets/brands/Bugatti.svg";
import AstonMartinLogo from "../assets/brands/Aston Martin.svg";
import DodgeLogo from "../assets/brands/Dodge.svg";
import FerrariLogo from "../assets/brands/Ferrari.svg";
import JaguarLogo from "../assets/brands/Jaguar.svg";
import LexusLogo from "../assets/brands/Lexus.svg";
import McLarenLogo from "../assets/brands/McLaren.svg";
import MustangLogo from "../assets/brands/Mustang.svg";
import PorsheaLogo from "../assets/brands/Porshea.svg";
import KoenigseggLogo from "../assets/brands/KoenigseggLogo.svg";

const allModels = [
  {
    name: "Huracán STO",
    brand: "Lamborghini",
    image: Pic1,
    logo: LamborghiniLogo,
    description: "Track-focused precision meets street-legal aggression — the ultimate Huracán experience.",
    tags: ["V10", "Track-Oriented"],
    speedLabel: "Top Speed: 310 km/h"
  },
  {
    name: "Jesko",
    brand: "Koenigsegg",
    image: Pic2,
    logo: KoenigseggLogo,
    description: "A marvel of Swedish engineering — built for both extreme speed and track performance.",
    tags: ["Hypercar", "Track & Speed"],
    speedLabel: "Top Speed: 482+ km/h"
  },
  {
    name: "Chiron Pur Sport",
    brand: "Bugatti",
    image: Pic3,
    logo: BugattiLogo,
    description: "Precision handling meets Bugatti power and elegance.",
    tags: ["Luxury", "W16"],
    speedLabel: "Top Speed: 350 km/h"
  },
  {
    name: "Vulcan AMR Pro",
    brand: "Aston Martin",
    image: Pic4,
    logo: AstonMartinLogo,
    description: "Track-exclusive beast — raw power and aero mastery unleashed.",
    tags: ["Track", "Race Spec"],
    speedLabel: "Top Speed: 360 km/h"
  },
  {
    name: "Challenger SRT Demon",
    brand: "Dodge",
    image: Pic5,
    logo: DodgeLogo,
    description: "Drag strip dominance — American muscle, unleashed.",
    tags: ["Muscle", "Drag"],
    speedLabel: "Top Speed: 270 km/h"
  },
  {
    name: "SF90 Stradale",
    brand: "Ferrari",
    image: Pic6,
    logo: FerrariLogo,
    description: "Hybrid performance meets Italian craftsmanship.",
    tags: ["Hybrid", "Luxury"],
    speedLabel: "Top Speed: 340 km/h"
  },
  {
    name: "C-X75",
    brand: "Jaguar",
    image: Pic7,
    logo: JaguarLogo,
    description: "A hybrid-electric masterpiece blending futuristic design with brutal performance — as seen in James Bond's Spectre.",
    tags: ["Hybrid", "Concept", "Supercar"],
    speedLabel: "Top Speed: 354 km/h"
  },
  {
    name: "LFA",
    brand: "Lexus",
    image: Pic8,
    logo: LexusLogo,
    description: "A V10 symphony — Lexus' rare masterpiece of precision.",
    tags: ["V10", "Iconic"],
    speedLabel: "Top Speed: 325 km/h"
  },
  {
    name: "720S",
    brand: "McLaren",
    image: Pic9,
    logo: McLarenLogo,
    description: "Lightweight agility and relentless speed — a true driver's machine.",
    tags: ["Carbon Fiber", "Track Focused"],
    speedLabel: "Top Speed: 341 km/h"
  },
  {
    name: "Mustang GTD",
    brand: "Mustang",
    image: Pic10,
    logo: MustangLogo,
    description: "Track-ready Mustang bred from GT3 racing bloodlines.",
    tags: ["GT3", "American"],
    speedLabel: "Top Speed: 320 km/h"
  },
  {
    name: "911 Turbo S",
    brand: "Porsche",
    image: Pic11,
    logo: PorsheaLogo,
    description: "Timeless design meets daily supercar capability.",
    tags: ["All-Rounder", "Icon"],
    speedLabel: "Top Speed: 330 km/h"
  }
];

const Models = () => {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const uniqueBrands = ["All", ...new Set(allModels.map(model => model.brand))];
  const filteredModels = selectedBrand === "All"
    ? allModels
    : allModels.filter(model => model.brand === selectedBrand);

  const totalPages = Math.ceil(filteredModels.length / itemsPerPage);

  const paginatedModels = filteredModels.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1); // Reset to first page when brand changes
  }, [selectedBrand]);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section id="Models" className="py-20 bg-[#342E37] text-white scroll-mt-20 min-h-[1000px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-yellow-500 mb-4 drop-shadow-lg">
            LEGENDS
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            From the adrenaline-pumping roar of a V12 to the silent surge of electric power —
            explore models that blend <span className="text-white font-semibold">passion</span>, 
            <span className="text-white font-semibold"> technology</span>, and 
            <span className="text-white font-semibold"> design</span> to create automotive icons.
          </p>
        </div>

        {/* <div className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-yellow-500 tracking-wide">
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
        </div> */}

        <div className="text-center mb-12">
          <div className='text-2xl text-[#0EAD69] font-mono mb-3'>
          <ReactTyped 
          strings={["Choose Your Brand"]}
          typeSpeed={60}
          backSpeed={70}
          backDelay={1000}
          loop
          >
          </ReactTyped>
          </div>
          <div>
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="px-6 py-3 rounded-xl text-[#00FFFF] bg-[#1A1A40] border border-[#3B429F] shadow-md text-center
                      hover:bg-[#2C2C6C] transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#00FFFF] focus:ring-opacity-40
                      appearance-none cursor-pointer"
          >
            <option disabled value="">
              Select a Brand
            </option>
            {uniqueBrands.map((brand, index) => (
              <option
                key={index}
                value={brand}
                className="text-black bg-white dark:text-white dark:bg-[#1E1E2F] text-center"
              >
                {brand}
              </option>
            ))}
          </select>


          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {paginatedModels.map((model, index) => (
            <motion.div
              key={index}
              layout
              className="relative bg-zinc-900 rounded-2xl overflow-hidden shadow-lg group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5 space-y-2">
                <h3 className="text-xl font-bold text-yellow-400">{model.name}</h3>
                <p className="text-sm text-gray-300">{model.description}</p>
                <p className="text-sm text-gray-400 italic">{model.speedLabel}</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {model.tags?.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-300 border border-yellow-400 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-3 left-3 bg-white/20 backdrop-blur p-1.5 rounded-full">
  <img
    src={model.logo}
    alt={`${model.brand} logo`}
    className="w-8 h-8 object-contain mix-blend-multiply rounded-full transition duration-300"
  />
</div>

            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-10 space-x-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i + 1)}
                className={`px-4 py-2 rounded-full font-semibold ${
                  currentPage === i + 1
                    ? "bg-yellow-500 text-black"
                    : "bg-zinc-700 text-white hover:bg-yellow-400"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Models;

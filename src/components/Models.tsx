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
    name: "Lamborghini Aventador SVJ",
    image: Pic1,
    logo: LamborghiniLogo,
    brand: "Lamborghini",
    description: "Naturally aspirated V12 that defines raging performance.",
    speedLabel: "Top Speed: 217 mph",
    tags: ["V12", "Supercar", "Iconic"],
  },
  {
    name: "Bugatti Chiron Super Sport",
    image: Pic3,
    logo: BugattiLogo,
    brand: "Bugatti",
    description: "Luxury meets brutal quad-turbo W16 power.",
    speedLabel: "Top Speed: 273 mph",
    tags: ["Luxury", "Hypercar", "W16 Engine"],
  },
  {
    name: "Aston Martin Valkyrie",
    image: Pic4,
    logo: AstonMartinLogo,
    brand: "Aston Martin",
    description: "F1 technology brought to the street, a pure marvel.",
    speedLabel: "Top Speed: 250 mph",
    tags: ["Hybrid", "Track Focused", "V12 Hybrid"],
  },
  {
    name: "Dodge Challenger SRT Demon",
    image: Pic5,
    logo: DodgeLogo,
    brand: "Dodge",
    description: "World’s fastest quarter-mile production car.",
    speedLabel: "0-60 mph: 2.3 sec",
    tags: ["Muscle", "Drag Racing", "Supercharged V8"],
  },
  {
    name: "Ferrari SF90 Stradale",
    image: Pic6,
    logo: FerrariLogo,
    brand: "Ferrari",
    description: "Ferrari’s first plug-in hybrid with electrifying power.",
    speedLabel: "Top Speed: 211 mph",
    tags: ["Hybrid", "Supercar", "V8 Hybrid"],
  },
  {
    name: "Jaguar F-Type R",
    image: Pic7,
    logo: JaguarLogo,
    brand: "Jaguar",
    description: "A roaring V8 grand tourer with iconic British flair.",
    speedLabel: "Top Speed: 186 mph",
    tags: ["V8", "Grand Tourer", "Luxury"],
  },
  {
    name: "Lexus LFA",
    image: Pic8,
    logo: LexusLogo,
    brand: "Lexus",
    description: "Legendary V10 symphony wrapped in futuristic beauty.",
    speedLabel: "Top Speed: 202 mph",
    tags: ["V10", "Supercar", "Collector's Dream"],
  },
  {
    name: "McLaren P1",
    image: Pic9,
    logo: McLarenLogo,
    brand: "McLaren",
    description: "Hybrid hypercar blending insane speed and beauty.",
    speedLabel: "Top Speed: 217 mph",
    tags: ["Hybrid", "Hypercar", "Electric Assist"],
  },
  {
    name: "Ford Mustang Shelby GT500",
    image: Pic10,
    logo: MustangLogo,
    brand: "Mustang",
    description: "American muscle dominance with over 700 hp.",
    speedLabel: "Top Speed: 180 mph",
    tags: ["Muscle", "Supercharged", "Iconic"],
  },
  {
    name: "Porsche 911 Turbo S",
    image: Pic11,
    logo: PorsheaLogo,
    brand: "Porsche",
    description: "All-weather supercar legend with timeless design.",
    speedLabel: "Top Speed: 205 mph",
    tags: ["Turbo", "Supercar", "Everyday Weapon"],
  },
  {
    name: "Koenigsegg Jesko",
    image: Pic2,
    logo: KoenigseggLogo,
    brand: "Koenigsegg",
    description: "Engineering masterpiece capable of shattering records.",
    speedLabel: "Projected Top Speed: 300+ mph",
    tags: ["Hypercar", "V8", "Record Setter"],
  },
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
    setCurrentPage(1); 
  }, [selectedBrand]);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section id="Models" className="py-20 bg-gradient-to-b from-[#0e0e0e] via-[#1c1c1c] to-[#0e0e0e] text-white scroll-mt-20 min-h-[1000px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-extrabold text-cyan-400 drop-shadow-[0_0_10px_#00FFFF] font-['Orbitron'] mb-6">
            LEGENDS
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            From the adrenaline-pumping roar of a V12 to the silent surge of electric power — 
            explore models that blend <span className="text-white font-semibold">passion</span>, 
            <span className="text-white font-semibold"> technology</span>, and 
            <span className="text-white font-semibold"> design</span> into automotive icons.
          </p>
        </div>

        <div className="text-center mb-12">
          <div className='text-2xl text-cyan-400 font-["Orbitron"] mb-3'>
            <ReactTyped 
              strings={["Choose Your Brand"]}
              typeSpeed={40}
              backSpeed={50}
              backDelay={1000}
              loop
            />
          </div>

          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="px-6 py-3 rounded-xl text-[#00FFFF] font-bold bg-[#1A1A40] border border-[#3B429F] shadow-md text-center
                      hover:bg-[#2C2C6C] transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#00FFFF] focus:ring-opacity-40
                      appearance-none cursor-pointer"
          >
            <option disabled value="" className="font-bold text-gray-400">
              Select a Brand
            </option>
            {uniqueBrands.map((brand, index) => (
              <option
                key={index}
                value={brand}
                className="text-black dark:text-white font-bold bg-white dark:bg-[#1E1E2F] text-center"
                        >
                {brand}
              </option>
            ))}
          </select>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {paginatedModels.map((model, index) => (
            <motion.div
              key={index}
              layout
              className="relative bg-gradient-to-br from-[#1f1f1f] to-[#2c2c2c] rounded-3xl overflow-hidden shadow-2xl hover:scale-105 hover:rotate-[-1deg] hover:shadow-cyan-400/30 transition-all duration-500 group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
            >
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5 space-y-2">
                <h3 className="text-xl font-bold text-cyan-400 font-['Orbitron']">{model.name}</h3>
                <p className="text-sm text-gray-300">{model.description}</p>
                <p className="text-sm text-cyan-400 italic font-['Orbitron'] tracking-wide">{model.speedLabel}</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {model.tags?.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-400 rounded-full tracking-wider uppercase shadow-md">
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
          <div className="flex justify-center mt-12 space-x-3">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i + 1)}
                className={`px-5 py-2 rounded-full font-bold tracking-wide ${
                  currentPage === i + 1
                    ? "bg-cyan-400 text-black shadow-lg"
                    : "bg-[#1c1c1c] text-cyan-200 border border-cyan-500 hover:bg-cyan-600 hover:text-white"
                } transition-all duration-300 font-['Orbitron']`}
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

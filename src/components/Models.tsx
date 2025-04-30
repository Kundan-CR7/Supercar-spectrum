import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight, X } from 'lucide-react';
import "../index.css";

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

interface CarModel {
  name: string;
  image: string;
  logo: string;
  brand: string;
  description: string;
  speedLabel: string;
  tags: string[];
  horsepower: string;
  price: string;
  mileage: string;
  acceleration: string;
  engineType: string;
}

const allModels = [
  {
    name: "Lamborghini Aventador SVJ",
    image: Pic1,
    logo: LamborghiniLogo,
    brand: "Lamborghini",
    description: "The Aventador SVJ represents the pinnacle of Lamborghini's engineering prowess. With its naturally aspirated V12 engine producing a thunderous 770 horsepower, this supercar combines raw power with advanced aerodynamics. The SVJ's active suspension system and four-wheel steering deliver unparalleled handling, while its carbon fiber monocoque ensures exceptional rigidity and weight distribution. The interior features premium materials and cutting-edge technology, making it a true masterpiece of Italian automotive excellence.",
    speedLabel: "Top Speed: 217 mph",
    tags: ["V12", "Supercar", "Iconic", "Aerodynamic", "Carbon Fiber"],
    horsepower: "770 HP",
    price: "$517,770",
    mileage: "8-12 MPG",
    acceleration: "0-60 mph: 2.8s",
    engineType: "6.5L V12"
  },
  {
    name: "Bugatti Chiron Super Sport",
    image: Pic3,
    logo: BugattiLogo,
    brand: "Bugatti",
    description: "The Chiron Super Sport redefines the boundaries of automotive performance. Its quad-turbocharged W16 engine delivers an astonishing 1,577 horsepower, propelling it to speeds beyond 273 mph. The advanced aerodynamics and active suspension system ensure stability at extreme velocities, while the luxurious interior features handcrafted details and state-of-the-art technology. Every component is meticulously engineered for both performance and comfort, making it the ultimate grand tourer.",
    speedLabel: "Top Speed: 273 mph",
    tags: ["Luxury", "Hypercar", "W16 Engine", "Grand Tourer", "Exclusive"],
    horsepower: "1,577 HP",
    price: "$3.9M",
    mileage: "7-10 MPG",
    acceleration: "0-60 mph: 2.4s",
    engineType: "8.0L W16"
  },
  {
    name: "Aston Martin Valkyrie",
    image: Pic4,
    logo: AstonMartinLogo,
    brand: "Aston Martin",
    description: "F1 technology brought to the street, a pure marvel.",
    speedLabel: "Top Speed: 250 mph",
    tags: ["Hybrid", "Track Focused", "V12 Hybrid"],
    horsepower: "1,160 HP",
    price: "$3.2M",
    mileage: "10-15 MPG",
    acceleration: "0-60 mph: 2.8s",
    engineType: "1.5L V12"
  },
  {
    name: "Dodge Challenger SRT Demon",
    image: Pic5,
    logo: DodgeLogo,
    brand: "Dodge",
    description: "World's fastest quarter-mile production car.",
    speedLabel: "0-60 mph: 2.3 sec",
    tags: ["Muscle", "Drag Racing", "Supercharged V8"],
    horsepower: "840 HP",
    price: "$85,000",
    mileage: "10-15 MPG",
    acceleration: "0-60 mph: 2.3s",
    engineType: "6.2L V8"
  },
  {
    name: "Ferrari SF90 Stradale",
    image: Pic6,
    logo: FerrariLogo,
    brand: "Ferrari",
    description: "Ferrari's first plug-in hybrid with electrifying power.",
    speedLabel: "Top Speed: 211 mph",
    tags: ["Hybrid", "Supercar", "V8 Hybrid"],
    horsepower: "780 HP",
    price: "$390,000",
    mileage: "15-20 MPG",
    acceleration: "0-60 mph: 2.5s",
    engineType: "3.9L V8"
  },
  {
    name: "Jaguar F-Type R",
    image: Pic7,
    logo: JaguarLogo,
    brand: "Jaguar",
    description: "A roaring V8 grand tourer with iconic British flair.",
    speedLabel: "Top Speed: 186 mph",
    tags: ["V8", "Grand Tourer", "Luxury"],
    horsepower: "550 HP",
    price: "$100,000",
    mileage: "15-20 MPG",
    acceleration: "0-60 mph: 3.7s",
    engineType: "5.0L V8"
  },
  {
    name: "Lexus LFA",
    image: Pic8,
    logo: LexusLogo,
    brand: "Lexus",
    description: "Legendary V10 symphony wrapped in futuristic beauty.",
    speedLabel: "Top Speed: 202 mph",
    tags: ["V10", "Supercar", "Collector's Dream"],
    horsepower: "416 HP",
    price: "$375,000",
    mileage: "10-15 MPG",
    acceleration: "0-60 mph: 4.8s",
    engineType: "4.8L V10"
  },
  {
    name: "McLaren P1",
    image: Pic9,
    logo: McLarenLogo,
    brand: "McLaren",
    description: "Hybrid hypercar blending insane speed and beauty.",
    speedLabel: "Top Speed: 217 mph",
    tags: ["Hybrid", "Hypercar", "Electric Assist"],
    horsepower: "903 HP",
    price: "$1.2M",
    mileage: "15-20 MPG",
    acceleration: "0-60 mph: 2.8s",
    engineType: "3.8L V8"
  },
  {
    name: "Ford Mustang Shelby GT500",
    image: Pic10,
    logo: MustangLogo,
    brand: "Mustang",
    description: "American muscle dominance with over 700 hp.",
    speedLabel: "Top Speed: 180 mph",
    tags: ["Muscle", "Supercharged", "Iconic"],
    horsepower: "760 HP",
    price: "$73,000",
    mileage: "12-18 MPG",
    acceleration: "0-60 mph: 3.5s",
    engineType: "5.2L V8"
  },
  {
    name: "Porsche 911 Turbo S",
    image: Pic11,
    logo: PorsheaLogo,
    brand: "Porsche",
    description: "All-weather supercar legend with timeless design.",
    speedLabel: "Top Speed: 205 mph",
    tags: ["Turbo", "Supercar", "Everyday Weapon"],
    horsepower: "577 HP",
    price: "$185,000",
    mileage: "15-20 MPG",
    acceleration: "0-60 mph: 3.2s",
    engineType: "3.8L Turbocharged Flat-6"
  },
  {
    name: "Koenigsegg Jesko",
    image: Pic2,
    logo: KoenigseggLogo,
    brand: "Koenigsegg",
    description: "Engineering masterpiece capable of shattering records.",
    speedLabel: "Projected Top Speed: 300+ mph",
    tags: ["Hypercar", "V8", "Record Setter"],
    horsepower: "1,600 HP",
    price: "$3.5M",
    mileage: "10-15 MPG",
    acceleration: "0-60 mph: 2.5s",
    engineType: "5.0L V8"
  },
];

const Models = () => {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedModel, setSelectedModel] = useState<CarModel | null>(null);
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
    <section id="Models" className="relative py-20 bg-gradient-to-br from-[#050a30] via-[#0a1a3a] to-[#050a30] text-white scroll-mt-20 min-h-[1000px]">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,255,255,0.1)_0%,_transparent_50%)] opacity-20 animate-pulse" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,_rgba(0,255,255,0.05)_25%,_transparent_25%,_transparent_75%,_rgba(0,255,255,0.05)_75%)] bg-[length:20px_20px] opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-extrabold text-cyan-400 drop-shadow-[0_0_10px_#00FFFF] font-['Orbitron'] mb-6 glowing-text">
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
            className="px-6 py-3 rounded-xl text-cyan-400 font-bold bg-[#1A1A40] border border-cyan-500/30 shadow-md text-center
                      hover:bg-cyan-500/10 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-opacity-40
                      appearance-none cursor-pointer"
          >
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

        <AnimatePresence mode="wait">
          {selectedModel ? (
            <motion.div
              key="detailed-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gradient-to-br from-[#0a1929] via-[#0f2a3d] to-[#0a1929] rounded-3xl p-8 border border-cyan-500/30 shadow-2xl backdrop-blur-sm relative overflow-hidden max-w-4xl mx-auto"
            >
              {/* Animated background effects */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,255,255,0.1)_0%,_transparent_50%)] opacity-20 animate-pulse" />
              <div className="absolute inset-0 bg-[linear-gradient(45deg,_rgba(0,255,255,0.05)_25%,_transparent_25%,_transparent_75%,_rgba(0,255,255,0.05)_75%)] bg-[length:20px_20px] opacity-10" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-4xl font-bold text-cyan-400 font-['Orbitron'] mb-2 drop-shadow-[0_0_10px_#00FFFF]">{selectedModel.name}</h3>
                    <div className="flex items-center gap-2">
                      <img src={selectedModel.logo} alt={`${selectedModel.brand} logo`} className="w-8 h-8 object-contain" />
                      <p className="text-cyan-300 text-xl font-medium">{selectedModel.brand}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedModel(null)}
                    className="text-cyan-300 hover:text-cyan-400 transition-colors p-2 hover:bg-cyan-500/10 rounded-full"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-8">
                  <div className="relative overflow-hidden rounded-xl group">
                    <img
                      src={selectedModel.image}
                      alt={selectedModel.name}
                      className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 p-6 rounded-xl backdrop-blur-sm border border-cyan-500/20">
                      <h4 className="text-cyan-300 text-lg font-['Orbitron'] mb-4 drop-shadow-[0_0_5px_#00FFFF]">Description</h4>
                      <p className="text-cyan-100 leading-relaxed">{selectedModel.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 p-4 rounded-xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-cyan-500/20">
                        <div className="text-cyan-300 text-sm font-['Orbitron'] mb-1">Top Speed</div>
                        <div className="text-cyan-100 text-xl font-bold">{selectedModel.speedLabel}</div>
                      </div>
                      <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 p-4 rounded-xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-cyan-500/20">
                        <div className="text-cyan-300 text-sm font-['Orbitron'] mb-1">Horsepower</div>
                        <div className="text-cyan-100 text-xl font-bold">{selectedModel.horsepower}</div>
                      </div>
                      <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 p-4 rounded-xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-cyan-500/20">
                        <div className="text-cyan-300 text-sm font-['Orbitron'] mb-1">Price</div>
                        <div className="text-cyan-100 text-xl font-bold">{selectedModel.price}</div>
                      </div>
                      <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 p-4 rounded-xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-cyan-500/20">
                        <div className="text-cyan-300 text-sm font-['Orbitron'] mb-1">Mileage</div>
                        <div className="text-cyan-100 text-xl font-bold">{selectedModel.mileage}</div>
                      </div>
                      <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 p-4 rounded-xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-cyan-500/20">
                        <div className="text-cyan-300 text-sm font-['Orbitron'] mb-1">Acceleration</div>
                        <div className="text-cyan-100 text-xl font-bold">{selectedModel.acceleration}</div>
                      </div>
                      <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 p-4 rounded-xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-cyan-500/20">
                        <div className="text-cyan-300 text-sm font-['Orbitron'] mb-1">Engine</div>
                        <div className="text-cyan-100 text-xl font-bold">{selectedModel.engineType}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 p-6 rounded-xl backdrop-blur-sm border border-cyan-500/20">
                    <h4 className="text-cyan-300 text-lg font-['Orbitron'] mb-4 drop-shadow-[0_0_5px_#00FFFF]">Features</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedModel.tags?.map((tag, i) => (
                        <span key={i} className="text-sm px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 text-cyan-200 border border-cyan-400 rounded-full tracking-wider uppercase hover:from-cyan-500/30 hover:to-cyan-500/20 transition-all duration-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="grid-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            >
              {paginatedModels.map((model, index) => (
                <motion.div
                  key={index}
                  layout
                  className="relative bg-gradient-to-br from-[#1f1f1f] to-[#2c2c2c] rounded-3xl overflow-hidden shadow-2xl hover:scale-105 hover:rotate-[-1deg] hover:shadow-cyan-400/30 transition-all duration-500 group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedModel(model)}
                >
                  <div className="relative">
                    <img
                      src={model.image}
                      alt={model.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/40 to-cyan-500/20 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white font-['Orbitron'] tracking-wider transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100 text-shadow-lg backdrop-blur-md px-6 py-3 rounded-lg bg-black/30 border border-cyan-500/30">
                      {model.name}
                    </h3>
                  </div>

                  <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-md p-2 rounded-full border border-cyan-500/30 group-hover:scale-110 transition-all duration-300">
                    <img
                      src={model.logo}
                      alt={`${model.brand} logo`}
                      className="w-8 h-8 object-contain mix-blend-multiply rounded-full transition duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {!selectedModel && totalPages > 1 && (
          <div className="flex justify-center mt-12 space-x-3">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-[#1c1c1c] text-cyan-200 border border-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-cyan-600 hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            
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

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-[#1c1c1c] text-cyan-200 border border-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-cyan-600 hover:text-white transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown size={32} className="animate-bounce" />
      </div>
    </section>
  );
};

export default Models;

import React from "react";
import { motion } from "framer-motion";
import Pic1 from "../assets/Lotus.jpg"; 
import Pic2 from "../assets/TuaTara_SSC.jpg"; 
import Pic3 from "../assets/Urus.jpg"; 
import "../index.css";

const Innovation = () => {
  const cards = [
    {
      name: "Revuelto",
      image: Pic1,
      fact: "Lamborghini's first V12 hybrid — 0-60 mph in under 2.5 seconds!",
    },
    {
      name: "Tuatara",
      image: Pic2,
      fact: "SSC Tuatara reached a top speed of 282.9 mph in 2021.",
    },
    {
      name: "Urus",
      image: Pic3,
      fact: "World's first Super SUV combining luxury and power.",
    },
  ];

  return (
    <section className="py-20 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-yellow-500">Supercar Secrets</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Flip the cards to uncover mind-blowing facts about the cars that are shaping the future of speed, design, and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="group perspective"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-80 transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
                
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg backface-hidden">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                    <h3 className="text-xl font-bold text-yellow-400">{card.name}</h3>
                  </div>
                </div>

                <div className="absolute inset-0 bg-zinc-800 rounded-2xl text-center p-6 transform rotate-y-180 backface-hidden flex flex-col justify-center items-center shadow-lg">
                  <h4 className="text-lg font-semibold text-yellow-400 mb-3">Did You Know?</h4>
                  <p className="text-gray-300">{card.fact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Innovation;

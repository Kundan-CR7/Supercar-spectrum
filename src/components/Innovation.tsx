import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Pic1 from "../assets/Lotus.jpg";
import Pic2 from "../assets/TuaTara_SSC.jpg";
import Pic3 from "../assets/Urus.jpg";
import "../index.css";

const Innovation = () => {
  const cards = [
    {
      name: "Evija",
      image: Pic1,
      fact: "The Lotus Evija is the world's most powerful production car with 2,000 horsepower!",
      description:
        "The Lotus Evija is a fully electric hypercar that combines cutting-edge technology with exceptional performance, delivering unmatched power and precision on the road.",
      stats: ["Top Speed: 200 mph", "Horsepower: 2000", "0-60 mph: 3.0 seconds"],
    },
    {
      name: "Tuatara",
      image: Pic2,
      fact: "SSC Tuatara reached a top speed of 282.9 mph in 2021, breaking world records.",
      description:
        "Designed to defy the laws of physics, the Tuatara is engineered for record-breaking speed and unprecedented aerodynamics.",
      stats: ["Top Speed: 282.9", "Horsepower: 1750", "0-60 mph: 2.5"],
    },
    {
      name: "Urus",
      image: Pic3,
      fact: "The world's first Super SUV combines unrivaled luxury with sports car performance.",
      description:
        "The Urus delivers supercar performance, thrilling power, and exceptional luxury in a muscular SUV body designed to conquer any terrain.",
      stats: ["Top Speed: 190", "Horsepower: 657", "0-60 mph: 3.5"],
    },
  ];

  const [visibleStatIndex, setVisibleStatIndex] = useState(null);

  return (
    <section className="py-28 bg-[url('/path/to/carbon-fiber-pattern.jpg')] bg-cover bg-center text-white" id="Innovation">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-silver-600 to-gray-800 text-shadow-md">
            Nitro Knowledge
          </h2>
          <p className="text-gray-300 text-xl sm:text-2xl leading-relaxed max-w-3xl mx-auto">
            Buckle up for a journey through high-octane engineering and blazing speed. Uncover the secrets behind supercars that are built to break records and exceed limits.
          </p>
        </div>

        <div className="space-y-20">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >

              <motion.div layout className="flex flex-col gap-8">
                <h3 className="text-4xl font-bold text-gray-100 hover:text-blue-400 transition-colors duration-300">
                  {card.name}
                </h3>

                <p className="text-gray-200 text-lg sm:text-xl leading-relaxed bg-gray-900 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  {card.description}
                </p>

                <button
                  onClick={() =>
                    setVisibleStatIndex(visibleStatIndex === index ? null : index)
                  }
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-xl shadow-lg transition-all duration-300 self-center"
                >
                  {visibleStatIndex === index ? "Hide Stats" : "View Performance Stats"}
                </button>

                <AnimatePresence initial={false}>
                  {visibleStatIndex === index && (
                    <motion.div
                      key="stats"
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="overflow-hidden mt-6 w-full bg-gray-800 p-6 rounded-xl shadow-inner space-y-4"
                    >
                      {card.stats.map((stat, i) => {
                        const [label, value] = stat.split(": ");
                        const num = parseFloat(value);
                        let barWidth = 0;

                        if (label.toLowerCase().includes("top speed")) {
                          barWidth = (num / 300) * 100;
                        } else if (label.toLowerCase().includes("horsepower")) {
                          barWidth = (num / 2000) * 100;
                        } else if (label.toLowerCase().includes("0-60")) {
                          barWidth = ((3.5 - num) / 3.5) * 100;
                        }

                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <div className="flex justify-between text-sm text-gray-300 mb-1">
                              <span>{label}</span>
                              <span>{value}</span>
                            </div>
                            <div className="w-full h-3 bg-gray-700 rounded-full">
                              <motion.div
                                className="h-3 bg-blue-500 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${barWidth}%` }}
                                transition={{ duration: 1 }}
                              />
                            </div>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>


              <div className="group perspective focus:outline-none">
                <div className="relative w-full h-96 transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180 group-focus:rotate-y-180 cursor-pointer shadow-xl hover:shadow-blue-500/30 rounded-2xl">

                  <div className="absolute inset-0 rounded-2xl overflow-hidden backface-hidden">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-cover"
                    />
                  </div>


                  <div className="absolute inset-0 rounded-2xl text-center p-8 transform rotate-y-180 backface-hidden flex flex-col justify-center items-center bg-white/10 backdrop-blur-sm border border-white/20">
                    <h4 className="text-2xl font-semibold text-blue-500 mb-4">
                      Did You Know?
                    </h4>
                    <p className="text-gray-200 text-lg">{card.fact}</p>
                  </div>
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

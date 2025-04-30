import React, { useState, useEffect } from "react";
import "../index.css";
import {
  Search,
  Loader2,
  ChevronRight,
  Car,
  Gauge,
  Zap,
  DollarSign,
  Clock,
  Droplet,
  ArrowRight,
  Award,
  Rocket,
} from "lucide-react";

const CarComparison = () => {
  const [car1, setCar1] = useState("");
  const [car2, setCar2] = useState("");
  const [car1Data, setCar1Data] = useState(null);
  const [car2Data, setCar2Data] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "AIzaSyCxNtkJyu-G9Bw9i0jkg0qoBctqFlTXWYA";
  const SEARCH_ENGINE_ID = "5176a9fdabe2940af";

  const supercarFacts = [
    {
      icon: Rocket,
      title: "Speed Demons",
      fact: "The Bugatti Chiron Super Sport 300+ holds the record for the fastest production car, reaching 304.773 mph (490.484 km/h).",
      highlight: "304.773 MPH",
    },
    {
      icon: Zap,
      title: "Power Unleashed",
      fact: "The Rimac Nevera produces a staggering 1,914 horsepower, making it the most powerful production car ever made.",
      highlight: "1,914 HP",
    },
    {
      icon: Clock,
      title: "Lightning Fast",
      fact: "The Tesla Roadster can accelerate from 0-60 mph in just 1.9 seconds, faster than most Formula 1 cars.",
      highlight: "1.9s 0-60",
    },
    {
      icon: Award,
      title: "Rare Gems",
      fact: "Only 500 units of the Ferrari LaFerrari were ever produced, making it one of the most exclusive supercars in history.",
      highlight: "500 Units",
    },
  ];

  const extractSpecifications = (info) => {
    const specs = {
      horsepower: "N/A",
      topSpeed: "N/A",
      acceleration: "N/A",
      price: "N/A",
      fuelEconomy: "N/A",
    };

    info.forEach((item) => {
      const text = item.snippet.toLowerCase();

      if (
        text.includes("horsepower") ||
        text.includes("hp") ||
        text.includes("bhp") ||
        text.includes("power output")
      ) {
        const patterns = [
          /(\d{2,4})\s*(?:horsepower|hp|bhp)/i,
          /(\d{2,4})\s*ps/i, // German format
          /power output:\s*(\d{2,4})\s*(?:hp|bhp)/i,
          /engine:\s*(\d{2,4})\s*(?:hp|bhp)/i,
          /(\d{2,4})\s*(?:horsepower|hp|bhp)\s*@/i,
          /power:\s*(\d{2,4})\s*(?:hp|bhp)/i,
          /maximum power:\s*(\d{2,4})\s*(?:hp|bhp)/i,
          /total power:\s*(\d{2,4})\s*(?:hp|bhp)/i,
          /(\d{2,4})\s*(?:horsepower|hp|bhp)\s*engine/i,
        ];

        for (const pattern of patterns) {
          const hpMatch = text.match(pattern);
          if (hpMatch) {
            const hpValue = parseInt(hpMatch[1]);
            if (hpValue >= 100 && hpValue <= 2000) {
              specs.horsepower = hpValue + " HP";
              break;
            }
          }
        }
      }

      if (text.includes("top speed") || text.includes("mph")) {
        const speedMatch = text.match(/(\d{3,})\s*(?:mph|km\/h)/i);
        if (speedMatch && parseInt(speedMatch[1]) > 100) {
          specs.topSpeed = speedMatch[1] + " MPH";
        }
      }

      if (text.includes("0-60") || text.includes("0 to 60")) {
        const accelMatch = text.match(/(\d+\.?\d*)\s*(?:seconds|sec)/i);
        if (accelMatch && parseFloat(accelMatch[1]) < 10) {
          specs.acceleration = accelMatch[1] + "s 0-60 MPH";
        }
      }

      if (
        text.includes("$") ||
        text.includes("price") ||
        text.includes("cost") ||
        text.includes("msrp")
      ) {
        const patterns = [
          /\$(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)/,
          /price:\s*\$(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)/i,
          /msrp:\s*\$(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)/i,
          /starting at\s*\$(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)/i,
          /cost:\s*\$(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)/i,
          /(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)\s*(?:dollars|usd)/i,
          /base price:\s*\$(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)/i,
        ];

        for (const pattern of patterns) {
          const priceMatch = text.match(pattern);
          if (priceMatch) {
            const priceValue = parseInt(priceMatch[1].replace(/,/g, ""));
            if (priceValue >= 10000 && priceValue <= 10000000) {
              specs.price = "$" + priceValue.toLocaleString();
              break;
            }
          }
        }
      }

      if (text.includes("mpg") || text.includes("miles per gallon")) {
        const mpgMatch = text.match(/(\d{2,})\s*(?:mpg|miles per gallon)/i);
        if (mpgMatch && parseInt(mpgMatch[1]) > 10) {
          specs.fuelEconomy = mpgMatch[1] + " MPG";
        }
      }
    });

    return specs;
  };

  const fetchCarData = async (carName) => {
    try {
      const imageResponse = await fetch(
        `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
          carName + " car official image"
        )}&key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&searchType=image&num=1`
      );
      const imageData = await imageResponse.json();

      const infoResponse = await fetch(
        `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
          carName + " car specifications horsepower top speed price mpg 0-60"
        )}&key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&num=5`
      );
      const infoData = await infoResponse.json();

      return {
        image: imageData.items?.[0]?.link || "",
        info: infoData.items || [],
        specs: extractSpecifications(infoData.items || []),
      };
    } catch (error) {
      console.error("Error fetching car data:", error);
      throw error;
    }
  };

  const handleCompare = async () => {
    if (!car1 || !car2) {
      setError("Please enter both car names");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const [car1Result, car2Result] = await Promise.all([
        fetchCarData(car1),
        fetchCarData(car2),
      ]);

      setCar1Data(car1Result);
      setCar2Data(car2Result);
    } catch (error) {
      setError("Failed to fetch car data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSampleCarClick = (carName) => {
    if (!car1) {
      setCar1(carName);
    } else if (!car2) {
      setCar2(carName);
    }
  };

  const SpecItem = ({ icon: Icon, label, value }) => (
    <div className="flex items-center gap-4 p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 group">
      <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors duration-300">
        <Icon className="w-6 h-6 text-cyan-400" />
      </div>
      <div className="flex-1">
        <div className="text-sm text-cyan-400 font-medium font-mono">
          {label}
        </div>
        <div
          className={`text-lg font-bold ${
            value === "N/A" ? "text-gray-500" : "text-white"
          } font-['Orbitron']`}
        >
          {value}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,255,255,0.1)_0%,_transparent_50%)] opacity-30 animate-pulse" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,_rgba(0,255,255,0.05)_25%,_transparent_25%,_transparent_75%,_rgba(0,255,255,0.05)_75%)] bg-[length:20px_20px] opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-6xl md:text-7xl font-extrabold mb-6 text-transparent text-center bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 text-shadow-lg font-['Orbitron'] metallic-boss">
          Car Comparison
        </h2>
        <p className="text-gray-300 text-xl sm:text-2xl max-w-3xl mx-auto font-mono text-center mb-12">
          Compare specifications, performance, and features of your favorite
          supercars
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="Enter first car (e.g., Lamborghini Revuelto)"
              value={car1}
              onChange={(e) => setCar1(e.target.value)}
              className="w-full p-4 rounded-xl bg-black/40 backdrop-blur-sm text-white border border-cyan-500/30 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 font-mono"
            />
          </div>
          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="Enter second car (e.g., Ferrari SF90)"
              value={car2}
              onChange={(e) => setCar2(e.target.value)}
              className="w-full p-4 rounded-xl bg-black/40 backdrop-blur-sm text-white border border-cyan-500/30 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 font-mono"
            />
          </div>
          <button
            onClick={handleCompare}
            disabled={loading}
            className="relative overflow-hidden bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 min-w-[200px] disabled:opacity-50 disabled:cursor-not-allowed group border border-cyan-500/30 hover:border-cyan-500 shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] font-['Orbitron']"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 rounded-xl border border-white/5" />
            {loading ? (
              <>
                <Loader2 className="animate-spin relative z-10" />
                <span className="relative z-10">Comparing...</span>
              </>
            ) : (
              <>
                <Search className="relative z-10" />
                <span className="relative z-10">Compare</span>
              </>
            )}
          </button>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-xl text-center mb-8 max-w-2xl mx-auto font-mono">
            {error}
          </div>
        )}

        {!car1Data && !car2Data && (
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4 font-['Orbitron']">
                Supercar World Records
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto font-mono">
                Discover the incredible achievements of the world's most
                extraordinary supercars
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supercarFacts.map((fact, index) => (
                <div
                  key={index}
                  className="group bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan-500/20 rounded-xl group-hover:bg-cyan-500/30 transition-colors duration-300">
                      <fact.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-cyan-400 mb-2 font-['Orbitron']">
                        {fact.title}
                      </h4>
                      <p className="text-gray-300 mb-3 font-mono">
                        {fact.fact}
                      </p>
                      <div className="text-2xl font-bold text-white bg-cyan-500/20 px-4 py-2 rounded-lg inline-block font-['Orbitron']">
                        {fact.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {car1Data && car2Data && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300">
              <h3 className="text-3xl font-bold text-cyan-400 mb-6 text-center font-['Orbitron']">
                {car1.toUpperCase()}
              </h3>
              {car1Data.image && (
                <div className="relative overflow-hidden rounded-xl mb-8 group">
                  <img
                    src={car1Data.image}
                    alt={car1}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}
              <div className="grid grid-cols-1 gap-4">
                <SpecItem
                  icon={Zap}
                  label="Horsepower"
                  value={car1Data.specs.horsepower}
                />
                <SpecItem
                  icon={Gauge}
                  label="Top Speed"
                  value={car1Data.specs.topSpeed}
                />
                <SpecItem
                  icon={Clock}
                  label="Acceleration"
                  value={car1Data.specs.acceleration}
                />
                <SpecItem
                  icon={DollarSign}
                  label="Price"
                  value={car1Data.specs.price}
                />
                <SpecItem
                  icon={Droplet}
                  label="Fuel Economy"
                  value={car1Data.specs.fuelEconomy}
                />
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300">
              <h3 className="text-3xl font-bold text-cyan-400 mb-6 text-center font-['Orbitron']">
                {car2.toUpperCase()}
              </h3>
              {car2Data.image && (
                <div className="relative overflow-hidden rounded-xl mb-8 group">
                  <img
                    src={car2Data.image}
                    alt={car2}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}
              <div className="grid grid-cols-1 gap-4">
                <SpecItem
                  icon={Zap}
                  label="Horsepower"
                  value={car2Data.specs.horsepower}
                />
                <SpecItem
                  icon={Gauge}
                  label="Top Speed"
                  value={car2Data.specs.topSpeed}
                />
                <SpecItem
                  icon={Clock}
                  label="Acceleration"
                  value={car2Data.specs.acceleration}
                />
                <SpecItem
                  icon={DollarSign}
                  label="Price"
                  value={car2Data.specs.price}
                />
                <SpecItem
                  icon={Droplet}
                  label="Fuel Economy"
                  value={car2Data.specs.fuelEconomy}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarComparison;

import React, { useRef, useState } from 'react';
import { ChevronDown, SquarePower } from 'lucide-react';
import video from '../assets/video.mp4'; 
import "../index.css";
import { ReactTyped } from "react-typed";

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const vid = videoRef.current;
    if (vid) {
      vid.muted = !vid.muted;
      setIsMuted(vid.muted);
    }
  };

  return (
    <div className="relative h-screen z-10">
      {/* Background Video */}
      <div className="absolute inset-0 h-full m-0 overflow-hidden">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted={isMuted}
          className="object-cover w-full h-full"
        >
          <source src={video} type="video/mp4" />
          <source src="/path/to/your/video.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero Text */}
      <div className="relative h-full flex flex-col items-start justify-center pl-16 text-left text-white">
      <h1 className="text-6xl md:text-7xl font-extrabold text-yellow-400 mb-4 tracking-wide drop-shadow-lg">
  REVUELTO
</h1>

        <div className="text-2xl md:text-3xl font-medium text-gray-300 mb-8">
          <ReactTyped
            strings={["FROM VISION TO REALITY", "THE ART OF SPEED", "ENGINEERED FOR EXCELLENCE"]}
            typeSpeed={50}
            backSpeed={40}
            loop
          />
        </div>

        {/* SquarePower Icon Button for Sound Toggle */}
        <div className="flex justify-center mt-4 w-64">
          <button
            onClick={toggleMute}
            className="neon-btn p-3"
            title={isMuted ? "Sound Off" : "Sound On"}
          >
            <SquarePower size={32} className={`${isMuted ? 'text-gray-400' : 'text-yellow-400'}`} />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;

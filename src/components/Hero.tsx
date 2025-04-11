import React, { useRef, useState, useEffect } from 'react';
import { ChevronDown, SquarePower } from 'lucide-react';
import video from '../assets/Lambo.mp4'; 
import "../index.css";
import { ReactTyped } from "react-typed";

const Hero = () => {
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const vid = videoRef.current;
    if (vid) {
      vid.muted = !vid.muted;
      setIsMuted(vid.muted);
    }
  };

  // Auto play on user interaction
  useEffect(() => {
    const handleUserInteraction = () => {
      const vid = videoRef.current;
      if (vid) {
        vid.muted = false;
        setIsMuted(false);
        vid.play().catch(err => console.warn("Play failed", err));
      }
      window.removeEventListener("click", handleUserInteraction);
    };

    window.addEventListener("click", handleUserInteraction);
    return () => window.removeEventListener("click", handleUserInteraction);
  }, []);

  // Pause video when Hero is not in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const vid = videoRef.current;
        if (!vid) return;
        if (entry.isIntersecting) {
          vid.play().catch(err => console.warn("Play failed", err));
        } else {
          vid.pause();
        }
      },
      {
        threshold: 0.4 // Trigger when 10% of the element is visible
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div ref={heroRef} className="relative h-screen z-10">
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

      <div className="relative h-full flex flex-col items-start justify-center pl-16 text-left text-white">
        <h1 className="text-6xl md:text-7xl font-extrabold text-yellow-400 mb-4 tracking-wide drop-shadow-lg">
          REVUELTO
        </h1>

        <div className="text-2xl md:text-3xl font-medium text-gray-300 mb-8">
          <ReactTyped
            strings={[
              "FROM VISION TO REALITY",
              "THE ART OF SPEED",
              "ENGINEERED FOR EXCELLENCE",
              "REVUELTO: A V12 HYBRID SUPERCAR",
              "218 MPH OF PURE ADRENALINE",
              "1001 HORSEPOWER UNLEASHED",
              "0 TO 60 IN JUST 2.5 SECONDS",
              "DESIGNED FOR THOSE WHO DARE",
              "ELECTRIFIED. EXHILARATING. EXTRAORDINARY."
            ]}
            typeSpeed={45}
            backSpeed={30}
            backDelay={1000}
            loop
          />
        </div>

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

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;

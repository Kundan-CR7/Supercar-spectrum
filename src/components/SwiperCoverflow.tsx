import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./swiper.css";
import { ReactTyped } from "react-typed";

import Pic1 from "./Hellcatt.jpg";
import Pic2 from "./CarreraGT.jpg";
import Pic3 from "./Lambo.jpg";
import Pic4 from "./Mustang.jpg";
import Pic5 from "./Lexusss.jpg";

const slideData = [
  {
    image: Pic1,
    audio: "/audio/Hellcat.mp3",
    name: "Dodge Hellcat",
    description:
      "A muscle beast with raw power and aggressive looks. Known for its supercharged V8 and thrilling sound.",
  },
  {
    image: Pic2,
    audio: "/audio/Carrera.mp3",
    name: "Porsche Carrera GT",
    description:
      "A legendary V10 hypercar that blends performance with elegance. A true collector’s dream.",
  },
  {
    image: Pic3,
    audio: "/audio/Aventador.mp3",
    name: "Lamborghini Aventador",
    description:
      "An Italian masterpiece. Bold, loud, and fast. The Aventador commands attention on any street.",
  },
  {
    image: Pic4,
    audio: "/audio/Mustang.mp3",
    name: "Ford Mustang",
    description:
      "An American icon. The Mustang is the perfect mix of classic muscle and modern engineering.",
  },
  {
    image: Pic5,
    audio: "/audio/Lexus.mp3",
    name: "Lexus LFA",
    description:
      "One of the most refined V10s ever made. Precision, beauty, and performance in perfect balance.",
  },
];

const SwiperCoverflow = () => {
  const swiperRef = useRef(null);
  const [currentAudio, setCurrentAudio] = useState(null);
  const isFirstRender = useRef(true); 

  const playAudioForSlide = (index) => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    const audioSrc = slideData[index]?.audio;
    if (audioSrc) {
      const newAudio = new Audio(audioSrc);
      newAudio.play();
      setCurrentAudio(newAudio);
    }
  };

  return (
    <div className="bg-[#10172a] min-h-screen pb-10">
      <div className="text-center py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Engine Symphony
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore a handpicked collection of legendary supercars with immersive
          audio. Experience the roar of engines and the art of design.
        </p>
      </div>

      <div className="text-2xl md:text-3xl text-center font-medium text-gray-300 mb-4">
        <span className="text-yellow-400">
          <ReactTyped
            strings={[
              "Click to Ignite the Roar",
              "Feel the Power Beneath the Hood",
              "Every Slide, A New Legend",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </span>
      </div>

      <div className="text-center text-sm md:text-base text-yellow-300 bg-yellow-900/10 border border-yellow-500/30 px-4 py-2 rounded-xl max-w-md mx-auto mb-6 shadow-sm">
        <strong className="font-medium">Note:</strong> Audio will play
        automatically when switching between cars. Make sure your volume is on!
      </div>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        initialSlide={2}
        speed={600}
        preventClicks={true}
        slidesPerView={"auto"}
        onClick={(swiper) => swiper.slideTo(swiper.clickedIndex)}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 350,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="swiper"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          if (isFirstRender.current) {
            isFirstRender.current = false; 
            return;
          }
          playAudioForSlide(swiper.activeIndex);
        }}
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="rounded-xl shadow-lg border border-gray-700"
              />
              <p className="title text-white text-xl md:text-2xl font-semibold mt-3 tracking-wide">
                {slide.name}
              </p>
              <p className="description text-sm md:text-base text-gray-300 mt-1 max-w-xs mx-auto leading-relaxed">
                {slide.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination" />
      </Swiper>
    </div>
  );
};

export default SwiperCoverflow;

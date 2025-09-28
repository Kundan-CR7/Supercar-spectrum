import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import "../index.css";
import Logo from "../assets/Logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="fixed w-full z-50 bg-[#080a06]/90 backdrop-blur-sm">
      <div className="flex items-center justify-between h-28 w-full px-4 sm:px-6 lg:px-8 font-mono">
        
        <div className="flex-shrink-0 ml-10">
          <img className="h-28" src={Logo} alt="Logo" />
        </div>

        <div className="hidden md:flex text-xl items-center space-x-8 desktop-main-menu">
          <a href="#Hero" className="font-mono">Ignition</a>
          <a href="#Models" className="font-mono">The Garage</a>
          <a href="#swiper" className="font-mono">Engine Roars</a>
          <a href="#Innovation" className="font-mono">Nitro Knowledge</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

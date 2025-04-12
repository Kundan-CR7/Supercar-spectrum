import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import "../index.css";
import Logo from "../assets/Logo100.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#101311]/90 backdrop-blur-sm">
      <div className="flex items-center justify-between h-28 w-full px-4 sm:px-6 lg:px-8 font-mono">
        
        <div className="flex-shrink-0 ml-10">
          <img className="h-28" src={Logo} alt="Logo" />
        </div>

        <div className="hidden md:flex text-xl items-center space-x-8 desktop-main-menu">
          <a href="#Hero" className="siren-link">Ignition</a>
          <a href="#Models" className="siren-link">The Garage</a>
          <a href="#swiper" className="siren-link">Engine Roars</a>
          <a href="#Innovation" className="siren-link">Nitro Knowledge</a>
        </div>

        <div className="md:hidden mr-6 text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

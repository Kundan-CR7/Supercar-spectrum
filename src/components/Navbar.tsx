import React from 'react';
import { Menu, X } from 'lucide-react';
import "../index.css";
import Logo from "../assets/FinalLogo.png";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-[#0d1012]/90 backdrop-blur-sm">
      <div className="flex items-center justify-between h-28 w-full px-4 sm:px-6 lg:px-8 font-mono">
        
        <div className="flex-shrink-0 ml-10">
          <img className="h-28" src={Logo} alt="Logo" />
        </div>

        <div className="hidden md:flex text-xl items-center space-x-8 desktop-main-menu">
          <a href="#" className="siren-link">Ignition</a>
          <a href="#" className="siren-link">The Garage</a>
          <a href="#" className="siren-link">Engine Roars</a>
          <a href="#" className="siren-link">Nitro Knowledge</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

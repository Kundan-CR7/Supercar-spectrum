import React from 'react';
import { Menu, X } from 'lucide-react';
import "../index.css";
import Logo from "../assets/FinalLogo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-[#0d1012]/90 backdrop-blur-sm">
      <div className="flex items-center justify-between h-28 w-full px-4 sm:px-6 lg:px-8 font-mono">
        
        <div className="flex-shrink-0 ml-10">
          <img className="h-28" src={Logo} alt="Logo" />
        </div>

        <div className="hidden md:flex text-xl items-center space-x-8 desktop-main-menu">
          <Link to="/Hero" className="siren-link">Ignition</Link>
          <Link to="/Models" className="siren-link">The Garage</Link>
          <Link to="/SwiperCoverflow" className="siren-link">Engine Roars</Link>
          <Link to="/Innovation" className="siren-link">Nitro Knowledge</Link>
        </div>


      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import insta from "../assets/social/instagram.svg"
import github from "../assets/social/github.svg"
import linkedin from "../assets/social/linkedin.svg"
import portfolio from "../assets/social/portfolio.png"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-300 py-12 font-mono">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center">
          <ul className="flex justify-center space-x-8">
            <li>
              <a href="#" className="text-xl hover:text-white transition duration-300 flex items-center space-x-2">
                <img src={portfolio} className='h-14 w-14'></img>
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/forbioser_hyperface/?igsh=MXBxNm03c3dnNDJldw%3D%3D#" className="text-xl hover:text-white transition duration-300 flex items-center space-x-2">
                <img src={insta} className='h-14 w-14'></img>
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kundan-gupta-8a1818196/" className="text-xl hover:text-white transition duration-300 flex items-center space-x-2">
              <img src={linkedin} className='h-14 w-14'></img>
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Kundan-CR7" className="text-xl hover:text-white transition duration-300 flex items-center space-x-2">
              <img src={github} className='h-14 w-14'></img>
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">Made by Kundan | © 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

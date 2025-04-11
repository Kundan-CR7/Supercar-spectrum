import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#models" className="hover:text-white">Ignition</a></li>
              <li><a href="#audio" className="hover:text-white">Garage</a></li>
              <li><a href="#innovation" className="hover:text-white">Engine Roars</a></li>
              <li><a href="#motorsport" className="hover:text-white">Nitro Knowledge</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Project</a></li>
              <li><a href="#" className="hover:text-white">Meet the Developer</a></li>
              <li><a href="#" className="hover:text-white">GitHub Repo</a></li>
              <li><a href="#" className="hover:text-white">Feedback</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">YouTube</a></li>
              <li><a href="#" className="hover:text-white">Portfolio</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center">
          <p>Made by Kundan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

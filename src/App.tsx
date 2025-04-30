import React from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Models from './components/Models';
import Innovation from './components/Innovation';
import Footer from './components/Footer';
import SwiperCoverflow from "./components/SwiperCoverflow"
import CarComparison from './components/CarComparison';


function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Models />
      <SwiperCoverflow/>
      <Innovation />
      <CarComparison/>
      <Footer />
    </div>
  );
}

export default App;
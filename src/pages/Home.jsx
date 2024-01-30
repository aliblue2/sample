import { Ri24HoursFill } from "@remixicon/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../assets/components/Header";
import BottomNavigation from "../assets/components/BottomNavigation";
import Hero from "../assets/components/Hero";
import Aos from "aos"
import "aos/dist/aos.css"
import TrendingCoins from "../assets/components/TrendingCoins";
import Footer from "../assets/components/Footer";
import Features from "../assets/components/Features";
import About from "../assets/components/About";
const Home = () => {
  useEffect(() => {
    Aos.init()
  } , [])
  return (
    <div className="w-full bg-sectionColor h-full">
      <Header />
      <div className="max-w-[1200px] mx-auto h-full mb-16 lg:mb-0 p-5 ">
        <Hero />
        <TrendingCoins />
        <Features />
        <About />
      </div>
      <BottomNavigation />
      <Footer />
    </div>
  );
};

export default Home;

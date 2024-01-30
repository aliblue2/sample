import React from "react";
import HeroImage from "../images/coinMobile.png";
const Hero = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12" data-aos="fade-up" data-aos-duration="1000">
      <div className="flex items-start flex-col  justify-center gap-8">
        <h2 className="font-bold leading-tight text-headingColor md:text-6xl text-5xl">
          Buy & Sell Digital Assets In The Cryptex
        </h2>
        <p className="text-gray-500 text-xl">
          Coin Cryptex is the easiest, safest, and fastest way to buy & sell
          crypto asset exchange.
        </p>
        <a href="#" className="px-4 py-2 bg-primaryColor hover:bg-accentColor transition-colors duration-300 text-lg text-headingColor rounded-md ">
            Get started now
        </a>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src={HeroImage} alt="HeroImage" className="w-full" />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import lapTopBanner from "../images/coinGraph.png";
import Google from "../images/googleplay.png";
import AppStore from "../images/appstore.png";
import AppBanner from "../images/app.png";
import { RiCheckFill, RiCheckboxCircleFill } from "@remixicon/react";
export default function About() {
  return (
    <div className="w-full flex-col items-center justify-between  py-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 mb-20" data-aos="fade-down" data-aos-duration="700">
        <div className="flex items-center justify-center">
          <img src={lapTopBanner} alt="LaptopBanner" className="w-10/12" />
        </div>
        <div className="flex flex-col items-start justify-center gap-5 text-headingColor">
          <h3 className="font-bold text-4xl">What Is Cryptex</h3>
          <p className="text-lg text-gray-500">
            Experience a variety of trading on Bitcost. You can use various
            types of coin transactions such as Spot Trade, Futures Trade, P2P,
            Staking, Mining, and margin.
          </p>
          <span className="flex items-center text-2xl gap-2 font-bold">
            <RiCheckboxCircleFill className="text-primaryColor" size={32} />
            View real-time cryptocurrency prices
          </span>
          <p className=" text-gray-500">
            Experience a variety of trading on Bitcost. You can use various
            types of coin transactions such as Spot Trade, Futures Trade, P2P,
            Staking, Mining, and margin.
          </p>
          <span className="flex items-center text-2xl gap-2 font-bold">
            <RiCheckboxCircleFill className="text-primaryColor" size={32} />
            Buy and sell BTC, ETH, XRP, OKB, Etc...
          </span>
          <p className="text-gray-500">
            Experience a variety of trading on Bitcost. You can use various
            types of coin transactions such as Spot Trade, Futures Trade, P2P,
            Staking, Mining, and margin.
          </p>
          <a
            href="#"
            className="bg-primaryColor px-4 py-2 rounded-md text-xl text-headingColor hover:bg-accentColor transition-colors duration-300"
          >
            Explore More
          </a>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 mt-20" data-aos="fade-up" data-aos-duration="700" >
        <div className="flex flex-col items-start justify-center gap-5 text-headingColor">
          <h2 className="text-5xl font-bold leading-relaxed">
            Free Your Money & Invest With Confident
          </h2>
          <p className="text-gray-400 text-lg">
            With Cryptor Trade, you can be sure your trading skills are matched
          </p>
          <span className="flex items-center text-2xl gap-2 font-bold">
            <RiCheckboxCircleFill className="text-primaryColor" size={32} />
            Buy, Sell, And Trade On The Go
          </span>
          <p className="text-gray-500">
            Experience a variety of trading on Bitcost. You can use various
            types of coin transactions such as Spot Trade, Futures Trade, P2P,
            Staking, Mining, and margin.
          </p>
          <span className="flex items-center text-2xl gap-2 font-bold">
            <RiCheckboxCircleFill className="text-primaryColor" size={32} />
            Take Control Of Your Wealth
          </span>
          <p className="text-gray-500">
            Experience a variety of trading on Bitcost. You can use various
            types of coin transactions such as Spot Trade, Futures Trade, P2P,
            Staking, Mining, and margin.
          </p>
          <div className="flex items-center gap-5 justify-start">
            <img src={Google} alt="GooglePlay" />
            <img src={AppStore} alt="GooglePlay" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={AppBanner} alt="AppBanner" className="w-full" />
        </div>
      </div>
    </div>
  );
}

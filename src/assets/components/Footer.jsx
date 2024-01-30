import React from "react";
import logo from "../images/logo.png";
import { RiAmazonFill, RiAppleFill, RiInstagramFill, RiMetaFill, RiMicrosoftFill } from "@remixicon/react";
export default function Footer() {
  return (
    <div className="w-full bg-bgBottomNavigation p-5 pb-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-5 px-4 py-12 gap-8">
        <div className="col-span-2 lg:col-span-1 flex items-start gap-5 flex-col">
          <div className="flex items-center gap-5 justify-start w-full">
            <img
              src={logo}
              alt="logo"
              className="max-w-[60px] bg-headingColor rounded-full "
            />
            <h3 className="text-2xl font-bold text-headingColor">Cryptex</h3>
          </div>
          <h4 className="text-headingColor font-bold text-2xl">
            Let's talk! 🤙
          </h4>
          <a href="#" className="text-gray-500">
            +12 345 678 9101
          </a>
          <a href="#" className="text-gray-500">
            hello.cryptex@gmail.com
          </a>
          <p className="text-gray-500">
            Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
          </p>
        </div>
        <div className="col-span-1 flex flex-col items-start gap-5 ">
          <h3 className="text-lg font-bold text-headingColor">Products</h3>
          <ul className="flex items-start flex-col gap-2 justify-around h-full text-headingColor ">
            <li>Spot</li>
            <li>Inverse Perpetual</li>
            <li>USDT Perpetual</li>
            <li>Exchange</li>
          </ul>
        </div>
        <div className="col-span-1 flex flex-col items-start gap-5">
          <h3 className="text-lg font-bold text-headingColor">Services</h3>
          <ul className="flex items-start flex-col gap-2 text-headingColor h-full justify-around ">
            <li>Buy Crypto</li>
            <li>Markets</li>
            <li>Tranding Fee</li>
            <li>API</li>
          </ul>
        </div>
        <div className="col-span-1 flex flex-col items-start gap-5">
          <h3 className="text-lg font-bold text-headingColor">Support</h3>
          <ul className="flex items-start flex-col gap-2 text-headingColor h-full justify-around">
            <li>Bybit Learn</li>
            <li>Trading Rules</li>
            <li>API Documentation</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div className="col-span-1 flex flex-col items-start gap-5">
          <h3 className="text-lg font-bold text-headingColor">About Us</h3>
          <ul className="flex items-start flex-col gap-2 text-headingColor h-full justify-around">
            <li>About Bybit</li>
            <li>Blog</li>
            <li>Business Contacts</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col items-center justify-between p-5 text-headingColor">
      <h4 className="text-lg font-bold">
      © 2022 Cryptex All Rights Reserved by AlirezaAbdolmaleki
      </h4>
      <div className="flex items-center gap-2 justify-center">
        <RiAmazonFill size={32} />
        <RiMicrosoftFill size={32} />
        <RiMetaFill size={32} />
        <RiAppleFill size={32} />
      </div>
      </div>
    </div>
  );
}

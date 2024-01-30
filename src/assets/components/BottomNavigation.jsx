import {
  RiBtcFill,
  RiBtcLine,
  RiCurrencyFill,
  RiCurrencyLine,
  RiHome2Line,
  RiHome3Fill,
  RiHome3Line,
  RiHome4Fill,
  RiHome4Line,
  RiStore2Fill,
  RiStore2Line,
  RiUser3Fill,
  RiUser3Line,
} from "@remixicon/react";
import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link, Navigate } from "react-router-dom";
const BottomNavigation = () => {
  const [activeMenu, setActiveMenu] = useState(1);
  return (
    <div className="w-full bg-bgBottomNavigation fixed bottom-0 left-0 max-h-[64px] flex items-center justify-between lg:hidden p-5 text-headingColor gap-5">
      <Link to={"/"}>
      <RiHome3Line size={24} />
      </Link>
      <Link>
      <RiCurrencyLine size={32} />
      </Link>
      <Link>
      <img src={logo} alt="logo" className="max-w-[40px] bg-headingColor rounded-full" />
      </Link>
      <Link to={"/market"}>
      <RiStore2Line size={24} />
      </Link>
      <Link to={"/account"}>
      <RiUser3Line size={24} />
      </Link>
    </div>
  );
};

export default BottomNavigation;

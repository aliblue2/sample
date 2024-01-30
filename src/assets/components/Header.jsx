import React, { useState } from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import {
  RiCloseLine,
  RiLoginBoxLine,
  RiLoginCircleLine,
  RiMenu3Line,
  RiUser3Line,
  RiUserFollowLine,
} from "@remixicon/react";
export default function Header(props) {
  return (
    <div className="w-full z-20 flex items-center justify-center gap-40 max-h-[60px] sticky top-0 bg-bgBottomNavigation p-5">
      <div className="flex items-center gap-5 justify-start px-5">
        <Link to={"/"}>
          <div className="flex items-center justify-start gap-2">
            <img
              src={Logo}
              alt="LogoImage"
              className="max-w-[40px] bg-headingColor rounded-full"
            />
            <h2 className="text-headingColor text-2xl font-bold">Cryptex</h2>
          </div>
        </Link>
        <nav className="lg:block hidden">
          <ul className="flex items-center gap-5">
            <li className="text-lg font-bold hover:text-primaryColor transition-colors duration-200 text-headingColor">
              <Link to={"/"}>HomePage</Link>
            </li>
            <li className="text-lg font-bold hover:text-primaryColor transition-colors duration-200 text-headingColor">
              <Link to={"/market"}>Market</Link>
            </li>
            <li className="text-lg font-bold hover:text-primaryColor transition-colors duration-200 text-headingColor">
              <Link>BuyCrypto</Link>
            </li>
            <li className="text-lg font-bold hover:text-primaryColor transition-colors duration-200 text-headingColor">
              <Link>Blog</Link>
            </li>
            <li className="text-lg font-bold hover:text-primaryColor transition-colors duration-200 text-headingColor">
              <Link>AboutUs</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hidden items-center gap-5 lg:flex ">
        <Link to={"/account"}>
          <button className="bg-gradient-to-r from-primaryColor to-secondaryColor flex items-center px-4 py-1 rounded-md shadow-md gap-1 text-headingColor  ">
            Login
            <RiLoginCircleLine size={24} />
          </button>
        </Link>
        <Link to={"/account"}>
          <button className="flex items-center gap-1 transition-colors duration-300 text-headingColor border px-4 py-1 rounded-md shadow-md hover:bg-gradient-to-r  from-primaryColor to-secondaryColor hover:border-none ">
            Signup
            <RiUser3Line size={24} />
          </button>
        </Link>
      </div>
    </div>
  );
}

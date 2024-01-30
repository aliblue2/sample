import React, { useState } from 'react'
import logoImage from "../assets/images/logo.png"
import Image from "../assets/images/coinGraph.png"
import { RiAmazonFill, RiArrowGoBackFill, RiGoogleFill, RiMetaFill, RiMicrosoftFill } from '@remixicon/react'
import { Link } from 'react-router-dom'
export default function Account() {
  const [content , setContent] = useState(1)
  const onChangeContentHandler= (e) => {
    if (e.target.name === "signup") {
      setContent(2);
    }else{
      setContent(1);
    }
  }
  return (
    <div className="min-h-screen min-w-full bg-gradient-to-br from-headingColor to-primaryColor  flex md:flex-row flex-col gap-12">
    <div className="min-h-screen bg-white  min-w-[350px] md:min-w-[500px] flex items-start p-5 shadow-xl shadow-gray-400 flex-col">
      <div className="w-full flex justify-between items-center ">
        <Link to={"/"}>
          <RiArrowGoBackFill size={24} />
        </Link>
        <div className="flex items-center gap-2">
          <h4 className="text-xl font-bold text-sectionColor">Cryptex</h4>
          <img src={logoImage} alt="logoCryptex" className="max-w-[50px]" />
        </div>
      </div>

      <div className="flex items-center justify-end gap-5 w-full mt-3">
        <button
          className={
            content == 1
              ? "border-b-4 border-primaryColor p-2 text-xl text-sectionColor font-bold hover:bg-primaryColor transition-all ease-in-out duration-300 hover:text-headingColor"
              : "text-lg text-gray-500 transition-all ease-in-out duration-300 hover:bg-primaryColor p-2 hover:text-headingColor"
          }
          onClick={onChangeContentHandler}
        >
          Login
        </button>
        <button
          className={
            content == 2
              ? "border-b-4 border-primaryColor p-2 text-xl text-sectionColor font-bold hover:bg-primaryColor transition-all ease-in-out duration-300 hover:text-headingColor"
              : "text-lg text-gray-500 transition-all ease-in-out duration-300 hover:bg-primaryColor p-2 hover:text-headingColor"
          }
          name={"signup"}
          onClick={onChangeContentHandler}
        >
          Signup
        </button>
      </div>
      {content == 1 ? (
        <div className="flex flex-col items-center w-full gap-5 p-2">
          <label
            htmlFor="userName"
            className="text-lg text-start w-full font-bold"
          >
            UserName
          </label>
          <input
            type="text"
            name="userName"
            id="username"
            className="w-full p-3 bg-gray-100 rounded-md outline-none focus:bg-gray-200  transition-all ease-in-out duration-300"
          />
          <label
            htmlFor="password"
            className="text-lg text-start w-full font-bold"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full p-3 bg-gray-100 rounded-md outline-none focus:bg-gray-200 transition-all ease-in-out duration-300"
          />
          <input
            type="submit"
            name="send"
            id="submit"
            value={"Login"}
            className="bg-primaryColor p-2 rounded-md w-full mt-5 text-lg text-headingColor font-bold hover:animate-pulse"
          />
          <h4 className="font-bold bottom-20 text-lg text-primaryColor mt-8">
            or login with
          </h4>
          <div className="flex items-center justify-center gap-5 ">
            <RiGoogleFill
              size={46}
              className="bg-primaryColor p-1 text-headingColor rounded-full"
            />
            <RiMetaFill
              size={46}
              className="bg-primaryColor p-1 text-headingColor rounded-full"
            />
            <RiMicrosoftFill
              size={46}
              className="bg-primaryColor p-1 text-headingColor rounded-full"
            />
            <RiAmazonFill
              size={46}
              className="bg-primaryColor p-1 text-headingColor rounded-full"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full gap-2 p-2">
          <label
            htmlFor="Email"
            className="text-lg text-start w-full font-bold"
          >
            Email
          </label>
          <input
            type="email"
            name="Email"
            id="Email"
            className="w-full p-3 bg-gray-100 rounded-md outline-none focus:bg-gray-200  transition-all ease-in-out duration-300"
          />
          <label
            htmlFor="UserName"
            className="text-lg text-start w-full font-bold"
          >
            UserName
          </label>
          <input
            type="text"
            name="UserName"
            id="UserName"
            className="w-full p-3 bg-gray-100 rounded-md outline-none focus:bg-gray-200 transition-all ease-in-out duration-300"
          />
          <label
            htmlFor="password"
            className="text-lg text-start w-full font-bold"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full p-3 bg-gray-100 rounded-md outline-none focus:bg-gray-200 transition-all ease-in-out duration-300"
          />
          <label
            htmlFor="PhoneNumber"
            className="text-lg text-start w-full font-bold"
          >
            PhoneNumber
          </label>
          <input
            type="number"
            name="PhoneNumber"
            id="PhoneNumber"
            className="w-full p-3 bg-gray-100 rounded-md outline-none focus:bg-gray-200 transition-all ease-in-out duration-300"
          />
          <input
            type="submit"
            name="Signup"
            id="submit"
            value={"Signup"}
            className="bg-primaryColor p-2 rounded-md w-full mt-5 text-lg text-headingColor font-bold hover:animate-pulse"
          />
          <h4 className="font-bold mt-5 text-lg text-primaryColor">
            or signup with
          </h4>
          <div className="flex items-center justify-center gap-5 ">
            <RiGoogleFill
              size={46}
              className="bg-primaryColor p-1 text-headingColor rounded-full"
            />
            <RiMetaFill
              size={46}
              className="bg-primaryColor p-1 text-headingColor rounded-full"
            />
            <RiMicrosoftFill
              size={46}
              className="bg-primaryColor p-1 text-headingColor rounded-full"
            />
            <RiAmazonFill
              size={46}
              className="bg-primaryColor p-1 text-headingColor rounded-full"
            />
          </div>
        </div>
      )}
    </div>
    <div className="w-full min-h-screen  justify-center items-center md:flex hidden">
      <img src={Image} alt="" className="drop-shadow-2xl  w-6/12" />
    </div>
  </div>
  )
}

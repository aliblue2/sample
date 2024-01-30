import React from "react";
import In1 from "../images/in1.png";
import In2 from "../images/in2.png";
import In3 from "../images/in3.png";
import In4 from "../images/in4.png";

export default function Features() {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-5 my-24" data-aos="fade-right" data-aos-duration="700">
      <div className="flex flex-col items-center justify-center gap-2 p-2 hover:bg-primaryColor transition-colors duration-300  rounded-xl">
        <img src={In1} alt="Cloud" className="max-w-[100px]" />
        <span className="text-gray-400 ">Step 1</span>
        <h5 className="text-headingColor text-lg">Download</h5>
        <p className="text-gray-400 text-center">
          Stacks Is A Production-Ready Library Of Stackable Content Blocks Built
          In React Native.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 p-2 hover:bg-primaryColor transition-colors duration-300  rounded-xl">
        <img src={In2} alt="Cloud" className="max-w-[100px]" />
        <span className="text-gray-400 ">Step 2</span>
        <h5 className="text-headingColor text-lg">Connect Wallet</h5>
        <p className="text-gray-400 text-center">
          Stacks Is A Production-Ready Library Of Stackable Content Blocks Built
          In React Native.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 p-2 hover:bg-primaryColor transition-colors duration-300  rounded-xl">
        <img src={In3} alt="Cloud" className="max-w-[100px]" />
        <span className="text-gray-400 ">Step 3</span>
        <h5 className="text-headingColor text-lg">Start Trading</h5>
        <p className="text-gray-400 text-center">
          Stacks Is A Production-Ready Library Of Stackable Content Blocks Built
          In React Native.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 p-2 hover:bg-primaryColor transition-colors duration-300  rounded-xl">
        <img src={In4} alt="Cloud" className="max-w-[100px]" />
        <span className="text-gray-400 ">Step 4</span>
        <h5 className="text-headingColor text-lg">Earn Money</h5>
        <p className="text-gray-400 text-center">
          Stacks Is A Production-Ready Library Of Stackable Content Blocks Built
          In React Native.
        </p>
      </div>
    </div>
  );
}

import React from "react";
import { BsStars } from "react-icons/bs";
const TechCard = () => {
  return (
<div className="w-full mx-auto  backdrop-blur-xl overflow-hidden flex flex-col md:flex-row items-center md:items-stretch p-6 md:py-12 my-0"   style={{
    backgroundImage:
      "radial-gradient(circle 500px at left bottom, rgb(138, 173, 253,0.4), transparent 70%)"
  }}>

      
      {/* Text Section */}
      <div className="md:w-1/2 p-8 flex flex-col justify-center ">
        <h2 className="text-3xl md:text-6xl font-bold text-black mb-4 flex">
         <BsStars  className="text-4xl text-blue-600"/> Lightweight and Free
        </h2>

         

        <p className="text-black mb-6 mt-6 text-xl">
          No server setup, no API keys, no rate limits (for testing). Your project can pull tech news effortlessly — even for prototypes or MVPs.
        </p>
        <a
          href="/docs"
          className="self-start my-6 px-6 py-3 text-black border-2 border-black shadow-[4px_2px_0_black] font-semibold rounded-lg hover:shadow-[-2px_-4px_0_black]
            bg-[#155DFC]/50 transition-colors duration-300"
        >
          Read More
        </a>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 w-full hidden md:flex h-fit">
        <img
          src="/src/assets/undraw_remote-worker_0l91.svg"
          alt="Tech Illustration"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
};

export default TechCard;


import { BsStars } from "react-icons/bs";
const Free = () => {
  return (
    <div className="w-full  mx-auto  backdrop-blur-xl  overflow-hidden flex flex-col md:flex-row items-center md:items-stretch p-6 md:py-12 my-0"  style={{
    backgroundImage:
      "radial-gradient(circle 500px at right top,rgb(255, 182, 182,0.4) , transparent 70%)"
  }}>
      
      {/* Image Section */}
      <div className="md:w-1/2 w-full hidden md:flex h-[450px]">
        <img
          src="/src/assets/undraw_real-time-analytics_50za.svg"
          alt="Tech Illustration"
          className="w-full h-full object-fill"
        />
      </div>


      {/* Text Section */}
      <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-3xl md:text-6xl font-bold text-black mb-4 flex">
          <BsStars  className="text-4xl text-[#FFB6B6]"/> Real-Time Tech Data
        </h2>

        <p className="text-black mb-6 mt-6 text-xl">
          Stay updated with the latest venture, AI, and startup news without manually checking TechCrunch. Ideal for apps, bots, or internal tools that need fresh tech content.
        </p>
        <a
          href="/docs"
          className="self-start my-6 px-6 py-3 text-black border-2 border-black shadow-[4px_2px_0_black] font-semibold rounded-lg hover:shadow-[-2px_-4px_0_black]
         transition-colors duration-300 bg-[#FFB6B6]"
        >
          Explore Now?
        </a>
      </div>


    </div>
  );
};

export default Free;

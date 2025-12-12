
import { BsStars } from "react-icons/bs";
const LearningCard = () => {
  return (
    <div className="w-full  mx-auto  backdrop-blur-xl  overflow-hidden flex flex-col md:flex-row items-center md:items-stretch p-6 md:py-12 my-0"  style={{
    backgroundImage:
      "radial-gradient(circle 500px at left top,rgb(138, 173, 253,0.4) , transparent 70%)"
  }}>
      
     


      {/* Text Section */}
      <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-3xl md:text-6xl font-bold text-black mb-4 flex">
          <BsStars  className="text-4xl text-[#155DFC]"/> Simplified API for Developers
        </h2>

        <p className="text-black mb-6 mt-6 text-xl">
          Forget complicated scraping or RSS parsing. Our API provides a ready-to-use, clean JSON endpoint with titles, authors, links, and publication times. Save time and focus on your frontend or app logic.
        </p>
        <a
          href="/docs"
          className="self-start my-6 px-6 py-3 text-black border-2 border-black shadow-[4px_2px_0_black] font-semibold rounded-lg hover:shadow-[-2px_-4px_0_black]
         transition-colors duration-300 bg-[#155DFC]/50"
        >
          Go Docs?
        </a>
      </div>

 {/* Image Section */}
      <div className="md:w-1/2 w-full hidden md:flex h-[450px]">
        <img
          src="/assets/undraw_code-inspection_z688 (1).svg"
          alt="Tech Illustration"
          className="w-full h-full object-fill"
        />
      </div>

    </div>
  );
};

export default LearningCard;

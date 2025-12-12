import React, { useEffect, useState } from "react";

const Hero = () => {
  const title = "TechCrunch Unofficial API";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(title.slice(0, index + 1));
      index++;
      if (index === title.length) clearInterval(interval);
    }, 150); // typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black/1 min-h- flex items-center justify-center text-center px-6 pt-30 pb-2">
      <div className="space-y-8">
        {/* Typing Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text  text-black">
          {displayedText}
          <span className="animate-pulse">|</span>
        </h1>

        {/* Description */}
        <p className="text-black text-lg md:text-xl max-w-xl mx-auto">
          Access the latest tech news and articles effortlessly with the 
          TechCrunch Unofficial API. Perfect for developers and tech enthusiasts.
        </p>

        {/* Button */}
        <a
          href="/docs"
          className="md:px-8 px-4 md:py-3 py-1 font-semibold border-2 border-black rounded-lg hover:scale-105 transition-transform duration-300 inline-block"
        >
          View Docs
        </a>
      </div>
    </section>
  );
};

export default Hero;

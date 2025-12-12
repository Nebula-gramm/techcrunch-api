import React from "react";

export default function ResEditor() {
  const jsonData = {
    "id": 7,
    "title": "Google’s AI try-on feature for clothes now works with just a selfie",
    "link": "https://techcrunch.com/2025/12/11/googles-ai-try-on-feature-for-clothes-now-works-with-just-a-selfie/",
    "thumbnail": "https://techcrunch.com/wp-content/uploads/2025/08/GettyImages-2198713751.jpg?w=562",
    "content": [
      "Google is updating its AI try-on feature to let you virtually try on clothes using just a selfie, the company announced on Thursday. In the past, users had to upload a full-body picture of themselves to virtually try on a piece of clothing. Now they can use a selfie and Nano Banana, Google’s Gemini 2.5 Flash Image model, to generate a full-body digital version of themselves for virtual try-ons.",
      "Users can select their usual clothing size, and the feature will then generate several images. From there, users can choose one to make it their default try-on photo.",
      "If desired, users still have the option to use a full-body photo or select from a range of models with diverse body types.",
      "The new capability is launching in the United States today.",
      "Google first launched the try-on feature in July, allowing users to try on apparel items from its Shopping Graph across Search, Google Shopping, and Google Images. To use the feature, users need to tap on a product listing or apparel product result and select the “try it on” icon.",
      "The move comes as Google has been investing in the virtual AI try-on space, as the company has a separate app dedicated specifically to that purpose. The app, called Doppl, is designed to help visualize how different outfits might look on you using AI.",
      "Earlier this week, the tech giant updated it with a shoppable discovery feed that displays recommendations so users can discover and virtually try on new items. Nearly everything in the feed is shoppable, with direct links to merchants.",
      "The discovery feed features AI-generated videos of real products and suggests outfits based on your personalized style. While some may not be fond of an AI-generated feed, Google likely views it as a way to showcase products in a format that people are already familiar with, thanks to platforms like TikTok and Instagram."
    ],
    "author": "Aisha Malik",
    "time": "2025-12-11T10:09:27-08:00"
  };

  // Simple lightweight syntax highlighting
  const highlightJSON = (json) => {
    return json
      .replace(/(&)/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"(.*?)\"(?=:)/g, `<span class="text-blue-400">"$1"</span>`) // keys
      .replace(/: \"(.*?)\"/g, `: <span class="text-green-400">"$1"</span>`) // string values
      .replace(/: (\\d+)/g, `: <span class="text-amber-300">$1</span>`) // numbers
      .replace(/true|false|null/g, `<span class="text-purple-400">$&</span>`); // booleans + null
  };

  const highlighted = highlightJSON(JSON.stringify(jsonData, null, 2));

  return (
        <div className="w-full  mx-auto  backdrop-blur-xl  overflow-hidden flex flex-col md:flex-row items-center md:items-stretch p-6 md:py-12 my-0"  style={{
    backgroundImage:
      "radial-gradient(circle 500px at right top,rgb(255, 182, 182,0.4) , transparent 70%)"
  }}>


    <section className="w-full max-w-4xl mx-auto p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-6xl font-bold mb-2">JSON Response Data</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:text-xl">
          Below is a formatted preview of the JSON response returned by the API.
        </p>
      </div>

      <div className="bg-[#0d1117] text-white rounded-xl p-4 shadow-lg border border-gray-700 overflow-hidden">
        {/* Code header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>

        {/* Code Preview */}
        <div className="max-h-96 overflow-auto rounded-lg border border-gray-800">
          <pre
            className="whitespace-pre text-sm font-mono leading-6 p-4"
            dangerouslySetInnerHTML={{ __html: highlighted }}
          ></pre>
        </div>
      </div>
    </section>



        </div>
  );
}

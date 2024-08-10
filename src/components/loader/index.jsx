import { useState, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  const [loadingText, setLoadingText] = useState("Loading");
  useEffect(() => {
    const texts = ["Loading...", "Please wait...", "Almost there..."];
    let currentIndex = 0;
    const updateText = () => {
      setLoadingText(texts[currentIndex]);
      currentIndex = (currentIndex + 1) % texts.length;
    };
    updateText();
    const interval = setInterval(updateText, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center flex-col w-full h-[50vh] lg:h-[50vh] lg:ml-20">
      <InfinitySpin color="#587cdd" width="200" visible={true} />
      <p className="lg:text-3xl text-xl italic font-semibold text-black/60">
        {loadingText}
      </p>
    </div>
  );
};

export default Loader;

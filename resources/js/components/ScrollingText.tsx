import React from "react";

interface ScrollingTextProps {
  text: string;
  speed?: number; 
}

const ScrollingText: React.FC<ScrollingTextProps> = ({ text, speed = 10 }) => {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap pb-4">
      <div className="animate-marquee text-red-500">
        {text}
      </div>
    </div>
  );
};

export default ScrollingText;

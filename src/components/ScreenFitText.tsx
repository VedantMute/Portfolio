'use client'
import React, { useEffect, useRef } from "react";

const ScreenFitText: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const resizeText = () => {
      const container = containerRef.current;
      const text = textRef.current;

      if (!container || !text) {
        return;
      }

      const containerWidth = container.offsetWidth;
      let min = 1;
      let max = 2500;

      while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        if (text) text.style.fontSize = mid + "px";

        if (text && text.offsetWidth <= containerWidth) {
          min = mid + 1;
        } else {
          max = mid - 1;
        }
      }

      if (text) text.style.fontSize = max + "px";
    };

    resizeText();
    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  return (
    <div
      className="flex w-full items-center overflow-hidden bg-slate-950"
      ref={containerRef}
    >
      <span
        className="absolute bottom-0 left-0 mx-auto whitespace-nowrap text-center font-bold uppercase text-slate-700"
        ref={textRef}
      >
        CREATED BY VEDANT
      </span>
    </div>
  );
};

export default ScreenFitText;

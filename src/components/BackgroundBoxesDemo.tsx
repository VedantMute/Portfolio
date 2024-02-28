"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/utils/cn";

const GradientText = () => {
  const gradientStyle = {
    background: `
    linear-gradient(90deg, 
      var(--yellow-300),
        var(--green-300),
        var(--red-300),
        var(--sky-300),
        var(--purple-300),
        var(--blue-300),
        var(--indigo-300),
        var(--pink-300),
        var(--violet-300)
      )`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <h1 className={cn("md:text-9xl font-mono text-white relative z-20 bg-gradient-to-r from-sky-300 to-violet-300")} style={gradientStyle}>
      Vedant Mute
    </h1>
  );
};

export default GradientText;
export function BackgroundBoxesDemo() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-black-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-black-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <GradientText/>
      <p className="pt-5 md:text-2xl text-center mt-2 text-neutral-300 relative z-20">
      Web developer | Java programmer | Data analyst
      </p>
    </div>
  );
}

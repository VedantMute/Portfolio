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
        var(--blue-300),
        var(--sky-300),
        var(--purple-300),
        var(--blue-300),
        var(--blue-300),
        var(--pink-300),
        var(--violet-300)
      )`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <h1 className="text-7xl md:text-7xl z-20 lg:text-7xl/tight xl:text-7xl/tight text-transparent bg-clip-text bg-gradient-to-bl from-light-700 to-slate-800 dark:from-slate-300/90 dark:to-slate-100 font-bold max-w-4xl capitalize">
Vedant Mute</h1>

  );
};

export default GradientText;
export function BackgroundBoxesDemo() {
  return (
    <div className=" h-5/6 my-10  py-60 relative mx-auto max-w-screen-xl  w-full overflow-hidden bg-black-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-black-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <GradientText/>
      <p className="pt-5 md:text-xl text-center mt-2 text-neutral-300 relative z-20">
      <span className="bg-indigo-50 dark:bg-gray-900 dark:text-indigo-300 inline-block border border-dashed border-indigo-600 sm:text-xl sm:px-1 sm:mx-1 lg:px-5 py-2">Web Developer | Java Programmer | Data Analyst</span>
      
      </p>
    </div>
  );
}

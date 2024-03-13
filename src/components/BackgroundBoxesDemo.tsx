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
    <h1 className="text-indigo-950 z-20 dark:text-white text-7xl/snug sm:text-6xl/tight lg:text-5xl/tight xl:text-6xl/tight font-semibold text 2xl:text-6xl">
    Vedant Mute
</h1>

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
      Web developer | Java programmer | Data analyst
      </p>
    </div>
  );
}

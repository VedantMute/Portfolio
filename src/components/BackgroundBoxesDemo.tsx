"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/utils/cn";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-black-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-black-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-9xl font-mono  text-white relative z-20")}>
        Vedant Mute
      </h1>
      <p className="pt-5 md:text-2xl text-center mt-2 text-neutral-300 relative z-20">
      Web developer | Java programmer | Data analyst
      </p>
    </div>
  );
}

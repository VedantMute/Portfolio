"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { Exo_2 } from 'next/font/google';


const roboto = Exo_2({
  weight: '700',
  subsets: ['latin'],
});


export function BackgroundBoxesDemo() {
  return (
    <div className=" h-5/6 my-10  py-60 relative mx-auto max-w-screen-xl  w-full overflow-hidden bg-black-900 flex flex-col items-center justify-center rounded-lg">
      <Boxes />
      <div className="absolute inset-0 w-full h-full bg-black-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <h1 className={`text-6xl md:text-7xl z-20 lg:text-9xl/tight font-bold xl:text-8xl/tight text-transparent bg-clip-text bg-gradient-to-bl from-light-700 to-slate-800 dark:from-slate-300/90 dark:to-slate-100 max-w-4xl capitalize ${roboto.className}`}>
        Vedant Mute
      </h1>

      <p className="pt-5 md:text-xl text-center mt-2 text-neutral-300 relative z-20">
        <span className="bg-indigo-50 dark:bg-gray-900 dark:text-indigo-300 inline-block border border-dashed border-indigo-600 sm:text-xl sm:px-5 rounded-lg sm:mx-1 lg:px-5 py-2">Web Developer x Java Programmer</span>
      </p>
      
    </div>
  );
}

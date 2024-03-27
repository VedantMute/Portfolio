import Sp from '@/components/Sp'
import Link from 'next/link';
import React from 'react'
import 'tailwindcss/tailwind.css';
const ResponsiveSplitComponent = () => {
    return (
       <main className="w-full bg-black">
    <section className="relative pt-10 xl:pt-14">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
        <div className="mx-auto text-center lg:text-left flex flex-col max-w-3xl justify-center lg:justify-start lg:py-8 flex-1 lg:w-1/2 lg:max-w-none">
          
          <p className="mt-10 text-gray-700 dark:text-gray-300 lg:text-lg max-w-2xl lg:max-w-none mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fugit! Laborum quo maxime
            at sapiente
            quasi
          </p>
          <div className="mt-10 flex gap-4 justify-center lg:justify-start flex-wrap">
            
          </div>
        </div>
        
          <div >
          <Sp/>
          </div>
          
     
      </div>
    </section>
  </main>
    );
  };
  

export default function temp() {
  return (
    <>
    <ResponsiveSplitComponent/>
      {/* <Sp/> */}
    </>
  )
}

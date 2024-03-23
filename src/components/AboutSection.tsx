"use client";
import Image from "next/image"
import { TextGenerateEffect } from './ui/text-generate-effect';
import { StickyScrollRevealDemo } from './StickyScrollRevealDemo';
import Title from "./Title";

const words = `I'm Vedant Mute, an engineering student with a passion for technology. Proficient in web development, Java programming, and AI enthusiast with expertise in data science. Excited to innovate and create through code. 
`;
const AboutSection = () => {
return (
    <>

      <section className="relative pt-20 lg:pt-24 pb-20 bg-zinc-950">
      <div className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-l from-slate-950/50 left-0 blur-3xl   translate-y-[-100%] -translate-x-[40%] bottom-0">
                    <div className="inset-[10%] rounded-full bg-gradient-to-r from-blue-400/40">
                        <div className="absolute inset-[20%] rounded-full bg-gradient-to-r from-zinc-900" />
                    </div>
                </div>
                <div className="absolute top-0 inset-x-0 h-64 flex items-start">
                    <div className="h-24 w-2/3 bg-gradient-to-br from-blue-500 opacity-20 blur-2xl dark:from-[#0c1cac] dark:invisible dark:opacity-40">
                    </div>
                    <div className="h-20 w-3/5 bg-gradient-to-r from-[#488ad4] opacity-40 blur-2xl dark:from-[#0c1cac] dark:opacity-40">
                    </div>
        
                </div>
                <section className="py-16 ">
        
        <div className="mx-auto max-w-7xl" >
            
        </div>
        <div className="max-w-7xl  mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex gap-16 flex-col sm:flex-row-reverse md:flex-row md:items-center">
            <Image src="/pic.jpg" width={1900} height={1200} alt="happy team work" className="w-full h-auto md:w-1/2 md:h-full object-cover z-20 rounded-lg order-2 md:order-1" />
            <div className="space-y-10 md:order-2">
            <div>
      <div className={"px-5 mx-4 py-2 text-3xl border-b border-gray-700 lg:text-5xl lg:px-0"}>
        
            <Title hProp="About" sProp="Me" />
      </div>
    </div>
      {/* Other components */}
                <TextGenerateEffect words={words} />
                <section className="py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-6">
            <div className="bg-white dark:bg-slate-950 shadow-lg shadow-gray-200/50 dark:shadow-transparent border border-gray-100/80 dark:border-gray-900/80 p-6 md:p-5 lg:p-6 rounded-lg flex flex-col justify-center gap-0.5 text-center text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white">
                    2yr.
                </span>
                <span>
                    Experience
                </span>
            </div>
            <div className="bg-white dark:bg-slate-950 shadow-lg shadow-gray-200/50 dark:shadow-transparent border border-gray-100/80 dark:border-gray-900/80 p-6 md:p-5 lg:p-6 rounded-lg flex flex-col justify-center gap-0.5 text-center text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white">
                    7+
                </span>
                <span>
                    Projects
                </span>
            </div>
            <div className="bg-white dark:bg-slate-950 shadow-lg shadow-gray-200/50 dark:shadow-transparent border border-gray-100/80 dark:border-gray-900/80 p-6 md:p-5 lg:p-6 rounded-lg flex flex-col justify-center gap-0.5 text-center text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white">
                    5
                </span>
                <span>
                    Deployed
                </span>
            </div>
            <div className="bg-white dark:bg-slate-950 shadow-lg shadow-gray-200/50 dark:shadow-transparent border border-gray-100/80 dark:border-gray-900/80 p-6 md:p-5 lg:p-6 rounded-lg flex flex-col justify-center gap-0.5 text-center text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white">
                    2
                </span>
                <span>
                    Clients
                </span>
            </div>
        </div>
    </section>
            </div>
        </div>
    </section>
    <div className="mx-auto max-w-7xl" >
    <div>
      <div className={"px-5 mx-4 py-2 text-3xl border-b border-gray-700 lg:text-5xl lg:px-0"}>
        
    <Title hProp="My" sProp="Skills" />
      </div>
    </div>
        </div>
      <StickyScrollRevealDemo />
            </section>
    </>
)
}
 
export default AboutSection
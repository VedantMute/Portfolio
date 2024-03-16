"use client";
import Image from "next/image"
import { TextGenerateEffect } from './ui/text-generate-effect';
import { StickyScrollRevealDemo } from './StickyScrollRevealDemo';
const words = `I'm Vedant Mute, an engineering student with a passion for technology. Proficient in web development, Java programming, and AI enthusiast with expertise in data science. Excited to innovate and create through code. 
`;
const AboutSection = () => {
return (
    <>

      <section className="relative pt-20 lg:pt-24 pb-20 bg-zinc-950">
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
            <Image src="/pic.jpg" width={1900} height={1200} alt="happy team work" className="w-full h-auto md:w-1/2 md:h-full object-cover rounded-lg order-2 md:order-1" />
            <div className="space-y-10 md:order-2">
                
            <div className="px-5 py-2 text-3xl border-b border-gray-700 lg:text-5xl lg:px-0 "><h1 className="text-4xl sm:px-8 lg:px-3 md:text-5xl lg:text-6xl/tight xl:text-7xl/tight text-gray-900 dark:text-white font-bold max-w-4xl capitalize sm:text-center lg:text-left">
                            About <span className="text-slate-500">Me</span>
                        </h1></div>
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
            <div className="px-6 py-2 mx-8 text-3xl border-b border-gray-700 lg:text-5xl lg:px-0 "><h1 className="text-4xl sm:px-8 lg:px-3 md:text-5xl lg:text-6xl/tight xl:text-7xl/tight text-gray-900 dark:text-white font-bold max-w-4xl capitalize">
                            My <span className="text-slate-500">Skills</span>
                        </h1></div>
        </div>
      <StickyScrollRevealDemo />
            </section>
    </>
)
}
 
export default AboutSection
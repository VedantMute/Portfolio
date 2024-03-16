"use client";
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import Image from "next/image"
export default function ContactMe() {
    return (
        <div>
            <section className="dark:bg-black-900 py-32 sm:py-36 lg:py-40 overflow-hidden h-[100dvh] min-h-max flex items-center relative">
                <div className="absolute top-0 left-0 -translate-x-[54%] -translate-y-[70%] w-2/5 rounded-full aspect-square dark:bg-slate-950 backdrop-filter blur-3xl opacity-70" />
                <div className="absolute bottom-0 right-0 translate-x-[54%] translate-y-[70%] w-2/5 rounded-full aspect-square bg-zinc-600/30 backdrop-filter blur-3xl opacity-50" />
                <div className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-r from-slate-950 right-0 -translate-y-[40%] blur-xl translate-x-[40%] top-0">
                    <div className="inset-[10%] rounded-full bg-gradient-to-l  from-slate-950">
                        <div className="absolute inset-[20%] rounded-full blur-xl bg-gradient-to-l from-slate-800" />
                    </div>
                </div>
                <div className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-l from-slate-950 left-0 blur-3xl translate-y-[40%] -translate-x-[40%] bottom-0">
                    <div className="inset-[10%] rounded-full bg-gradient-to-r from-gray-400/40">
                        <div className="absolute inset-[20%] rounded-full bg-gradient-to-r from-darl-900/90" />
                    </div>
                </div>
                <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
                    <div className="text-center flex flex-col items-center space-y-10">
                        <span className="border border-gray-500 px-3 py-0.5 rounded-full bg-gray-50 dark:bg-gray-950 bg-opacity-50 text-gray-700 dark:text-gray-300">
                            Wanna contact me!
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl/tight xl:text-7xl/tight text-gray-900 dark:text-white font-bold max-w-4xl capitalize ">
                            Let&apos;s Connect
                        </h1>
                        <div className="text-left grid lg:grid-cols-3 p-6 rounded-2xl bg-gradient-to-tr border-slate-100 dark:border-slate-800  dark:bg-slate-950 bg-opacity-44 border  max-w-2xl lg:max-w-5xl mx-auto lg:divide-x divide-y lg:divide-y-0">
                    <div className="flex items-start gap-6 lg:pr-6 pb-6 lg:pb-0">
                        <div className="w-10">
                            <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                            <Image src="/phone.png" width={1900} height={1200} alt="happy team work" className="h-7 w-7" />
                            </span>
                        </div>
                        <div className="flex-1 space-y-1">
                            <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
                                Phone
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                               +91 7058 11100
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6 lg:px-6 py-6 lg:py-0">
                        <div className="w-10">
                            <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                            <Image src="/mail.png" width={1900} height={1200} alt="happy team work" className="h-7 w-7" />
                            </span>
                        </div>
                        <div className="flex-1 space-y-1">
                            <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
                                Email
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                hivedant@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6 pt-6 lg:pt-0 lg:pl-6">
                        <div className="w-10">
                            <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                            <Image src="/place.png" width={1900} height={1200} alt="happy team work" className="h-7 w-7" />
                            </span>
                        </div>
                        <div className="flex-1 space-y-1">
                            <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
                                Place
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Pune MH, India.
                            </p>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
                </section>
                
            
            
            
        </div>
    );
}

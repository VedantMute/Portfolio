"use client";
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactMe() {
    return (
        <div>
            <section className="dark:bg-black-900 py-32 sm:py-36 lg:py-40 overflow-hidden h-[100dvh] min-h-max flex items-center relative">
                <div className="absolute top-0 left-0 -translate-x-[54%] -translate-y-[70%] w-2/5 rounded-full aspect-square dark:bg-slate-950 backdrop-filter blur-3xl opacity-70" />
                <div className="absolute bottom-0 right-0 translate-x-[54%] translate-y-[70%] w-2/5 rounded-full aspect-square bg-zinc-600/30 backdrop-filter blur-3xl opacity-50" />
                <div className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-r from-slate-400/5 right-0 -translate-y-[40%] translate-x-[40%] top-0">
                    <div className="inset-[10%] rounded-full bg-gradient-to-l from-slate-400/50">
                        <div className="absolute inset-[20%] rounded-full bg-gradient-to-l from-slate-400/20" />
                    </div>
                </div>
                <div className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-l from-slate-400/5 left-0 translate-y-[40%] -translate-x-[40%] bottom-0">
                    <div className="inset-[10%] rounded-full bg-gradient-to-r from-slate-400/40">
                        <div className="absolute inset-[20%] rounded-full bg-gradient-to-r from-slate-400/50" />
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
                                </svg>
                            </span>
                        </div>
                        <div className="flex-1 space-y-1">
                            <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
                                Phone
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                               +91 91012 47741
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6 lg:px-6 py-6 lg:py-0">
                        <div className="w-10">
                            <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                            </span>
                        </div>
                        <div className="flex-1 space-y-1">
                            <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
                                Email
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                hello@vedant.com
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6 pt-6 lg:pt-0 lg:pl-6">
                        <div className="w-10">
                            <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
                                </svg>
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

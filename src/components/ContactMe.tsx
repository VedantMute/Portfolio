"use client";
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import Image from "next/image"
import Title from './Title';
export default function ContactMe() {
    return (
        <div className='mx-auto lg:max-w-screen-2xl'>
            <section className="dark:bg-black-900 py-40 sm:py-36 lg:py-40 overflow-hidden min-h-max flex items-center relative">
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
                            Wanna build something like this!
                        </span>
                        <Title hProp="Let &apos; Connect" sProp="" />
                        <div className="text-left grid lg:grid-cols-3 p-6 rounded-2xl bg-gradient-to-tr border-slate-100 dark:border-slate-800  dark:bg-slate-950 bg-opacity-44 border  max-w-2xl lg:max-w-5xl mx-auto lg:divide-x divide-y lg:divide-y-0">
                    <div className="flex items-start gap-6 lg:pr-6 pb-6 lg:pb-0">
                        <div className="w-10">
                            <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            </span>
                        </div>
                        <div className="flex-1 space-y-1">
                            <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
                                Phone
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                               +91 70587 71XXX
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6 lg:px-6 py-6 lg:py-0">
                        <div className="w-10">
                            <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                            </span>
                        </div>
                        <div className="flex-1 space-y-1">
                            <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
                                Email
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                hello@vedantmute.online
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6 pt-6 lg:pt-0 lg:pl-6">
                        <div className="w-10">
                            <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
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

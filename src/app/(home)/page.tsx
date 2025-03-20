"use client";
import React from "react";
import Link from "next/link";
import Steps from "@/components/Steps";
import TestimonialsSlider from "@/components/Testiomonials";
import Chrome from "@/assets/chrome";
import { Vector1, Vector2 } from "@/assets/hero-vector";
import { supportedProviders } from "@/lib/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import ConcertPalCalendar from "@/components/Calendar";
import ChromeExtensionButton from "@/components/ChromeExtensionButton";
import Musicnotes from "@/assets/musicnotes";
const Page = () => {
    return (
        <section className="flex flex-col w-full justify-center items-center min-h-screen relative pt-10 md:pt-32 bg-gradient-to-b from-[#EAF2EF] via-transparent to-transparent">
            <div className="flex flex-col items-center gap-8 md:gap-10 p-2 md:p-0">
                <h1 className="text-4xl md:text-6xl relative font-semibold tracking-normal text-primary text-center">
                    <Vector1 className="hidden md:inline-block absolute left-[-1.3em] top-[5px]" />
                    Your Ticket To Concert Savings.
                    <Vector2 className="hidden md:inline-block absolute  top-[-1em] right-[-1em]" />
                </h1>
                <div className="md:max-w-[84%] text-center ">
                    <p className=" font-semibold text-xl  md:text-3xl w-full ">Find the cheapest ticket to any show with a single click!</p>
                    <p className="text-gray-600 pt-4 px-5 ">ConcertPal is your automatic shopping assistant for concerts. Install for free to unlock discounts and save time while you shop.</p>
                </div>
                <div className="relative">
                    <div className="flex flex-row items-center justify-center ">
                        <Link href="https://chromewebstore.google.com/detail/concertpal/nnbeepdmhiimdmeifpkbeinmbafaedja" className="bg-[#116557] hover:scale-105 transition-all text-white font-semibold text-base p-2 rounded-xl px-4 flex items-center gap-2">
                            <Chrome />
                            Add to Chrome - It&apos;s Free!
                        </Link>
                        {/* <button className="border-2 px-4 p-2.5 border-[#82C7BB] shadow-[#82C7BB] shadow-sm text-base text-primary font-semibold rounded-xl">Try Concertpal Calendar</button> */}
                    </div>
                    <div className="mt-10">
                        <ChromeExtensionButton />
                    </div>
                </div>
            </div>

            <div className="w-full mb-10 mt-12 text-center " id="steps">
                <p className="font-semibold  text-3xl text-[#1A9882] ">OUR FEATURES</p>
                <Steps />
            </div>

            <div className="flex flex-col items-center gap-5 w-full md:p-0">
                <p className="text-2xl text-[#1A9882] font-semibold  ">SYNCED WITH</p>
                <p>
                    {" "}
                    <span className="font-semibold text-2xl flex items-center text-center md:text-5xl"> All your favorite ticketing platforms.</span>
                </p>
                <section className="w-full py-8 md:py-12">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20">
                            {supportedProviders.map((provider, index) => (
                                <motion.div
                                    key={provider.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                        ease: "easeOut",
                                    }}
                                >
                                    <Link href={provider.link}>
                                        <div className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] relative transition-transform duration-300 hover:scale-125">
                                            <Image src={provider.image} alt={`${provider.name} logo`} fill className="object-contain hover:opacity-80 transition-opacity duration-200 rounded-full" sizes="(max-width: 640px) 100px, 120px" />
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            {/* <ConcertPalCalendar /> */}
            <TestimonialsSlider />

            <div
                className="h-full w-[1000px]  mt-8 mb-14 rounded-lg hidden lg:inline-block"
                style={{
                    backgroundImage: "url()",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="flex flex-col justify-end  h-[290px] px-10  pt-8 pb-16 border-2 border-[#82C7BB] rounded-2xl relative">
                    <div className="absolute right-1/2 mb-4  w-[200px] h-[200px] ">
                        <Musicnotes />
                    </div>
                    <div>
                        <h2 className="text-3xl font-medium mb-4 text-[#1A9882]">Ready to start saving?</h2>

                        <p className="text-4xl mb-8 font-bold ">Add ConcertPal to Chrome now!</p>
                    </div>
                    <div>
                        <Link href="https://chromewebstore.google.com/detail/concertpal/nnbeepdmhiimdmeifpkbeinmbafaedja" className="bg-[#1A9882] text-white font-semibold p-3 rounded-lg px-6 text-lg shadow-[#1A9882] shadow-sm ">
                            Get Started - It&apos;s Free {">"}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;

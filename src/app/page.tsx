"use client";
import React from "react";
import { Star } from "@/assets";
import Link from "next/link";
import Steps from "@/components/Steps";
import TestimonialsSlider from "@/components/Testiomonials";
import Chrome from "@/assets/chrome";
import InformationIcon from "@/assets/information_icon";
import { Vector1, Vector2 } from "@/assets/hero-vector";
import { supportedProviders } from "@/lib/constants";
import Image from "next/image";
import { motion } from "framer-motion";
const Page = () => {
    return (
        <section className="flex flex-col w-full justify-center items-center min-h-screen relative pt-10 md:pt-28 bg-gradient-to-b from-primary-foreground/10 via-transparent to-transparent">
            <div className="flex flex-col items-center gap-8 md:gap-10 p-2 md:p-0">
                <h1 className="text-4xl md:text-5xl relative font-bold tracking-normal text-primary-foreground text-center">
                    <Vector1 className="hidden md:inline-block absolute left-[-1.3em] top-[5px]" />
                    YOUR TICKET TO CONCERT SAVINGS!
                    <Vector2 className="hidden md:inline-block absolute  top-[-1em] right-[-1em]" />
                </h1>
                <div className="w-full text-md md:text-lg text-gray-900 md:text-center text-left font-semibold text-primary-foreground md:flex md:justify-center">
                    <p className="md:max-w-[67%] w-full text-center">
                        Find the cheapest tickets to see your favorite artists - with just one click! Compare, track, and get notified about the lowest prices with <span className="text-primary">ConcertPal</span> today.
                    </p>
                </div>
                <div className="relative">
                    <div className="flex flex-col items-center ">
                        <Link href="https://chromewebstore.google.com/detail/concertpal/nnbeepdmhiimdmeifpkbeinmbafaedja" className="bg-primary hover:scale-105 transition-all text-white font-semibold text-xl p-4 rounded-xl px-7 flex items-center gap-3">
                            <Chrome />
                            Add to Chrome - It&apos;s Free!
                        </Link>
                        <div className="flex gap-6 items-center justify-center w-full mt-2">
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((index) => (
                                    <Star key={index} />
                                ))}
                            </div>
                            <h1 className="text-sm">
                                <b>5/5</b> on Chrome Web Store
                            </h1>
                        </div>
                        <div className="flex items-center gap-2 mt-3">
                            <InformationIcon />
                            Committed to your privacy
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full mb-10" id="steps">
                <Steps />
            </div>

            <div className="flex flex-col items-center gap-5 w-full md:p-0">
                <h1 className="text-4xl md:text-5xl font-semibold text-center md:max-w-[40%] mb-4 tracking-wide text-black/80">
                    Synced with all your <span className="text-primary">favorite ticketing</span> platforms.
                </h1>
                <section className="w-full py-12 bg-background">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
                            {supportedProviders.map((provider, index) => (
                                <motion.div key={provider.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group relative cursor-pointer">
                                    <Link href={provider.link}>
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative w-[120px] h-[120px] md:w-[200px] md:h-[200px] bg-card rounded-full p-4 transition-transform duration-300 hover:scale-110">
                                            <Image src={provider.image} alt={`${provider.name} logo`} width={300} height={300} className="w-full h-full object-contain rounded-full" />
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <TestimonialsSlider />

            <div
                className="h-full w-[1100px]  mt-8 rounded-lg hidden md:inline-block"
                style={{
                    backgroundImage: "url(/image.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="flex   justify-between items-center h-full px-10 pt-20 pb-16 text-white">
                    <div>
                        <h2 className="text-2xl font-medium mb-4">Ready to start saving?</h2>
                        <p className="text-5xl mb-6 font-semibold">Add ConcertPal to Chrome now!</p>
                    </div>
                    <div>
                        <Link href="https://chromewebstore.google.com/detail/concertpal/nnbeepdmhiimdmeifpkbeinmbafaedja" className="bg-white text-primary font-semibold p-3 rounded-xl px-6 text-lg">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;

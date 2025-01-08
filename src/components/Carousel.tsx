"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Carousel() {
    const [activeSlide, setActiveSlide] = useState(0);
    const totalSlides = 2; // Matches the actual number of slides

    const handleNext = () => {
        setActiveSlide((prev) => (prev + 1) % totalSlides);
    };

    const handlePrev = () => {
        setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className="flex flex-col items-center gap-4 w-full px-4 sm:px-0 ">
            <div className="w-full max-w-4xl mx-auto pt-2 pb-6 rounded-lg md:bg-white md:border md:border-slate-400 sm:border-none xs:border-none">
                {/* Carousel wrapper */}
                <div className="relative md:bg-white  sm:px-20  pb-4 pt-3">
                    <div className="relative overflow-hidden rounded-lg">
                        {/* Item 1 */}
                        <div className={`duration-700 ease-in-out ${activeSlide === 0 ? "block" : "hidden"} `}>
                            <p className="font-semibold md:text-left sm:text-center sm:text-base">COMPARE TICKET PRICES</p>
                            <p className="text-emerald-700 font-semibold pb-2 sm:pb-3 md:text-left sm:text-center sm:text-base">Find the cheapest ticket across all ticketing sites for any seat or event.</p>
                            <div className="">
                                <iframe className="md:w-full md:aspect-[16/9] flex justify-center items-center mx-auto" src="https://www.youtube.com/embed/4oSLhUGGMwA?si=VQ3Ip5nMcnHpWiBJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>
                        </div>
                        {/* Item 2 */}
                        <div className={`duration-700 ease-in-out ${activeSlide === 1 ? "block" : "hidden"}  `}>
                            <p className="font-semibold md:text-left sm:text-center sm:text-base"> TRACK TICKET PRICES</p>
                            <p className="text-emerald-700 font-semibold pb-2 sm:pb-3 md:text-left sm:text-center    sm:text-base">Get notified if prices drop and see how they change over time.</p>
                            <div className=""></div>
                            <iframe className="md:w-full  md:aspect-[16/9] flex justify-center items-center mx-auto" src="https://www.youtube.com/embed/bhwbvFj46bM?si=nqlYzbMVieQDWXt8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>

                        {/* Navigation Arrows */}
                    </div>
                    <div className="xl:invisible">
                        <button className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 text-white bg-primary rounded-full p-1 sm:p-2 shadow-lg hover:bg-primary/90 invisible  md:visible  sm:invisible " onClick={handlePrev} aria-label="Previous slide">
                            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                        </button>
                        <button className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full p-1 sm:p-2 shadow-lg hover:bg-primary/90 invisible md:visible  xs:invisible sm:invisible" onClick={handleNext} aria-label="Next slide">
                            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-6 sm:gap-4 px-4 sm:px-0">
                    <Link href="https://seatgeek.com/kendrick-lamar-tickets/east-rutherford-new-jersey-metlife-stadium-2025-05-08-7-pm/concert/17291958" className="w-full sm:w-auto">
                        <button className="flex items-center justify-center gap-1 px-3 py-2 rounded-xl bg-primary text-white cursor-pointer w-full sm:w-auto text-sm">
                            See a real comparison <ExternalLink size={14} />
                        </button>
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=pdChLB0GKfw" className="w-full sm:w-auto">
                        <button className="px-3 py-2 rounded-xl bg-white text-emerald-700 cursor-pointer border border-emerald-700 w-full sm:w-auto text-sm">Step-by-Step Video Tutorial</button>
                    </Link>
                </div>
            </div>

            {/* Dots  */}
            <div className="flex justify-center space-x-2 mb-4">
                {[...Array(totalSlides)].map((_, index) => (
                    <button key={index} onClick={() => setActiveSlide(index)} className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${activeSlide === index ? "bg-primary" : "bg-primary/30"}`} aria-label={`Go to slide ${index + 1}`} />
                ))}
            </div>
        </div>
    );
}

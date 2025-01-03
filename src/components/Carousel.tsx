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
        <div className="flex flex-col items-center gap-4">
            <div className="w-full max-w-5xl mx-auto px-4 pt-2 pb-6 rounded-lg bg-white border border-slate-400">
                {/* Carousel wrapper */}
                <div className="relative bg-white px-20  p-6">
                    <div className="relative overflow-hidden rounded-lg">
                        {/* Item 1 */}
                        <div className={`duration-700 ease-in-out ${activeSlide === 0 ? "block" : "hidden"}`}>
                            <p className="font-semibold"> COMPARE TICKET PRICES</p>
                            <p className="text-emerald-700 font-semibold pb-3">Find the cheapest ticket across all ticketing sites for any seat or event.</p>
                            <iframe className="w-full aspect-[16/9]" src="https://www.youtube.com/embed/bhwbvFj46bM?si=nqlYzbMVieQDWXt8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                        {/* Item 2 */}
                        <div className={`duration-700 ease-in-out ${activeSlide === 1 ? "block" : "hidden"}`}>
                            <p className="font-semibold"> TRACK TICKET PRICES</p>
                            <p className="text-emerald-700 font-semibold pb-3"> Get notified if prices drop and see how they change over time..</p>

                            <iframe className="w-full aspect-[16/9]" src="https://www.youtube.com/embed/4oSLhUGGMwA?si=VQ3Ip5nMcnHpWiBJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>

                        {/* Navigation Arrows */}
                    </div>
                    <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-primary rounded-full p-2 shadow-lg hover:bg-primary/90" onClick={handlePrev} aria-label="Previous slide">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full p-2 shadow-lg hover:bg-primary/90" onClick={handleNext} aria-label="Next slide">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
                <div className="flex items-center justify-center gap-4 ">
                    <Link href="https://seatgeek.com/kendrick-lamar-tickets/east-rutherford-new-jersey-metlife-stadium-2025-05-08-7-pm/concert/17291958">
                        <button className="flex items-center gap-1 px-3 py-2 rounded-xl bg-primary text-white cursor-pointer">
                            See a real comparison <ExternalLink size={16} />
                        </button>
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=pdChLB0GKfw">
                        <button className="px-3 py-2 rounded-xl bg-white text-emerald-700 cursor-pointer border border-emerald-700">Step-by-Step Video Tutorial</button>
                    </Link>
                </div>
            </div>

            {/* Dots  */}
            <div className="flex justify-center space-x-2 ">
                {[...Array(totalSlides)].map((_, index) => (
                    <button key={index} onClick={() => setActiveSlide(index)} className={`w-3 h-3 rounded-full transition-colors ${activeSlide === index ? "bg-primary" : "bg-primary/30"}`} aria-label={`Go to slide ${index + 1}`} />
                ))}
            </div>
        </div>
    );
}

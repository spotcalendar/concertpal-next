"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel() {
    const [activeSlide, setActiveSlide] = useState(0);
    const totalSlides = 4; // Matches the actual number of slides

    const handleNext = () => {
        setActiveSlide((prev) => (prev + 1) % totalSlides);
    };

    const handlePrev = () => {
        setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <>
            <div className="w-full max-w-5xl mx-auto px-4 py-8 rounded-lg bg-white border border-slate-400">
                {/* Carousel wrapper */}
                <div className="relative bg-white px-20 p-6 mb-8">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                        {/* Item 1 */}
                        <div className={`duration-700 ease-in-out ${activeSlide === 0 ? "block" : "hidden"}`}>
                            <img src="/bg1.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Tutorial Step 1" />
                        </div>
                        {/* Item 2 */}
                        <div className={`duration-700 ease-in-out ${activeSlide === 1 ? "block" : "hidden"}`}>
                            <img src="/bg2.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Tutorial Step 2" />
                        </div>
                        {/* Item 3 */}
                        <div className={`duration-700 ease-in-out ${activeSlide === 2 ? "block" : "hidden"}`}>
                            <img src="/bg3.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Tutorial Step 3" />
                        </div>
                        {/* Item 4 - Video */}
                        <div className={`duration-700 ease-in-out ${activeSlide === 3 ? "block" : "hidden"}`}>
                            <div className="absolute top-0 left-0 w-full h-full">
                                <iframe className="w-full h-full" src="https://www.youtube.com/embed/pdChLB0GKfw" title="ConcertPal Tutorial" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                            </div>
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

                {/* Dots */}
                <div className="flex justify-center space-x-2 mt-6">
                    {[...Array(totalSlides)].map((_, index) => (
                        <button key={index} onClick={() => setActiveSlide(index)} className={`w-3 h-3 rounded-full transition-colors ${activeSlide === index ? "bg-primary" : "bg-primary/30"}`} aria-label={`Go to slide ${index + 1}`} />
                    ))}
                </div>
            </div>
        </>
    );
}


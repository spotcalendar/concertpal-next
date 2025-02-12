"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Carousel() {
    const [activeSlide, setActiveSlide] = useState(0);
    const totalSlides = 2;
    const carouselRef = useRef<HTMLDivElement>(null);
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [dragDistance, setDragDistance] = useState(0);

    const handleNext = () => {
        setActiveSlide((prev) => (prev + 1) % totalSlides);
    };

    const handlePrev = () => {
        setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const handleDragStart = (clientX: number) => {
        setStartX(clientX);
        setIsDragging(true);
        setDragDistance(0);
    };

    const handleDragMove = (clientX: number) => {
        if (!isDragging) return;
        const distance = startX - clientX;
        setDragDistance(distance);
    };

    const handleDragEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);
        if (Math.abs(dragDistance) > 50) {
            if (dragDistance > 0) {
                handleNext();
            } else {
                handlePrev();
            }
        }
        setDragDistance(0);
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        handleDragStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        handleDragMove(e.touches[0].clientX);
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        handleDragStart(e.clientX);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        handleDragMove(e.clientX);
    };

    useEffect(() => {
        const handleMouseUp = () => {
            handleDragEnd();
        };

        document.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mouseleave", handleMouseUp);

        return () => {
            document.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mouseleave", handleMouseUp);
        };
    }, [isDragging, dragDistance, handleDragEnd]);

    const getSlideStyle = (index: number) => {
        const offset = (index - activeSlide) * 100 + (isDragging ? (-dragDistance / carouselRef.current!.offsetWidth) * 100 : 0);
        return {
            transform: `translateX(${offset}%)`,
            transition: isDragging ? "none" : "transform 0.3s ease-out",
        };
    };

    return (
        <div className="flex flex-col items-center gap-4 w-full px-4 sm:px-0 ">
            <div className="w-full max-w-4xl mx-auto pt-4 pb-6 rounded-lg md:bg-white md:border md:border-slate-400 sm:border-none xs:border-none">
                {/* Carousel wrapper */}
                <div className="relative md:bg-white sm:px-20 pb-4 pt-3 ">
                    <div ref={carouselRef} className="relative overflow-hidden rounded-lg cursor-grab active:cursor-grabbing" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleDragEnd} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleDragEnd} onMouseLeave={handleDragEnd} style={{ touchAction: "pan-y" }}>
                        <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                            {/* Item 1 */}
                            <div className="flex-shrink-0 w-full" style={getSlideStyle(0)}>
                                <p className="font-semibold md:text-left sm:text-center sm:text-base">COMPARE TICKET PRICES</p>
                                <p className="text-emerald-700 font-bold pb-2 sm:pb-3 md:text-left sm:text-center sm:text-base">Find the cheapest ticket across all ticketing sites for any seat or event.</p>
                                <div className="relative">
                                    <div className="absolute inset-0 z-10" />
                                    <iframe className="w-full h-[400px] rounded-lg pointer-events-none" src="https://www.youtube-nocookie.com/embed/ikL5FPQVqmg?autoplay=1&controls=0&loop=1&playlist=ikL5FPQVqmg&mute=1&cc_load_policy=1" allowFullScreen></iframe>{" "}
                                </div>
                            </div>
                            {/* Item 2 */}
                            <div className="flex-shrink-0 w-full" style={getSlideStyle(1)}>
                                <p className="font-semibold md:text-left sm:text-center sm:text-base"> TRACK TICKET PRICES</p>
                                <p className="text-emerald-700 font-bold pb-2 sm:pb-3 md:text-left sm:text-center sm:text-base">Get notified if prices drop and see how they change over time.</p>
                                <div className="relative">
                                    <div className="absolute inset-0 z-10" />
                                    <iframe className="w-full h-[400px] rounded-lg pointer-events-none" src="https://www.youtube-nocookie.com/embed/bhwbvFj46bM?autoplay=1&controls=0&loop=1&playlist=bhwbvFj46bM&mute=1" allowFullScreen></iframe>{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Navigation Arrows */}
                    <div className="xl:invisible">
                        <button className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 text-white bg-primary rounded-full p-1 sm:p-2 shadow-lg hover:bg-primary/90 invisible md:visible sm:invisible" onClick={handlePrev} aria-label="Previous slide">
                            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 " />
                        </button>
                        <button className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full p-1 sm:p-2 shadow-lg hover:bg-primary/90 invisible md:visible xs:invisible sm:invisible" onClick={handleNext} aria-label="Next slide">
                            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-6 sm:gap-4 px-4 sm:px-0">
                    <Link href="https://seatgeek.com/kendrick-lamar-tickets/east-rutherford-new-jersey-metlife-stadium-2025-05-08-7-pm/concert/17291958" className="w-full sm:w-auto">
                        <button className="flex items-center justify-center gap-1 px-3 py-2 rounded-xl bg-primary text-white cursor-pointer w-full sm:w-auto text-base">
                            See a real comparison <ExternalLink size={16} />
                        </button>
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=ikL5FPQVqmg" className="w-full sm:w-auto">
                        <button className="px-3 py-2 rounded-xl bg-white text-emerald-700 cursor-pointer border border-emerald-700 w-full sm:w-auto text-base">Step-by-Step Video Tutorial</button>
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

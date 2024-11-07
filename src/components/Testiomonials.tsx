"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { testimonials } from "@/config/testimonial";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
const TestimonialsSlider = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 bg-white md:mt-32 select-none cursor-pointer" id="testimonials">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-4">
                    <span className="text-primary"> Users love us!</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Join satisfied users who have simplified their ticket booking experience</p>
            </div>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                className="max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl text-green-400"
                autoplay={{
                    delay: 1700,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="px-4 mb-16">
                        <Card key={testimonial.author} className={cn(" relative overflow-hidden transition-all duration-500", "hover:shadow-lg hover:-translate-y-1")}>
                            <CardContent className="p-6 flex flex-col h-full justify-between min-h-[250px]">
                                <div>
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                        ))}
                                    </div>
                                    <blockquote className="mb-6 text-muted-foreground flex-grow">"{testimonial.quote}"</blockquote>
                                </div>

                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                                        <Image src={testimonial.image} alt={testimonial.author} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <div className="font-semibold">{testimonial.author}</div>
                                        <div className="text-sm text-muted-foreground">Verified Customer</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialsSlider;

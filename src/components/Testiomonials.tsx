"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { testimonials } from "@/config/testimonial";

const TestimonialsSlider = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 bg-white" id="testimonials">
            <h2 className="text-primary text-3xl font-bold mb-8">Loved by:</h2>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                className="max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mySwiper"
                autoplay={{
                    delay: 1700,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    440: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="px-6 md:px-0">
                        <div className="text-center px-6">
                            <p className="text-lg">{`“${testimonial.quote}”`}</p>
                            <h3 className="mt-4 text-black font-medium">{testimonial.author}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialsSlider;

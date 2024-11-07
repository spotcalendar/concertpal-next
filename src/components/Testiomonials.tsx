"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { testimonials } from "@/config/testimonial";

const TestimonialsSlider = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 bg-white mt-32 select-none cursor-pointer" id="testimonials">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-[120%] tracking-tight md:tracking-[-1.92px] text-[#1D1F2C] mb-8 md:mb-16">
                Users <span className="text-[#06402B]">love us!</span>
            </h2>
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
                        <div className="bg-white min-h-[250px] shadow-lg hover:shadow-xl transition-all transform hover:scale-105 p-4 sm:p-6 md:p-8 rounded-xl text-center border border-gray-200">
                            <div className="flex justify-center mb-4">
                                {[...Array(5)].map((_, starIndex) => (
                                    <svg key={starIndex} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="#06402B">
                                        <path d="M11.8692 4.75364L9.23957 7.31622L9.86004 10.9384C9.88537 11.0989 9.82205 11.2551 9.69121 11.3522C9.61945 11.4071 9.53081 11.4324 9.44217 11.4324C9.37464 11.4324 9.30711 11.4155 9.24379 11.3859L5.99372 9.67615L2.74364 11.3859C2.60013 11.4619 2.43129 11.4493 2.30045 11.3522C2.1696 11.2593 2.10628 11.0989 2.13161 10.9384L2.75208 7.31622L0.126692 4.75364C0.0127283 4.63966 -0.0294805 4.47501 0.02117 4.32303C0.0718206 4.17105 0.202668 4.05706 0.363061 4.03595L3.99724 3.50824L5.62228 0.215307C5.76579 -0.071769 6.23853 -0.071769 6.37782 0.215307L8.00285 3.50824L11.637 4.03595C11.7974 4.06128 11.9283 4.17105 11.9789 4.32303C12.0296 4.47501 11.9874 4.63966 11.8692 4.75364Z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-sm sm:text-base md:text-lg leading-snug tracking-tight text-gray-700 mb-3">{`“${testimonial.quote}”`}</p>
                            <h3 className="text-sm sm:text-base md:text-lg font-medium text-[#161721]">{testimonial.author}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialsSlider;

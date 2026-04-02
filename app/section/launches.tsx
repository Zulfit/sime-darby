"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LaunchCard from "@/components/ui/LaunchCard";

export default function Launches() {
    const slides = [
        { image: "/images/township1.jpg", title: "Trybe Residences", location: "SJ7" },
        { image: "/images/township2.jpg", title: "Ara Bloc", location: "Ara Damansara" },
        { image: "/images/township3.jpg", title: "SJCC East One", location: "SJCC" },
        { image: "/images/township4.jpg", title: "Launch 4", location: "SJCC" },
        { image: "/images/township5.jpg", title: "Launch 5", location: "City of Elmina" },
    ];
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);
    return (
        <div className="flex flex-col items-center mt-12 mb-12">
            <h2 className="text-[30px] text-center tracking-[1px] font-bold text-[#ea0009] aos-init aos-animate" data-aos="fade-up">NEW LAUNCHES</h2>
            <p className="mb-6 text-md-center text-center aos-init aos-animate" data-aos="fade-up">Discover our latest developments across townships</p>

            {/* Dropdown Selector */}
            <div className="flex justify-center mb-8" data-aos="fade-up">
                <div className="relative">
                    <select className="appearance-none bg-gray-200/80 border-2 border-[#ea0009] rounded-full px-8 py-2 pr-12 text-sm font-bold text-black outline-none cursor-pointer w-[200px] text-left">
                        <option>All</option>
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Industrial</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black">
                        <svg className="w-4 h-4 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
            </div>

            {/* Added a wrapper container to hold the Swiper and Arrows side-by-side */}
            <div className="w-full h-[506px] max-w-[1200px] mx-auto flex justify-center items-center relative">
                
                {/* Custom Left Arrow */}
                <button className="custom-prev-btn absolute left-0 z-10 w-12 h-12 flex items-center justify-center text-[#ba0000] hover:scale-110 transition-transform cursor-pointer">
                    <ChevronLeft size={36} strokeWidth={2.5} />
                </button>

                <Swiper 
                    modules={[Pagination, Autoplay, Navigation]}
                    pagination= {{ clickable: true }}
                    navigation={{
                        prevEl: '.custom-prev-btn',
                        nextEl: '.custom-next-btn'
                    }}
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={0}
                    loop={true}
                    className="w-[1000px] h-[450px] pt-6"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            {({ isActive }) => (
                                <div className={`transition-all duration-500 flex justify-center mt-4 relative`}>
                                    <LaunchCard image={slide.image} title={slide.title} location={slide.location} highlight={false} />
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Right Arrow */}
                <button className="custom-next-btn absolute right-0 z-10 w-12 h-12 flex items-center justify-center text-[#ba0000] hover:scale-110 transition-transform cursor-pointer">
                    <ChevronRight size={36} strokeWidth={2.5} />
                </button>

            </div>
        </div>
    );
}
"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Investment() {

    const slides = [
        {
            image: "/images/investments/elmina_lakeside.jpg",
            title: "Elmina Lakeside Mall"
        },
        {
            image: "/images/investments/kl_east_mall.jpg",
            title: "KL East Mall"
        },
        {
            image: "/images/investments/KLGC_mall.jpg",
            title: "KLGCC Mall"
        },
        {
            image: "/images/investments/metrohub1.jpg",
            title: "Metrohub 1"
        },
        {
            image: "/images/investments/metrohub2.jpg",
            title: "Metrohub 2"
        },
        {
            image: "/images/investments/oasis.jpg",
            title: "Oasis Block G & F"
        },
        {
            image: "/images/investments/regen_rehab.jpg",
            title: "Regen Rehab"
        },
    ];

    return (
        <section className="h-[500px] w-full flex flex-col relative">
            <div className="w-full flex justify-center items-center flex-col">
                <h2 className="text-[30px] text-center tracking-[1px] font-bold text-[#ea0009] pb-[16px]">INVESTMENT</h2>
                <button className="w-48 h-8 flex items-center justify-center text-[#ba0000] font-bold bg-white rounded-full py-6 shadow-[0_5px_20px_rgba(0,0,0,0.2)]">Learn More</button>
            </div>
            
            {/* Added a wrapper container to hold the Swiper and Arrows side-by-side */}
            <div className="w-full max-w-[1240px] mx-auto flex justify-center items-center pt-6 relative">
                
                {/* Custom Left Arrow */}
                <button className="custom-prev-btn absolute left-0 z-10 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.15)] text-[#ba0000] hover:scale-110 transition-transform cursor-pointer">
                    <ChevronLeft size={28} />
                </button>

                <Swiper 
                    modules={[Pagination, Autoplay, Navigation]}
                    pagination= {{ clickable: true }}
                    navigation={{
                        prevEl: '.custom-prev-btn',
                        nextEl: '.custom-next-btn'
                    }}
                    autoplay= {{ delay: 5000 }}
                    loop={true}
                    className="w-[1032px] h-[400px] rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.1)] mx-auto"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div 
                                className="w-[1032px] h-[400px] bg-cover bg-center rounded-2xl overflow-hidden"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >
                                <div className="absolute right-4 top-4 text-[14px] text-white text-shadow-[3px_2px_3px_black] px-4 py-2 font-bold bg-black/30 rounded-lg">
                                    {slide.title}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Right Arrow */}
                <button className="custom-next-btn absolute right-0 z-10 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.15)] text-[#ba0000] hover:scale-110 transition-transform cursor-pointer">
                    <ChevronRight size={28} />
                </button>

            </div>
        </section>
    );
}
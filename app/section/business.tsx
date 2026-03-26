"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
    {
        title: "Residential",
        subtitle: "Building Thriving Communities.",
        image: "/images/business_card/residential.jpg",
    },
    {
        title: "Commercial",
        subtitle: "Creating progressive business hubs that shape the future of work",
        image: "/images/business_card/commercial.jpg",
    },
    {
        title: "Industrial",
        subtitle: "Your Go-To Industrial Experts.",
        image: "/images/business_card/industrial.jpg",
    },
    {
        title: "Retail",
        subtitle: "Curating Unique Retail Experiences.",
        image: "/images/business_card/retail.jpg",
    },
    {
        title: "Leisure",
        subtitle: "World-Class Lifestyle Destinations.",
        image: "/images/business_card/leisure.jpg",
    },
    {
        title: "Investment",
        subtitle: "Pursuing Strategic Investments.",
        image: "/images/business_card/investment.jpg",
    },
];

export default function Business() {
    const [active, setActive] = useState(5);

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    return (
        <div className="w-full flex flex-col justify-center my-10">
            <div className="w-full flex flex-col justify-center">
                <h2 className="text-[30px] text-center tracking-[1px] font-bold text-[#ea0009] aos-init aos-animate" data-aos="fade-up">OUR BUSINESS</h2>
                <p className="mb-3 text-md-center text-center aos-init aos-animate" data-aos="fade-up">Advancing real estate in all our ventures.</p>
            </div>
            <div className="flex gap-2 w-full h-[400px] mx-auto justify-center">
                {data.map((item, index) => (
                    <div 
                    key={index} 
                    onMouseEnter={() => setActive(index)}
                    className={`relative rounded-3xl overflow-hidden cursor-pointer box-shadow-[4px_2px_17px_9px_#00000082] transition-all delay-100 duration-1000
                        ${active === index ? "w-[600px]" : "w-[180px]"}`}
                        style={{
                            marginLeft: index !== 0 ? "-80px" : "0px",
                            zIndex: index
                        }}
                    >
                        {/* Background Image */}
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/20"></div>

                        {/* Content */}
                        <div className={`absolute w-[268px] bottom-5 left-5 transition-all duration-500
                            ${active === index ? "opacity-100" : "opacity-0"}`}>
                            <h2 className="text-white text-[17px] font-bold text-shadow-[3px_2px_3px_black]">{item.title}</h2>
                            <p className="text-white text-[15px] font-bold text-shadow-[3px_2px_3px_black]">{item.subtitle}</p>
                        </div>

                        {/* Vertical Text (inactive) */}
                        {active !== index && (
                            <div className="absolute w-[142px] bottom-18 left-10 -translate-x-1/2 rotate-270">
                                <h2 className="text-white text-20px font-semibold text-shadow-[3px_2px_3px_black]">{item.title}</h2>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>  
    );
}
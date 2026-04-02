"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Launches() {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);
    return (
        <div>
            <h2 className="text-[30px] text-center tracking-[1px] font-bold text-[#ea0009] aos-init aos-animate" data-aos="fade-up">NEW LAUNCHES</h2>
            <p className="mb-3 text-md-center text-center aos-init aos-animate" data-aos="fade-up">Discover our latest developments across townships</p>
            <input type="text" placeholder="Search" /> {/* TODO: scroll down to filter by All, Residential, Commercial, Industrial */}
        </div>
    );
}
"use client";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const slides = [
    {
      image: "/images/slide0.jpg",
      title: "A BOLD NEW ERA BEGINS",
      subtitle:
        "We’re expanding into greater possibilities with reach that span across residential, retail, industrial, investment & asset management, multiplying values for people, businesses, economies, and the planet.",
    },
    {
      image: "/images/slide1.jpg",
      title: "Property Development",
      subtitle: "Building Thriving Communities.",
    },
    {
      image: "/images/slide2.jpg",
      title: "Industrial",
      subtitle: "Your Go-To Industrial Experts.",
    },
    {
      image: "/images/slide3.jpg",
      title: "Retail",
      subtitle: "Curating Unique Retail Experiences.",
    },
    {
      image: "/images/slide4.jpg",
      title: "Investment",
      subtitle: "Pursuing Strategic Investments.",
    },
  ];

  const texts = ["City of Elmina", "New Launch", "Properties", "News"];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const typingSpeed = isDeleting ? 30 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        // Finished typing
        if (charIndex === currentText.length) {
          setTimeout(() => setIsDeleting(true), 900); // pause before delete
        }
      } else {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        // Finished deleting
        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);


  return (
    <section className="relative w-full h-screen">
      {/* Slider */}
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <Image
                src={slide.image}
                alt={`Hero`}
                fill
                className="object-cover"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
                <div className="flex flex-col justify-center items-center text-center px-4 z-10">
                  <h1 className="text-white text-32 md:text-5xl font-semibold mb-4 max-w-3xl">
                    {slide.title}
                  </h1>

                  <p className="text-white/80 text-16 md:text-xl mb-6 max-w-2xl">
                    {slide.subtitle}
                  </p>
                </div>
                {/* Search Bar */}
                <div className="flex justify-center items-end w-full h-48">
                  <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg w-full max-w-xl pr-1">
                    <input
                      type="text"
                      placeholder={displayText}
                      className="flex-1 px-5 py-3 outline-none text-black-700 font-semibold"
                    />
                    <button className="btn-search-md flex items-center justify-center">
                      <Search size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

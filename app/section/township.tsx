"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  { id: 1, title: "Bandar Bukit Raja", img: "/images/township1.jpg" },
  { id: 2, title: "SJ7", img: "/images/township2.jpg" },
  { id: 3, title: "Serenia City", img: "/images/township3.jpg" },
  { id: 4, title: "Bandar Universiti Pagoh", img: "/images/township4.jpg" },
  { id: 5, title: "Nilai Impian", img: "/images/township5.jpg" },
  { id: 6, title: "Planters Haven", img: "/images/township6.jpg" },
  { id: 7, title: "Bandar Ainsdale", img: "/images/township7.jpg" },
  { id: 8, title: "Ara Damansara", img: "/images/township8.jpg" },
  { id: 9, title: "Subang Jaya", img: "/images/township9.jpg" },
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function Township() {
  const [active, setActive] = useState(2);

  const next = () => setActive((prev) => (prev + 1) % items.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + items.length) % items.length);

  return (
    <section className="w-full flex flex-col justify-center my-10 h-[600px] overflow-hidden">
      <div className="w-full flex flex-col justify-center mt-10 gap-2">
        <h2
          className="text-[30px] text-center tracking-[1px] font-bold text-[#ea0009] aos-init aos-animate"
          data-aos="fade-up"
        >
          TOWNSHIP DEVELOPMENTS
        </h2>
        <p
          className="mb-3 text-md-center text-center aos-init aos-animate"
          data-aos="fade-up"
        >
          Creating Thriving Communities
        </p>
      </div>
      <div className="relative flex items-center justify-center h-full w-full" style={{ perspective: "1200px" }}>
        <AnimatePresence initial={false}>
          {items.map((item, index) => {
            //Calculate distance from active card (circular shortest path)
            const n = items.length;
            let offset = index - active;
            if (offset > n / 2) offset -= n;
            if (offset < -n / 2) offset += n;
            
            const absOffset = Math.abs(offset);

            // Bowl arc: center sits at the bottom (smallest), sides rise up and grow
            const spacing = 300;
            const translateX = offset * spacing;
            const translateZ = -Math.abs(offset) * 100;       
            const rotateY = offset * -25;
            const translateY = Math.abs(offset) * -20;
            const scale = offset === 0 ? 1 : 0.8;    // active = 1.0, others smaller

            const zIndex = items.length - absOffset;
            const opacity = absOffset > 3 ? 0 : 1;

            return (
              <motion.div
                key={item.id}
                className="absolute w-80 h-96 rounded-3xl bg-cover bg-center shadow-[0_15px_30px_rgba(0,0,0,0.3)] cursor-grab active:cursor-grabbing"
                style={{
                  backgroundImage: `url(${item.img})`,
                  zIndex: zIndex,
                  transformStyle: "preserve-3d",
                }}
                initial={false}
                animate={{
                  x: translateX,
                  y: translateY,
                  z: translateZ,
                  scale: scale,
                  rotateY: rotateY,
                  opacity: opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 1,
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    next();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prev();
                  }
                }}
              >
                  <div className="absolute bottom-6 w-full text-center text-white px-4">
                      <h3 className="mb-2 text-lg font-bold drop-shadow-md">{item.title}</h3>
                      <button className="text-red-600 px-5 py-2 rounded-full text-sm font-semibold bg-white hover:bg-gray-100 transition-colors shadow-lg">Learn More</button>
                  </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <button onClick={prev} className="absolute left-10 z-50 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.15)] text-[#ba0000] hover:scale-110 transition-transform cursor-pointer">
        <ChevronLeft size={28} />
      </button>
      <button onClick={next} className="absolute right-10 z-50 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.15)] text-[#ba0000] hover:scale-110 transition-transform cursor-pointer">
        <ChevronRight size={28} />
      </button>
    </section>
  );
}

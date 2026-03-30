"use client";

import { useState } from "react";

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

export default function Township() {
  const [active, setActive] = useState(2);

  const next = () => setActive((prev) => (prev + 1) % items.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + items.length) % items.length);
  return (
    <section className="w-full flex flex-col justify-center my-10 h-[600px]">
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
      <div className="relative flex items-center justify-center h-full w-full">
        {items.map((item, index) => {
          //Calculate distance from active card (circular shortest path)
          const n = items.length;
          let offset = index - active;
          if (offset > n / 2) offset -= n;
          if (offset < -n / 2) offset += n;
          
          const absOffset = Math.abs(offset);

          // Bowl arc: center sits at the bottom (smallest), sides rise up and grow
          const translateX = offset * 175;
          const translateY = absOffset * -45;        // sides arc upward symmetrically
          const scale = 0.75 + absOffset * 0.10;    // center=0.75, ±1=0.85, ±2=0.95, ±3=1.05
          const rotateZ = offset * -6;               // cards tilt to follow the arc curve

          const zIndex = items.length - absOffset;
          const opacity = absOffset > 3 ? 0 : 1;

          return (
            <div
              key={item.id}
              className="absolute w-64 h-80 rounded-3xl transition-all duration-500 ease-in-out bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage: `url(${item.img})`,
                transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotate(${rotateZ}deg)`,
                zIndex: zIndex,
                opacity: opacity,
              }}
            >
                <div className="absolute bottom-6 w-full text-center text-white px-4">
                    <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                    <button className="btn-white text-red-600 px-4 py-2 rounded-full text-sm font-semibold bg-white">Learn More</button>
                </div>
            </div>
          );
        })}
      </div>

      <button onClick={prev} className="absolute left-10 z-50 text-4xl text-red-600">{'<'}</button>
      <button onClick={next} className="absolute right-10 z-50 text-4xl text-red-600">{'>'}</button>
    </section>
  );
}

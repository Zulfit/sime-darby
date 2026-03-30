"use client";

import { Menu, Search } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-16 bg-linear-to-t from-transparent to-[#141414c2] ${scrolled ? "backdrop-blur-sm" : ""}`}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <div className="flex items-center pr-16">
          <a href="/" className="flex items-center">
            <Image
              src="/images/logo_simedarby.png"
              alt="Logo"
              width={60}
              height={60}
              style={{ width: "auto" }}
            />
          </a>
        </div>
        {/* Navigation */}
        <div className="flex-1 items-center">
          <nav className="hidden md:flex items-center gap-8 text-white font-medium text-sm">
            <a href="#">About Us</a>
            <a href="#">Our Business</a>
            <a href="#">Investor Relations</a>
            <a href="#">Sustainability</a>
            <a href="#">SDP Capital</a>
            <a href="#">Contact Us</a>
          </nav>
        </div>
        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <button className="btn-search-sm w-12 h-8 flex items-center justify-center">
            <Search width={14} height={14} />
          </button>

          {/* Hamburger */}
          <button className="font-bold text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}

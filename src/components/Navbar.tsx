"use client";

import { navItems } from "@/data";
import { PersonStanding } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


export default function Navbar() {

  const [active, setActive] = useState("");
  const handleClick = (item: any) => {
    setActive(item.name);

    document.getElementById(item.link)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full flex justify-center mb-30 px-4">
      <div className="flex items-center justify-between w-full max-w-5xl bg-black/30 backdrop-blur-xl border border-white/40 rounded-full px-4 py-2 shadow-lg">

        {/* Logo */}
        <div className="flex items-center gap-4 bg-gradient-to-r from-[#CC66DA] via-[#6A42C2] to-[#B0FFFA] bg-clip-text text-transparent font-medium text-xl ">
          <div className="w-8 h-8 flex items-center justify-center rounded-md bg-[#9929EA] text-white font-bold">
            <a href="#">R</a>
          </div>
          <span> Welcome !</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-2 flex-1 justify-center">
          {navItems
            .filter((item) => item.name !== "Contact")
            .map((item) => (
              <button
                key={item.link}
                onClick={() => handleClick(item)}
                className={`px-4 py-1.5 rounded-full text-base transition cursor-pointer ${active === item.name
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {item.name}
              </button>
            ))}
        </div>
        {/* Contact Button */}
        <div className="hidden md:flex">
          {navItems
            .filter((item) => item.name === "Contact")
            .map((item) => (
              <button
                key={item.link}
                onClick={() => handleClick(item)}
                className="flex items-center bg-gradient-to-r from-[#CC66DA] to-[#6A42C2] text-white font-bold px-5 py-2 rounded-full text-sm hover:opacity-90 transition cursor-pointer"
              >
                {item.name}
                <PersonStanding className="ml-2" size={18} />
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
"use client";

import { experiences } from "@/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Experience = () => {
  const ref = useRef(null);

  // Scroll progress for timeline
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-32 px-6 pt-0 max-w-6xl mx-auto text-white"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl text-center mb-20">
        My <span className="text-purple-400 font-bold">Work Experience</span>
      </motion.h1>

      <div className="relative flex">
        {/* Sticky Timeline */}
        <div className="sticky top-32 h-[70vh] w-10 flex justify-center">
          <div className="relative w-[2px] bg-white/20 h-full">
            <motion.div
              style={{ height }}
              className="absolute top-0 left-0 w-[2px] bg-[#6c47ff]"
            />
          </div>
        </div>

        {/* Experience Cards */}
        <div className="flex-1 space-y-20">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Dot */}
              <div className="absolute -left-[34px] top-5 w-4 h-4 bg-[#6c47ff] rounded-full shadow-lg group-hover:scale-125 transition-transform" />

              {/* Card */}
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl hover:bg-white/20 transition duration-300">
                <h3 className="text-2xl font-semibold">
                  {exp.role}
                </h3>

                <p className="text-sm text-gray-300 mt-1">
                  {exp.company} • {exp.duration}
                </p>

                <ul className="mt-4 space-y-2 text-sm leading-relaxed">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="opacity-80">
                      • {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tech.split(", ").map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
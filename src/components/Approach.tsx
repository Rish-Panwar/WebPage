"use client";

import { motion } from "framer-motion";
import CanvasReveal from "./ui/canvas-reveal";
import { steps } from "@/data";



export default function Approach() {
    return (
        <section
            id="approach"
            className="relative py-32 px-6 w-full mx-auto text-white overflow-hidden">
            <CanvasReveal />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent z-10 via-black  to to-[#6c47ff]/10 " />

            {/* Content */}
            <div className="relative z-20">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl text-center mb-20">
                    My <span className="text-purple-400 font-bold">Approach</span>
                </motion.h1>

                <div className="grid md:grid-cols-2 gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl hover:bg-white/20 transition duration-300"
                        >
                            <h3 className="text-2xl font-semibold text-purple-600">
                                {step.title}
                            </h3>
                            <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
            {/* Bottom Blend Glow */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-[#6c47ff]/10 to-black pointer-events-none" />
        </section>
    );
}
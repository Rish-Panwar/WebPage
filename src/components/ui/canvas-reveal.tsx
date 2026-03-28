"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CanvasReveal() {
  const ref = useRef<HTMLDivElement>(null);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Track mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;

      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll spotlight
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const spotlightOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 0.4, 0.8, 1]
  );

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      {/* Pulsing Dot Grid */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(108,71,255,0.5) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Moving Gradient Flow */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, rgba(108,71,255,0.15), transparent, rgba(108,71,255,0.2))",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Mouse Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: mouse.x - 150,
          top: mouse.y - 150,
          width: 300,
          height: 300,
          background:
            "radial-gradient(circle, rgba(108,71,255,0.25), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Scroll Spotlight */}
      <motion.div
        style={{ opacity: spotlightOpacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(108,71,255,0.15),transparent_70%)]" />
      </motion.div>

      {/* Soft Blur Layer */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />
    </div>
  );
}
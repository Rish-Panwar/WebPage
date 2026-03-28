"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Contact({ open, setOpen }: any) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;
    const formData = {
      name: form[0].value,
      email: form[1].value,
      message: form[2].value,
    };

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      console.log("STATUS:", res.status);

      if (res.ok) {
        setSuccess(true);
        form.reset();

        setTimeout(() => {
          setOpen(false);
          setSuccess(false);
        }, 3000);
      }
    } catch (err) {
      console.error("ERROR:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white text-xl z-10"
              >
                ✕
              </button>

              {/* Glow */}
              <div className="absolute inset-0 bg-purple-500/10 blur-3xl pointer-events-none rounded-2xl" />

              {/* Glass Card */}
              <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">

                {/* Heading */}
                <h2 className="text-3xl text-center mb-10">
                  Get <span className="text-purple-400 font-bold">In Touch</span>
                </h2>

                {/* Form */}
                {success ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center justify-center py-16"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                      <span className="text-green-400 text-3xl">✓</span>
                    </div>

                    <p className="text-lg font-medium">Message Sent Successfully!</p>
                    <p className="text-sm text-gray-400 mt-1">
                      I’ll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#6c47ff]"
                    />

                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#6c47ff]"
                    />

                    <textarea
                      placeholder="Your Message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#6c47ff]"
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#6c47ff] hover:bg-[#5a3de0] transition py-3 rounded-lg font-medium"
                    >
                      {loading ? (
                        <span className="animate-pulse">Sending...</span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
"use client";
import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";
import { motion } from "framer-motion";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "SEO Optimized",
  "Fast Loading",
  "Modern UI/UX",
  "Production Ready",
];

export const TapeSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-16 lg:py-24 overflow-x-clip"
    >
      {/* Glow Background */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-300/20 to-sky-400/20 blur-2xl opacity-50" />

        <div className="relative bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1 rounded-xl shadow-lg">
          <div className="flex items-center justify-center [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

            <div className="flex flex-none gap-6 pr-6 py-4 animate-move-left hover:[animation-play-state:paused] [animation-duration:25s]">

              {[...new Array(2)].fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {words.map((word) => (
                    <motion.div
                      key={word + idx}
                      whileHover={{ scale: 1.1 }}
                      className="inline-flex items-center gap-4 group"
                    >
                      <span className="text-gray-900 uppercase font-extrabold text-sm tracking-wider group-hover:text-black transition">
                        {word}
                      </span>

                      <StarIcon className="size-6 text-gray-900 -rotate-12 group-hover:rotate-12 transition-transform duration-300" />
                    </motion.div>
                  ))}
                </Fragment>
              ))}

            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
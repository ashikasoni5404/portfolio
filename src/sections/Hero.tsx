"use client";
import Link from "next/link";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import { SplineModel } from "@/components/SplineModel";
import { motion } from "framer-motion";

const words = [
  { text: "Hi", delay: 0.1, gradient: false, small: false },
  { text: "I'm", delay: 0.4, gradient: false, small: false },
  { text: "Ashika", delay: 0.75, gradient: true, small: false },
  { text: "Soni", delay: 1.1, gradient: false, small: false },
  { text: "Frontend Developer", delay: 1.55, gradient: false, small: true },
];

const wordVariants = {
  hidden: { opacity: 0, y: 48, rotate: -3 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.55,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const HeroSection = () => {
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) window.scrollTo({ top: el.offsetTop - 20, behavior: "smooth" });
  };

  return (
    <section
      className="py-40 md:py-72 lg:py-72 relative z-0 overflow-x-clip"
      id="hero"
    >
      {/* Background rings & orbits */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5 pointer-events-none"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        />
        <div className="size-[620px] hero-ring" />
        <div className="size-[820px] hero-ring" />
        <div className="size-[1020px] hero-ring" />
        <div className="size-[1220px] hero-ring" />

        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={500} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <StarIcon className="size-20 text-emerald-300" />
        </HeroOrbit>
      </div>

      <div className="container relative mt-28 md:mt-auto z-[2] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Spline 3D model */}
          <div className="w-full h-[350px] md:h-[400px] -top-52 md:-top-60 absolute -z-10 rounded-br-full ml-16 overflow-hidden">
            <SplineModel />
          </div>

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-950 border border-gray-800 px-3 sm:px-4 py-1.5 sm:py-2 inline-flex items-center gap-2 sm:gap-4 rounded-lg sm:rounded-xl"
          >
            <div className="bg-green-500 size-2 sm:size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full" />
            </div>
            <div className="text-xs sm:text-sm font-medium">
              Available for new projects
            </div>
          </motion.div>
        </div>

        {/* Word-by-word headline */}
        <div className="max-w-2xl mx-auto mt-8 sm:mt-12 lg:mt-16">
          <div className="flex flex-wrap justify-center items-baseline gap-x-4 gap-y-2">
            {words.map(({ text, delay, gradient, small }) => (
              <motion.span
                key={text}
                custom={delay}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
                className={[
                  "font-serif tracking-wide leading-tight",
                  small
                    ? "text-xl sm:text-2xl md:text-3xl text-white/40 font-light"
                    : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
                  gradient
                    ? "bg-gradient-to-r from-emerald-300 via-sky-400 to-emerald-300 bg-clip-text text-transparent"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {text}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.1 }}
            className="mt-4 sm:mt-6 text-center text-white/60 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto leading-relaxed"
          >
            I specialize in transforming designs into functional,
            high-performing web applications. Let&apos;s discuss your next
            project.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.3 }}
          className="flex flex-col md:flex-row justify-center items-center mt-8 sm:mt-12 lg:mt-16 gap-4 sm:gap-6 w-full max-w-md mx-auto"
        >
          <Link href="#projects" onClick={(e) => handleAnchorClick(e, "projects")}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl group cursor-pointer"
            >
              <span className="font-semibold group-hover:text-emerald-300 transition-colors">
                Explore My Work
              </span>
              <ArrowDown className="size-4 group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </Link>
          <a href="/ashika-soni-mohali.pdf" download>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl group cursor-pointer"
            >
              <span className="group-hover:rotate-12 transition-transform"></span>
              <span className="font-semibold">Download CV</span>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
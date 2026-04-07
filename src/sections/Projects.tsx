"use client";
import transferx from "@/assets/images/transferx.png";
import docnow from "@/assets/images/docnow.png";
import gradegenie from "@/assets/images/gradegenie.png";
import homebudget from "@/assets/images/homebudget.png";
import pixelarena from "@/assets/images/pixelarena.png"
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { motion } from "framer-motion";

const portfolioProjects = [
  {
    title: "Ahuja Books",
    company: "E-commerce Platform",
    year: "2025",
    description:
      "A complete book e-commerce platform supporting user, seller, admin, and super-admin roles with seamless product management and order processing.",
    link: "https://ahujabooks.com/",
    image: "/AHUJA.png",
    results: [
      { title: "Multi-role System (User, Seller, Admin)" },
      { title: "Product & Order Management" },
      { title: "Secure Payment & Checkout Flow" },
    ],
  },
  {
    title: "Gyms Advisor",
    company: "UK Gym Platform",
    year: "2025",
    description:
      "A UK-based gym discovery platform where users can explore gyms, leave reviews, and gym owners can claim and manage their listings.",
    link: "https://www.gymsadvisor.com/",
    image: "/Gym.png",
    results: [
      { title: "Gym Listing & Discovery" },
      { title: "Review & Rating System" },
      { title: "Claim & Report Features" },
    ],
  },
  {
    title: "Flood Relief System",
    company: "NGO Platform",
    year: "2024",
    description:
      "A real-time flood response platform where NGOs can register and report nearby issues to streamline relief efforts during emergencies.",
    link: "https://floods.sarkarekhalsa.org/",
    image: "/flood.png",
    results: [
      { title: "NGO Registration System" },
      { title: "Real-time Issue Reporting" },
      { title: "Disaster Response Coordination" },
    ],
  },
  {
    title: "TV84 Media",
    company: "Media Platform",
    year: "2025",
    description:
      "A media platform featuring news articles, podcasts, and pictorial content with category filters, newsletter integration, and geo-restriction features.",
    link: "https://tv84.com/",
    image: "/tv84.png",
    results: [
      { title: "News, Podcast & Media Content" },
      { title: "Category & Subcategory Filters" },
      { title: "Geo-restriction & Newsletter System" },
    ],
  },
  {
    title: "Tejas InfoTech",
    company: "IT Services",
    year: "2024",
    description:
      "A corporate IT services website offering web, app, and digital marketing solutions with a strong focus on branding and lead generation.",
    link: "https://www.tejasinfo.com/",
    image: "/tejas.png",
    results: [
      { title: "Web & App Development Services" },
      { title: "Digital Marketing Solutions" },
      { title: "Lead Generation Optimization" },
    ],
  },
];


export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow={"What I’ve Built"}
          title={"Turning Ideas into Scalable Products"}
          description={
            "A collection of production-ready applications crafted with clean architecture, seamless UX, and real business value."
          }
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{ top: `calc(64px + ${projectIndex * 40}px` }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex items-center gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </motion.button>
                  </a>
                </div>
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-tl-3xl rounded-tr-3xl md:rounded-tl-3xl mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    />
                  </motion.div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

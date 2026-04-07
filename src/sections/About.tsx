"use client"
import Image from "next/image"
import { Card } from "@/components/Card"
import { SectionHeader } from "@/components/SectionHeader"
import bookImage from "@/assets/images/book-cover.png"
import JavascriptIcon from "@/assets/icons/js.svg"
import HTMLIcon from "@/assets/icons/html5.svg"
import CSSIcon from "@/assets/icons/css3.svg"
import ReactIcon from "@/assets/icons/react.svg"
import GithubIcon from "@/assets/icons/github.svg"
import GitIcon from "@/assets/icons/git.svg"
import NextJsIcon from "@/assets/icons/nextjs.svg"
import NodeJsIcon from "@/assets/icons/nodejs.svg"
import CppIcon from "@/assets/icons/cpp.svg"
import TailwindIcon from "@/assets/icons/tailwind.svg"
import TypescriptIcon from "@/assets/icons/typescript.svg"
import VSCodeIcon from "@/assets/icons/vscode.svg"
import profileImage from "../../public/my.png"
import { CardHeader } from "@/components/CardHeader"
import { ToolboxItems } from "@/components/ToolboxItems"
import { motion } from "framer-motion"
import { useRef } from "react"

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "Html5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "TypeScript",
    iconType: TypescriptIcon,
  },
  {
    title: "Git",
    iconType: GitIcon,
  },
  {
    title: "C++",
    iconType: CppIcon,
  },
  {
    title: "NodeJs",
    iconType: NodeJsIcon,
  },
  {
    title: "NextJs",
    iconType: NextJsIcon,
  },
  {
    title: "Tailwind",
    iconType: TailwindIcon,
  },
  {
    title: "VSCode",
    iconType: VSCodeIcon,
  },
]

const hobbies = [
  { title: "Talking to New People", emoji: "🗣️", left: "5%", top: "5%" },
  { title: "Listening", emoji: "👂", left: "50%", top: "5%" },
  { title: "Badminton", emoji: "🏸", left: "35%", top: "40%" },
  { title: "Music", emoji: "🎧", left: "10%", top: "35%" },
  { title: "Riding", emoji: "🏍️", left: "70%", top: "45%" },
];

export const AboutSection = () => {
  const constrainRef = useRef(null)
  return (
    <section className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="Who I Am"
          title="More Than Just Code"
          description="I’m a developer driven by curiosity, creativity, and a passion for building meaningful digital experiences."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1 overflow-hidden group"
            >
              {/* Dark Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black"></div>

              {/* Geometric Halo (Removed as per user request) */}

              {/* Chromatic Prism Effect */}
              <div className="h-full w-full relative flex items-end justify-center">
                {/* Red Channel (Left Shift) */}
                <div className="absolute inset-0 flex items-end justify-center mix-blend-screen opacity-0 group-hover:opacity-70 transition-opacity duration-300 group-hover:translate-x-[-4px] pointer-events-none">
                  <Image
                    src={profileImage || "/placeholder.svg"}
                    alt="Chromatic Red"
                    className="h-[90%] w-auto object-cover object-bottom opacity-80"
                    style={{ filter: 'sepia(100%) saturate(300%) hue-rotate(-50deg)' }}
                  />
                </div>

                {/* Blue Channel (Right Shift) */}
                <div className="absolute inset-0 flex items-end justify-center mix-blend-screen opacity-0 group-hover:opacity-70 transition-opacity duration-300 group-hover:translate-x-[4px] pointer-events-none">
                  <Image
                    src={profileImage || "/placeholder.svg"}
                    alt="Chromatic Blue"
                    className="h-[90%] w-auto object-cover object-bottom opacity-80"
                    style={{ filter: 'sepia(100%) saturate(300%) hue-rotate(180deg)' }}
                  />
                </div>

                {/* Main Image */}
                <Image
                  src={profileImage || "/placeholder.svg"}
                  alt="Abdul Ahad - Professional Profile"
                  className="h-[90%] w-auto object-cover object-bottom relative z-10 grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Film Grain Overlay */}
              <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
            </Card>
            <Card
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="h-[320px] md:col-span-3 lg:col-span-2"
            >
              <CardHeader
                title="Tools I Work With"
                description="From frontend to backend, these are the technologies that power the solutions I create."
              />
              <ToolboxItems items={toolboxItems} itemsWrapperClassName="animate-move-left [animation-duration:40s]" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:20s]"
              />
            </Card>
          </div>
          
        </div>
      </div>
    </section>
  )
}

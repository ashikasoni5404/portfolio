"use client";

import Link from "next/link";
import Scrollspy from "react-scrollspy";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export const Header = () => {
  const links = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "About", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const linkRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialized(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isDropdownOpen &&
        !(event.target as Element).closest(".dropdown-container")
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    index: number
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        setIsDropdownOpen(false);
        setActiveIndex(index);

        setTimeout(() => {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
        }, 50);
      }
    }
  };

  return (
    <div className="w-full flex justify-center items-center fixed top-3 z-50">
      <motion.nav
        initial={{ width: 64, opacity: 0 }}
        animate={{
          width: isMobile ? "calc(100% - 32px)" : "auto",
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
          delay: 0.1,
        }}
        className="flex gap-4 md:gap-10 p-2 border border-white/15 rounded-full bg-white/10 backdrop-blur items-center justify-between md:overflow-hidden"
      >
      
        {/* Navigation */}
        <motion.div
          className="flex items-center gap-4 md:gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <Scrollspy
            items={["hero", "projects", "about", "contact"]}
            currentClassName=""
            className="flex gap-1 p-2 rounded-full bg-gray-900 relative overflow-visible min-w-[120px] md:min-w-0 justify-center items-center"
            offset={-50}
            onUpdate={(el) => {
              if (el) {
                const index = links.findIndex(
                  (link) => link.id === el.id
                );
                if (index !== -1) setActiveIndex(index);
              }
            }}
          >
            {/* Active Background */}
            {isInitialized && (
              <motion.div
                className="absolute bg-white rounded-full hidden md:block"
                initial={false}
                animate={{
                  x:
                    (linkRefs.current[activeIndex]?.offsetLeft ?? 0) +
                    (linkRefs.current[activeIndex]?.offsetWidth ?? 0) / 2 -
                    187,
                  width:
                    linkRefs.current[activeIndex]?.offsetWidth ?? 0,
                  height:
                    linkRefs.current[activeIndex]?.offsetHeight ?? 0,
                  top:
                    linkRefs.current[activeIndex]?.offsetTop ?? 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
              />
            )}

            {/* Desktop Links */}
            <li className="hidden md:flex gap-1">
              {links.map((link, index) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="nav-item relative z-10 text-sm md:text-base"
                  ref={(el) => {
                    linkRefs.current[index] = el;
                  }}
                  style={{
                    color:
                      activeIndex === index
                        ? "#111827"
                        : "rgba(255, 255, 255, 0.7)",
                  }}
                  onClick={(e) =>
                    handleAnchorClick(e, link.href, index)
                  }
                >
                  {link.name}
                </Link>
              ))}
            </li>

            {/* Mobile Dropdown */}
            <li className="md:hidden relative dropdown-container z-30">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="nav-item relative z-10 text-sm flex items-center gap-2 px-4 py-2 rounded-full bg-gray-500"
              >
                {isInitialized && (
                  <motion.div
                    className="absolute bg-white rounded-full inset-0"
                    animate={{
                      opacity: isDropdownOpen ? 0 : 1,
                    }}
                  />
                )}
                <span className="relative z-10">
                  {links[activeIndex].name}
                </span>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 bg-gray-900 rounded-xl border border-white/15 overflow-hidden"
                  >
                    {links.map((link, index) => (
                      <Link
                        key={link.id}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-center"
                        onClick={(e) =>
                          handleAnchorClick(
                            e,
                            link.href,
                            index
                          )
                        }
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </Scrollspy>
        </motion.div>
      </motion.nav>
    </div>
  );
};
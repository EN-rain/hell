import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "../../lib/utils";

export const navItems = [
  { name: "About", link: "#Section1" },
  { name: "Skills", link: "#Section2" },
  { name: "Experience", link: "#Section3" },
  { name: "Project", link: "#Section4" },
  { name: "Contact", link: "#Section5" },
];

export const FloatingNav = ({ className }) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  // Show the navbar when scrolled past 90vh
  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof window !== "undefined") {
      const ninetyVH = window.innerHeight * 0.9;
      setVisible(current >= ninetyVH);
    }
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}    // Start slightly above and fully transparent
          animate={{ y: 0, opacity: 1 }}      // normal position and fully visible
          exit={{ y: -20, opacity: 0 }}       // Fade out and slide up on exit
          transition={{ duration: 0.5, ease: "easeInOut" }}  //duration for smoother fade
          className={cn(
            "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-5 inset-x-0 mx-auto px-10 py-4 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
            className
          )}
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.75)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              scroll={false}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-white dark:hover:text-neutral-300 hover:text-purple-500"
              )}
              onClick={(e) => {
                e.preventDefault(); 
                const targetSection = document.querySelector(navItem.link);
                
                if (targetSection) {
                  targetSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  console.error('Section not found:', navItem.link);
                }
              }} 
            >
              <span className="text-sm !cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

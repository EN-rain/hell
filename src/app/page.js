'use client';
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from '@studio-freight/lenis';
import { Section1, Section2, Section3, Section4, Section5 } from './components/Section';
import ZoomParallax from '../app/components/ZoomParallax/index2';

export default function Home() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <div className="relative bg-[#1E0137]">
        <ZoomParallax />
      </div>
      <div ref={container} className="relative h-[500vh] bg-black">
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
        <Section3 scrollYProgress={scrollYProgress} />
        <Section4 scrollYProgress={scrollYProgress} />
        <Section5 scrollYProgress={scrollYProgress} />
      </div>
    </>
  );
}

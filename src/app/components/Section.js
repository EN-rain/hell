'use client';
import Image from "next/image";
import { useTransform, motion } from "framer-motion";
import Profile from './Profile'; 
import Experience from './Experience'; 
import Footer from "./Footer";
import { CardHoverEffectDemo } from './Skills';
import RecentProjects from "./RecentProjects";
import ButtonImg from "../../../public/images/arrow.png";
import backgroundImg1 from '../../../public/images/pfpbg.png';
import backgroundImg2 from '../../../public/images/skillsbg.png';
import backgroundImg3 from '../../../public/images/xpbg.png';
import backgroundImg4 from '../../../public/images/projectsbg.png';
import backgroundImg5 from '../../../public/images/footerbg.png';

const scrollToSection = (nextSectionId) => {
  setTimeout(() => {
    const nextSection = document.getElementById(nextSectionId);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }, 0);
};


export const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  return (
    <motion.div
      id="Section1"
      style={{ scale }}
      className="responsive-text sticky top-0 h-screen text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh] border-2 border-[#2C1250] border-solid"
    >
      <Image
        src={backgroundImg1}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="relative z-10">
        <Profile />
      </div>
      <button
        onClick={() => scrollToSection("Section2")}
        className="absolute -top-[20px] left-[45%] lg:left-[48.5%] mt-5 lg:mt-0 mt-2h-16 md:w-24 md:h-24"
        aria-label="Scroll to Section 3"
      >
        <Image src={ButtonImg} alt="Scroll Down Button" width={40} height={40} />
      </button>
    </motion.div>
  );
};

export const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1]);
  return (
    <motion.div
      id="Section2"
      style={{ scale }}
      className="responsive-text sticky top-0 h-screen text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh] border-2 border-[#2C1250] border-solid"
    >
      <Image
        src={backgroundImg2}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="relative z-1">
        <CardHoverEffectDemo />
      </div>
      <button
        onClick={() => scrollToSection("Section3")}
        className="absolute -top-[20px] left-[45%] lg:left-[48.5%] mt-5 lg:mt-0 mt-2h-16 md:w-24 md:h-24"
        aria-label="Scroll to Section 3"
      >
        <Image src={ButtonImg} alt="Scroll Down Button" width={40} height={40} />
      </button>
    </motion.div>
  );
};

export const Section3 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 0.45], [0.9, 1]);
  return (
    <motion.div
      id="Section3"
      style={{ scale }}
      className="responsive-text sticky top-0 h-screen text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh] border-2 border-[#2C1250] border-solid"
    >
      <Image
        src={backgroundImg3}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="relative z-1">
        <Experience />
      </div>
      <button
        onClick={() => scrollToSection("Section4")}
        className="absolute -top-[20px] left-[45%] lg:left-[48.5%] mt-5 lg:mt-0 mt-2h-16 md:w-24 md:h-24"
        aria-label="Scroll to Section 3"
      >
        <Image src={ButtonImg} alt="Scroll Down Button" width={40} height={40} />
      </button>
    </motion.div>
  );
};

export const Section4 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 0.7], [0.9, 1]);
  return (
    <motion.div
      id="Section4"
      style={{ scale }}
      className="responsive-text sticky top-0 h-screen text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh] border-2 border-[#2C1250] border-solid"
    >
      <Image
        src={backgroundImg4}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="relative z-1">
        <RecentProjects />
      </div>
      <button
        onClick={() => scrollToSection("Section5")}
        className="absolute -top-[20px] left-[45%] lg:left-[48.5%] mt-5 lg:mt-0 mt-2h-16 md:w-24 md:h-24"
        aria-label="Scroll to Section 3"
      >
        <Image src={ButtonImg} alt="Scroll Down Button" width={40} height={40} />
      </button>
    </motion.div>
  );
};

export const Section5 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  return (
    <motion.div
      id="Section5"
      style={{ scale }}
      className="responsive-text sticky top-0 h-screen text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh] border-2 border-[#2C1250] border-solid"
    >
      <Image
        src={backgroundImg5}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="relative z-10">
        <Footer />
      </div>
      <button
        onClick={() => scrollToSection("home")}
        className="lg:text-[20px] text-[15px] absolute lg:bottom-8 bottom-8 left-1/2 transform -translate-x-1/2 underline text-purple-500 lg:mt-0 mt-2h-16 md:w-24 md:h-24"
      >
        HOME
      </button>
    </motion.div>
  );
};


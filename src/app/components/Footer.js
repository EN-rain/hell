import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./Ui/MagicButton";
import Image from "next/image";

export const socialMedia = [
  {
    id: 1,
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    img: "/images/yt.svg",
  },
  {
    id: 2,
    link: "https://github.com/EN-rain",
    img: "/images/git.svg",
  },
  {
    id: 3,
    link: "https://www.youtube.com",
    img: "/images/fb.png",
  },
];

const Footer = function() {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center lg:max-w-[45vw]">
          Ready to take{" "}
          <span className="text-purple-500">your</span> digital presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
        </p>
        <a href="mailto:nieves.edriancit2011@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center -mb-[150px]">
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <Image
                  src={info.img}
                  alt="Social Media Icon"
                  width={20}
                  height={20}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

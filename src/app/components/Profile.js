import React from "react";
import Image from 'next/image';
import Pfp from 'https://preview.redd.it/why-can-crazy-mita-do-things-like-a-normal-mita-v0-55rt5gnulnae1.jpeg?width=640&crop=smart&auto=webp&s=2caeaea7452dfac3891b997680880cbfb07b0aae';
import { FlipWords } from "../components/Ui/Flipwords";

const Profile = () => {
  const words = ["UI", "UX", "Modern"];

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between lg:gap-10">
      {/* Profile Picture */}
      <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden mb-4 lg:mb-0 lg:mr-6">
        <Image 
          src={Pfp}
          alt="Profile Picture"
          placeholder="blur"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Profile Info */}
      <div className="flex flex-col lg:text-left text-center w-[300px] h-[300px] lg:w-[500px] lg:h-[360px] bg-[#161935] p-4 sm:p-6 rounded-2xl shadow-[0px_10px_15px_rgba(0,0,0,0.5)]">
        <div>
          <div className="text-3xl sm:text-4xl md:text-5xl text-white">
            <FlipWords words={words} className="text-purple-500 -mr-2 -ml-3 font-bold" />
            <span className="text-2xl sm:text-3xl md:text-4xl">Designer</span>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
            I&apos;m <span className="text-purple-500">NiggaOne</span>
          </h2>
        </div>

        <div className="flex-grow mt-4">
          <p className="text-xs sm:text-sm md:text-base text-zinc-400">
            Currently a 3rd Year IT Student at Western Institute Technology,
            I am a passionate and creative coder currently pursuing my third year of IT studies at Western Institute Technology.
            My approach to programming is not just about solving problems, but doing so with elegance and style. 
            Whether it&apos;s crafting elegant code or designing user-friendly interfaces, I aim to blend logic and creativity in everything I do.
            Driven by curiosity and a desire to push boundaries, I continuously explore new technologies to expand my skill set.
          </p>
        </div>
      </div>
      <div className="absolute text-zinc-500 lg:-top-[19%] lg:left-[25%] lg:text-[10px] text-[8px] -top-[11%] -left-[5%]">
          You can use this button to go down →
        </div>
    </div>
  );
};

export default Profile;

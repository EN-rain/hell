import React from "react";
import Image from "next/image";
import { Button } from "./Ui/MovingBorders";

const workExperience = [
  {
    id: 1,
    title: "User Research & Usability Testing",
    desc: "Conducted research and usability tests to improve user experience and product design.",
    className: "md:col-span-2",
    thumbnail: "/images/uresearch.png",
  },
  {
    id: 2,
    title: "Wireframing & Prototyping",
    desc: "Created wireframes and prototypes to streamline the design-to-development process.",
    className: "md:col-span-2",
    thumbnail: "/images/prototyping.png",
  },
  {
    id: 3,
    title: "Responsive Web Design",
    desc: "Crafted responsive websites to guarantee optimal performance and user experience on all devices.",
    className: "md:col-span-2",
    thumbnail: "/images/responsive.png",
  },
  {
    id: 4,
    title: "Interactive Graphics Design",
    desc: "Created dynamic visuals and motion graphics to boost user interaction and engagement.",
    className: "md:col-span-2",
    thumbnail: "/images/interaction.png",
  },
];

const Experience = function() {
  return React.createElement(
    "div",
    { className: "py-12 w-[300px] lg:w-[1100px]" }, // Adjusted padding for mobile
    React.createElement(
      "h1",
      { className: "text-3xl sm:text-3xl md:text-4xl font-bold text-center mt-[60px] -mb-2 lg:-mt-[100px] lg:mb-[20px]" }, // Responsive text size
      "My ",
      React.createElement("span", { className: "text-purple-500" }, "work experience")
    ),
    React.createElement(
      "div",
      { className: "w-full mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6 md:gap-10" }, // Responsive grid layout
      workExperience.map(card =>
        React.createElement(
          Button,
          {
            disabled: true,
            key: card.id,
            duration: Math.floor(Math.random() * 10000) + 10000,
            borderRadius: "1.5rem", // Adjusted border radius for smaller screens
            className: "flex-1 text-white dark:text-white border-purple-500 dark:border-slate-800",
          },
          React.createElement(
            "div",
            {
              className: "flex flex-col sm:flex-row items-center p-4 md:p-5 lg:p-6 gap-2 h-full",
              style: { backgroundColor: "#161935", borderRadius: "1.5rem" },
            },
            React.createElement(Image, {
              src: card.thumbnail,
              alt: card.title,
              className: "w-10 sm:w-20 md:w-24", // Responsive image size
              width: 128,
              height: 129,
              style: { objectFit: "cover" },
            }),
            React.createElement(
              "div",
              { className: "text-center sm:text-left -mt-2 sm:mt-0 sm:ms-4" },
              React.createElement(
                "h1",
                { className: "text-[13px] sm:text-xl md:text-2xl font-bold mb-2 lg:m-0" }, // Responsive title size
                card.title
              ),
              React.createElement(
                "p",
                { className: "text-zinc-400 mt-0 text-[9px] sm:text-base -mb-[10px] -mt-[10px] lg:m-0" }, // Responsive description size
                card.desc
              )
            )
          )
        )
      )
    )
  );
};

export default Experience;

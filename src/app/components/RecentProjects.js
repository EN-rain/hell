"use client";

import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { PinContainer } from "./Ui/Pin";

export const projects = [
  {
    id: 1,
    title: "Awesometodos",
    des: "An intuitive to-do app to help you stay organized and boost productivity with ease.",
    img: "/images/awes.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://todo-dea6.onrender.com",
  },
];

const RecentProjects = function() {
  return React.createElement(
    "div",
    { className: "py-20" },
    React.createElement(
      "h1",
      { className: "text-3xl font-bold text-center -mt-[85px] -mb-[40px] lg:mt-[100px] lg:-mb-20", id: "projects" },
      "Recent ",
      React.createElement("span", { className: "text-purple-500" }, "projects")
    ),
    React.createElement(
      "div",
      { className: "flex flex-wrap items-center justify-center p-4 gap-16 mt-10" },
      projects.map(item =>
        React.createElement(
          "div",
          {
            className: "lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]",
            key: item.id,
          },
          React.createElement(
            PinContainer,
            { title: item.title, href: item.link },
            React.createElement(
              "div",
              {
                className: "relative flex flex-col items-center justify-between sm:w-96 w-[80vw] p-4 h-full rounded-3xl",
                style: { backgroundColor: "#161935" },
              },
              React.createElement(
                "div",
                {
                  className: "relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10",
                },
                React.createElement(
                  "div",
                  { className: "relative w-full h-full overflow-hidden lg:rounded-3xl" },
                  React.createElement(Image, {
                    src: "/bg.png",
                    alt: "Background Image",
                    layout: "fill",
                    objectFit: "cover",
                    className: "rounded-3xl",
                  })
                ),
                React.createElement(Image, {
                  src: item.img,
                  alt: "Project Cover",
                  layout: "intrinsic",
                  width: 500,
                  height: 300,
                  className: "z-10 absolute bottom-0",
                })
              ),
              React.createElement(
                "h1",
                { className: "font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white" },
                item.title
              ),
              React.createElement(
                "p",
                {
                  className: "lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text",
                  style: { color: "#BEC1DD", margin: "1vh 0" },
                },
                item.des
              ),
              React.createElement(
                "div",
                { className: "flex items-center justify-between mt-7 mb-3 w-full" },
                React.createElement(
                  "div",
                  { className: "flex items-center" },
                  item.iconLists.map((icon, index) =>
                    React.createElement(
                      "div",
                      {
                        key: index,
                        className:
                          "border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center",
                        style: { transform: `translateX(-${5 * index + 2}px)` },
                      },
                      React.createElement(Image, {
                        src: icon,
                        alt: `Icon ${index + 1}`,
                        width: 70,
                        height: 70,
                        className: "p-2",
                      })
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { className: "flex justify-center items-center" },
                  React.createElement(
                    "a",
                    {
                      href: item.link,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "flex items-center",
                    },
                    React.createElement(
                      "p",
                      { className: "lg:text-xl md:text-xs text-sm text-purple" },
                      "Check Live Site"
                    ),
                    React.createElement(FaLocationArrow, { className: "ms-3", color: "#CBACF9" })
                  )
                )
              )
            )
          )
        )
      )
    )
  );
};

export default RecentProjects;

import { HoverEffect } from "../components/Ui/Card";

export const projects = [
  {
    title: "HTML/CSS/JS",
    description: "Expertise in HTML, CSS, and JavaScript, foundational technologies for building responsive and interactive web applications. Developed multiple projects that demonstrate the ability to create visually appealing layouts and enhance user experiences through dynamic content.",
    image: "/images/code.png",
  },
  {
    title: "React",
    description: "Proficient in React, a powerful JavaScript library for building user interfaces. Developed complex, scalable applications that deliver seamless performance across various devices. Experience includes creating reusable components and managing state effectively to enhance user engagement.",
    image: "/images/atom.png",
  },
  {
    title: "Python",
    description: "Skilled in Python, a versatile programming language known for its readability and efficiency. Applied Python to develop backend services and automation scripts, contributing to improved workflows and data processing for various projects.",
    image: "/images/py.png",
  },
];




export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-[55px] lg:mt-[50px]">
        <h1 className="text-3xl font-bold text-center lg:m-0 mt-[10px] -mb-[20px]">
        My <span className="text-purple-500">Skills</span>
      </h1>
      <HoverEffect items={projects} />
    </div>
  );
}

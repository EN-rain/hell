import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../../lib/utils"; // Keep this import if you still need utility functions

import Image from "next/image"; // Import the Image component
export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => (
        <div
          key={idx} // Use index as key if there are no unique ids
          className="relative group block p-2 h-full w-full -mt-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 0.5,
                  backgroundColor: "#4713a1", // Updated hover color
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
          <div className="relative w-10 sm:w-20 -mt-5 sm:m-0 h-auto overflow-hidden -ml-4 lg:ml-0">
            <Image
              src={item.image}
              alt={item.title}
              width={80} 
              height={80} 
              className="rounded-lg w-full h-auto" 
            />
          </div>
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.description}</CardDescription>
        </Card>

        </div>
      ))}
    </div>
  );
};



export const Card = ({ className, children}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-[24vh] w-[40vh] lg:h-[61vh] lg:w-full p-4 overflow-hidden",
        "bg-[#161935]", 
        "border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-0 lg:text-2xl -ml-4 lg:ml-0 -mr-4 lg:mr-0", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn("lg:mt-8 mt-0 text-zinc-400 tracking-wide leading-relaxed lg:text-sm text-[9px] -ml-4 lg:ml-0 -mr-4 lg:mr-0", className)}
    >
      {children}
    </p>
  );
};

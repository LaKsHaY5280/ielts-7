"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const HeroBackgroundAnimation = ({
  className,
  interactive = true,
}: {
  className?: string;
  interactive?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // IELTS brand colors
  const primaryRed = "#cc0d09";
  const secondaryOrange = "#d56e1f";
  const softPeach = "#fff1eb";

  // Track mouse position for subtle parallax effect
  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [interactive]);

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 overflow-hidden", className)}
    >
      {/* Base soft peach background matching the screenshot */}
      <div className="absolute inset-0 bg-[#fff5f2]"></div>

      {/* Soft wave patterns matching the screenshot */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 800"
        style={{
          transform: interactive
            ? `translate(${mousePosition.x * -5}px, ${mousePosition.y * -5}px)`
            : "",
          transition: "transform 0.5s ease-out",
        }}
      >
        {/* Wave fill gradient - soft peach to lighter peach */}
        <defs>
          <linearGradient
            id="wave-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffebe3" />
            <stop offset="100%" stopColor="#fff5f2" />
          </linearGradient>
        </defs>

        {/* First gentle wave - matching screenshot */}
        <path
          d="M0,96L60,112C120,128,240,160,360,165.3C480,171,600,149,720,149.3C840,149,960,171,1080,170.7C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          fill="url(#wave-gradient)"
        />

        {/* Second subtle wave for depth */}
        <path
          d="M0,224L60,224C120,224,240,224,360,218.7C480,213,600,203,720,202.7C840,203,960,213,1080,208C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          fill="#fff1eb"
          opacity="0.8"
        />
      </svg>

      {/* Very subtle soft gradient overlay in top-right corner */}
      <div
        className="absolute top-0 right-0 w-[60%] h-[40%]"
        style={{
          background: `radial-gradient(circle at top right, ${secondaryOrange}08 0%, transparent 70%)`,
          transform: interactive
            ? `translate(${mousePosition.x * -10}px, ${
                mousePosition.y * -10
              }px)`
            : "",
          transition: "transform 0.5s ease-out",
        }}
      ></div>

      {/* Very subtle soft gradient overlay in bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[40%] h-[30%]"
        style={{
          background: `radial-gradient(circle at bottom left, ${primaryRed}05 0%, transparent 70%)`,
          transform: interactive
            ? `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
            : "",
          transition: "transform 0.5s ease-out",
        }}
      ></div>
    </div>
  );
};

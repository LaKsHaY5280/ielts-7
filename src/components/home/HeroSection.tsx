"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import {
  BookOpen,
  PenTool,
  Headphones,
  MessageCircle,
  ArrowRight,
  BadgeCheck,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { HeroBackgroundAnimation } from "./hero-background";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax effects for scrolling
  const y1 = useTransform(scrollY, [0, 500], [0, -150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const y3 = useTransform(scrollY, [0, 500], [0, -50]);

  // Set mounted state to true after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Rotate through IELTS skills automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []); // IELTS skills data with enhanced visuals and descriptions
  const skillsData = [
    {
      icon: BookOpen,
      title: "Reading",
      color: "from-rose-500 to-orange-500",
      lightColor: "bg-rose-50",
      textColor: "text-rose-600",
      borderColor: "border-rose-200",
      description: "Master complex texts and improve comprehension speed",
      href: "/?section=practice-tests&type=general_reading",
    },
    {
      icon: PenTool,
      title: "Writing",
      color: "from-violet-500 to-purple-500",
      lightColor: "bg-violet-50",
      textColor: "text-violet-600",
      borderColor: "border-violet-200",
      description: "Develop clear, coherent essays and reports",
      href: "/resources#essays",
    },
    {
      icon: Headphones,
      title: "Listening",
      color: "from-blue-500 to-sky-400",
      lightColor: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
      description: "Understand diverse accents and complex discussions",
      href: "/?section=practice-tests&type=listening",
    },
    {
      icon: MessageCircle,
      title: "Speaking",
      color: "from-emerald-500 to-green-500",
      lightColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-200",
      description: "Express yourself fluently and confidently",
      href: "#",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  };

  const currentSkill = skillsData[activeIndex];
  const CurrentIcon = currentSkill.icon;

  return (
    <section
      className="relative pt-36 pb-28 overflow-hidden"
      ref={containerRef}
    >
      {" "}
      {/* Custom Hero Background Animation with interactive effect */}
      <HeroBackgroundAnimation interactive={mounted} />
      <div className="container mx-auto max-w-6xl px-6 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
        >
          {/* Main content column */}
          <motion.div className="md:col-span-6 z-10" style={{ y: y1 }}>
            <motion.div
              className="flex items-center mb-8 space-x-3"
              variants={itemVariants}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-md rounded-full"></div>
                <Image
                  src="/icon.webp"
                  alt="IELTS 7+ House"
                  width={48}
                  height={48}
                  className="relative"
                />
              </div>
              <div>
                <span className="font-medium text-xl inline-flex items-center">
                  IELTS 7
                  <motion.span
                    className="text-primary px-1"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  >
                    +
                  </motion.span>
                  House
                </span>
                <div className="text-xs text-gray-500 mt-1 flex items-center">
                  <BadgeCheck className="w-3 h-3 text-primary mr-1" />
                  <span>Trusted by 10,000+ students</span>
                </div>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight"
            >
              Your Path to
              <div className="relative inline-block mt-2">
                <span className="relative z-10 text-primary"> Excellence</span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-3 w-full bg-primary/10 -z-10 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                ></motion.div>
              </div>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="mt-6 mb-8 flex items-center"
            >
              <div className="mr-4 opacity-90 relative">
                <div className="absolute inset-0 bg-primary blur-md rounded-full opacity-20"></div>
                <TrendingUp className="w-5 h-5 text-primary relative" />
              </div>
              <p className="font-medium text-lg text-gray-600">
                Achieve{" "}
                <span className="text-primary font-semibold">Band 7+</span> with
                expert-led practice
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl"
            >
              Our comprehensive practice materials and proven strategies have
              helped thousands of students achieve their target scores.
              <span className="hidden md:inline">
                {" "}
                Prepare more effectively with our expert-designed resources.
              </span>
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 items-center"
            >
              <motion.a
                href="#practice-tests"
                className="px-6 py-3 bg-gradient-to-r from-primary to-primary/90 text-white font-medium rounded-lg flex items-center shadow-md group relative overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated background hover effect */}
                <motion.div
                  className="absolute inset-0 bg-white/20 -z-10"
                  initial={{ x: "-100%", opacity: 0 }}
                  whileHover={{ x: "100%", opacity: 0.2 }}
                  transition={{ duration: 0.5 }}
                />
                <span>Start Practicing</span>
                <motion.div
                  className="ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </motion.a>

              <div className="flex items-center space-x-1 text-sm text-gray-500">
                <Sparkles className="h-4 w-4 text-amber-500" />
                <span>Free resources available</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual column with animated elements */}
          <motion.div
            className="md:col-span-6 z-10 mt-8 md:mt-0"
            variants={itemVariants}
            style={{ y: y2 }}
          >
            <div className="relative">
              {/* Animated accent elements */}
              <motion.div
                className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-primary/5 z-0"
                animate={floatingAnimation}
                transition={{
                  duration: 3,
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute -bottom-5 -left-5 w-16 h-16 rounded-full bg-blue-500/5 z-0"
                animate={floatingAnimation}
                transition={{
                  duration: 4,
                  delay: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              {/* Main interactive card */}
              <motion.div
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 relative z-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                whileHover={{
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.04)",
                }}
              >
                {/* Browser-like header */}
                <div className="bg-gray-50 border-b border-gray-100 p-3 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-rose-500"></div>
                    <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="h-6 w-32 bg-gray-200 rounded-md"></div>
                  <div className="h-5 w-5 rounded-md bg-gray-200"></div>
                </div>

                {/* Featured IELTS skill with animation */}
                <div className="p-6 bg-gray-50/30">
                  <div className="mb-6 text-center">
                    <div className="flex justify-center">
                      <motion.div
                        className={`h-16 w-16 rounded-xl flex items-center justify-center bg-gradient-to-r ${currentSkill.color} text-white shadow-lg`}
                        key={activeIndex}
                        initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <CurrentIcon className="h-8 w-8" />
                      </motion.div>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4"
                      >
                        <h3
                          className={`text-xl font-bold ${currentSkill.textColor}`}
                        >
                          {currentSkill.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          {currentSkill.description}
                        </p>
                      </motion.div>
                    </AnimatePresence>

                    {/* Progress indicator */}
                    <div className="flex justify-center mt-4 space-x-2">
                      {skillsData.map((_, i) => (
                        <motion.button
                          key={i}
                          onClick={() => setActiveIndex(i)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            i === activeIndex
                              ? "w-6 bg-primary"
                              : "w-2 bg-gray-300"
                          }`}
                          aria-label={`View ${skillsData[i].title}`}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        />
                      ))}
                    </div>
                  </div>{" "}
                  {/* Skills grid with enhanced animations */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    {skillsData.map((skill, i) => {
                      const SkillIcon = skill.icon;
                      return (
                        <motion.a
                          href={skill.href}
                          key={i}
                          className={`flex items-center gap-3 p-4 rounded-xl ${skill.lightColor} border ${skill.borderColor} transition-all duration-300 cursor-pointer group`}
                          whileHover={{
                            y: -4,
                            boxShadow:
                              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                          }}
                          whileTap={{ scale: 0.98 }}
                          animate={{
                            scale: activeIndex === i ? [1, 1.03, 1] : 1,
                            borderColor:
                              activeIndex === i
                                ? skill.textColor
                                : skill.borderColor,
                          }}
                          transition={{
                            duration: 0.5,
                            scale: {
                              repeat: activeIndex === i ? 1 : 0,
                              repeatDelay: 2,
                            },
                          }}
                        >
                          <div
                            className={`p-2 rounded-lg ${skill.textColor} bg-white/80 group-hover:bg-white/100`}
                          >
                            <SkillIcon className="w-5 h-5" />
                          </div>
                          <span className="font-medium group-hover:text-gray-900">
                            {skill.title}
                          </span>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* Floating achievements cards */}
              <motion.div
                className="absolute -bottom-20 -right-10 bg-white p-3 rounded-xl shadow-lg border border-gray-100 w-44 z-20"
                style={{ y: y3 }}
                animate={floatingAnimation}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  opacity: { duration: 0.6, delay: 1 },
                  x: { duration: 0.6, delay: 1 },
                  y: { duration: 4, repeat: Infinity, repeatType: "reverse" },
                }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">
                      Average improvement
                    </div>
                    <div className="font-bold text-gray-800">+1.5 bands</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

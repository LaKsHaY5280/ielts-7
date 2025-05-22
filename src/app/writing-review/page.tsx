"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  PenTool,
  ArrowRight,
  BadgeCheck,
  Star,
  TrendingUp,
  Check,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import SimplifiedContactForm from "@/components/SimplifiedContactForm";

const EvaluationPage = () => {
  const { scrollY } = useScroll();

  // State to detect limited browsers like LG SmartBoard
  const [isLimitedBrowser, setIsLimitedBrowser] = useState(false);

  // Parallax effects for scrolling
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

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
  // Detect limited browsers on component mount
  useEffect(() => {
    const detectLimitedBrowser = () => {
      // Check for common features that might be missing in LG Smart TV browser or SmartBoard
      const isLimited =
        typeof window !== "undefined" &&
        (!window.requestAnimationFrame ||
          !window.matchMedia ||
          /LG|WebOS|SMART-TV|Android 8|Android\/8|Chromium\/[5-6]/.test(
            navigator.userAgent
          ) ||
          (navigator.userAgent.includes("Chrome") &&
            /Android 8|Android\/8/.test(navigator.userAgent)) ||
          document.documentElement.classList.contains("legacy-browser") ||
          document.documentElement.classList.contains("limited-browser"));

      // Additional detection for LG SmartBoard
      const isLGBoard =
        /LG|SMART-TV|WebOS|NetCast/.test(navigator.userAgent) ||
        (/Android 8|Android\/8/.test(navigator.userAgent) &&
          (/Chrome\/[5-7]/.test(navigator.userAgent) ||
            /Chromium\/[5-7]/.test(navigator.userAgent)));

      setIsLimitedBrowser(isLimited || isLGBoard);

      if (isLimited || isLGBoard) {
        // Add a class to body for potential CSS fallbacks
        document.body.classList.add("limited-browser");
      }
    };

    detectLimitedBrowser();
  }, []);
  // Return a simplified version of the page for limited browsers like LG SmartBoard
  if (isLimitedBrowser) {
    return (
      <main className="bg-white">
        {/* Simple Banner for Limited Browsers */}
        <section className="py-8 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center mb-2">
                  <Image
                    src="/icon.webp"
                    alt="IELTS 7+ House"
                    width={36}
                    height={36}
                  />
                  <span className="font-medium text-lg ml-2">
                    Writing Evaluation Service
                  </span>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  Improve Your Writing Score
                </h1>
                <p className="text-gray-600 mb-2">
                  Expert feedback for only{" "}
                  <span className="text-[#cc0d09] font-semibold">₹49</span>
                </p>
                <ul className="mb-4">
                  <li className="flex items-center mb-1">
                    • Detailed error analysis
                  </li>
                  <li className="flex items-center mb-1">
                    • Band score prediction
                  </li>
                  <li className="flex items-center mb-1">
                    • Improvement suggestions
                  </li>
                  <li className="flex items-center mb-1">
                    • 24-48 hour turnaround
                  </li>
                </ul>
                <a
                  href="#evaluation-form"
                  className="inline-block px-4 py-2 bg-[#cc0d09] text-white font-medium rounded"
                >
                  Submit Your Writing
                </a>
              </div>
              <div>
                <div className="bg-white border border-gray-200 rounded p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    Sample Evaluated Essays
                  </h3>
                  <div className="space-y-2">
                    {[1, 2, 3].map((num) => (
                      <div
                        key={num}
                        className="p-2 bg-gray-50 border border-gray-200 rounded flex items-center"
                      >
                        <div className="w-8 h-8 mr-2 bg-gray-200"></div>
                        <div>
                          <div className="font-medium">Essay Sample {num}</div>
                          <div className="text-xs">Band {8 - num}.0</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Simple Evaluation Form Section */}
        <section id="evaluation-form" className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Submit Your Writing for Evaluation
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              Get detailed feedback from our IELTS experts to improve your
              score. Simply complete the payment and submit your writing below.
            </p>
            <SimplifiedContactForm />
          </div>
        </section>
      </main>
    );
  }

  // Regular version for modern browsers
  return (
    <main className="bg-white">
      {/* Hero Section - Compact Banner */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-bl from-[#cc0d09]/8 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute -bottom-10 -left-10 w-48 h-48 bg-gradient-to-tr from-blue-500/8 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1,
            }}
          />
        </div>

        <div className="container mx-auto max-w-6xl px-6 relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
          >
            {/* Content column */}
            <motion.div className="md:col-span-6 z-10" style={{ y: y1 }}>
              <motion.div
                className="flex items-center mb-3 space-x-2"
                variants={itemVariants}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#cc0d09]/20 blur-md rounded-full"></div>
                  <Image
                    src="/icon.webp"
                    alt="IELTS 7+ House"
                    width={36}
                    height={36}
                    className="relative"
                  />
                </div>
                <div>
                  <span className="font-medium text-lg inline-flex items-center">
                    Writing
                    <motion.span
                      className="text-[#cc0d09] px-1"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    >
                      Evaluation
                    </motion.span>
                    Service
                  </span>
                  <div className="text-[10px] text-gray-500 flex items-center">
                    <BadgeCheck className="w-2.5 h-2.5 text-[#cc0d09] mr-1" />
                    <span>Professional IELTS Feedback</span>
                  </div>
                </div>
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight"
              >
                Improve Your
                <div className="relative ml-2 inline-block">
                  <span className="relative z-10 text-[#cc0d09]">
                    Writing Score
                  </span>
                  <motion.div
                    className="absolute -bottom-1 left-0 h-2 w-full bg-[#cc0d09]/10 -z-10 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  ></motion.div>
                </div>
              </motion.h1>
              <motion.div
                variants={itemVariants}
                className="mt-3 mb-4 flex items-center"
              >
                <div className="mr-2 opacity-90 relative">
                  <div className="absolute inset-0 bg-[#cc0d09] blur-md rounded-full opacity-20"></div>
                  <TrendingUp className="w-4 h-4 text-[#cc0d09] relative" />
                </div>
                <p className="font-medium text-sm text-gray-600">
                  Expert feedback for only{" "}
                  <span className="text-[#cc0d09] font-semibold">₹49</span>
                </p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="space-y-2 grid grid-cols-2 gap-x-2"
              >
                {[
                  "Detailed error analysis",
                  "Band score prediction",
                  "Improvement suggestions",
                  "24-48 hour turnaround",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-2 mt-0.5">
                      <Check className="h-4 w-4 text-[#cc0d09]" />
                    </div>
                    <div className="text-gray-700 text-sm">{feature}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Visual Column */}
            <motion.div
              className="md:col-span-6 z-10 mt-8 md:mt-0"
              variants={itemVariants}
              style={{ y: y2 }}
            >
              <div className="relative">
                {/* Main card */}
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
                  {/* Sample essays */}
                  <div className="p-4 pt-3">
                    <h3 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                      <PenTool className="h-4 w-4 mr-1 text-[#cc0d09]" />
                      Sample Evaluated Essays
                    </h3>

                    <div className="space-y-2 grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((num) => (
                        <motion.div
                          key={num}
                          className="p-2 bg-gray-50 rounded-lg border border-gray-200 flex flex-col items-center"
                          whileHover={{
                            y: -1,
                            backgroundColor: "rgba(249, 250, 251, 0.8)",
                          }}
                        >
                          <div className="w-8 h-8 overflow-hidden rounded-md flex-shrink-0">
                            <Image
                              src={`/essay-${num}.png`}
                              alt={`Essay ${num}`}
                              width={50}
                              height={50}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="text-center mt-1">
                            <h4 className="text-xs font-medium text-gray-800">
                              Sample {num}
                            </h4>
                            <div className="flex items-center justify-center">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-2 h-2 ${
                                      i < 8 - num
                                        ? "text-amber-400"
                                        : "text-gray-300"
                                    }`}
                                    fill={i < 8 - num ? "currentColor" : "none"}
                                  />
                                ))}
                              </div>
                              <span className="text-[10px] text-gray-500 ml-1">
                                {8 - num}.0
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
                {/* Floating achievement card */}
                <motion.div
                  className="absolute -bottom-5 -right-5 bg-white p-2 rounded-lg shadow-lg border border-gray-100 w-32 z-20"
                  animate={{
                    y: [0, -5, 0],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    opacity: { duration: 0.6, delay: 0.5 },
                    x: { duration: 0.6, delay: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-[#cc0d09]/10 flex items-center justify-center mr-2">
                      <TrendingUp className="h-3 w-3 text-[#cc0d09]" />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-500">
                        Avg improvement
                      </div>
                      <div className="font-bold text-xs text-gray-800">
                        +1.0 bands
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Evaluation Form Section */}
      <section id="evaluation-form" className="py-12 bg-gray-50 relative">
        <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-6">
            <motion.h2
              className="text-2xl font-bold text-gray-800 mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              Submit Your Writing for Evaluation
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Get detailed feedback from our IELTS experts to improve your
              score. Simply complete the payment and submit your writing below.
            </motion.p>
          </div>{" "}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default EvaluationPage;

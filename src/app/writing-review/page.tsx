"use client";

import { useState, useRef } from "react";
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

const EvaluationPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

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

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-bl from-[#cc0d09]/10 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
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
                className="flex items-center mb-6 space-x-3"
                variants={itemVariants}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#cc0d09]/20 blur-md rounded-full"></div>
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
                    Writing
                    <motion.span
                      className="text-[#cc0d09] px-1"
                      animate={{ scale: [1, 1.2, 1] }}
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
                  <div className="text-xs text-gray-500 mt-1 flex items-center">
                    <BadgeCheck className="w-3 h-3 text-[#cc0d09] mr-1" />
                    <span>Professional IELTS Feedback</span>
                  </div>
                </div>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight"
              >
                Improve Your
                <div className="relative inline-block mt-2">
                  <span className="relative z-10 text-[#cc0d09]">
                    {" "}
                    Writing Score
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 h-3 w-full bg-[#cc0d09]/10 -z-10 rounded-full"
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
                  <div className="absolute inset-0 bg-[#cc0d09] blur-md rounded-full opacity-20"></div>
                  <TrendingUp className="w-5 h-5 text-[#cc0d09] relative" />
                </div>
                <p className="font-medium text-lg text-gray-600">
                  Get expert feedback for only{" "}
                  <span className="text-[#cc0d09] font-semibold">₹49</span>
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                {[
                  "Detailed error analysis",
                  "Band score prediction",
                  "Improvement suggestions",
                  "24-48 hour turnaround",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-3 mt-0.5">
                      <Check className="h-5 w-5 text-[#cc0d09]" />
                    </div>
                    <div className="text-gray-700">{feature}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="mt-8 inline-block">
                <motion.a
                  href="#evaluation-form"
                  className="px-6 py-3 bg-gradient-to-r from-[#cc0d09] to-[#d56e1f] text-white font-medium rounded-lg flex items-center shadow-md group relative overflow-hidden"
                  whileHover={{
                    scale: 1.02,
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20 -z-10"
                    initial={{ x: "-100%", opacity: 0 }}
                    whileHover={{ x: "100%", opacity: 0.2 }}
                    transition={{ duration: 0.5 }}
                  />
                  <span>Submit Your Writing</span>
                  <motion.div
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </motion.a>
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
                  <div className="p-6 pt-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <PenTool className="h-5 w-5 mr-2 text-[#cc0d09]" />
                      Sample Evaluated Essays
                    </h3>

                    <div className="space-y-4">
                      {[1, 2, 3].map((num) => (
                        <motion.div
                          key={num}
                          className="p-4 bg-gray-50 rounded-lg border border-gray-200 flex items-center"
                          whileHover={{
                            y: -2,
                            backgroundColor: "rgba(249, 250, 251, 0.8)",
                          }}
                        >
                          <div className="w-12 h-12 mr-4 overflow-hidden rounded-md flex-shrink-0">
                            <Image
                              src={`/essay-${num}.png`}
                              alt={`Essay ${num}`}
                              width={100}
                              height={100}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">
                              Essay Sample {num}
                            </h4>
                            <div className="flex items-center mt-1">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-3 h-3 ${
                                      i < 8 - num
                                        ? "text-amber-400"
                                        : "text-gray-300"
                                    }`}
                                    fill={i < 8 - num ? "currentColor" : "none"}
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-gray-500 ml-1">
                                Band {8 - num}.0
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
                  className="absolute -bottom-10 -right-10 bg-white p-3 rounded-xl shadow-lg border border-gray-100 w-44 z-20"
                  animate={{
                    y: [0, -10, 0],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    opacity: { duration: 0.6, delay: 1 },
                    x: { duration: 0.6, delay: 1 },
                  }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-[#cc0d09]/10 flex items-center justify-center mr-3">
                      <TrendingUp className="h-4 w-4 text-[#cc0d09]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">
                        Average improvement
                      </div>
                      <div className="font-bold text-gray-800">+1.0 bands</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Evaluation Form Section */}
      <section id="evaluation-form" className="py-16 bg-gray-50 relative">
        <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-10">
            <motion.h2
              className="text-3xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              Submit Your Writing for Evaluation
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Get detailed feedback from our IELTS experts to improve your
              score. Simply complete the payment and submit your writing below.
            </motion.p>
          </div>

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

"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  BookOpen,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Search,
  Clock,
  Users,
} from "lucide-react";
import { mockTests } from "@/data/mockTests";
import { TestMetadata, TestType } from "@/lib/types";

interface TypeDetails {
  title: string;
  color: string;
  lightColor: string;
  icon: React.ElementType;
  description: string;
}

const PracticeTestsSection = () => {
  const [currentType, setCurrentType] = useState<TestType>("general_reading");
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px 0px" });

  const getTypeDetails = (type: TestType): TypeDetails => {
    switch (type) {
      case "general_reading":
        return {
          title: "General Reading",
          color: "from-rose-500 to-orange-500",
          lightColor: "bg-rose-50",
          icon: BookOpen,
          description:
            "General interest passages from newspapers, magazines, and books.",
        };
      case "academic_reading":
        return {
          title: "Academic Reading",
          color: "from-amber-600 to-yellow-500",
          lightColor: "bg-amber-50",
          icon: BookOpen,
          description:
            "Complex academic texts from scientific journals, textbooks, and research papers.",
        };
      case "listening":
        return {
          title: "Listening",
          color: "from-blue-500 to-cyan-400",
          lightColor: "bg-blue-50",
          icon: Headphones,
          description:
            "Audio tests with various accents, situations, and academic contexts.",
        };
      default:
        return {
          title: "General Reading",
          color: "from-rose-500 to-orange-500",
          lightColor: "bg-rose-50",
          icon: BookOpen,
          description: "General interest passages from various sources.",
        };
    }
  };

  const typeDetails = getTypeDetails(currentType);
  const TypeIcon = typeDetails.icon;

  // Filter tests by search query
  const filteredTests =
    mockTests[currentType]?.filter((test) =>
      test.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  const tests = filteredTests;

  const handleTypeChange = (type: TestType) => {
    setCurrentType(type);
    setLoading(true);
    setSearchQuery("");
    // Simulate loading
    setTimeout(() => setLoading(false), 300);
  };

  // Get the URL path for a test based on its type and ID
  const getTestPath = (test: TestMetadata, type: TestType): string => {
    return `/tests/${type}/${test.id}`;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="practice-tests"
      className="py-28 relative bg-gradient-to-b from-white to-gray-50/60"
      ref={sectionRef}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        {/* Animated dots pattern */}
        <svg
          className="absolute top-20 right-20 opacity-10"
          width="100"
          height="100"
          viewBox="0 0 100 100"
        >
          <pattern
            id="dots"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="3" cy="3" r="2" fill="currentColor" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
        </svg>

        {/* Curved lines */}
        <svg
          className="absolute bottom-10 left-10 opacity-10 text-primary"
          width="200"
          height="100"
          viewBox="0 0 200 100"
        >
          <path
            d="M0,50 C40,30 60,70 100,50 C140,30 160,70 200,50"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
          />
          <path
            d="M0,70 C40,50 60,90 100,70 C140,50 160,90 200,70"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl px-6 relative">
        <motion.div
          className="mb-16 max-w-xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-4">
            <motion.div
              className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 12,
                      },
                    }
                  : {}
              }
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Free Practice Tests</span>
            </motion.div>
          </div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            IELTS Practice Tests
          </motion.h2>

          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Prepare for your IELTS exam with our collection of authentic
            practice materials designed to help you achieve band 7 and above.
          </motion.p>
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {/* Test type selector with animated gradient border */}
          <div className="relative mx-auto max-w-2xl p-1 rounded-xl bg-gradient-to-r from-primary/20 via-blue-500/20 to-violet-500/20">
            <motion.div
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/30 via-blue-500/30 to-violet-500/30 opacity-60"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            <div className="bg-white rounded-lg p-1 flex justify-between relative">
              <button
                onClick={() => handleTypeChange("general_reading")}
                className={`flex-1 px-4 py-3.5 rounded-md font-medium text-sm transition-all flex items-center justify-center gap-2 ${
                  currentType === "general_reading"
                    ? "bg-gradient-to-r from-primary to-primary/90 text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <BookOpen className="w-4 h-4" />
                General Reading
              </button>
              <button
                onClick={() => handleTypeChange("academic_reading")}
                className={`flex-1 px-4 py-3.5 rounded-md font-medium text-sm transition-all flex items-center justify-center gap-2 ${
                  currentType === "academic_reading"
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <BookOpen className="w-4 h-4" />
                Academic Reading
              </button>
              <button
                onClick={() => handleTypeChange("listening")}
                className={`flex-1 px-4 py-3.5 rounded-md font-medium text-sm transition-all flex items-center justify-center gap-2 ${
                  currentType === "listening"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Headphones className="w-4 h-4" />
                Listening
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-8 flex md:items-center flex-col md:flex-row justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="flex items-center gap-4 mr-4">
            <div
              className={`p-3 rounded-xl bg-gradient-to-br ${typeDetails.color} shadow-md`}
            >
              <TypeIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {typeDetails.title}
              </h3>
              <p className="text-gray-600 text-sm max-w-md">
                {typeDetails.description}
              </p>
            </div>
          </div>

          {/* Search bar with animation */}
          <motion.div
            className="relative"
            initial={{ width: "100%" }}
            animate={{ width: "100%" }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search tests..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2.5 pl-10 pr-4 rounded-lg border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </motion.div>
        </motion.div>

        {loading ? (
          <div className="flex justify-center my-16">
            <motion.div
              className="w-12 h-12 border-4 border-gray-200 border-t-primary rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        ) : (
          <>
            {/* Conditionally render "no results" message */}
            {tests.length === 0 && (
              <motion.div
                className="text-center py-12 bg-gray-50 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-gray-500">
                  No tests found matching "{searchQuery}"
                </p>
                <button
                  className="mt-2 text-primary underline"
                  onClick={() => setSearchQuery("")}
                >
                  Clear search
                </button>
              </motion.div>
            )}

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView && tests.length > 0 ? "visible" : "hidden"}
            >
              {tests.map((test, index) => {
                const testYear = parseInt(test.year, 10) + 2000;
                const testPath = getTestPath(test, currentType);

                return (
                  <motion.div
                    key={test.id}
                    variants={itemVariants}
                    custom={index}
                    className="group bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all overflow-hidden"
                    whileHover={{ y: -6 }}
                  >
                    <Link href={testPath} passHref>
                      {/* Colored top bar based on test type */}
                      <div
                        className={`h-2 bg-gradient-to-r ${typeDetails.color}`}
                      ></div>

                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <div className="flex items-center gap-1.5 mb-3">
                              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                                {testYear}
                              </span>
                            </div>
                            <h3 className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                              {test.title}
                            </h3>
                          </div>
                        </div>

                        {/* Test meta information */}
                        <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-gray-500">
                          {test.estimatedTime && (
                            <div className="flex items-center">
                              <Clock className="w-3 h-3 mr-1.5" />
                              <span>{test.estimatedTime}</span>
                            </div>
                          )}
                          {test.completions && (
                            <div className="flex items-center">
                              <Users className="w-3 h-3 mr-1.5" />
                              <span>
                                {test.completions.toLocaleString()} attempts
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-2">
                          <div className="flex items-center text-gray-600">
                            <TypeIcon className="w-4 h-4 mr-2" />
                            <span className="text-sm">{typeDetails.title}</span>
                          </div>

                          <div className="flex items-center font-medium text-primary relative">
                            <div className="relative">
                              <span className="group-hover:translate-x-[-4px] inline-block transition-transform duration-300">
                                View Content
                              </span>
                            </div>
                            <div className="relative w-4">
                              <ArrowRight className="h-4 w-4 group-hover:translate-x-[3px] transition-transform duration-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </>
        )}
      </div>

      {/* Subtle top wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full rotate-180"
          style={{ height: "40px" }}
          fill="white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,141.89,111.27,221.93,101.3,286.36,93.06,275.65,62.23,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default PracticeTestsSection;

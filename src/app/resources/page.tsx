"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

// Import data from existing data files
import { videos as resourceVideos } from "@/data/resources/videos";
import { essays as resourceEssays } from "@/data/resources/essays";

// Types definition (imported from data files but redefined here to keep everything in one file)
interface Essay {
  id: number;
  title: string;
  content: string;
  fullContent: string;
  image?: string;
  category?: string;
  date?: string;
}

interface Video {
  id: number;
  title: string;
  description: string;
  videoId: string;
  category?: string;
}

// =========================
// Component Sub-Sections
// =========================

/**
 * Component for displaying a video item with enhanced visual design
 */
const VideoItem = ({ video, index }: { video: Video; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  // Observe video element to trigger animations when in view
  useEffect(() => {
    if (!videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("video-in-view");
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  // Handle video player control
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Handle category styling based on video category
  const getCategoryStyle = () => {
    switch (video.category) {
      case "speaking":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "writing":
        return "bg-violet-100 text-violet-700 border-violet-200";
      case "listening":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "general":
      default:
        return "bg-amber-100 text-amber-700 border-amber-200";
    }
  };

  return (
    <motion.div
      ref={videoRef}
      className={`bg-white rounded-xl shadow-md overflow-hidden ${
        index % 2 === 0 ? "" : ""
      } flex flex-col lg:flex-row gap-0`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      data-testid="video-item"
    >
      {/* Video Preview Section */}
      <div
        className={`relative ${
          index % 2 === 0 ? "lg:order-1" : "lg:order-2"
        } w-full lg:w-7/12`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Video Thumbnail with Overlay when not playing */}
        {!isPlaying && (
          <div className="relative aspect-video w-full overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10"
              aria-hidden="true"
            />
            <Image
              src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
              alt={`${video.title} thumbnail`}
              className={`object-cover w-full h-full transition-transform duration-700 ${
                isHovered ? "scale-110" : "scale-100"
              }`}
              width={1280}
              height={720}
            />

            {/* Play button overlay */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center z-20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={togglePlay}
                className="group bg-white/90 backdrop-blur-sm rounded-full p-5 shadow-lg transition-transform duration-300 hover:bg-primary hover:shadow-primary/20 hover:shadow-lg transform hover:-translate-y-1"
                aria-label={`Play ${video.title} video`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-primary group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </motion.div>

            {/* Duration and category badges */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-20">
              <span
                className={`px-3 py-1 rounded-full border ${getCategoryStyle()} text-xs font-medium`}
              >
                {video.category || "General"}
              </span>
              <span className="bg-black/60 text-white px-2 py-1 rounded text-xs backdrop-blur-sm">
                10:45
              </span>
            </div>
          </div>
        )}

        {/* Actual Video iframe when playing */}
        {isPlaying && (
          <div className="aspect-video w-full relative">
            <iframe
              src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
              title={video.title}
              className="w-full h-full rounded-t-lg lg:rounded-t-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              aria-label={`Video: ${video.title}`}
            />

            {/* Minimize button */}
            <button
              onClick={togglePlay}
              className="absolute top-4 right-4 z-30 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/70 transition-colors"
              aria-label="Minimize video"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div
        className={`${
          index % 2 === 0 ? "lg:order-2" : "lg:order-1"
        } w-full lg:w-5/12 p-6 md:p-8 flex flex-col justify-center`}
      >
        <div className="space-y-4">
          {/* Category badge - only shows on mobile when not playing */}
          {!isPlaying && (
            <div className="lg:hidden">
              <span
                className={`inline-block px-3 py-1 rounded-full border ${getCategoryStyle()} text-xs font-medium`}
              >
                {video.category || "General"}
              </span>
            </div>
          )}

          {/* Title with animation */}
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-gray-800"
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {video.title}
          </motion.h2>

          {/* Divider */}
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-[#d56e1f]"></div>

          {/* Description */}
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {video.description}
          </motion.p>

          {/* Action buttons */}
          <div className="pt-4 flex flex-wrap gap-3">
            {/* Watch button (shows only when not already playing) */}
            {!isPlaying && (
              <motion.button
                onClick={togglePlay}
                className="flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-sm hover:shadow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Watch Video
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/**
 * Component for displaying an essay card in the grid with enhanced design
 */
const EssayCard = ({
  essay,
  onSelect,
}: {
  essay: Essay;
  onSelect: (essay: Essay) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Function to format the date nicely
  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 h-full flex flex-col"
      whileHover={{
        y: -5,
        boxShadow:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.03)",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid="essay-card"
    >
      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
          {essay.title}
        </h3>

        {essay.date && (
          <div className="flex items-center mb-3 text-xs text-gray-500">
            <svg
              className="w-4 h-4 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {formatDate(essay.date)}
          </div>
        )}

        <p className="text-gray-600 mb-4 text-sm line-clamp-3 flex-1">
          {essay.content}
        </p>

        <div className="mt-auto">
          <motion.button
            onClick={() => onSelect(essay)}
            className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-[#d56e1f] font-medium hover:bg-[#d56e1f] hover:text-white hover:border-[#d56e1f] transition-colors group relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label={`Read more about ${essay.title}`}
          >
            <span className="relative z-10">Read Full Essay</span>
            <svg
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>

            {/* Animated background on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#cc0d09]/90 to-[#d56e1f]/90 -z-10"
              initial={{ x: "-100%", opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

/**
 * Component for displaying a full essay
 */
const EssayDetail = ({
  essay,
  onBack,
}: {
  essay: Essay;
  onBack: () => void;
}) => {
  // Scroll to top when viewing a new essay
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [essay.id]);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <button
        onClick={onBack}
        className="text-blue-500 hover:underline mb-6 flex items-center"
        aria-label="Back to essays list"
      >
        ← Back to Essays
      </button>

      <h1 className="text-3xl font-bold text-gray-800 mb-6">{essay.title}</h1>

      {essay.image && (
        <div className="mb-8">
          <div className="relative w-full h-auto min-h-[300px]">
            <Image
              src={essay.image}
              alt={essay.title}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-contain rounded-lg shadow-md"
              priority={true}
            />
          </div>
        </div>
      )}

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: essay.fullContent }}
      />
    </div>
  );
};

/**
 * Navigation tabs component
 */
const TabNavigation = ({
  activeTab,
  onTabChange,
}: {
  activeTab: string;
  onTabChange: (tab: string) => void;
}) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="relative group p-1 rounded-full">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#cc0d09] via-[#d56e1f] to-[#8B4513] rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
        <div className="relative flex space-x-4 bg-white rounded-full shadow-md p-1">
          <button
            onClick={() => onTabChange("videos")}
            className={cn(
              "nav-button px-8 py-3 rounded-full transition-all",
              activeTab === "videos"
                ? "bg-gradient-to-r from-[#cc0d09] via-[#d56e1f] to-[#8B4513] text-white active"
                : "text-gray-600 hover:text-[#d56e1f]"
            )}
            aria-selected={activeTab === "videos"}
            role="tab"
          >
            Videos
          </button>
          <button
            onClick={() => onTabChange("essays")}
            className={cn(
              "nav-button px-8 py-3 rounded-full transition-all",
              activeTab === "essays"
                ? "bg-gradient-to-r from-[#cc0d09] via-[#d56e1f] to-[#8B4513] text-white active"
                : "text-gray-600 hover:text-[#d56e1f]"
            )}
            aria-selected={activeTab === "essays"}
            role="tab"
          >
            Essays
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Hero section component with a clean white design inspired by home page
 */
const ResourcesHero = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <section className="relative overflow-hidden bg-white w-full pt-28 pb-16">
      {/* Subtle background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`py-8 transition-all duration-1000 md:flex items-center justify-between gap-12 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Left column with text content */}
          <div className="md:w-2/3 text-center md:text-left">
            <motion.div
              className="relative inline-block mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800">
                Free Learning
                <span className="block mt-2 text-5xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-[#cc0d09] via-[#d56e1f] to-[#8B4513] bg-clip-text text-transparent">
                  Resources
                </span>
              </h1>

              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-3 left-0 h-1.5 bg-gradient-to-r from-[#cc0d09] to-[#d56e1f] rounded-full"
                initial={{ width: 0 }}
                animate={isVisible ? { width: "60%" } : { width: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              />
            </motion.div>

            <motion.p
              className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Access our comprehensive collection of educational videos and
              sample essays to enhance your academic writing skills and excel in
              your IELTS exam.
            </motion.p>

            {/* Stats or highlights */}
            <motion.div
              className="mt-8 flex flex-wrap gap-6 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <svg
                    className="h-5 w-5 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-800">Video Lessons</div>
                  <div className="text-sm text-gray-500">Expert tutorials</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-[#d56e1f]/10 flex items-center justify-center mr-3">
                  <svg
                    className="h-5 w-5 text-[#d56e1f]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-800">Sample Essays</div>
                  <div className="text-sm text-gray-500">Proven templates</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column with decorative elements */}
          <div className="hidden md:block md:w-1/3 relative">
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Grid pattern */}
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="rounded-lg bg-gray-50/80 border border-gray-100"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={
                      isVisible
                        ? { scale: 1, opacity: 1 }
                        : { scale: 0.8, opacity: 0 }
                    }
                    transition={{
                      delay: 0.6 + i * 0.1,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </div>

              {/* Floating paper */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-32 h-40 bg-white shadow-lg rounded-lg rotate-6 border border-gray-100 z-10"
                animate={{
                  y: [0, -10, 0],
                  rotate: [6, 8, 6],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div className="h-2 w-12 bg-primary/20 rounded-full absolute top-6 left-3"></div>
                <div className="h-2 w-16 bg-primary/10 rounded-full absolute top-12 left-3"></div>
                <div className="h-2 w-10 bg-primary/10 rounded-full absolute top-18 left-3"></div>
                <div className="h-2 w-14 bg-primary/10 rounded-full absolute top-24 left-3"></div>
              </motion.div>

              {/* Floating video icon */}
              <motion.div
                className="absolute bottom-1/4 right-1/4 h-16 w-16 bg-gradient-to-r from-[#cc0d09]/80 to-[#d56e1f]/80 rounded-xl shadow-lg flex items-center justify-center text-white"
                animate={{
                  y: [0, -15, 0],
                  rotate: [-5, 0, -5],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }}
              >
                <svg
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle wave divider */}
      <div className="absolute bottom-0 left-0 right-0 h-10 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-full"
          fill="rgb(249, 250, 251)"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,141.89,111.27,221.93,101.3,286.36,93.06,275.65,62.23,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

/**
 * Video gallery component
 */
const VideoGallery = ({ videos }: { videos: Video[] }) => {
  return (
    <div className="space-y-16">
      {videos.map((video, index) => (
        <VideoItem key={video.id} video={video} index={index} />
      ))}
    </div>
  );
};

/**
 * Essay gallery component
 */
const EssayGallery = ({
  essays,
  onSelectEssay,
}: {
  essays: Essay[];
  onSelectEssay: (essay: Essay) => void;
}) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {essays.map((essay) => (
        <EssayCard key={essay.id} essay={essay} onSelect={onSelectEssay} />
      ))}
    </div>
  );
};

// =========================
// Main Component
// =========================

/**
 * Main Resources page component
 */
const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState("videos");
  const [isVisible, setIsVisible] = useState(false);
  const [selectedEssay, setSelectedEssay] = useState<Essay | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Set visible after mount for animation
  useEffect(() => {
    setIsVisible(true);

    // Handle URL hash for direct linking to tabs
    if (typeof window !== "undefined") {
      if (window.location.hash === "#essays") {
        setActiveTab("essays");
      } else if (window.location.hash === "#videos") {
        setActiveTab("videos");
      }
    }
  }, []);
  
  // Use data from imported files
  const videos = useMemo(() => resourceVideos, []);
  const essays = useMemo(() => resourceEssays, []);

  // Handle tab change
  const handleTabChange = useCallback((tab: string) => {
    setActiveTab(tab);
    // Scroll container back to top when changing tabs for better UX
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  // Handle selecting an essay to view
  const handleSelectEssay = useCallback((essay: Essay) => {
    setSelectedEssay(essay);
  }, []);

  // Handle going back from essay view
  const handleBackToEssays = useCallback(() => {
    setSelectedEssay(null);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50" ref={containerRef}>
      {/* {useAnimationStyles()} */}

      {/* Hero Section */}
      <ResourcesHero isVisible={isVisible} />

      <div className="container mx-auto px-4 py-12">
        {/* Navigation Tabs - Only show when no essay is selected */}
        {!selectedEssay && (
          <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
        )}

        {/* Content */}
        {!selectedEssay ? (
          <>
            {activeTab === "videos" ? (
              <VideoGallery videos={videos} />
            ) : (
              <EssayGallery essays={essays} onSelectEssay={handleSelectEssay} />
            )}
          </>
        ) : (
          // Full Essay View
          <EssayDetail essay={selectedEssay} onBack={handleBackToEssays} />
        )}
      </div>
    </div>
  );
};

export default ResourcesPage;

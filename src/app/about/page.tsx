"use client";

import { useState, useEffect, useRef } from "react";
import {
  Users,
  GraduationCap,
  Star,
  Trophy,
  ChevronDown,
  BadgeCheck,
  BookOpen,
  Globe,
} from "lucide-react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";

const AboutUs = () => {
  // State for counters and accordion
  const [counts, setCounts] = useState({
    students: 0,
    success: 0,
    experience: 0,
    satisfaction: 0,
  });
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // References for scroll animations
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  // Parallax and scroll effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);

  const toggleSection = (index: number): void => {
    setOpenSection(openSection === index ? null : index);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const imageReveal = {
    hidden: {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    },
    visible: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
    },
  };

  // Accordion data
  const accordionData = [
    {
      title: "What is the IELTS Test?",
      content:
        "IELTS = International English Language Testing System. It is the biggest English language test in the world with test centers in almost all countries. It is an international English test, which accepts international English, not just British English. It is taken by most people for their professional work, academic studies or moving to an English speaking country. The test can be taken on paper or on a computer. It is the same test regardless of whether you write your answers on paper or computer.",
    },
    {
      title: "About IELTS Listening Test",
      content:
        "This listening test comes in 4 sections with 40 questions. Section 1 & section 2 are based on social topics and section 3 & 4 are academic in nature. There are many different types of questions and you must prepare techniques for each type. The recording is played for 30 mins, there is then time to transfer or check answers (see the listening page for details). All candidates take the same listening test.",
    },
    {
      title: "About IELTS Reading Test",
      content:
        "This test has 3 passages with 40 questions. Academic reading contains academic style passages. GT reading contains everyday or work related topics and passage 3 is similar to academic reading. There are 14 types of questions, which are the same for both tests, and you must practice them all for familiarity and strategy. All reading practice lessons on this website are for both Academic & GT candidates. The reading test lasts 1 hour.",
    },
    {
      title: "About IELTS Writing Test",
      content:
        "There are two tasks. Task 1 is a report based on a chart, graph table etc. For GT IELTS candidates, task 1 is a letter. Writing task 2 is the same for both tests – a formal essay. There are five different essay types to prepare for. Essays are topic based so you must prepare ideas and vocabulary for topics. You must understand the marking criteria for success because it is not entirely based on your English language. See band scores below. The writing test is 1 hour.",
    },
    {
      title: "About IELTS Speaking Test",
      content:
        "This is a face to face, informal speaking test with the examiner either in a room or through video call. It lasts for 11 – 14 mins and has 3 parts. Part 1 and 3 are question/answers. Part 2 is a talk that you give for 2 mins with 1 min preparation. Topics are crucial for your speaking test preparation because it is a topic based test. Topic relevant vocabulary is vital. All candidates take the same test. You must understand the marking criteria.",
    },
  ];

  useEffect(() => {
    setIsVisible(true);

    // Counter animation
    const targetCounts = {
      students: 7000,
      success: 95,
      experience: 10,
      satisfaction: 98,
    };

    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;

    const incrementCounts = (step: number): void => {
      setCounts({
        students: Math.floor((targetCounts.students / steps) * step),
        success: Math.floor((targetCounts.success / steps) * step),
        experience: Math.floor((targetCounts.experience / steps) * step),
        satisfaction: Math.floor((targetCounts.satisfaction / steps) * step),
      });
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        incrementCounts(currentStep);
      } else {
        clearInterval(timer);
        setCounts(targetCounts);
      }
    }, interval);

    // Load Elfsight script
    const loadElfsightScript = () => {
      if (typeof document !== "undefined") {
        const script = document.createElement("script");
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.defer = true;
        script.setAttribute("data-use-service-core", "");
        document.body.appendChild(script);

        return () => {
          // Clean up script
          if (script.parentNode) {
            script.parentNode.removeChild(script);
          }
        };
      }
      return () => {};
    };

    const cleanup = loadElfsightScript();

    return () => {
      clearInterval(timer);
      cleanup();
    };
  }, []);

  return (
    <div className="bg-white">
      {/* About Hero Section - Redesigned with better whitespace and animations */}
      <motion.section
        ref={heroRef}
        className="relative pt-24 pb-24 bg-white overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Subtle accent line at top */}
        <motion.div
          className="absolute top-0 left-0 w-full h-0.5"
          initial={{
            scaleX: 0,
            background:
              "linear-gradient(to right, rgba(204, 13, 9, 0.1), rgba(213, 110, 31, 0.4), rgba(204, 13, 9, 0.1))",
          }}
          animate={{
            scaleX: 1,
            background:
              "linear-gradient(to right, rgba(204, 13, 9, 0.4), rgba(213, 110, 31, 0.4), rgba(204, 13, 9, 0.4))",
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        ></motion.div>

        {/* Animated decorative elements */}
        <motion.div
          className="absolute top-40 right-20 w-64 h-64 rounded-full bg-[#cc0d09]/3 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 -left-20 w-72 h-72 rounded-full bg-[#d56e1f]/3 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.25, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        ></motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row md:items-start gap-16 lg:gap-24">
            {/* About content - with improved spacing and animations */}
            <motion.div className="md:w-1/2 space-y-8" style={{ y: y1 }}>
              <motion.div variants={fadeIn}>
                <motion.div
                  className="inline-flex items-center bg-gray-50 rounded-full px-3 py-1 text-sm text-gray-600 mb-5"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(204, 13, 9, 0.05)",
                  }}
                >
                  <BookOpen className="w-3.5 h-3.5 mr-2 text-[#cc0d09]" />
                  <span>About IELTS 7+ House</span>
                </motion.div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  Your Path to{" "}
                  <span className="relative inline-block">
                    <motion.span
                      className="relative z-10 text-[#cc0d09]"
                      initial={{ opacity: 0.6 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8 }}
                    >
                      IELTS Success
                    </motion.span>
                    <motion.span
                      className="absolute bottom-1 left-0 w-full h-2 bg-[#d56e1f]/10 -z-10"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: "easeInOut",
                      }}
                    ></motion.span>
                  </span>
                </h1>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 relative"
                variants={fadeIn}
                whileHover={{
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  y: -3,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute -top-2 -left-2 w-5 h-5 bg-[#cc0d09] rounded-full flex items-center justify-center text-white text-xs"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                >
                  "
                </motion.div>
                <p className="text-gray-600 italic text-base leading-relaxed">
                  I have been teaching English since 2013. My formal experience
                  with IELTS training starts from 2017. I have trained hundreds
                  of students and worked with companies like Hindustan Times
                  Learning Centers, English by Experts.
                </p>
                <p className="text-right text-gray-800 font-semibold mt-4 text-sm">
                  - MEENU NARULA
                </p>
              </motion.div>

              <motion.div className="flex flex-wrap gap-3" variants={fadeIn}>
                {[
                  {
                    icon: BadgeCheck,
                    text: "Certified IELTS Trainer",
                    color: "text-[#cc0d09]",
                  },
                  {
                    icon: Globe,
                    text: "Global Experience",
                    color: "text-[#d56e1f]",
                  },
                ].map((badge, index) => (
                  <motion.div
                    key={index}
                    className="px-4 py-1.5 bg-gray-50 rounded-lg flex items-center"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(249, 250, 251, 0.9)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <badge.icon className={`w-4 h-4 ${badge.color} mr-2`} />
                    <span className="font-medium text-sm">{badge.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="p-4 bg-[#cc0d09]/5 rounded-lg"
                variants={fadeIn}
                whileHover={{ backgroundColor: "rgba(204, 13, 9, 0.08)" }}
              >
                <p className="text-gray-700 flex items-center font-medium text-sm">
                  <motion.div
                    animate={{
                      rotate: [0, 10, 0, -10, 0],
                      scale: [1, 1.1, 1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 5,
                    }}
                  >
                    <Star className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" />
                  </motion.div>
                  We've helped{" "}
                  <span className="font-bold mx-1">2400+ people</span> score
                  <span className="font-bold mx-1">8+ bands</span> in IELTS
                </p>
              </motion.div>

              <motion.div variants={fadeIn}>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    href="#success-stories"
                    className="inline-flex items-center text-[#cc0d09] font-medium text-sm hover:underline"
                  >
                    Read success stories
                    <svg
                      className="w-3.5 h-3.5 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Profile image - simplified design with animations */}
            <motion.div
              className="md:w-1/2 mt-10 md:mt-0"
              variants={fadeIn}
              style={{ y: y2 }}
            >
              <motion.div className="relative max-w-md mx-auto">
                {/* Subtle decorative elements */}
                <motion.div
                  className="absolute -inset-1 rounded-lg bg-gradient-to-tr from-[#cc0d09]/10 to-[#d56e1f]/10 blur-sm"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                ></motion.div>

                <div className="relative rounded-lg overflow-hidden">
                  <motion.div variants={imageReveal}>
                    <Image
                      src="/meenu-narula.webp"
                      alt="Meenu Narula - IELTS Trainer"
                      width={400}
                      height={400}
                      className="w-full h-auto rounded-lg"
                      priority
                    />
                  </motion.div>

                  {/* Animated info card */}
                  <motion.div
                    className="absolute bottom-4 left-4 p-3 bg-white/95 backdrop-blur-sm rounded-lg shadow-sm max-w-[200px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    whileHover={{
                      y: -3,
                      boxShadow:
                        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <h3 className="text-base font-bold text-gray-800">
                      Meenu Narula
                    </h3>
                    <p className="text-[#cc0d09] text-xs font-medium">
                      IELTS Trainer & Founder
                    </p>
                    <div className="mt-1 flex items-center text-gray-600 text-xs">
                      <GraduationCap className="w-3 h-3 mr-1" />
                      <span>{counts.experience}+ years experience</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section with animations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            {[
              {
                icon: Users,
                value: counts.students,
                label: "Students Trained",
                suffix: "+",
                color: "bg-gradient-to-br from-[#cc0d09]/10 to-[#d56e1f]/10",
                textColor: "text-[#cc0d09]",
                iconColor: "text-[#cc0d09]",
              },
              {
                icon: Trophy,
                value: counts.success,
                label: "Success Rate",
                suffix: "%",
                color: "bg-gradient-to-br from-amber-500/10 to-amber-600/10",
                textColor: "text-amber-600",
                iconColor: "text-amber-500",
              },
              {
                icon: GraduationCap,
                value: counts.experience,
                label: "Years Experience",
                suffix: "+",
                color: "bg-gradient-to-br from-blue-500/10 to-blue-600/10",
                textColor: "text-blue-600",
                iconColor: "text-blue-500",
              },
              {
                icon: Star,
                value: counts.satisfaction,
                label: "Satisfaction",
                suffix: "%",
                color:
                  "bg-gradient-to-br from-emerald-500/10 to-emerald-600/10",
                textColor: "text-emerald-600",
                iconColor: "text-emerald-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <div
                  className={`rounded-xl p-6 h-full ${stat.color} border border-gray-100`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      className="w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-sm"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                    </motion.div>
                    <motion.span
                      className={`text-4xl font-bold ${stat.textColor}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1 + 0.2,
                        type: "spring",
                      }}
                    >
                      {stat.value}
                      {stat.suffix}
                    </motion.span>
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* IELTS Information Section */}
      <section className="py-16 bg-gray-50 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="px-4 py-1.5 bg-[#cc0d09]/10 text-[#cc0d09] rounded-full text-sm font-medium inline-block mb-4"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              IELTS Knowledge
            </motion.span>
            <h2 className="text-3xl font-bold text-gray-900">
              Understanding the IELTS Exam
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Learn about the different sections of the IELTS exam and how our
              expert coaching can help you succeed.
            </p>
          </motion.div>

          <div className="space-y-4">
            {accordionData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                whileHover={{
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
              >
                <motion.button
                  onClick={() => toggleSection(index)}
                  className="w-full p-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                  whileTap={{ backgroundColor: "rgba(204, 13, 9, 0.05)" }}
                >
                  <div className="flex items-center">
                    <motion.div
                      className={`w-10 h-10 rounded-lg mr-3 flex items-center justify-center ${
                        openSection === index ? "bg-[#cc0d09]" : "bg-gray-100"
                      }`}
                      animate={{
                        backgroundColor:
                          openSection === index ? "#cc0d09" : "#f3f4f6",
                        scale: openSection === index ? 1.1 : 1,
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {openSection === index ? (
                        <motion.span
                          className="text-white font-medium"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          {index + 1}
                        </motion.span>
                      ) : (
                        <span className="text-gray-500 font-medium">
                          {index + 1}
                        </span>
                      )}
                    </motion.div>
                    <h3 className="font-bold text-gray-800 text-left">
                      {item.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openSection === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openSection === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        className="p-4 pt-0 border-t border-gray-100"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-gray-700">{item.content}</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories / Testimonials */}
      <section id="success-stories" className="py-16 bg-white relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2,
              }}
              className="w-16 h-16 bg-gradient-to-r from-[#cc0d09] to-[#d56e1f] rounded-full flex items-center justify-center text-white mx-auto mb-4"
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 10px 25px -5px rgba(204, 13, 9, 0.3), 0 8px 10px -6px rgba(204, 13, 9, 0.2)",
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <Star className="w-8 h-8" />
              </motion.div>
            </motion.div>

            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read what our students have to say about their experience and
              success with our IELTS preparation program.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-gray-50 to-white p-1 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="bg-white rounded-xl overflow-hidden">
              <div className="elfsight-app-d1308ecc-ede2-4180-a34d-7a3b82f32886"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

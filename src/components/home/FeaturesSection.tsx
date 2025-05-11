"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  BookOpen,
  BarChart3,
  Award,
  Brain,
  LineChart,
  Clock,
  CheckCircle2,
  GraduationCap,
  Globe2,
  Headphones,
  Laptop,
  Sparkles,
  ArrowRight,
  Gauge,
  BarChart4,
  Route,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";

// Interface for feature items
interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  textColor: string;
  accentClass: string;
  delay: number;
}

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px 0px" });
  const [activeTab, setActiveTab] = useState<
    "preparation" | "tracking" | "resources"
  >("preparation");
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "The practice tests on IELTS 7+ House were invaluable for my preparation. The detailed analytics helped me identify my weaknesses, and I improved from band 6 to 7.5 in just two months!",
      name: "Sarah L.",
      achievement: "Achieved Band 7.5",
      location: "Sydney, Australia",
    },
    {
      quote:
        "IELTS 7+ House provided me with the best resources and guidance. I was able to achieve my target band score with ease!",
      name: "John D.",
      achievement: "Achieved Band 8",
      location: "London, UK",
    },
    {
      quote:
        "Thanks to IELTS 7+ House, I gained confidence in my speaking and writing skills. The platform is truly comprehensive!",
      name: "Emily R.",
      achievement: "Achieved Band 7",
      location: "Toronto, Canada",
    },
  ];

  // For parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.6, 1, 1, 0.6]
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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

  // Feature categories with visual variants
  const featureCategories = {
    preparation: {
      title: "Exam Preparation",
      description:
        "Our comprehensive and structured approach to IELTS preparation",
      gradient: "from-orange-400 to-amber-500",
      features: [
        {
          icon: BookOpen,
          title: "Authentic Materials",
          description:
            "Practice with genuine Cambridge IELTS tests for the most accurate preparation experience.",
          color: "bg-amber-100",
          textColor: "text-amber-700",
          accentClass: "border-amber-300",
          delay: 0,
        },
        {
          icon: Clock,
          title: "Time Management",
          description:
            "Master timing strategies with our timed practice tests and performance tracking.",
          color: "bg-orange-100",
          textColor: "text-orange-700",
          accentClass: "border-orange-300",
          delay: 0.1,
        },
        {
          icon: CheckCircle2,
          title: "Question Techniques",
          description:
            "Learn effective approaches for every question type across all test sections.",
          color: "bg-rose-100",
          textColor: "text-rose-700",
          accentClass: "border-rose-300",
          delay: 0.2,
        },
        {
          icon: GraduationCap,
          title: "Expert Guidance",
          description:
            "Follow instruction from IELTS examiners with decades of assessment experience.",
          color: "bg-amber-100",
          textColor: "text-amber-700",
          accentClass: "border-amber-300",
          delay: 0.3,
        },
      ],
    },
    tracking: {
      title: "Progress Tracking",
      description:
        "Monitor your improvement and identify areas for development",
      gradient: "from-blue-500 to-violet-500",
      features: [
        {
          icon: BarChart3,
          title: "Performance Analytics",
          description:
            "Detailed insights into your test performance with strength and weakness analysis.",
          color: "bg-blue-100",
          textColor: "text-blue-700",
          accentClass: "border-blue-300",
          delay: 0,
        },
        {
          icon: LineChart,
          title: "Progress Dashboard",
          description:
            "Track your improvement over time with visual progress indicators and reports.",
          color: "bg-indigo-100",
          textColor: "text-indigo-700",
          accentClass: "border-indigo-300",
          delay: 0.1,
        },
        {
          icon: Brain,
          title: "Adaptive Learning",
          description:
            "Our system adapts to focus on your areas of weakness for faster improvement.",
          color: "bg-violet-100",
          textColor: "text-violet-700",
          accentClass: "border-violet-300",
          delay: 0.2,
        },
        {
          icon: Gauge,
          title: "Band Score Prediction",
          description:
            "AI-powered band score assessment based on your practice test performance.",
          color: "bg-purple-100",
          textColor: "text-purple-700",
          accentClass: "border-purple-300",
          delay: 0.3,
        },
      ],
    },
    resources: {
      title: "Learning Resources",
      description:
        "Comprehensive tools and materials for every aspect of your IELTS journey",
      gradient: "from-emerald-500 to-teal-500",
      features: [
        {
          icon: Globe2,
          title: "Global Access",
          description:
            "Study from anywhere with our cloud-based platform and mobile optimization.",
          color: "bg-emerald-100",
          textColor: "text-emerald-700",
          accentClass: "border-emerald-300",
          delay: 0,
        },
        {
          icon: Headphones,
          title: "Audio Library",
          description:
            "Extensive listening practice with various accents and speech patterns.",
          color: "bg-teal-100",
          textColor: "text-teal-700",
          accentClass: "border-teal-300",
          delay: 0.1,
        },
        {
          icon: Laptop,
          title: "Interactive Exercises",
          description:
            "Engage with interactive activities designed to build specific test skills.",
          color: "bg-cyan-100",
          textColor: "text-cyan-700",
          accentClass: "border-cyan-300",
          delay: 0.2,
        },
        {
          icon: Route,
          title: "Guided Study Paths",
          description:
            "Follow structured learning paths tailored to your target band score.",
          color: "bg-green-100",
          textColor: "text-green-700",
          accentClass: "border-green-300",
          delay: 0.3,
        },
      ],
    },
  };

  const currentCategory = featureCategories[activeTab];

  // Feature card component
  const FeatureCard = ({ feature }: { feature: FeatureItem }) => {
    const cardRef = useRef(null);
    const isCardInView = useInView(cardRef, { once: true, margin: "-50px" });
    const Icon = feature.icon;

    return (
      <motion.div
        ref={cardRef}
        initial="hidden"
        animate={isCardInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              delay: feature.delay,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        className={`bg-white p-6 rounded-xl shadow-sm border ${feature.accentClass} hover:shadow-lg transition-all duration-300 group`}
        whileHover={{ y: -5 }}
      >
        <div
          className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className={`w-6 h-6 ${feature.textColor}`} />
        </div>
        <h3 className={`text-xl font-semibold mb-3 ${feature.textColor}`}>
          {feature.title}
        </h3>
        <p className="text-gray-600">{feature.description}</p>
      </motion.div>
    );
  };

  // Animated statistic component
  const Statistic = ({
    value,
    label,
    icon: Icon,
    color,
    delay = 0,
  }: {
    value: string;
    label: string;
    icon: React.ElementType;
    color: string;
    delay?: number;
  }) => {
    return (
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
      >
        <div
          className={`${color} w-16 h-16 rounded-full flex items-center justify-center mb-3`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>
        <motion.div
          className="text-3xl font-bold text-gray-800"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: delay + 0.2,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ once: true }}
        >
          {value}
        </motion.div>
        <div className="text-gray-500 font-medium mt-1">{label}</div>
      </motion.div>
    );
  };

  // Stat card component
  const StatCard = ({
    title,
    value,
    icon: Icon,
    color,
    detail,
    percentIncrease,
    delay,
  }: {
    title: string;
    value: string;
    icon: React.ElementType;
    color: string;
    detail: string;
    percentIncrease: number;
    delay: number;
  }) => {
    return (
      <motion.div
        className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/10 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
      >
        <div
          className={`w-16 h-16 rounded-full bg-gradient-to-r ${color} flex items-center justify-center mb-4`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h4 className="text-xl font-bold text-white mb-2">{value}</h4>
        <p className="text-gray-300 text-sm">{title}</p>
        <p className="text-gray-400 text-xs">{detail}</p>
        <div className="mt-2 text-green-400 text-xs font-medium">
          +{percentIncrease}% increase
        </div>
      </motion.div>
    );
  };

  // White stat card component
  const WhiteStatCard = ({
    title,
    value,
    icon: Icon,
    color,
    detail,
    percentIncrease,
    delay,
  }: {
    title: string;
    value: string;
    icon: React.ElementType;
    color: string;
    detail: string;
    percentIncrease: number;
    delay: number;
  }) => {
    return (
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg border border-orange-100 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
      >
        <div
          className={`w-16 h-16 rounded-full bg-gradient-to-r ${color} flex items-center justify-center mb-4`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-2">{value}</h4>
        <p className="text-gray-600 text-sm">{title}</p>
        <p className="text-gray-500 text-xs">{detail}</p>
        <div className="mt-2 text-orange-600 text-xs font-medium">
          +{percentIncrease}% increase
        </div>
      </motion.div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      id="features"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10" />

      {/* Animated background decorations */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 rounded-full bg-gradient-to-r from-orange-300/10 to-amber-300/5 blur-3xl"
          style={{ y: y1 }}
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
          className="absolute bottom-40 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-300/10 to-violet-300/5 blur-3xl"
          style={{ y: y2 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl px-6 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-4 py-1.5 mb-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-full text-orange-600 font-medium text-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", stiffness: 400 }}
          >
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Comprehensive Platform</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything You Need for IELTS Success
          </motion.h2>

          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our platform provides all the tools, materials, and guidance you
            need to achieve your target band score in the IELTS exam.
          </motion.p>
        </motion.div>

        {/* Feature Tabs */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white p-1.5 rounded-xl shadow-sm border border-gray-100 flex justify-between gap-2 max-w-2xl mx-auto">
            <button
              onClick={() => setActiveTab("preparation")}
              className={`flex-1 py-3 px-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                activeTab === "preparation"
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-sm"
                  : "text-gray-600 hover:bg-orange-50 hover:text-orange-600"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Preparation</span>
            </button>
            <button
              onClick={() => setActiveTab("tracking")}
              className={`flex-1 py-3 px-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                activeTab === "tracking"
                  ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-sm"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <BarChart4 className="w-4 h-4" />
              <span>Analytics</span>
            </button>
            <button
              onClick={() => setActiveTab("resources")}
              className={`flex-1 py-3 px-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                activeTab === "resources"
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-sm"
                  : "text-gray-600 hover:bg-emerald-50 hover:text-emerald-600"
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Resources</span>
            </button>
          </div>
        </motion.div>

        {/* Active Feature Category */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-12">
              <motion.div
                className="text-center max-w-xl mx-auto mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className={`inline-block p-3 mb-4 rounded-lg bg-gradient-to-r ${currentCategory.gradient} shadow-lg`}
                >
                  {activeTab === "preparation" && (
                    <BookOpen className="w-5 h-5 text-white" />
                  )}
                  {activeTab === "tracking" && (
                    <BarChart4 className="w-5 h-5 text-white" />
                  )}
                  {activeTab === "resources" && (
                    <Award className="w-5 h-5 text-white" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {currentCategory.title}
                </h3>
                <p className="text-gray-600">{currentCategory.description}</p>
              </motion.div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentCategory.features.map((feature, index) => (
                  <FeatureCard key={feature.title} feature={feature} />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Illustrated Feature Section */}
        <motion.div
          className="mt-24 pt-16 border-t border-gray-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-4">
                <span className="inline-block px-4 py-1.5 bg-orange-100 rounded-full text-orange-600 font-medium text-sm mb-4">
                  Student Success
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Achieve Your Target Band Score
                </h3>
                <p className="text-gray-600 mb-8">
                  Our comprehensive platform is designed by IELTS experts to
                  help you prepare efficiently and effectively. We focus on all
                  four sections of the exam with authentic materials and proven
                  strategies.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Personalized study plans based on your strengths and weaknesses",
                  "Realistic practice tests simulating the actual exam conditions",
                  "Detailed feedback and improvement strategies for all sections",
                  "Expert-designed materials for consistent band score improvement",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  >
                    <div className="mt-1 bg-orange-100 rounded-full p-1">
                      <CheckCircle2 className="w-4 h-4 text-orange-600" />
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className="mt-10 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  const practiceTestsSection =
                    document.getElementById("practice-tests");
                  if (practiceTestsSection) {
                    practiceTestsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <span>Start Free Practice</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-gradient-to-br from-blue-400/20 to-violet-400/20 rounded-full blur-2xl"></div>

                {/* Main image with border/frame */}
                <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                  <Image
                    src="/essay-1.png"
                    alt="IELTS Preparation"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />

                  {/* Floating stat cards */}
                  <motion.div
                    className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-200 flex items-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    whileHover={{
                      y: -3,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="bg-emerald-100 p-2 rounded-md">
                      <TrendingUp className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">
                        Average Improvement
                      </div>
                      <div className="font-bold text-gray-900">+1.5 Bands</div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-200 flex items-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    whileHover={{
                      y: -3,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="bg-blue-100 p-2 rounded-md">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Success Rate</div>
                      <div className="font-bold text-gray-900">
                        95% of Students
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Showcase - Redesigned with white/orange theme */}
        <motion.div
          className="mt-24 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* White background with subtle orange accents */}
          <div className="absolute inset-0 bg-white rounded-2xl shadow-lg border border-orange-100"></div>

          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5"></div>

          {/* Orange gradient accents */}
          <motion.div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-amber-500" />

          <motion.div
            className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          <motion.div
            className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-orange-500/10"
                style={{
                  width: Math.random() * 6 + 3,
                  height: Math.random() * 6 + 3,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          <div className="relative z-10 py-16 px-8 md:py-20 md:px-12">
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-orange-100/80 text-orange-600 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <Award className="w-4 h-4" />
                <span className="text-sm font-medium">
                  Trusted by Students Worldwide
                </span>
              </motion.div>

              <motion.h3
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Our Impact in <span className="text-orange-600">Numbers</span>
              </motion.h3>

              <motion.p
                className="text-gray-600 max-w-2xl mx-auto text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Join thousands of successful test-takers who've achieved their
                goals with IELTS 7+ House
              </motion.p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              <WhiteStatCard
                title="Students"
                value="25,000+"
                icon={Users}
                color="from-orange-500 to-amber-500"
                detail="Worldwide learners"
                percentIncrease={32}
                delay={0.1}
              />

              <WhiteStatCard
                title="Countries"
                value="42"
                icon={Globe2}
                color="from-orange-500 to-amber-500"
                detail="Global reach"
                percentIncrease={18}
                delay={0.3}
              />

              <WhiteStatCard
                title="Practice Tests"
                value="150,000+"
                icon={BookOpen}
                color="from-orange-500 to-amber-500"
                detail="Tests completed"
                percentIncrease={45}
                delay={0.5}
              />

              <WhiteStatCard
                title="Success Rate"
                value="95%"
                icon={Award}
                color="from-orange-500 to-amber-500"
                detail="Achieved target score"
                percentIncrease={12}
                delay={0.7}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full"
          style={{ height: "50px" }}
          fill="white"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default FeaturesSection;

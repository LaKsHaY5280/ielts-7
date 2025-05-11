"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Instagram,
  Facebook,
  Youtube,
  Phone,
  MapPin,
  Mail,
  ArrowUpRight,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

// Import shadcn components
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });

  // Scroll-based parallax effect
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const linkVariants = {
    initial: { opacity: 0.8, x: 0 },
    hover: {
      opacity: 1,
      x: 5,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  const socialIconVariants = {
    initial: {
      scale: 1,
      backgroundColor: "rgba(33, 33, 33, 0.7)",
    },
    hover: {
      scale: 1.15,
      backgroundColor: "var(--primary)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  };

  // Preserve the existing content data
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Practice Tests", href: "/free/general_reading" },
    { name: "Writing Evaluation", href: "/evaluation" },
    { name: "Free Resources", href: "/watchNlearn" },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: "Canada Office",
      text: "334 King St N, Waterloo, ON N2J 2Z2",
      href: "https://maps.google.com/?q=334 King St N, Waterloo, ON N2J 2Z2",
    },
    {
      icon: MapPin,
      label: "India Office",
      text: "252, Block A3, Janakpuri, Delhi, 110058",
      href: "https://maps.google.com/?q=252, Block A3, Janakpuri, Delhi, 110058",
    },
    {
      icon: Phone,
      label: "Phone",
      text: "+91 81780 55015",
      href: "tel:+918178055015",
    },
    {
      icon: Mail,
      label: "Email",
      text: "contact@ielts7plus.com",
      href: "mailto:contact@ielts7plus.com",
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/ielts_7plus_house/",
      ariaLabel: "Follow us on Instagram",
      color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/people/IELTS-7-house/61561875090567/",
      ariaLabel: "Like us on Facebook",
      color: "hover:bg-blue-600",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://www.youtube.com/@harsharannarula7868",
      ariaLabel: "Subscribe to our YouTube channel",
      color: "hover:bg-red-600",
    },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black pt-20 pb-12"
    >
      {/* Modern mesh gradient background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,130,50,0.08),transparent_60%)] opacity-70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,130,50,0.05),transparent_50%)] opacity-70"></div>
        <div className="absolute inset-y-0 left-0 right-1/2 bg-[linear-gradient(90deg,rgba(0,0,0,0.05)_0%,transparent_100%)] opacity-70"></div>

        {/* Grid overlay */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(5rem,1fr))] h-full opacity-10">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="border-r border-white/10 h-full"></div>
          ))}
        </div>
        <div className="grid grid-rows-[repeat(auto-fit,minmax(5rem,1fr))] w-full opacity-10">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="border-b border-white/10 w-full"></div>
          ))}
        </div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        {/* Main Footer Content - New Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-16 mb-16">
          {/* Column 1: Brand Section */}
          <motion.div
            className="md:col-span-3 lg:col-span-1 space-y-8 order-1"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="space-y-6">
              {/* Branding & Logo */}
              <Link href="/" className="group flex items-center space-x-3">
                <motion.div className="relative w-16 h-16 overflow-visible">
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-primary/40 to-primary/5 rounded-full blur-xl"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                  />
                  <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-full p-2 border border-white/10 group-hover:border-primary/20 transition-all duration-300 z-10">
                    <Image
                      src="/icon.webp"
                      alt="IELTS 7+ House Logo"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                </motion.div>

                <div>
                  <motion.span
                    className="text-2xl font-bold text-white tracking-tight flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ delay: 0.15, duration: 0.5 }}
                  >
                    IELTS 7<span className="text-primary">+</span>
                    <span className="mx-1">House</span>
                  </motion.span>
                  <motion.div
                    className="h-0.5 w-0 bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-500"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : { width: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  />
                </div>
              </Link>

              {/* Description */}
              <motion.p
                className="text-gray-400 leading-relaxed text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.25, duration: 0.6 }}
              >
                Your journey to IELTS Band 7+ starts here. We provide expert
                guidance and proven resources to help you achieve your academic
                goals and unlock global opportunities.
              </motion.p>
            </div>

            {/* Social Links - Redesigned */}
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4 }}
            >
              <TooltipProvider delayDuration={300}>
                {socialLinks.map((social, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <motion.a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center h-10 w-10 bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 text-gray-300 rounded-lg hover:border-primary/30"
                        aria-label={social.ariaLabel}
                        variants={socialIconVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <social.icon className="h-5 w-5" />
                      </motion.a>
                    </TooltipTrigger>
                    <TooltipContent
                      side="bottom"
                      className="bg-gray-900/90 text-white border-gray-800"
                    >
                      <p>{social.ariaLabel}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </motion.div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            className="space-y-6 order-3 md:order-2"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-white text-xl font-semibold flex items-center">
              <span className="w-1 h-5 bg-primary rounded-full mr-3"></span>
              Quick Links
            </h3>

            <ul className="space-y-4 mt-6">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={linkVariants}
                  initial="initial"
                  whileHover="hover"
                  className="border-b border-gray-800/40 pb-2 last:border-0"
                >
                  <Link
                    href={link.href}
                    className="group text-gray-400 hover:text-white transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <motion.div
                      initial={{ x: -5, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="text-primary"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </motion.div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3-4: Contact Information */}
          <motion.div
            className="space-y-6 order-4 md:order-3 md:col-span-2"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-white text-xl font-semibold flex items-center">
              <span className="w-1 h-5 bg-primary rounded-full mr-3"></span>
              Contact Us
            </h3>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-5 mt-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start rounded-lg p-3 hover:bg-gray-800/20 transition-colors border border-transparent hover:border-gray-700/40"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="bg-gray-800/40 group-hover:bg-primary/20 backdrop-blur-sm rounded-lg p-2 mr-3 transition-colors">
                    <info.icon className="h-4 w-4 text-gray-300 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1 group-hover:text-gray-300 transition-colors">
                      {info.label}
                    </p>
                    <div className="text-gray-300 text-sm group-hover:text-white transition-colors flex items-center">
                      <span>{info.text}</span>
                      <ExternalLink className="h-3 w-3 ml-1.5 opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              className="mt-6 pt-2"
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                variant="outline"
                size="sm"
                className="bg-primary/10 backdrop-blur-sm border-primary/20 text-white hover:bg-primary/20 hover:text-white transition-all duration-300"
              >
                <Link href="/about" className="flex items-center">
                  Learn more about us
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 3, transition: { duration: 0.2 } }}
                  >
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Call to Action Section - Updated to focus on existing content */}
          <motion.div
            className="space-y-6 order-2 md:order-4 lg:col-span-4"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="bg-gray-800/30 backdrop-blur-md border border-gray-700/30 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -left-20 -top-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="max-w-md">
                  <h3 className="text-white text-xl font-semibold">
                    Ready to Improve Your IELTS Score?
                  </h3>
                  <p className="text-gray-400 mt-2">
                    Access our free practice tests and study materials to boost
                    your preparation.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-white font-medium"
                  >
                    <Link href="/free/general_reading">Try Practice Tests</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary/30 bg-gray-800/50 text-white hover:bg-primary/20 hover:border-primary/50 font-medium transition-all duration-300"
                  >
                    <Link
                      href="/watchNlearn"
                      className="flex items-center gap-2"
                    >
                      Watch & Learn
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </motion.span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section with animated divider */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-gray-700/40 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Bottom Links and Credits - Modernized */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-y-2 gap-x-6 text-gray-500 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-primary transition-colors"
            >
              Sitemap
            </Link>
          </motion.div>

          <motion.div
            className="flex flex-col items-center md:items-end gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <p className="text-gray-500 text-sm">
              © {currentYear} IELTS 7+ House. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              Designed with ❤️ for IELTS aspirants
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

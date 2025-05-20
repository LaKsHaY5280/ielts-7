"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLimitedBrowser, setIsLimitedBrowser] = useState(false);
  const [activeItem, setActiveItem] = useState("/");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 8]);
  const headerY = useTransform(scrollY, [0, 100], [0, -10]);
  // Handle scroll effect for header and detect limited browsers
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Detect if we're in a limited browser environment
    const detectLimitedBrowser = () => {
      // Check for common features that might be missing in LG Smart TV browser
      const isLimited =
        typeof window !== "undefined" &&
        (!window.requestAnimationFrame ||
          !window.matchMedia ||
          /LG|WebOS|SMART-TV/.test(navigator.userAgent) ||
          document.documentElement.classList.contains("legacy-browser"));

      setIsLimitedBrowser(isLimited);
    };

    detectLimitedBrowser();

    // Set active menu item based on current path
    setActiveItem(window.location.pathname);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Writing Review", path: "/writing-review" },
    { name: "Free Resources", path: "/resources" },
  ];

  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
    hover: {
      scale: 1.05,
      filter: "brightness(1.15) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.12))",
      transition: {
        scale: { duration: 0.3, ease: "easeOut" },
        filter: { duration: 0.4 },
      },
    },
    tap: { scale: 0.97, filter: "brightness(0.95)" },
  };

  const navItemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
    hover: { y: -3, transition: { duration: 0.2, ease: "easeOut" } },
  };

  // New enhanced hover effect for navigation links
  const linkHoverVariants = {
    initial: { scaleX: 0 },
    hover: {
      scaleX: 1,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        opacity: { duration: 0.2 },
        height: { duration: 0.3, delay: 0.1 },
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        opacity: { duration: 0.3, delay: 0.1 },
        height: { duration: 0.4 },
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const mobileNavItemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 },
    },
    open: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        opacity: headerOpacity,
        paddingTop: 16,
        paddingBottom: 16,
        y: headerY,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 backdrop-blur-sm h-[72px] flex items-center ${
        isScrolled ? "bg-white/80 shadow-sm" : "bg-transparent"
      }`}
    >
      <motion.div
        style={{ backdropFilter: `blur(${headerBlur}px)` }}
        className="absolute inset-0 -z-10"
      />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Logo with enhanced animations and highlight effect */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            className="relative"
          >
            <Link href="/" className="flex items-center">
              <div className="relative">
                {/* Glow effect behind logo */}
                <motion.div
                  className="absolute inset-0 bg-primary/10 rounded-xl blur-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: isScrolled ? 0 : 0.5, scale: 1 }}
                  whileHover={{ opacity: 0.7, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                />

                <Image
                  src="/logo.webp"
                  alt="IELTS 7+ House Logo"
                  width={170}
                  height={55}
                  className="h-auto relative z-10 drop-shadow-sm transition-all"
                  priority
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation with improved hover animations */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-5">
                {navItems.map((item, i) => (
                  <NavigationMenuItem key={item.name}>
                    <motion.div
                      custom={i}
                      variants={navItemVariants}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      onHoverStart={() => setHoveredItem(item.path)}
                      onHoverEnd={() => setHoveredItem(null)}
                      className="relative"
                    >
                      <Link
                        href={item.path}
                        className={`relative px-3 py-2 font-medium text-base transition-colors ${
                          activeItem === item.path
                            ? "text-primary"
                            : "text-gray-800"
                        } hover:text-primary duration-300`}
                      >
                        <span className="relative z-10">{item.name}</span>

                        {/* Enhanced hover effect */}
                        {hoveredItem === item.path && (
                          <motion.span
                            layoutId="hoverHighlight"
                            className={`absolute -inset-1 -z-10 rounded-md ${
                              item.name === "Free Resources"
                                ? "bg-gradient-to-r from-primary/15 to-primary/5"
                                : "bg-gradient-to-r from-primary/10 to-primary/0"
                            }`}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}

                        {/* Active underline indicator */}
                        {activeItem === item.path && (
                          <motion.div
                            layoutId="underline"
                            className={`absolute left-0 right-0 bottom-0 h-0.5 ${
                              item.name === "Free Resources"
                                ? "bg-primary"
                                : "bg-primary"
                            } rounded-full`}
                            initial={{ width: 0, left: "50%", right: "50%" }}
                            animate={{
                              width: "100%",
                              left: "0%",
                              right: "0%",
                            }}
                            transition={{
                              duration: 0.3,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          />
                        )}

                        {/* New hover line effect */}
                        {hoveredItem === item.path &&
                          activeItem !== item.path && (
                            <motion.div
                              variants={linkHoverVariants}
                              initial="initial"
                              animate="hover"
                              className={`absolute left-0 right-0 bottom-0 h-[2px] ${
                                item.name === "Free Resources"
                                  ? "bg-primary/50"
                                  : "bg-primary/30"
                              } origin-left rounded-full`}
                            />
                          )}
                      </Link>
                    </motion.div>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full bg-primary/10 text-gray-600 hover:text-primary hover:bg-primary/20 focus:outline-none transition-all duration-300"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg overflow-hidden border-t border-gray-100/30"
            >
              <motion.nav className="flex flex-col py-4 px-6 max-w-6xl mx-auto">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    custom={i}
                    variants={mobileNavItemVariants}
                    className="border-b border-gray-100 last:border-b-0"
                  >
                    <Link
                      href={item.path}
                      className={`
                        block py-4 font-medium transition-all duration-300
                        ${
                          activeItem === item.path
                            ? "text-primary pl-4 border-l-2 border-primary"
                            : item.name === "Free Resources"
                            ? "text-primary/90 pl-0 font-semibold"
                            : "text-gray-800 pl-0"
                        }
                        ${
                          item.name === "Free Resources"
                            ? "hover:text-primary hover:pl-4 hover:border-l-2 hover:border-primary"
                            : "hover:text-primary hover:pl-4 hover:border-l-2 hover:border-primary/50"
                        }
                      `}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;

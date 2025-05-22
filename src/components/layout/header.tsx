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
  const [isInspectorOpen, setIsInspectorOpen] = useState(false);
  const [inspectorData, setInspectorData] = useState<any>({});

  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 8]);
  const headerY = useTransform(scrollY, [0, 100], [0, -10]);
  // Handle scroll effect for header and detect limited browsers
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    }; // Detect if we're in a limited browser environment
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

  const toggleInspector = () => {
    // Collect browser info when opening the inspector
    if (!isInspectorOpen) {
      const data = {
        userAgent: navigator.userAgent,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
        screen: {
          width: window.screen.width,
          height: window.screen.height,
        },
        document: {
          documentElement: {
            clientWidth: document.documentElement.clientWidth,
            clientHeight: document.documentElement.clientHeight,
          },
          body: {
            clientWidth: document.body.clientWidth,
            clientHeight: document.body.clientHeight,
          },
        },
        url: window.location.href,
        protocol: window.location.protocol,
        host: window.location.host,
        path: window.location.pathname,
        features: {
          requestAnimationFrame:
            typeof window.requestAnimationFrame === "function",
          matchMedia: typeof window.matchMedia === "function",
          IntersectionObserver:
            typeof window.IntersectionObserver === "function",
          ResizeObserver: typeof window.ResizeObserver === "function",
          fetch: typeof window.fetch === "function",
          localStorage: (() => {
            try {
              return typeof window.localStorage !== "undefined";
            } catch (e) {
              return false;
            }
          })(),
          serviceWorker: "serviceWorker" in navigator,
          touchEvents: "ontouchstart" in window,
          cssSupports:
            typeof CSS !== "undefined" && typeof CSS.supports === "function",
        },
        css: {
          supports: {
            flexbox:
              typeof CSS !== "undefined" && CSS.supports("display", "flex"),
            grid: typeof CSS !== "undefined" && CSS.supports("display", "grid"),
            position_sticky:
              typeof CSS !== "undefined" && CSS.supports("position", "sticky"),
            backdrop_filter:
              typeof CSS !== "undefined" &&
              CSS.supports("backdrop-filter", "blur(10px)"),
          },
        },
        detection: {
          isLimitedBrowser: isLimitedBrowser,
          isAndroid8: /Android 8|Android\/8/.test(navigator.userAgent),
          isChromium:
            /Chrome\/[5-7]/.test(navigator.userAgent) ||
            /Chromium\/[5-7]/.test(navigator.userAgent),
          isLGSmartBoard:
            document.documentElement.classList.contains("lg-smartboard"),
        },
        domInfo: {
          bodyClasses: document.body.className,
          htmlClasses: document.documentElement.className,
        },
      };

      setInspectorData(data);
    }

    setIsInspectorOpen(!isInspectorOpen);
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
                ))}{" "}
              </NavigationMenuList>

              {/* Inspector Button for debugging */}
              <div className="ml-4">
                <motion.button
                  onClick={toggleInspector}
                  className="px-3 py-1.5 rounded bg-gray-100 text-gray-600 hover:bg-gray-200 text-sm font-medium border border-gray-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🔍 Inspector
                </motion.button>
              </div>
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
                {/* Mobile inspector button */}
                <motion.div
                  variants={mobileNavItemVariants}
                  className="mt-4 pt-4 border-t border-gray-100"
                >
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      toggleInspector();
                    }}
                    className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-md flex items-center justify-center font-medium"
                  >
                    <span className="mr-2">🔍</span> Show Inspector
                  </button>
                </motion.div>{" "}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Custom Inspector Panel */}
        <AnimatePresence>
          {isInspectorOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="fixed top-20 right-4 left-4 md:left-auto md:max-w-lg p-4 bg-white rounded-lg shadow-lg border border-gray-200 z-50 overflow-auto"
              style={{ maxHeight: "80vh" }}
            >
              <div className="flex justify-between items-center mb-3 sticky top-0 bg-white pb-2 border-b">
                <h3 className="font-bold text-gray-800">Browser Inspector</h3>
                <button
                  onClick={toggleInspector}
                  className="text-gray-500 hover:text-gray-700 p-1"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-5 text-sm pb-12">
                {/* Browser Basics */}
                <div className="bg-gray-50 p-3 rounded-md">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    User Agent:
                  </h4>
                  <p className="text-gray-600 break-all font-mono text-xs bg-white p-2 rounded border border-gray-200">
                    {inspectorData?.userAgent || "Not available"}
                  </p>
                </div>

                {/* Environment */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Environment:
                  </h4>
                  <div className="grid grid-cols-2 gap-2 bg-gray-50 p-3 rounded-md">
                    <div>
                      <p className="text-gray-600 font-medium">
                        Viewport Size:
                      </p>
                      <p className="text-gray-800">
                        {inspectorData?.viewport?.width || 0} ×{" "}
                        {inspectorData?.viewport?.height || 0}px
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Screen Size:</p>
                      <p className="text-gray-800">
                        {inspectorData?.screen?.width || 0} ×{" "}
                        {inspectorData?.screen?.height || 0}px
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">
                        Document Element:
                      </p>
                      <p className="text-gray-800">
                        {inspectorData?.document?.documentElement
                          ?.clientWidth || 0}{" "}
                        ×{" "}
                        {inspectorData?.document?.documentElement
                          ?.clientHeight || 0}
                        px
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Body Element:</p>
                      <p className="text-gray-800">
                        {inspectorData?.document?.body?.clientWidth || 0} ×{" "}
                        {inspectorData?.document?.body?.clientHeight || 0}px
                      </p>
                    </div>
                  </div>
                </div>

                {/* URL & Path */}
                <div className="bg-gray-50 p-3 rounded-md">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Location:
                  </h4>
                  <table className="w-full text-xs">
                    <tbody>
                      <tr>
                        <td className="py-1 pr-2 font-medium text-gray-600">
                          URL:
                        </td>
                        <td className="py-1 text-gray-800 break-all">
                          {inspectorData?.url || ""}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-1 pr-2 font-medium text-gray-600">
                          Host:
                        </td>
                        <td className="py-1 text-gray-800">
                          {inspectorData?.host || ""}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-1 pr-2 font-medium text-gray-600">
                          Path:
                        </td>
                        <td className="py-1 text-gray-800">
                          {inspectorData?.path || ""}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-1 pr-2 font-medium text-gray-600">
                          Protocol:
                        </td>
                        <td className="py-1 text-gray-800">
                          {inspectorData?.protocol || ""}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Feature Detection */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Browser Features:
                  </h4>
                  <div className="bg-gray-50 p-3 rounded-md grid grid-cols-2 gap-x-4 gap-y-2">
                    {inspectorData?.features &&
                      Object.keys(inspectorData.features).map((feature) => (
                        <div key={feature} className="flex items-center">
                          <span
                            className={`w-4 h-4 flex-shrink-0 rounded-full ${
                              inspectorData.features[feature]
                                ? "bg-green-500"
                                : "bg-red-400"
                            }`}
                          >
                            {inspectorData.features[feature] && (
                              <span className="text-white flex justify-center items-center h-full text-xs">
                                ✓
                              </span>
                            )}
                          </span>
                          <span className="ml-2 text-gray-700">{feature}</span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* CSS Support */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    CSS Support:
                  </h4>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <div className="grid grid-cols-2 gap-2">
                      {inspectorData?.css?.supports &&
                        Object.keys(inspectorData.css.supports).map(
                          (feature) => (
                            <div key={feature} className="flex items-center">
                              <span
                                className={`w-4 h-4 flex-shrink-0 rounded-full ${
                                  inspectorData.css.supports[feature]
                                    ? "bg-green-500"
                                    : "bg-red-400"
                                }`}
                              >
                                {inspectorData.css.supports[feature] && (
                                  <span className="text-white flex justify-center items-center h-full text-xs">
                                    ✓
                                  </span>
                                )}
                              </span>
                              <span className="ml-2 text-gray-700">
                                {feature.replace("_", " ")}
                              </span>
                            </div>
                          )
                        )}
                    </div>
                  </div>
                </div>

                {/* Browser Detection */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Environment Detection:
                  </h4>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <div className="grid grid-cols-2 gap-2">
                      {inspectorData?.detection &&
                        Object.keys(inspectorData.detection).map((item) => (
                          <div key={item} className="flex items-center">
                            <span
                              className={`w-4 h-4 flex-shrink-0 rounded-full ${
                                inspectorData.detection[item]
                                  ? "bg-blue-500"
                                  : "bg-gray-300"
                              }`}
                            >
                              {inspectorData.detection[item] && (
                                <span className="text-white flex justify-center items-center h-full text-xs">
                                  ✓
                                </span>
                              )}
                            </span>
                            <span className="ml-2 text-gray-700">{item}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                {/* DOM Classes */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    DOM Classes:
                  </h4>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="text-gray-600 font-medium">HTML Classes:</p>
                    <p className="text-gray-800 break-all font-mono text-xs bg-white p-2 rounded mb-2 border border-gray-200">
                      {inspectorData?.domInfo?.htmlClasses || "None"}
                    </p>
                    <p className="text-gray-600 font-medium">Body Classes:</p>
                    <p className="text-gray-800 break-all font-mono text-xs bg-white p-2 rounded border border-gray-200">
                      {inspectorData?.domInfo?.bodyClasses || "None"}
                    </p>
                  </div>
                </div>

                {/* Toggle Simulator */}
                <div className="mt-4">
                  <button
                    onClick={() => {
                      if (typeof document !== "undefined") {
                        document.documentElement.classList.toggle(
                          "lg-smartboard"
                        );
                        document.documentElement.classList.toggle(
                          "limited-browser"
                        );

                        // Update inspector data after toggling
                        setTimeout(() => toggleInspector(), 10);
                        setTimeout(() => toggleInspector(), 20);
                      }
                    }}
                    className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full mt-2"
                  >
                    Toggle SmartBoard Mode
                  </button>
                </div>

                {/* Element Inspector */}
                <div className="fixed bottom-0 left-4 right-4 md:left-auto md:max-w-lg bg-white border-t border-gray-200 p-3">
                  <button
                    onClick={() => {
                      // Simple element inspector implementation
                      if (typeof document !== "undefined") {
                        toggleInspector(); // Close inspector panel first

                        // Alert with instructions
                        alert(
                          "Tap on any element to see its details. Tap anywhere when done."
                        );

                        // Set up one-time click handler
                        const handleClick = (e: MouseEvent) => {
                          e.preventDefault();
                          e.stopPropagation();

                          const element = e.target as HTMLElement;
                          const rect = element.getBoundingClientRect();

                          // Create element info
                          const info = {
                            tagName: element.tagName.toLowerCase(),
                            id: element.id,
                            classes: element.className,
                            attributes: Array.from(element.attributes)
                              .map((attr) => `${attr.name}="${attr.value}"`)
                              .join(" "),
                            size: `${Math.round(rect.width)}×${Math.round(
                              rect.height
                            )}px`,
                            position: `(${Math.round(rect.left)}, ${Math.round(
                              rect.top
                            )})`,
                            text:
                              element.textContent?.substring(0, 100) +
                              (element.textContent &&
                              element.textContent.length > 100
                                ? "..."
                                : ""),
                          };

                          // Display info
                          alert(
                            `Element: ${info.tagName}\nID: ${
                              info.id || "none"
                            }\nClasses: ${info.classes || "none"}\nSize: ${
                              info.size
                            }\nPosition: ${info.position}\nText: ${
                              info.text || "none"
                            }`
                          );

                          // Remove click handler
                          document.removeEventListener(
                            "click",
                            handleClick,
                            true
                          );
                        };

                        // Add click handler
                        document.addEventListener("click", handleClick, true);
                      }
                    }}
                    className="w-full py-2 bg-gray-800 text-white rounded-md font-medium"
                  >
                    Inspect Elements
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;

"use client";

import { useEffect } from "react";

/**
 * AnimationFix improves performance on LG SmartBoard with Android 8
 * by disabling or simplifying animations and transitions that might cause
 * performance issues or crashes.
 */
const AnimationFix = () => {
  useEffect(() => {
    // Only run on Android 8 and LG SmartBoard
    const isAndroid8 = /Android 8|Android\/8/.test(navigator.userAgent);
    const isLGSmartBoard =
      /LG|SMART-TV|WebOS|NetCast/.test(navigator.userAgent) ||
      document.documentElement.classList.contains("lg-smartboard");
    const isChromium =
      /Chrome\/[5-7]/.test(navigator.userAgent) ||
      /Chromium\/[5-7]/.test(navigator.userAgent) ||
      (navigator.userAgent.includes("Chrome") &&
        parseInt(navigator.userAgent.match(/Chrome\/(\d+)/)?.[1] || "100") <
          80);

    if (!isAndroid8 && !(isLGSmartBoard && isChromium)) return;
    return;

    // Create a style element to disable problematic animations
    const style = document.createElement("style");
    style.textContent = `
      /* Disable all CSS animations */
      *, *::before, *::after {
        animation-duration: 0.001s !important;
        animation-delay: 0s !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.001s !important;
        transition-delay: 0s !important;
      }
      
      /* Disable animated elements */
      .animate-spin,
      .animate-pulse,
      .animate-bounce,
      .animate-ping,
      [class*="motion-"],
      [class*="transition-"] {
        animation: none !important;
        transition: none !important;
        transform: none !important;
        opacity: 1 !important;
      }
      
      /* Simplify transform operations */
      [style*="transform:"] {
        transform: none !important;
        -webkit-transform: none !important;
      }
      
      /* Disable fixed positioning which can cause rendering issues */
      .fixed, .sticky {
        position: relative !important;
      }
      
      /* Ensure hardware acceleration is disabled */
      * {
        -webkit-backface-visibility: hidden !important;
        backface-visibility: hidden !important;
        -webkit-perspective: none !important;
        perspective: none !important;
        transform-style: flat !important;
        will-change: auto !important;
      }
    `;
    document.head.appendChild(style); // Monitor and disable JavaScript animations
    const disableJSAnimations = () => {
      // Patch requestAnimationFrame to throttle intensive animations
      const originalRAF = window.requestAnimationFrame;
      window.requestAnimationFrame = function (callback) {
        // Convert the timeout ID to a number to match the expected return type
        return Number(
          setTimeout(() => {
            try {
              callback(performance.now());
            } catch (e) {
              console.warn("Animation frame callback error:", e);
            }
          }, 100)
        ); // Slow down animations significantly
      };
      // Restore the original when leaving the page
      return () => {
        window.requestAnimationFrame = originalRAF;
      };
    };

    // We should also patch cancelAnimationFrame for consistency
    const originalCAF = window.cancelAnimationFrame;
    window.cancelAnimationFrame = function (handle: number) {
      return clearTimeout(handle);
    };

    // Patch scrolling performance
    const improveScrollPerformance = () => {
      // Find all scrollable elements
      const scrollableElements = Array.from(
        document.querySelectorAll("*")
      ).filter((el) => {
        const style = window.getComputedStyle(el);
        return (
          style.overflow === "auto" ||
          style.overflow === "scroll" ||
          style.overflowY === "auto" ||
          style.overflowY === "scroll" ||
          style.overflowX === "auto" ||
          style.overflowX === "scroll"
        );
      });

      // Add passive event listeners to improve scroll performance
      scrollableElements.forEach((el) => {
        el.addEventListener("touchstart", () => {}, { passive: true });
        el.addEventListener("touchmove", () => {}, { passive: true });
      });

      // Add passive event listener to document for better scroll performance
      document.addEventListener("touchstart", () => {}, { passive: true });
      document.addEventListener("touchmove", () => {}, { passive: true });
    }; // Call our functions
    const cleanup = disableJSAnimations();
    improveScrollPerformance();

    // Clean up when component unmounts
    return () => {
      cleanup();
      window.cancelAnimationFrame = originalCAF;
    };
  }, []);

  return null;
};

export default AnimationFix;

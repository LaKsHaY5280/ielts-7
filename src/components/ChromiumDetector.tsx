"use client";

import { useEffect } from "react";

/**
 * ChromiumDetector is a specialized component for detecting older Chromium
 * browsers on Android 8, especially on devices like LG SmartBoard.
 * This provides a more reliable detection than regular user agent checks.
 */
const ChromiumDetector = () => {
  useEffect(() => {
    // Function to detect Chromium features and capabilities
    const detectChromium = () => {
      // First check if we're on Android
      const isAndroid = /Android/i.test(navigator.userAgent);
      if (!isAndroid) return;

      // Check for Android version
      const androidVersionMatch =
        navigator.userAgent.match(/Android\s([0-9\.]+)/);
      const androidVersion = androidVersionMatch
        ? parseFloat(androidVersionMatch[1])
        : 0;

      // Not Android 8.x
      if (androidVersion < 8 || androidVersion >= 9) return;

      // Additional checks for specific Chromium characteristics
      // that are more reliable than just looking at user agent

      // Check for specific CSS support
      const hasLimitedCssSupport =
        !CSS.supports("backdrop-filter", "blur(10px)") ||
        !CSS.supports("position", "sticky");

      // Check for known Chromium limitations on Android 8
      const hasLimitedFunctionality =
        typeof window.IntersectionObserver !== "function" ||
        typeof window.ResizeObserver !== "function" ||
        typeof window.MutationObserver !== "function" ||
        typeof window.fetch !== "function" ||
        !("serviceWorker" in navigator);

      // Check for specific WebGL limitations
      let hasLimitedGraphics = false;
      try {
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl");
        if (!gl) {
          hasLimitedGraphics = true;
        } else {
          // Check WebGL version and capabilities
          const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
          if (debugInfo) {
            const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
            // Check for specific hardware/software renderers known to be problematic
            hasLimitedGraphics =
              /SwiftShader|Software|Mesa/i.test(renderer) ||
              /Google/i.test(vendor);
          }
        }
      } catch (e) {
        // If any error occurs, assume graphics limitations
        hasLimitedGraphics = true;
      }

      // Check if we should apply fixes
      const needsFixes =
        hasLimitedCssSupport || hasLimitedFunctionality || hasLimitedGraphics;

      if (needsFixes) {
        console.log("Detected Android 8 Chromium browser with limitations");
        document.documentElement.classList.add("android8");
        document.documentElement.classList.add("chromium-android8");

        // Apply specific fixes for Chromium on Android 8
        const style = document.createElement("style");
        style.textContent = `
          /* Emergency Chromium-specific fixes */
          body {
            overflow-x: hidden !important;
          }
          
          /* Force CPU rendering for problematic elements */
          video, canvas, iframe {
            transform: translateZ(0) !important;
          }
          
          /* Fix scrolling containers */
          div, section, article {
            -webkit-overflow-scrolling: touch !important;
            max-height: 100vh !important; /* prevent overflow issues */
          }
        `;
        document.head.appendChild(style);
      }
    };

    // Run the detection
    detectChromium();
  }, []);

  return null;
};

export default ChromiumDetector;

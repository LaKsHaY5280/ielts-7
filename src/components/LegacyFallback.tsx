"use client";

import { useEffect } from "react";

/**
 * Component that provides fallback functionality for legacy browsers
 * Specifically targeting LG SmartBoard with Android 8
 */
const LegacyFallback = () => {
  useEffect(() => {
    const isLimited =
      typeof window !== "undefined" &&
      (document.documentElement.classList.contains("legacy-browser") ||
        document.documentElement.classList.contains("limited-browser") ||
        document.documentElement.classList.contains("lg-smartboard"));

    if (!isLimited) return;

    // Monitor for errors and handle them to prevent crashes
    const originalError = console.error;
    console.error = function (...args) {
      // Filter out common React errors that might crash the app
      const errorMessage = args.join(" ");
      if (
        errorMessage.includes("React state update") ||
        errorMessage.includes("animationFrame") ||
        errorMessage.includes("transition") ||
        errorMessage.includes("transform") ||
        errorMessage.includes("motion") ||
        errorMessage.includes("not a function") ||
        errorMessage.includes("useRef") ||
        errorMessage.includes("useEffect") ||
        errorMessage.includes("Invalid hook")
      ) {
        console.log("Suppressed error in legacy browser:", args[0]);
        return;
      }
      originalError.apply(console, args);
    };

    // Intercept unhandled rejections that might crash the app
    window.addEventListener("unhandledrejection", (event) => {
      event.preventDefault();
      console.log("Caught unhandled rejection:", event.reason);
      return false;
    });

    // Add force refresh button for users if they get stuck
    const refreshButton = document.createElement("button");
    refreshButton.innerText = "Refresh Page";
    refreshButton.style.position = "fixed";
    refreshButton.style.right = "10px";
    refreshButton.style.bottom = "10px";
    refreshButton.style.zIndex = "9999";
    refreshButton.style.padding = "8px 12px";
    refreshButton.style.background = "#d32f2f";
    refreshButton.style.color = "white";
    refreshButton.style.border = "none";
    refreshButton.style.borderRadius = "4px";
    refreshButton.onclick = () => window.location.reload();
    document.body.appendChild(refreshButton);

    // Fix issues with position:fixed on Android 8
    const fixFixedPositioning = () => {
      const fixedElements = document.querySelectorAll(
        '[style*="position: fixed"], [style*="position:fixed"]'
      );

      fixedElements.forEach((el) => {
        // @ts-ignore
        if (el && el.style) {
          // @ts-ignore
          el.style.position = "absolute";
        }
      });
    };

    // Run the fix on load and periodically
    fixFixedPositioning();
    const interval = setInterval(fixFixedPositioning, 2000);

    return () => {
      console.error = originalError;
      clearInterval(interval);
    };
  }, []);

  return null;
};

export default LegacyFallback;

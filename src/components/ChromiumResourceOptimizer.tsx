"use client";

import { useEffect } from "react";

/**
 * ChromiumResourceOptimizer helps optimize resource loading and rendering
 * specifically for older Chromium browsers on Android 8.
 * It implements aggressive resource management techniques to prevent crashes.
 */
const ChromiumResourceOptimizer = () => {
  useEffect(() => {
    // Only run on Android 8 Chromium browsers
    const isAndroid8 = /Android 8|Android\/8/.test(navigator.userAgent);
    const isLGSmartBoard =
      /LG|SMART-TV|WebOS|NetCast/.test(navigator.userAgent) ||
      document.documentElement.classList.contains("lg-smartboard");
    const isChromium =
      /Chrome\/[5-7]/.test(navigator.userAgent) ||
      /Chromium\/[5-7]/.test(navigator.userAgent) ||
      (navigator.userAgent.includes("Chrome") &&
        parseInt(navigator.userAgent.match(/Chrome\/(\d+)/)?.[1] || "100") <
          80) ||
      document.documentElement.classList.contains("chromium-android8");

    if (!isAndroid8 && !(isLGSmartBoard && isChromium)) return;

    // Aggressive memory management for Chromium on Android 8
    const optimizeMemoryUsage = () => {
      // Track images and lazy load them
      const lazyLoadImages = () => {
        const imgElements = document.querySelectorAll<HTMLImageElement>(
          "img:not([data-optimized])"
        );
        imgElements.forEach((img) => {
          // Mark as processed
          img.setAttribute("data-optimized", "true");

          // Skip images that already have loading="lazy"
          if (img.getAttribute("loading") === "lazy") return;

          // Set loading attribute to lazy
          img.setAttribute("loading", "lazy");

          // Downscale large images
          if (img.naturalWidth > 1000 || img.naturalHeight > 1000) {
            img.style.maxWidth = "800px";
            img.style.maxHeight = "800px";
          }

          // Remove unnecessary attributes that may cause memory usage
          img.removeAttribute("srcset");
          img.removeAttribute("sizes");
        });
      };

      // Disable resource-intensive features
      const disableResourceIntensiveFeatures = () => {
        // Disable background videos
        const backgroundVideos = document.querySelectorAll<HTMLVideoElement>("video[autoplay]");
        backgroundVideos.forEach((video) => {
          video.pause();
          video.removeAttribute("autoplay");
          video.setAttribute("preload", "none");

          // Add a play button instead
          const playButton = document.createElement("button");
          playButton.textContent = "Play Video";
          playButton.className = "video-play-btn";
          playButton.style.position = "absolute";
          playButton.style.top = "50%";
          playButton.style.left = "50%";
          playButton.style.transform = "translate(-50%, -50%)";
          playButton.style.zIndex = "2";
          playButton.style.background = "rgba(0,0,0,0.7)";
          playButton.style.color = "white";
          playButton.style.padding = "10px 15px";
          playButton.style.border = "none";
          playButton.style.borderRadius = "4px";

          playButton.addEventListener("click", () => {
            video.play();
            playButton.style.display = "none";
          });

          if (video.parentNode instanceof HTMLElement) {
            video.parentNode.style.position = "relative";
            video.parentNode.appendChild(playButton);
          }
        });

        // Convert complex iframes to click-to-load
        const iframes = document.querySelectorAll(
          "iframe:not([data-optimized])"
        );
        iframes.forEach((iframe) => {
          iframe.setAttribute("data-optimized", "true");

          const src = iframe.getAttribute("src");
          if (!src) return;

          // Create a placeholder
          const placeholder = document.createElement("div");
          placeholder.style.width = "100%";
          placeholder.style.height = "300px";
          placeholder.style.backgroundColor = "#f0f0f0";
          placeholder.style.display = "flex";
          placeholder.style.alignItems = "center";
          placeholder.style.justifyContent = "center";
          placeholder.style.flexDirection = "column";
          placeholder.style.cursor = "pointer";

          const icon = document.createElement("div");
          icon.innerHTML = "▶️";
          icon.style.fontSize = "48px";

          const text = document.createElement("div");
          text.textContent = "Click to load content";
          text.style.marginTop = "10px";

          placeholder.appendChild(icon);
          placeholder.appendChild(text);

          placeholder.addEventListener("click", () => {
            const newIframe = document.createElement("iframe");
            newIframe.setAttribute("src", src);
            newIframe.style.width = "100%";
            newIframe.style.height = "300px";
            newIframe.style.border = "none";

            placeholder.parentNode?.replaceChild(newIframe, placeholder);
          });

          iframe.parentNode?.replaceChild(placeholder, iframe);
        });
      };

      // Garbage collection helper
      const forceGarbageCollection = () => {
        // Can't directly force GC in JavaScript, but we can:
        // 1. Remove references to large objects
        // 2. Create memory pressure to encourage browser to run GC
        const largeArray = new Array(1000000).fill(0);
        setTimeout(() => {
          // Clear the large array to allow GC
          largeArray.length = 0;
        }, 100);
      };

      // Run optimizations
      lazyLoadImages();
      disableResourceIntensiveFeatures();

      // Set up periodic optimization
      const optimizationInterval = setInterval(() => {
        lazyLoadImages();
        forceGarbageCollection();
      }, 5000);

      // Create a small indicator
      const indicator = document.createElement("div");
      indicator.style.position = "fixed";
      indicator.style.bottom = "5px";
      indicator.style.left = "5px";
      indicator.style.width = "10px";
      indicator.style.height = "10px";
      indicator.style.background = "green";
      indicator.style.borderRadius = "50%";
      indicator.style.zIndex = "9999";
      indicator.style.opacity = "0.5";
      indicator.style.pointerEvents = "none";
      document.body.appendChild(indicator);

      // Blink indicator when optimization runs
      let indicatorInterval = setInterval(() => {
        indicator.style.opacity = "1";
        setTimeout(() => {
          indicator.style.opacity = "0.5";
        }, 500);
      }, 5000);

      // Return cleanup function
      return () => {
        clearInterval(optimizationInterval);
        clearInterval(indicatorInterval);
        if (indicator.parentNode) {
          indicator.parentNode.removeChild(indicator);
        }
      };
    };

    // Start memory optimization
    const cleanup = optimizeMemoryUsage();

    // Return cleanup function
    return cleanup;
  }, []);

  return null;
};

export default ChromiumResourceOptimizer;

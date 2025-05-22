"use client";

import { useEffect } from "react";

/**
 * Component to handle and fix video playback issues on Android 8 / LG SmartBoard
 * with Chromium browser.
 */
const VideoPlaybackFix = () => {
  useEffect(() => {
    // Detect Android 8 and LG SmartBoard
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

    // Function to optimize video elements
    const optimizeVideoElements = () => {
      const videoElements = document.querySelectorAll("video");
      videoElements.forEach((video) => {
        // Set video attributes for better playback
        video.setAttribute("playsinline", "");
        video.setAttribute("webkit-playsinline", "");
        video.setAttribute("controls", "");

        // Lower quality for better performance
        if (video.hasAttribute("src")) {
          const src = video.getAttribute("src") || "";
          // If using HLS, replace with lower resolution version if available
          if (src.includes(".m3u8")) {
            // Try to find a lower resolution version
            const lowResSrc = src
              .replace("720p", "480p")
              .replace("1080p", "480p");
            if (lowResSrc !== src) {
              video.setAttribute("src", lowResSrc);
            }
          }
        }

        // Simplify video styles
        video.style.maxWidth = "100%";
        video.style.height = "auto";
        video.style.objectFit = "contain";

        // Remove autoplay to prevent issues
        video.removeAttribute("autoplay");

        // Fix poster image if present
        if (video.hasAttribute("poster")) {
          const poster = video.getAttribute("poster") || "";
          const img = document.createElement("img");
          img.src = poster;
          img.style.width = "100%";
          img.style.display = "block";

          // Replace video with image if playback is likely to fail
          if (isLGSmartBoard) {
            const container = document.createElement("div");
            container.className = "video-placeholder";
            container.appendChild(img);

            const playButton = document.createElement("button");
            playButton.textContent = "Play Video";
            playButton.style.position = "absolute";
            playButton.style.top = "50%";
            playButton.style.left = "50%";
            playButton.style.transform = "translate(-50%, -50%)";
            playButton.style.padding = "10px 20px";
            playButton.style.background = "rgba(0,0,0,0.7)";
            playButton.style.color = "white";
            playButton.style.border = "none";
            playButton.style.borderRadius = "4px";
            playButton.style.cursor = "pointer";

            container.appendChild(playButton);
            container.style.position = "relative";

            playButton.addEventListener("click", () => {
              container.parentNode?.replaceChild(video, container);
              video.play().catch(() => {
                console.warn("Video playback failed on LG SmartBoard");
                video.parentNode?.replaceChild(container, video);
              });
            });

            video.parentNode?.replaceChild(container, video);
          }
        }
      });
    };

    // Run the optimization when DOM changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          optimizeVideoElements();
        }
      });
    });

    // Start observing for video elements
    observer.observe(document.body, { childList: true, subtree: true });

    // Initial optimization
    optimizeVideoElements();

    // Clean up observer
    return () => observer.disconnect();
  }, []);

  return null;
};

export default VideoPlaybackFix;

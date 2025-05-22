"use client";

import { useEffect } from "react";

/**
 * Component specifically for fixing Android 8 issues on LG SmartBoard
 */
const LegacyAndroidFix = () => {
  useEffect(() => {
    // Only run on Android 8 browsers
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

    // Apply Android 8 specific fixes
    const applyAndroid8Fixes = () => {
      // Fix form elements and prevent zooming
      const metaViewport = document.querySelector('meta[name="viewport"]');
      if (metaViewport) {
        metaViewport.setAttribute(
          "content",
          "width=device-width, initial-scale=1, maximum-scale=1"
        );
      } else {
        const meta = document.createElement("meta");
        meta.name = "viewport";
        meta.content = "width=device-width, initial-scale=1, maximum-scale=1";
        document.head.appendChild(meta);
      }

      // Fix layout issues
      document.documentElement.style.height = "100%";
      document.body.style.minHeight = "100%";

      // Fix overflow and scrolling issues
      document.documentElement.style.overflowX = "hidden";
      document.body.style.overscrollBehavior = "none";

      // Fix images
      const images = document.querySelectorAll("img");
      images.forEach((img) => {
        img.style.maxWidth = "100%";
        img.style.height = "auto";
      });

      // Fix links
      const links = document.querySelectorAll("a");
      links.forEach((link) => {
        link.addEventListener("click", function (e) {
          // Some Android 8 browsers have issues with link clicks
          const href = link.getAttribute("href");
          if (href && href.startsWith("#")) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: "smooth" });
            }
          }
        });
      });

      // Intercept and fix problematic API calls
      if (window.IntersectionObserver) {
        const originalIntersectionObserver = window.IntersectionObserver;
        // @ts-ignore
        window.IntersectionObserver = function (callback, options) {
          try {
            return new originalIntersectionObserver(callback, options);
          } catch (e) {
            console.warn("IntersectionObserver failed, using fallback");
            return {
              observe: function () {
                setTimeout(() => callback([{ isIntersecting: true }]), 100);
              },
              unobserve: function () {},
              disconnect: function () {},
            };
          }
        };
      }
    };

    // Apply fixes
    applyAndroid8Fixes();

    // Add a reload button for recovery from crashes
    if (isLGSmartBoard) {
      const reloadButton = document.createElement("button");
      reloadButton.innerText = "Reload";
      reloadButton.style.position = "fixed";
      reloadButton.style.bottom = "10px";
      reloadButton.style.right = "10px";
      reloadButton.style.zIndex = "9999";
      reloadButton.style.padding = "10px 15px";
      reloadButton.style.background = "#cc0d09";
      reloadButton.style.color = "white";
      reloadButton.style.border = "none";
      reloadButton.style.borderRadius = "5px";
      reloadButton.onclick = () => window.location.reload();
      document.body.appendChild(reloadButton);
    }
  }, []);

  return null;
};

export default LegacyAndroidFix;

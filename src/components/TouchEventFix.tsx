"use client";

import { useEffect } from "react";

/**
 * TouchEventFix improves touch event handling on LG SmartBoard with Android 8
 * by fixing common issues with touch events, click delays, and tap highlights.
 */
const TouchEventFix = () => {
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

    // Add meta tag to disable user scaling
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta) {
      viewportMeta.setAttribute(
        "content",
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      );
    }

    // Apply CSS fixes for touch events
    const style = document.createElement("style");
    style.textContent = `
      /* Fix for tap highlight color */
      * {
        -webkit-tap-highlight-color: rgba(0,0,0,0) !important;
        tap-highlight-color: rgba(0,0,0,0) !important;
      }
      
      /* Fix for touch targets - make them bigger */
      a, button, input, select, textarea, [role="button"] {
        min-height: 44px !important;
        min-width: 44px !important;
      }
      
      /* Fix for hover states on touch devices */
      a:hover, button:hover, [role="button"]:hover {
        opacity: 1 !important;
      }
    `;
    document.head.appendChild(style);

    // Fix for the 300ms click delay
    const removeClickDelay = () => {
      const touchElements = document.querySelectorAll(
        'a, button, [role="button"], input[type="submit"], input[type="button"]'
      );

      touchElements.forEach((element) => {
        element.addEventListener(
          "touchstart",
          function (e) {
            // Prevent default only for buttons and links with href="#" to avoid page navigation issues
            if (
              element.tagName === "BUTTON" ||
              (element.tagName === "A" &&
                (element.getAttribute("href") === "#" ||
                  !element.hasAttribute("href")))
            ) {
              e.preventDefault();
            }
          },
          { passive: false }
        );

        element.addEventListener(
          "touchend",
          function (e) {
            // Create a simulated click event
            const clickEvent = new MouseEvent("click", {
              view: window,
              bubbles: true,
              cancelable: true,
            });

            // Only prevent default for buttons and non-navigation links
            if (
              element.tagName === "BUTTON" ||
              (element.tagName === "A" &&
                (element.getAttribute("href") === "#" ||
                  !element.hasAttribute("href")))
            ) {
              e.preventDefault();

              // Dispatch the click event immediately
              element.dispatchEvent(clickEvent);
            }
          },
          { passive: false }
        );
      });
    };

    // Fix for scroll issues
    const fixScrollingIssues = () => {
      document.addEventListener(
        "touchmove",
        function (e) {
          if (
            e.target instanceof HTMLElement &&
            !isScrollable(e.target) &&
            !hasScrollableParent(e.target)
          ) {
            e.preventDefault();
          }
        },
        { passive: false }
      );
    };

    // Helper to check if element is scrollable
    function isScrollable(element: HTMLElement) {
      const style = window.getComputedStyle(element);
      return (
        ((style.overflowY === "auto" || style.overflowY === "scroll") &&
          element.scrollHeight > element.clientHeight) ||
        ((style.overflowX === "auto" || style.overflowX === "scroll") &&
          element.scrollWidth > element.clientWidth)
      );
    }

    // Helper to check for scrollable parent
    function hasScrollableParent(element: HTMLElement): boolean {
      if (!element || element === document.body) return false;

      if (isScrollable(element)) return true;

      return element.parentElement
        ? hasScrollableParent(element.parentElement)
        : false;
    }

    // Initialize our fixes
    removeClickDelay();
    fixScrollingIssues();

    // Add improved focus management
    const addFocusVisibility = () => {
      const focusStyle = document.createElement("style");
      focusStyle.textContent = `
        /* Improved focus styles */
        :focus {
          outline: 3px solid #4285f4 !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(focusStyle);
    };

    addFocusVisibility();
  }, []);

  return null;
};

export default TouchEventFix;

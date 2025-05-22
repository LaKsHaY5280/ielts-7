"use client";

import { useEffect } from "react";

export default function BrowserCompatibility() {
  useEffect(() => {
    const detectLimitedBrowser = () => {
      try {
        // Check for common features that might be missing in LG Smart TV browser or SmartBoard
        const isLimited =
          !window.requestAnimationFrame ||
          !window.matchMedia ||
          /LG|WebOS|SMART-TV|Android 8|Android\/8|Chromium\/[5-6]/.test(
            navigator.userAgent
          ) ||
          (navigator.userAgent.includes("Chrome") &&
            /Android 8|Android\/8/.test(navigator.userAgent));

        // Additional detection for LG SmartBoard
        const isLGBoard =
          /LG|SMART-TV|WebOS|NetCast/.test(navigator.userAgent) ||
          (/Android 8|Android\/8/.test(navigator.userAgent) &&
            (/Chrome\/[5-7]/.test(navigator.userAgent) ||
              /Chromium\/[5-7]/.test(navigator.userAgent)));

        if (isLimited) {
          // Add classes to enable CSS-based fallbacks
          document.documentElement.classList.add("legacy-browser");
          document.documentElement.classList.add("limited-browser");

          // Add specific class for LG SmartBoard
          if (isLGBoard) {
            document.documentElement.classList.add("lg-smartboard");
          }

          // Add a message at the top of the page
          const messageElement = document.createElement("div");
          messageElement.style.padding = "10px";
          messageElement.style.backgroundColor = "#fff9c4";
          messageElement.style.textAlign = "center";
          messageElement.style.fontSize = "14px";
          messageElement.style.borderBottom = "1px solid #ffd600";
          messageElement.innerHTML =
            "You are viewing this site in a limited browser. Some features may be simplified for better compatibility.";

          // Insert at the top of the body
          document.body.insertBefore(messageElement, document.body.firstChild);

          // Disable some animations that might cause issues
          const style = document.createElement("style");
          style.textContent = `
            .motion-div, .motion-safe\\:animate-fade-in, .animate-spin, .animate-pulse, 
            [class*="hover:"], [class*="focus:"], [class*="active:"] {
              animation: none !important;
              transition: none !important;
              transform: none !important;
            }
            
            .bg-gradient-to-r, .bg-gradient-to-b, .bg-gradient-to-tr, .bg-gradient-to-br {
              background: #f5f5f5 !important;
            }
            
            .blur, .backdrop-blur-sm, .backdrop-blur-md, .backdrop-blur-lg {
              backdrop-filter: none !important;
              -webkit-backdrop-filter: none !important;
            }

            /* Fix for flex and grid issues in Android 8 */
            .grid {
              display: block !important;
            }
            .grid > * {
              margin-bottom: 20px !important;
            }
            
            /* Fix for animation and transform issues */
            .transform, [style*="transform:"] {
              transform: none !important;
              -webkit-transform: none !important;
            }
            
            /* Fix for fonts */
            body, p, h1, h2, h3, h4, h5, h6 {
              font-family: Arial, sans-serif !important;
            }
            
            /* Force hardware acceleration off for problematic elements */
            .motion-safe\\:animate-fade-in, .animate-spin, .animate-pulse {
              -webkit-transform: translateZ(0) !important;
              transform: translateZ(0) !important;
              will-change: auto !important;
            }
          `;
          document.head.appendChild(style);

          // Special patches for Android 8 / LG SmartBoard
          if (isLGBoard) {
            // Force polyfills for missing features
            safelyPatchMissingFeatures();

            // Add special styles for LG SmartBoard
            const lgStyle = document.createElement("style");
            lgStyle.textContent = `
              /* Fix for LG SmartBoard specifics */
              body {
                overflow-x: hidden !important;
              }
              
              /* Fix for motion components */
              [class*="motion-"] {
                opacity: 1 !important;
                visibility: visible !important;
              }
              
              /* Making buttons more tappable */
              button, [role="button"], a {
                min-height: 44px !important;
                min-width: 44px !important;
                padding: 12px !important;
                margin: 8px !important;
              }
              
              /* Fix rendering issues with flexbox */
              .flex {
                display: block !important;
              }
              
              /* Reduce CSS complexity */
              * {
                box-shadow: none !important;
                text-shadow: none !important;
              }
            `;
            document.head.appendChild(lgStyle);
          }
        }
      } catch (e) {
        console.error("Error in limited browser detection:", e);
        // Fallback - if error in detection, assume it's a limited browser
        document.documentElement.classList.add("legacy-browser");
        document.documentElement.classList.add("limited-browser");
      }
    };

    // Safely patch missing browser features without TypeScript errors
    const safelyPatchMissingFeatures = () => {
      try {
        // Instead of directly replacing APIs (which would cause TypeScript errors)
        // Create non-throwing fallbacks that will execute if the original methods fail

        // Create a helper to safely execute functions that might fail on old browsers
        const safeExec = (fn: Function, fallback: any) => {
          try {
            return fn();
          } catch (e) {
            return fallback;
          }
        };

        // Create a safe requestAnimationFrame wrapper
        const originalRAF = window.requestAnimationFrame;
        if (!originalRAF) {
          // @ts-ignore - intentionally patching a missing browser feature
          window.requestAnimationFrame = function (
            callback: FrameRequestCallback
          ): number {
            return setTimeout(callback, 16);
          };
        }

        // Add custom global utility for safely handling animations
        // @ts-ignore - adding our own utility
        window._safeAnimate = function (
          element: HTMLElement,
          keyframes: any[],
          options: any
        ) {
          try {
            if (element && element.animate) {
              return element.animate(keyframes, options);
            }
          } catch (e) {
            console.warn("Animation failed, using fallback");
          }

          // Return a minimal animation-like object
          return {
            cancel: () => {},
            finished: Promise.resolve(),
            currentTime: 0,
            play: () => {},
            pause: () => {},
            reverse: () => {},
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => true,
          };
        };

        // Add custom global utility for safely handling media queries
        // @ts-ignore - adding our own utility
        window._safeMatchMedia = function (query: string) {
          try {
            if (window.matchMedia) {
              return window.matchMedia(query);
            }
          } catch (e) {
            console.warn("matchMedia failed, using fallback");
          }

          // Return a minimal mediaQueryList-like object
          return {
            matches: false,
            media: query,
            onchange: null,
            addListener: () => {},
            removeListener: () => {},
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => true,
          };
        };

        // Add a safe IntersectionObserver utility
        // @ts-ignore - adding our own utility
        window._safeIntersectionObserver = function (
          callback: IntersectionObserverCallback
        ) {
          try {
            if (window.IntersectionObserver) {
              return new IntersectionObserver(callback);
            }
          } catch (e) {
            console.warn("IntersectionObserver failed, using fallback");
          }

          // Return a minimal IntersectionObserver-like object
          return {
            observe: (target: Element) => {
              setTimeout(() => {
                callback(
                  [
                    {
                      isIntersecting: true,
                      intersectionRatio: 1,
                      target,
                      time: Date.now(),
                      boundingClientRect: target.getBoundingClientRect(),
                      intersectionRect: target.getBoundingClientRect(),
                      rootBounds: null,
                    },
                  ] as IntersectionObserverEntry[],
                  {} as IntersectionObserver
                );
              }, 100);
            },
            unobserve: () => {},
            disconnect: () => {},
            takeRecords: () => [] as IntersectionObserverEntry[],
          };
        };
      } catch (e) {
        console.error("Error in safely patching browser features:", e);
      }
    };

    // Run detection once the component is mounted
    detectLimitedBrowser();
  }, []);

  return null; // This component doesn't render anything visible
}

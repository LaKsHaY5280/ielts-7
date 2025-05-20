"use client";

import { useEffect } from "react";

export default function BrowserCompatibility() {
  useEffect(() => {
    const detectLimitedBrowser = () => {
      try {
        // Check for common features that might be missing in LG Smart TV browser
        const isLimited =
          !window.requestAnimationFrame ||
          !window.matchMedia ||
          /LG|WebOS|SMART-TV/.test(navigator.userAgent);

        if (isLimited) {
          // Add classes to enable CSS-based fallbacks
          document.documentElement.classList.add("legacy-browser");
          document.documentElement.classList.add("limited-browser");

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
            }
          `;
          document.head.appendChild(style);
        }
      } catch (e) {
        console.error("Error in limited browser detection:", e);
      }
    };

    // Run detection once the component is mounted
    detectLimitedBrowser();
  }, []);

  return null; // This component doesn't render anything visible
}

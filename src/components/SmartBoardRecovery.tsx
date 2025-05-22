"use client";

import { useEffect } from "react";

/**
 * SmartBoardRecovery is a specialized component that adds error recovery
 * features for LG SmartBoard to prevent freezes and unresponsive behavior,
 * and provide a way to recover without requiring a refresh.
 */
const SmartBoardRecovery = () => {
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

    // Create a global error handler
    const originalOnError = window.onerror;
    const originalOnUnhandledRejection = window.onunhandledrejection;
    let errorCount = 0;
    let lastErrorTime = 0;

    // Create a recovery button that's always accessible
    const createRecoveryButton = () => {
      // Check if button already exists
      if (document.getElementById("smart-board-recovery-btn")) return;

      const recoveryButton = document.createElement("button");
      recoveryButton.id = "smart-board-recovery-btn";
      recoveryButton.innerText = "Restart App";
      recoveryButton.style.position = "fixed";
      recoveryButton.style.bottom = "10px";
      recoveryButton.style.right = "10px";
      recoveryButton.style.zIndex = "9999";
      recoveryButton.style.padding = "10px 15px";
      recoveryButton.style.background = "#e63946";
      recoveryButton.style.color = "white";
      recoveryButton.style.border = "none";
      recoveryButton.style.borderRadius = "4px";
      recoveryButton.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
      recoveryButton.style.cursor = "pointer";
      recoveryButton.style.fontWeight = "bold";

      // Add click handler
      recoveryButton.addEventListener("click", () => {
        performRecovery();
      });

      document.body.appendChild(recoveryButton);
    };

    // Function to perform recovery actions
    const performRecovery = () => {
      // Clear any timeouts or intervals that might be causing issues
      let id = window.setTimeout(() => {}, 0);
      while (id--) {
        window.clearTimeout(id);
        window.clearInterval(id);
      }

      // Remove any event listeners that might be causing issues
      const allElements = document.querySelectorAll("*");
      allElements.forEach((el) => {
        const clone = el.cloneNode(true);
        if (el.parentNode) {
          el.parentNode.replaceChild(clone, el);
        }
      });

      // Force a re-render by toggling display
      document.body.style.display = "none";
      setTimeout(() => {
        document.body.style.display = "block";
      }, 100);

      // Reset error count
      errorCount = 0;

      // Add a notification to show recovery was successful
      const notification = document.createElement("div");
      notification.style.position = "fixed";
      notification.style.top = "10px";
      notification.style.left = "50%";
      notification.style.transform = "translateX(-50%)";
      notification.style.padding = "10px 20px";
      notification.style.background = "#2a9d8f";
      notification.style.color = "white";
      notification.style.borderRadius = "4px";
      notification.style.zIndex = "10000";
      notification.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
      notification.innerText = "App restarted successfully";

      document.body.appendChild(notification);

      // Remove notification after 3 seconds
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 3000);
    };

    // Function to handle errors
    // Define interfaces for error types
    interface ErrorInfo {
      message?: string | Event;
      source?: string;
      lineno?: number;
      colno?: number;
      error?: Error;
    }

    interface PromiseRejectionInfo {
      reason?: any;
      promise?: Promise<any>;
    }

    // Union type for all possible error events
    type SmartBoardErrorEvent = ErrorInfo | PromiseRejectionInfo | Event;

    const handleError = (event: SmartBoardErrorEvent): boolean => {
      // Increment error count
      errorCount++;

      // Check for rapid errors (possible crash)
      const now = Date.now();
      const timeSinceLastError = now - lastErrorTime;
      lastErrorTime = now;

      // Log error for debugging
      console.error("SmartBoard Recovery caught error:", event);

      // If we're getting multiple errors in a short period, perform recovery
      if (errorCount > 3 || (errorCount > 1 && timeSinceLastError < 1000)) {
        console.warn("Multiple errors detected, attempting recovery");
        performRecovery();
      }

      // Make sure recovery button is available
      createRecoveryButton();

      // Let other error handlers run
      return false;
    };

    // Set up the error handlers
    window.onerror = function (message, source, lineno, colno, error) {
      handleError({ message, source, lineno, colno, error });
      if (originalOnError) {
        return originalOnError.call(
          window,
          message,
          source,
          lineno,
          colno,
          error
        );
      }
      return false;
    };

    window.onunhandledrejection = function (event) {
      handleError(event);
      if (originalOnUnhandledRejection) {
        return originalOnUnhandledRejection.call(window, event);
      }
    };

    // Set up "watchdog" timer to detect freezes
    let watchdogTimer: ReturnType<typeof setInterval> | undefined;
    let lastTickTime = Date.now();

    const startWatchdog = () => {
      // Check every 5 seconds
      watchdogTimer = setInterval(() => {
        const now = Date.now();
        // If more than 10 seconds since last tick, we might be frozen
        if (now - lastTickTime > 10000) {
          console.warn("Possible freeze detected, attempting recovery");
          performRecovery();
        }
        lastTickTime = now;
      }, 5000);
    };

    // Create the recovery button
    createRecoveryButton();

    // Start the watchdog
    startWatchdog();

    // Clean up on unmount
    return () => {
      window.onerror = originalOnError;
      window.onunhandledrejection = originalOnUnhandledRejection;
      clearInterval(watchdogTimer);

      const recoveryButton = document.getElementById(
        "smart-board-recovery-btn"
      );
      if (recoveryButton && recoveryButton.parentNode) {
        recoveryButton.parentNode.removeChild(recoveryButton);
      }
    };
  }, []);

  return null;
};

export default SmartBoardRecovery;

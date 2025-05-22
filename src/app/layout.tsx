import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./legacy-browser.css";
import "./android8-fixes.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BrowserCompatibility from "@/components/BrowserCompatibility";
import LegacyFallback from "@/components/LegacyFallback";
import LegacyAndroidFix from "@/components/LegacyAndroidFix";
import VideoPlaybackFix from "@/components/VideoPlaybackFix";
import TouchEventFix from "@/components/TouchEventFix";
import AnimationFix from "@/components/AnimationFix";
import SmartBoardRecovery from "@/components/SmartBoardRecovery";
import ChromiumDetector from "@/components/ChromiumDetector";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IELTS 7+ House - Your Path to IELTS Success",
  description:
    "Practice materials and resources to help you achieve your target IELTS scores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Script to detect and fix limited browsers early */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try {
                var isLimited = 
                  !window.requestAnimationFrame ||
                  !window.matchMedia ||
                  /LG|WebOS|SMART-TV|Android 8|Android\/8|Chromium\/[5-7]/.test(navigator.userAgent) ||
                  (navigator.userAgent.includes('Chrome') && /Android 8|Android\/8/.test(navigator.userAgent));
                
                // Additional detection for LG SmartBoard
                var isLGBoard = /LG|SMART-TV|WebOS|NetCast/.test(navigator.userAgent) || 
                               (/Android 8|Android\/8/.test(navigator.userAgent) && 
                               (/Chrome\/[5-7]/.test(navigator.userAgent) || /Chromium\/[5-7]/.test(navigator.userAgent) ||
                               (navigator.userAgent.includes('Chrome') && parseInt(navigator.userAgent.match(/Chrome\/(\d+)/)?.[1] || '100') < 80)));
                
                if (isLimited) {
                  document.documentElement.classList.add('legacy-browser');                  document.documentElement.classList.add('limited-browser');
                  // Add specific class for LG SmartBoard
                  if (isLGBoard) {
                    document.documentElement.classList.add('lg-smartboard');
                  }
                  
                  // Pre-disable some problematic features immediately
                  // Force Android 8 specific optimizations
                  if (/Android 8|Android\/8/.test(navigator.userAgent)) {
                    document.documentElement.classList.add('android8');
                  }
                  document.documentElement.style.setProperty('--animate-first', 'none');
                  document.documentElement.style.setProperty('--animate-second', 'none');
                  document.documentElement.style.setProperty('--animate-third', 'none');
                  document.documentElement.style.setProperty('--animate-fourth', 'none');
                  document.documentElement.style.setProperty('--animate-fifth', 'none');
                  
                  // Fix LG SmartBoard early - disable problematic JavaScript features
                  if (isLGBoard || /Android 8|Android\/8/.test(navigator.userAgent)) {
                    // Disable hover effects
                    var style = document.createElement('style');
                    style.textContent = '*:hover { all: initial !important; } button:hover, a:hover { cursor: pointer !important; }';
                    document.head.appendChild(style);
                    
                    // Prevent animations and transitions
                    var animationStyle = document.createElement('style');
                    animationStyle.textContent = '*, *::before, *::after { animation: none !important; transition: none !important; }';
                    document.head.appendChild(animationStyle);
                    
                    // Add warning to console
                    console.warn('Limited browser mode enabled for Android 8 / LG SmartBoard');
                  }
                }
              } catch(e) {
                document.documentElement.classList.add('legacy-browser');
                document.documentElement.classList.add('limited-browser');
              }
            })();
          `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {" "}
        <BrowserCompatibility />
        <LegacyFallback />
        <LegacyAndroidFix />
        <VideoPlaybackFix />
        <TouchEventFix />
        <AnimationFix />
        <SmartBoardRecovery />
        <ChromiumDetector />
        <noscript>
          <div
            style={{
              padding: "20px",
              background: "#f8f9fa",
              border: "1px solid #dee2e6",
              borderRadius: "5px",
              margin: "20px",
              textAlign: "center",
            }}
          >
            <h2>JavaScript is disabled</h2>
            <p>
              This website requires JavaScript to function properly. Please
              enable JavaScript in your browser settings.
            </p>
          </div>
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

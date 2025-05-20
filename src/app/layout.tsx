import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./legacy-browser.css"; // Added CSS for legacy browser support
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BrowserCompatibility from "@/components/BrowserCompatibility";

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
  description: "Practice materials and resources to help you achieve your target IELTS scores",
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
        {/* Script to detect limited browsers early */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try {
                var isLimited = 
                  !window.requestAnimationFrame ||
                  !window.matchMedia ||
                  /LG|WebOS|SMART-TV/.test(navigator.userAgent);
                
                if (isLimited) {
                  document.documentElement.classList.add('legacy-browser');
                  document.documentElement.classList.add('limited-browser');
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
        <BrowserCompatibility />
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

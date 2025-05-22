"use client";

import React, { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";

/**
 * A wrapper for Next.js Image component that provides fallbacks for
 * LG SmartBoard with Android 8 where the Next.js Image optimization might fail
 */
interface FallbackImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
  onImageError?: () => void;
}

const LegacyImageWrapper: React.FC<FallbackImageProps> = ({
  src,
  alt,
  fallbackSrc,
  onImageError,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLegacyMode, setIsLegacyMode] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    // Detect if we're in a legacy browser environment
    const isLimited =
      typeof window !== "undefined" &&
      (document.documentElement.classList.contains("limited-browser") ||
        document.documentElement.classList.contains("legacy-browser") ||
        document.documentElement.classList.contains("android8") ||
        document.documentElement.classList.contains("lg-smartboard"));

    setIsLegacyMode(isLimited);
  }, []);

  // Handle image loading error
  const handleError = () => {
    if (fallbackSrc && !imgError) {
      setImgSrc(fallbackSrc);
      setImgError(true);
      if (onImageError) onImageError();
    }
  };

  // If we're in legacy mode, render a standard img tag instead of Next.js Image
  if (isLegacyMode) {
    // For legacy browsers, use a regular img tag
    const imgProps: React.ImgHTMLAttributes<HTMLImageElement> = {
      src: typeof imgSrc === "string" ? imgSrc : fallbackSrc || "",
      alt,
      onError: handleError,
      style: {
        maxWidth: "100%",
        height: "auto",
        // Apply any width and height as max dimensions
        ...(props.width
          ? {
              maxWidth:
                typeof props.width === "number"
                  ? `${props.width}px`
                  : props.width,
            }
          : {}),
        ...(props.height
          ? {
              maxHeight:
                typeof props.height === "number"
                  ? `${props.height}px`
                  : props.height,
            }
          : {}),
      },
      loading: "lazy",
    };

    return <img {...imgProps} />;
  }

  // For modern browsers, use Next.js Image with error handling
  return <Image src={imgSrc} alt={alt} {...props} onError={handleError} />;
};

export default LegacyImageWrapper;

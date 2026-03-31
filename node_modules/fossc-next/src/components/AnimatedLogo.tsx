"use client";

import { useState, useEffect, useRef } from "react";

const FONTS = [
  "var(--font-primary)",
  "serif",
  "monospace",
  "'Courier New', monospace",
  "'Times New Roman', serif",
  "'Georgia', serif",
  "'Impact', sans-serif",
  "'Trebuchet MS', sans-serif"
];

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$*&%";
const TARGET_TEXT = "FOSSCU.";

export default function AnimatedLogo() {
  const [displayChars, setDisplayChars] = useState<string[]>(TARGET_TEXT.split(""));
  const [fonts, setFonts] = useState<string[]>(Array(TARGET_TEXT.length).fill("inherit"));
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovering) {
      intervalRef.current = setInterval(() => {
        setDisplayChars((prev) =>
          prev.map((_, i) =>
            Math.random() > 0.5 ? TARGET_TEXT[i] : CHARS[Math.floor(Math.random() * CHARS.length)]
          )
        );
        setFonts((prev) =>
          prev.map(() => FONTS[Math.floor(Math.random() * FONTS.length)])
        );
      }, 70); // Cycle every 70ms for that snappy mdb.studio feel
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      // Reset immediately to the original text
      setDisplayChars(TARGET_TEXT.split(""));
      setFonts(Array(TARGET_TEXT.length).fill("inherit"));
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering]);

  return (
    <span
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ display: "inline-flex", cursor: "pointer", position: "relative" }}
    >
      {/* Invisible placeholder maintains the exact layout width of the original text so the navbar never shakes */}
      <span style={{ visibility: "hidden" }}>{TARGET_TEXT}</span>
      
      {/* Absolutely positioned animating text */}
      <span style={{ position: "absolute", left: 0, top: 0, display: "inline-flex", width: "100%", justifyContent: "space-between" }}>
        {displayChars.map((char, i) => (
          <span
            key={i}
            style={{
              fontFamily: fonts[i],
              display: "inline-block",
              // Use fixed 'em' widths so the container NEVER changes size regardless of font or char
              width: char === "." ? "0.3em" : "0.7em",
              textAlign: "center"
            }}
          >
            {char}
          </span>
        ))}
      </span>
    </span>
  );
}

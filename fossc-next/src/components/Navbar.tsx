"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link href="/" className="nav-brand">
        FOSSCU.
      </Link>
      
      {/* 
        In original, .nav-links disappeared on mobile.
        We keep the same CSS logic, but we could expand on `isOpen` state
        to toggle a mobile menu if we wanted to build on top. 
      */}
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link href="/" className="nav-pill">
          Home
        </Link>
        <Link href="/about" className="nav-pill">
          About
        </Link>
        <Link href="/team" className="nav-pill">
          Team
        </Link>
        <Link href="/shipyard" className="nav-pill">
          Shipyard
        </Link>
        <Link href="/resources" className="nav-pill">
          Resources
        </Link>
        <Link 
          href="/handbook" 
          className="nav-pill outline" 
          style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
          </svg>
          Handbook
        </Link>
        <a 
          href="https://dub.sh/fosscu" 
          target="_blank" 
          className="nav-pill primary" 
          rel="noreferrer"
        >
          Join Us
        </a>
      </div>

      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

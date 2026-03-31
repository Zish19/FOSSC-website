"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AnimatedLogo from "./AnimatedLogo";

export default function Navbar() {
  const pathname = usePathname();
  const [openPathname, setOpenPathname] = useState<string | null>(null);
  const isOpen = openPathname === pathname;

  useEffect(() => {
    document.body.classList.toggle("nav-open", isOpen);

    return () => {
      document.body.classList.remove("nav-open");
    };
  }, [isOpen]);

  const closeMenu = () => {
    setOpenPathname(null);
  };

  return (
    <nav className={`navbar ${isOpen ? "menu-open" : ""}`}>
      <Link href="/" className="nav-brand" onClick={closeMenu}>
        <AnimatedLogo />
      </Link>

      <div className={`nav-links ${isOpen ? "active" : ""}`} id="primary-navigation">
        <span className="nav-mobile-kicker">Navigate</span>
        <Link href="/" className="nav-pill" onClick={closeMenu}>
          Home
        </Link>
        <Link href="/about" className="nav-pill" onClick={closeMenu}>
          About
        </Link>
        <Link href="/team" className="nav-pill" onClick={closeMenu}>
          Team
        </Link>
        <Link href="/faq" className="nav-pill" onClick={closeMenu}>
          FAQ
        </Link>
        <Link href="/shipyard" className="nav-pill" onClick={closeMenu}>
          Shipyard
        </Link>
        <Link href="/resources" className="nav-pill" onClick={closeMenu}>
          Resources
        </Link>
        <Link 
          href="/handbook" 
          className="nav-pill outline" 
          onClick={closeMenu}
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
          onClick={closeMenu}
          rel="noreferrer"
        >
          Join Us
        </a>
      </div>

      <button
        type="button"
        className={`menu-toggle ${isOpen ? "active" : ""}`}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setOpenPathname((current) => (current === pathname ? null : pathname))}
      >
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <button
        type="button"
        className={`nav-backdrop ${isOpen ? "active" : ""}`}
        aria-label="Close navigation menu"
        tabIndex={isOpen ? 0 : -1}
        onClick={closeMenu}
      />
    </nav>
  );
}

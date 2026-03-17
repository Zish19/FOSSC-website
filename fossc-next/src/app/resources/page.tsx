"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Resources() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (typeof window === "undefined") return;

    (gsap.utils.toArray(".gs-reveal") as HTMLElement[]).forEach((elem: HTMLElement) => {
      gsap.fromTo(
        elem,
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
          },
          duration: 1,
          y: 0,
          opacity: 1,
          ease: "power3.out",
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <section
        className="page-header"
        style={{ paddingTop: "200px", paddingBottom: "100px", textAlign: "center" }}
      >
        <div className="badge-wrapper">
          <span className="badge">Knowledge Base</span>
        </div>
        <h1
          className="page-title"
          style={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Community <span className="italic-serif highlight-yellow">Resources</span>
        </h1>
      </section>

      {/* Animated Networking Graphic */}
      <section className="resources-graphic-container gs-reveal">
        <svg className="resources-connections" width="100%" height="100%">
          <line x1="50%" y1="50%" x2="33%" y2="28%"></line>
          <line x1="50%" y1="50%" x2="28%" y2="70%"></line>
          <line x1="50%" y1="50%" x2="67%" y2="30%"></line>
          <line x1="50%" y1="50%" x2="72%" y2="65%"></line>
        </svg>

        <div className="resource-node center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
          </svg>
        </div>
        <div className="resource-node n1">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
        <div className="resource-node n2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        </div>
        <div className="resource-node n3">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        </div>
        <div className="resource-node n4">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12.01" y2="18"></line>
          </svg>
        </div>
      </section>

      {/* Developer Resources Learning Paths */}
      <section style={{ marginBottom: "6rem" }} className="gs-reveal">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontFamily: "var(--f-serif)",
              color: "var(--c-light)",
              marginBottom: "1rem",
            }}
          >
            Developer Resources
          </h2>
          <p
            style={{
              color: "var(--c-text-muted)",
              fontSize: "1.15rem",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Curated learning paths and resources to help you master different aspects
            of development.
          </p>
        </div>

        <div className="grid-layout">
          {/* Frontend Development */}
          <div className="glass-card" style={{ textAlign: "left" }}>
            <div
              className="card-icon"
              style={{ marginBottom: "1.5rem", background: "rgba(0,255,102,0.05)" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--c-primary)"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
              Frontend Development
            </h3>
            <p style={{ color: "var(--c-text-muted)", lineHeight: 1.6 }}>
              Learn to build beautiful and interactive user interfaces.
            </p>
          </div>

          {/* Backend Development */}
          <div className="glass-card" style={{ textAlign: "left" }}>
            <div
              className="card-icon"
              style={{ marginBottom: "1.5rem", background: "rgba(0,255,102,0.05)" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--c-primary)"
                strokeWidth="2"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
              Backend Development
            </h3>
            <p style={{ color: "var(--c-text-muted)", lineHeight: 1.6 }}>
              Master server-side programming and APIs.
            </p>
          </div>

          {/* Web3 Development */}
          <div className="glass-card" style={{ textAlign: "left" }}>
            <div
              className="card-icon"
              style={{ marginBottom: "1.5rem", background: "rgba(0,255,102,0.05)" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--c-primary)"
                strokeWidth="2"
              >
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                <line x1="12" y1="22" x2="12" y2="15.5"></line>
                <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                <line x1="12" y1="2" x2="12" y2="8.5"></line>
              </svg>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
              Web3 Development
            </h3>
            <p style={{ color: "var(--c-text-muted)", lineHeight: 1.6 }}>
              Dive into blockchain and decentralized applications.
            </p>
          </div>

          {/* App Development */}
          <div className="glass-card" style={{ textAlign: "left" }}>
            <div
              className="card-icon"
              style={{ marginBottom: "1.5rem", background: "rgba(0,255,102,0.05)" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--c-primary)"
                strokeWidth="2"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
              App Development
            </h3>
            <p style={{ color: "var(--c-text-muted)", lineHeight: 1.6 }}>
              Create mobile applications for iOS and Android.
            </p>
          </div>

          {/* AI & Machine Learning */}
          <div className="glass-card g-col-span-2" style={{ textAlign: "left" }}>
            <div
              className="card-icon"
              style={{ marginBottom: "1.5rem", background: "rgba(0,255,102,0.05)" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--c-primary)"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
              AI & Machine Learning
            </h3>
            <p style={{ color: "var(--c-text-muted)", lineHeight: 1.6 }}>
              Explore artificial intelligence and ML concepts.
            </p>
          </div>
        </div>
      </section>

      {/* General Community Links */}
      <section className="gs-reveal" style={{ marginBottom: "100px" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "2rem",
              fontFamily: "var(--f-serif)",
              color: "var(--c-light)",
            }}
          >
            External Links
          </h2>
        </div>
        <div className="grid-layout">
          <a
            href="https://docs.fosscu.org"
            target="_blank"
            className="glass-card"
            style={{ display: "block", textDecoration: "none" }}
            rel="noreferrer"
          >
            <div className="card-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--c-primary)"
                strokeWidth="2"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <h3>Documentation</h3>
            <p>Official docs, guidelines, and getting started materials.</p>
          </a>

          <a
            href="https://github.com/FOSS-Community"
            target="_blank"
            className="glass-card"
            style={{ display: "block", textDecoration: "none" }}
            rel="noreferrer"
          >
            <div className="card-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--c-primary)"
                strokeWidth="2"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h3>Guides & Blog</h3>
            <p>Tutorials, technical deep dives, and community updates.</p>
          </a>

          <a
            href="https://fosscu.org/faq"
            className="glass-card"
            style={{ display: "block", textDecoration: "none" }}
          >
            <div className="card-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--c-primary)"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </div>
            <h3>FAQ</h3>
            <p>Frequently asked questions about open source and our community.</p>
          </a>
        </div>
      </section>
    </>
  );
}

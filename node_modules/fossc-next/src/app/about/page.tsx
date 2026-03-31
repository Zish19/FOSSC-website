"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";

export default function About() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (typeof window === "undefined") return;

    (gsap.utils.toArray(".gs-reveal") as HTMLElement[]).forEach((elem: HTMLElement) => {
      gsap.fromTo(
        elem,
        { y: 40, opacity: 0 },
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
      <section className="page-header" style={{ paddingBottom: "30px" }}>
        <div className="badge-wrapper">
          <span className="badge">Who We Are</span>
        </div>
        <h1 className="page-title gs-reveal">
          About <span className="italic-serif highlight-yellow">FOSSCU</span>
        </h1>
      </section>

      {/* Interactive 3D Graphic */}
      <section className="about-hero-graphic gs-reveal">
        <div className="about-cube-container">
          <div className="about-cube-face front">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ width: "40px", height: "40px" }}
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </div>
          <div className="about-cube-face back">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ width: "40px", height: "40px" }}
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
          </div>
          <div className="about-cube-face right">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ width: "40px", height: "40px" }}
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
          <div className="about-cube-face left">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ width: "40px", height: "40px" }}
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <div className="about-cube-face top"></div>
          <div className="about-cube-face bottom"></div>
        </div>
        {/* Decorative shadow below cube */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            width: "150px",
            height: "10px",
            background:
              "radial-gradient(ellipse at center, rgba(0,255,102,0.2) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(4px)",
          }}
        ></div>
      </section>

      <section
        className="content-section about-content-section"
        style={{ maxWidth: "1000px", padding: "0 2rem" }}
      >
        <div className="gs-reveal about-intro" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p
            className="about-intro-copy"
            style={{
              fontSize: "1.25rem",
              color: "var(--c-light)",
              fontFamily: "var(--f-serif)",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Free and Open Source Software Community United. We are a global
            collective of dedicated developers, innovative designers, and passionate
            open-source advocates working tirelessly to democratize technology for
            everyone.
          </p>
        </div>

        {/* Stats/Numbers Section */}
        <div
          className="grid-layout gs-reveal about-stats-grid"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            marginBottom: "4rem",
          }}
        >
          <div className="stat-card about-stat-card" style={{ padding: "1.5rem" }}>
            <div className="stat-number" style={{ fontSize: "2.5rem" }}>
              50+
            </div>
            <div className="stat-label" style={{ fontSize: "0.9rem" }}>
              Active Projects
            </div>
          </div>
          <div className="stat-card about-stat-card" style={{ padding: "1.5rem" }}>
            <div className="stat-number" style={{ fontSize: "2.5rem" }}>
              1k+
            </div>
            <div className="stat-label" style={{ fontSize: "0.9rem" }}>
              Global Members
            </div>
          </div>
          <div className="stat-card about-stat-card" style={{ padding: "1.5rem" }}>
            <div className="stat-number" style={{ fontSize: "2.5rem" }}>
              10k
            </div>
            <div className="stat-label" style={{ fontSize: "0.9rem" }}>
              Commits Made
            </div>
          </div>
        </div>

        <div
          className="gs-reveal about-mission"
          style={{
            marginBottom: "4rem",
            padding: "2rem",
            background: "rgba(0,255,102,0.02)",
            border: "1px solid rgba(0,255,102,0.1)",
            borderRadius: "var(--radius-md)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative background accent */}
          <div
            style={{
              position: "absolute",
              top: "-50px",
              right: "-50px",
              width: "150px",
              height: "150px",
              background: "rgba(0,255,102,0.05)",
              filter: "blur(40px)",
              borderRadius: "50%",
            }}
          ></div>

          <h2
            className="about-mission-title"
            style={{
              color: "var(--c-primary)",
              fontSize: "1.5rem",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            Our Mission
          </h2>
          <p className="about-mission-copy" style={{ fontSize: "1.1rem", position: "relative", zIndex: 1 }}>
            Our overarching mission is to empower individuals worldwide to
            contribute meaningfully to the global open-source ecosystem. We
            achieve this by providing accessible mentorship programs, comprehensive
            learning resources, and a highly collaborative technical environment
            where incredible ideas are born, nurtured, and maintained over the long
            term.
          </p>
        </div>

        <div className="gs-reveal about-pillars" style={{ marginTop: "4rem" }}>
          <div className="about-pillars-header" style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h2
              className="about-pillars-title"
              style={{
                color: "var(--c-light)",
                fontFamily: "var(--f-serif)",
                fontSize: "2rem",
                marginBottom: "0.5rem",
              }}
            >
              The Pillars of FOSSCU
            </h2>
            <p className="about-pillars-copy" style={{ color: "var(--c-text-muted)", fontSize: "1.1rem" }}>
              The core values that drive our decisions and shape our community
              culture.
            </p>
          </div>

          <div
            className="grid-layout about-pillars-grid"
            style={{ gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}
          >
            <div
              className="glass-card about-pillar-card"
              style={{ position: "relative", overflow: "hidden", padding: "2rem" }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "4px",
                  height: "100%",
                  background: "var(--c-primary)",
                }}
              ></div>
              <div
                className="card-icon"
                style={{
                  marginBottom: "1.5rem",
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "48px",
                  height: "48px",
                  background: "rgba(0,255,102,0.1)",
                  borderRadius: "8px",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--c-primary)"
                  strokeWidth="2"
                  style={{ width: "24px", height: "24px" }}
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>
                Radical Inclusivity
              </h3>
              <p
                style={{
                  color: "var(--c-text-muted)",
                  lineHeight: 1.5,
                  fontSize: "0.95rem",
                }}
              >
                Open source is for everyone, regardless of background, experience
                level, or location. We actively foster a welcoming environment where
                all voices are heard and respected.
              </p>
            </div>

            <div
              className="glass-card about-pillar-card"
              style={{ position: "relative", overflow: "hidden", padding: "2rem" }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "4px",
                  height: "100%",
                  background: "var(--c-primary)",
                }}
              ></div>
              <div
                className="card-icon"
                style={{
                  marginBottom: "1.5rem",
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "48px",
                  height: "48px",
                  background: "rgba(0,255,102,0.1)",
                  borderRadius: "8px",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--c-primary)"
                  strokeWidth="2"
                  style={{ width: "24px", height: "24px" }}
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>
                Absolute Transparency
              </h3>
              <p
                style={{
                  color: "var(--c-text-muted)",
                  lineHeight: 1.5,
                  fontSize: "0.95rem",
                }}
              >
                We believe in the power of public knowledge. We build our projects
                in the open, we document our learnings in the open, and critically,
                we discuss our failures in the open.
              </p>
            </div>

            <div
              className="glass-card g-col-span-2 about-pillar-wide"
              style={{
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "4px",
                  height: "100%",
                  background: "var(--c-primary)",
                }}
              ></div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>
                  Continuous Innovation
                </h3>
                <p
                  style={{
                    color: "var(--c-text-muted)",
                    lineHeight: 1.5,
                    fontSize: "0.95rem",
                  }}
                >
                  Technology never stands still, and neither do we. We encourage
                  experimentation and actively support community members who wish
                  to explore emerging technologies and new paradigms in software
                  development.
                </p>
              </div>
              <div
                style={{
                  flexShrink: 0,
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "rgba(0,255,102,0.1)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid rgba(0,255,102,0.2)",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--c-primary)"
                  strokeWidth="2"
                  style={{ width: "32px", height: "32px" }}
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

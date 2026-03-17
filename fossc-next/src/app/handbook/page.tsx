"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Handbook() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (typeof window === "undefined") return;

    // Simple reveal animation for handbook sections
    (gsap.utils.toArray(".handbook-section") as HTMLElement[]).forEach((elem: HTMLElement) => {
      gsap.fromTo(
        elem,
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
          },
          duration: 0.8,
          y: 0,
          opacity: 1,
          ease: "power2.out",
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
          <span className="badge">Guidelines</span>
        </div>
        <h1
          className="page-title"
          style={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Community <span className="italic-serif highlight-yellow">Handbook</span>
        </h1>
      </section>

      <section
        className="handbook-content"
        style={{
          maxWidth: "800px",
          margin: "0 auto 100px auto",
          background: "var(--c-dark-sec)",
          border: "1px solid rgba(0, 255, 102, 0.2)",
          borderRadius: "12px",
          padding: "3rem",
        }}
      >
        <div
          className="handbook-section"
          style={{
            marginBottom: "3rem",
            borderBottom: "1px dashed rgba(255, 255, 255, 0.1)",
            paddingBottom: "2rem",
          }}
        >
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              color: "var(--c-light)",
              fontFamily: "var(--f-serif)",
              marginBottom: "1rem",
            }}
          >
            <svg
              className="handbook-icon"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--c-primary)"
              strokeWidth="2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            Code of Conduct
          </h2>
          <p
            style={{
              color: "var(--c-text-muted)",
              lineHeight: 1.8,
              marginBottom: "1rem",
            }}
          >
            We are committed to providing a friendly, safe, and welcoming environment
            for all, regardless of gender, sexual orientation, ability, ethnicity,
            socioeconomic status, or religion.
          </p>
          <a
            href="https://docs.fosscu.org/docs/code-of-conduct"
            className="btn btn-outline"
            style={{ fontSize: "0.8rem", padding: "0.5rem 1rem" }}
            target="_blank"
            rel="noreferrer"
          >
            Read Full CoC
          </a>
        </div>

        <div
          className="handbook-section"
          style={{
            marginBottom: "3rem",
            borderBottom: "1px dashed rgba(255, 255, 255, 0.1)",
            paddingBottom: "2rem",
          }}
        >
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              color: "var(--c-light)",
              fontFamily: "var(--f-serif)",
              marginBottom: "1rem",
            }}
          >
            <svg
              className="handbook-icon"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--c-primary)"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            Contribution Guidelines
          </h2>
          <p
            style={{
              color: "var(--c-text-muted)",
              lineHeight: 1.8,
              marginBottom: "1rem",
            }}
          >
            Contributions are the lifeblood of our operation. Whether you&apos;re fixing a
            typo, adding a feature to Wand, or organizing an event, your effort
            matters.
          </p>
          <p
            style={{
              color: "var(--c-text-muted)",
              lineHeight: 1.8,
              marginBottom: "1rem",
            }}
          >
            Please review our standard pull request workflow and issue templates
            before submitting code.
          </p>
        </div>

        <div
          className="handbook-section"
          style={{ marginBottom: 0, paddingBottom: 0, borderBottom: "none" }}
        >
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              color: "var(--c-light)",
              fontFamily: "var(--f-serif)",
              marginBottom: "1rem",
            }}
          >
            <svg
              className="handbook-icon"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--c-primary)"
              strokeWidth="2"
            >
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"></path>
            </svg>
            Repository Standards
          </h2>
          <p
            style={{
              color: "var(--c-text-muted)",
              lineHeight: 1.8,
              marginBottom: "1rem",
            }}
          >
            All FOSSCU repositories must contain a README, a LICENSE (preferably MIT
            or GPL), and a contributing guide.
          </p>
        </div>
      </section>
    </>
  );
}

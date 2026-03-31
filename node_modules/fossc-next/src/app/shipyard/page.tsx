"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./shipyard.css";

export default function Shipyard() {
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

    // Floating animation for the code window graphic
    gsap.to(".code-window", {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <section
        className="page-header shipyard-header"
        style={{ paddingTop: "200px", paddingBottom: "100px", textAlign: "center" }}
      >
        <div className="badge-wrapper">
          <span className="badge">Innovation Hub</span>
        </div>
        <h1
          className="page-title shipyard-title"
          style={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Welcome to <span className="italic-serif highlight-yellow">Shipyard</span>
        </h1>
        <p
          className="shipyard-intro"
          style={{
            color: "var(--c-text-muted)",
            fontSize: "1.25rem",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          FOSSCU&apos;s monthly gathering where open source enthusiasts come together to
          build, ship, and celebrate amazing projects.
        </p>
      </section>

      {/* Code Editor Graphic Element */}
      <section className="gs-reveal shipyard-code-window-container" style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
        <div 
          className="code-window shipyard-code-window"
          style={{
            background: 'rgba(10, 10, 10, 0.8)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(0, 255, 102, 0.2)',
            borderRadius: '12px',
            width: '100%',
            maxWidth: '650px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 255, 102, 0.15)'
          }}
        >
          {/* Mac-style Window Header */}
          <div className="shipyard-window-header" style={{
            display: 'flex',
            alignItems: 'center',
            padding: '16px 20px',
            background: 'rgba(255, 255, 255, 0.02)',
            borderBottom: '1px solid rgba(0, 255, 102, 0.1)'
          }}>
            <div className="shipyard-window-dots" style={{ display: 'flex', gap: '8px' }}>
              <div className="shipyard-window-dot shipyard-window-dot-close" style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ff5f56' }}></div>
              <div className="shipyard-window-dot shipyard-window-dot-minimize" style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ffbd2e' }}></div>
              <div className="shipyard-window-dot shipyard-window-dot-expand" style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#27c93f' }}></div>
            </div>
            <div className="shipyard-window-title" style={{ margin: '0 auto', color: 'var(--c-text-muted)', fontSize: '0.9rem', fontFamily: 'var(--f-serif)', letterSpacing: '1px' }}>
              shipyard_init.js
            </div>
          </div>
          {/* Code Body */}
          <div className="shipyard-code-body" style={{
            padding: '30px',
            fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
            color: '#a9b7c6',
            fontSize: '1.2rem',
            lineHeight: '1.8',
            textAlign: 'left'
          }}>
            <p style={{ margin: 0 }}>
              <span style={{ color: '#cc7832' }}>const</span> <span style={{ color: '#ffc66d' }}>Shipyard</span> = <span style={{ color: '#cc7832' }}>async</span> () <span style={{ color: '#cc7832' }}>=&gt;</span> {'{'}
            </p>
            <p style={{ margin: '0 0 0 32px' }}>
              <span style={{ color: '#cc7832' }}>await</span> <span style={{ color: '#9876aa' }}>openSource</span>.<span style={{ color: '#ffc66d' }}>collaborate</span>();
            </p>
            <p style={{ margin: '0 0 0 32px' }}>
              <span style={{ color: '#cc7832' }}>await</span> <span style={{ color: '#9876aa' }}>project</span>.<span style={{ color: '#ffc66d' }}>launch</span>(<span style={{ color: '#6a8759' }}>&quot;world&quot;</span>);
            </p>
            <p style={{ margin: '0 0 0 32px' }}>
              <span style={{ color: '#ffc66d' }}>celebrate</span>();
            </p>
            <p style={{ margin: 0 }}>
              {'}'};
            </p>
            <p style={{ margin: '24px 0 0 0', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'var(--c-primary)', fontWeight: 'bold' }}>~</span>
              <span style={{ color: '#8B949E', margin: '0 12px' }}>$</span>
              <span style={{ color: '#fff' }}>npm run shipyard</span>
              <span className="cursor-blink" style={{ display: 'inline-block', width: '10px', height: '20px', background: 'var(--c-primary)', marginLeft: '8px' }}></span>
            </p>
          </div>
        </div>
      </section>

      {/* What is Shipyard / How to Submit Section */}
      <section className="grid-layout gs-reveal shipyard-overview-grid" style={{ marginBottom: "5rem" }}>
        <div className="glass-card" style={{ alignSelf: "start" }}>
          <h2
            style={{
              color: "var(--c-light)",
              fontFamily: "var(--f-serif)",
              fontSize: "2rem",
              marginBottom: "1.5rem",
            }}
          >
            What is Shipyard?
          </h2>
          <p
            style={{
              color: "var(--c-text-muted)",
              lineHeight: 1.8,
              marginBottom: "1rem",
            }}
          >
            Shipyard is FOSSCU&apos;s flagship monthly initiative, designed to bring
            together open-source enthusiasts from around the world to build, launch,
            and celebrate incredible projects.
          </p>
          <p
            style={{
              color: "var(--c-text-muted)",
              lineHeight: 1.8,
              marginBottom: "1rem",
            }}
          >
            Whether you&apos;re just getting started or you&apos;re a seasoned developer,
            Shipyard offers an inclusive platform where everyone can contribute,
            collaborate, and showcase their creativity.
          </p>
          <div
            className="shipyard-callout"
            style={{
              padding: "1.5rem",
              background: "rgba(0,255,102,0.05)",
              borderLeft: "2px solid var(--c-primary)",
              borderRadius: "0 var(--radius-sm) var(--radius-sm) 0",
              marginTop: "2rem",
            }}
          >
            <p
              style={{
                color: "var(--c-primary)",
                fontWeight: 600,
                fontSize: "1.1rem",
                margin: 0,
              }}
            >
              Join us in shaping the future of open source — one project at a time!
            </p>
          </div>
        </div>

        <div className="glass-card g-col-span-2">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--c-primary)"
              strokeWidth="2"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            <h2
              style={{
                color: "var(--c-light)",
                fontFamily: "var(--f-serif)",
                fontSize: "2rem",
                margin: 0,
              }}
            >
              How to Submit Your Project
            </h2>
          </div>

          <div className="shipyard-steps" style={{ marginLeft: "1rem" }}>
            <div className="ship-step-card">
              <div className="ship-step-number">1</div>
              <p
                style={{
                  color: "var(--c-light)",
                  fontWeight: 500,
                  fontSize: "1.1rem",
                  marginBottom: "0.2rem",
                }}
              >
                Click on &quot;Submit Your Project&quot;
              </p>
              <p style={{ color: "var(--c-text-muted)", fontSize: "0.95rem" }}>
                You will be redirected to the Shipyard GitHub repository&apos;s README
                file.
              </p>
            </div>

            <div className="ship-step-card">
              <div className="ship-step-number">2</div>
              <p
                style={{
                  color: "var(--c-light)",
                  fontWeight: 500,
                  fontSize: "1.1rem",
                  marginBottom: "0.2rem",
                }}
              >
                Fork & Clone
              </p>
              <p style={{ color: "var(--c-text-muted)", fontSize: "0.95rem" }}>
                Fork the repository to your own GitHub account, then clone it to your
                local machine.
              </p>
            </div>

            <div className="ship-step-card">
              <div className="ship-step-number">3</div>
              <p
                style={{
                  color: "var(--c-light)",
                  fontWeight: 500,
                  fontSize: "1.1rem",
                  marginBottom: "0.2rem",
                }}
              >
                Add Your Project
              </p>
              <p style={{ color: "var(--c-text-muted)", fontSize: "0.95rem" }}>
                Create a new folder inside the `projects/` directory using your
                project name. Add your code and update the internal README with Title,
                Description, Tech Stack, and Install Steps.
              </p>
            </div>

            <div className="ship-step-card">
              <div className="ship-step-number">4</div>
              <p
                style={{
                  color: "var(--c-light)",
                  fontWeight: 500,
                  fontSize: "1.1rem",
                  marginBottom: "0.2rem",
                }}
              >
                Push & PR
              </p>
              <p style={{ color: "var(--c-text-muted)", fontSize: "0.95rem" }}>
                Push changes to your fork and create a Pull Request to the main
                project. Wait for the team to review and merge!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Values Section */}
      <section
        className="grid-layout gs-reveal shipyard-features-grid"
        style={{ gridTemplateColumns: "repeat(3, 1fr)", marginBottom: "5rem" }}
      >
        <div
          className="glass-card shipyard-feature-card"
          style={{ textAlign: "center", borderTop: "4px solid var(--c-primary)" }}
        >
          <div
            className="card-icon"
            style={{ margin: "0 auto 1.5rem auto", background: "none" }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--c-primary)"
              strokeWidth="1.5"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h3>Collaborate</h3>
          <p style={{ color: "var(--c-text-muted)" }}>
            Work with fellow developers to push boundaries.
          </p>
        </div>
        <div
          className="glass-card shipyard-feature-card"
          style={{ textAlign: "center", borderTop: "4px solid var(--c-primary)" }}
        >
          <div
            className="card-icon"
            style={{ margin: "0 auto 1.5rem auto", background: "none" }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--c-primary)"
              strokeWidth="1.5"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h3>Ship</h3>
          <p style={{ color: "var(--c-text-muted)" }}>
            Launch your innovative open-source projects.
          </p>
        </div>
        <div
          className="glass-card shipyard-feature-card"
          style={{ textAlign: "center", borderTop: "4px solid var(--c-primary)" }}
        >
          <div
            className="card-icon"
            style={{ margin: "0 auto 1.5rem auto", background: "none" }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--c-primary)"
              strokeWidth="1.5"
            >
              <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path>
            </svg>
          </div>
          <h3>Celebrate</h3>
          <p style={{ color: "var(--c-text-muted)" }}>
            Share achievements globally with the community.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="gs-reveal shipyard-cta"
        style={{
          textAlign: "center",
          marginBottom: "150px",
          position: "relative",
          zIndex: 5,
        }}
      >
        <div
          className="shipyard-cta-line"
          style={{
            position: "absolute",
            top: "50%",
            left: "10%",
            right: "10%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(0,255,102,0.5), transparent)",
            zIndex: -1,
          }}
        ></div>

        <a
          href="https://github.com/FOSS-Community/fosscu.org/blob/main/src/app/shipyard/README.md"
          target="_blank"
          className="btn btn-primary shipyard-cta-button"
          style={{
            fontSize: "1.25rem",
            padding: "1.2rem 3.5rem",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
          rel="noreferrer"
        >
          Submit Your Project
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{
              marginLeft: "0.5rem",
              display: "inline-block",
              verticalAlign: "middle",
            }}
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </section>
    </>
  );
}

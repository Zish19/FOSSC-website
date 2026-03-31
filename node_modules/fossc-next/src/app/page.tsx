"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial check to avoid running on server render
    if (typeof window === "undefined") return;

    // --- Interactive Eye Graphic ---
    const eye = document.querySelector(".eye");
    const pupil = document.querySelector(".pupil");
    const highlight = document.querySelector(".pupil-highlight");

    const onEyeMove = (e: MouseEvent) => {
      if (!eye || !pupil) return;
      
      const eyeRect = eye.getBoundingClientRect();
      const eyeCenterX = eyeRect.left + eyeRect.width / 2;
      const eyeCenterY = eyeRect.top + eyeRect.height / 2;
      const rad = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);

      const rawDist = Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY);
      // Smooth falloff — moves fast near center, eases off at edges (no snapping)
      const maxDisplace = 22;
      const distance = maxDisplace * (1 - Math.exp(-rawDist / 150));

      const pupilX = Math.cos(rad) * distance;
      const pupilY = Math.sin(rad) * distance;

      gsap.to(pupil, {
        x: `${pupilX}px`,
        y: `${pupilY}px`,
        duration: 0.15,
        ease: "sine.out",
      });

      if (highlight) {
        const maxHighlight = 15;
        const highlightDist = maxHighlight * (1 - Math.exp(-rawDist / 180));
        const hX = Math.cos(rad) * highlightDist;
        const hY = Math.sin(rad) * highlightDist;

        gsap.to(highlight, {
          x: `${hX}px`,
          y: `${hY}px`,
          duration: 0.3,
          ease: "sine.out",
        });
      }
    };
    
    window.addEventListener("mousemove", onEyeMove);

    const ctx = gsap.context(() => {
      // Hero Entry Animation
      const heroTl = gsap.timeline();

      heroTl
        .from(".badge-wrapper", {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          ".hero-title",
          { y: 40, opacity: 0, duration: 1, ease: "power3.out" },
          "-=0.6"
        )
        .from(
          ".hero-subtitle",
          { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.8"
        )
        .from(
          ".hero-actions",
          { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .from(
          ".eye-container",
          { scale: 0, rotation: 180, opacity: 0, duration: 1.2, ease: "back.out(1.5)" },
          "-=1"
        )
        .from(
          ".floating-shape",
          { scale: 0, opacity: 0, duration: 1.5, stagger: 0.2, ease: "power2.out" },
          "-=1.2"
        );

      // Continuous floating animation
      gsap.to(".shape-1", {
        y: 30,
        x: -20,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      gsap.to(".shape-2", {
        y: -40,
        x: 20,
        duration: 5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      // Scroll Animations for Sections
      // Glass Cards
      (gsap.utils.toArray(".glass-card") as HTMLElement[]).forEach((card: HTMLElement, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.1,
        });
      });

      // Retro monitor animations now handled in the NEW ANIMATIONS section below

      // Section Headers
      (gsap.utils.toArray(".section-header") as HTMLElement[]).forEach((header: HTMLElement) => {
        gsap.from(header, {
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });

      // CTA Box
      gsap.from(".cta-box", {
        scrollTrigger: {
          trigger: ".cta-box",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animate stats
      (gsap.utils.toArray(".stat-number") as HTMLElement[]).forEach((stat: HTMLElement) => {
        const targetAttr = stat.getAttribute("data-target");
        const target = parseFloat(targetAttr || "0");
        const obj = { val: 0 };
        gsap.to(obj, {
          scrollTrigger: {
            trigger: stat,
            start: "top 85%",
          },
          val: target,
          duration: 2.5,
          ease: "power3.out",
          onUpdate: function () {
            stat.innerHTML = Math.floor(obj.val) + (target > 50 ? "+" : "");
          },
        });
      });

      // New floating shapes
      gsap.to(".shape-3", {
        y: 60,
        rotation: 90,
        duration: 6,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      gsap.to(".shape-4", {
        y: -50,
        x: -40,
        scale: 1.2,
        duration: 7,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      gsap.to(".incubator-glow", {
        scale: 1.3,
        opacity: 0.5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // --- NEW ANIMATIONS ---

      // Marquee parallax on scroll
      gsap.to(".marquee-container", {
        scrollTrigger: {
          trigger: ".marquee-container",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        backgroundPosition: "100% 50%",
        ease: "none",
      });

      // Marquee speed-up on scroll
      gsap.to(".marquee", {
        scrollTrigger: {
          trigger: ".marquee-container",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
        x: -100,
        ease: "none",
      });

      // 3D tilt on glass cards (mouse enter/leave)
      const cards = document.querySelectorAll(".glass-card");
      cards.forEach((card) => {
        const el = card as HTMLElement;
        el.addEventListener("mousemove", (e: MouseEvent) => {
          const rect = el.getBoundingClientRect();
          const xPos = (e.clientX - rect.left) / rect.width - 0.5;
          const yPos = (e.clientY - rect.top) / rect.height - 0.5;
          gsap.to(el, {
            rotateY: xPos * 8,
            rotateX: -yPos * 8,
            duration: 0.4,
            ease: "power2.out",
            transformPerspective: 800,
          });
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(el, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
          });
        });
      });

      // Staggered stat blocks with scale bounce
      (gsap.utils.toArray(".stat-block") as HTMLElement[]).forEach((block: HTMLElement, i) => {
        gsap.from(block, {
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 40,
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.4)",
          delay: i * 0.2,
        });
      });

      // CTA box shimmer gradient sweep
      const ctaBox = document.querySelector(".cta-box") as HTMLElement;
      if (ctaBox) {
        gsap.fromTo(ctaBox, 
          { backgroundImage: "linear-gradient(105deg, #050505 0%, #050505 40%, rgba(0,255,102,0.06) 50%, #050505 60%, var(--c-dark-sec) 100%)", backgroundSize: "200% 100%", backgroundPosition: "100% 0" },
          {
            backgroundPosition: "-100% 0",
            duration: 4,
            repeat: -1,
            ease: "sine.inOut",
          }
        );
      }

      // Retro monitors stagger with rotation entrance  
      (gsap.utils.toArray(".retro-monitor") as HTMLElement[]).forEach((monitor: HTMLElement, i) => {
        gsap.from(monitor, {
          scrollTrigger: {
            trigger: monitor,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 60,
          rotation: i % 2 === 0 ? -3 : 3,
          scale: 0.85,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: i * 0.15,
        });
      });

      // Badge pulse animation
      gsap.to(".badge", {
        boxShadow: "0 0 15px rgba(0, 255, 102, 0.4)",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Button hover arrow bounce (continuous)
      gsap.to(".btn-primary svg", {
        x: 4,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => {
      window.removeEventListener("mousemove", onEyeMove);
      ctx.revert();
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="badge-wrapper">
            <span className="badge">Open Source Community</span>
          </div>
          <h1 className="hero-title">
            The <span className="italic-serif highlight-yellow">Talent Layer</span>
            <br />
            Of Open Source.
          </h1>
          <p className="hero-subtitle">
            Free and Open-Source Software Community United. We are a group of
            individuals representing the future of collaboration.
          </p>
          <div className="hero-actions">
            <a
              href="https://github.com/foss-community"
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Start Contributing
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-visuals">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="eye-container">
            <div className="eye">
              <div className="pupil">
                <div className="pupil-highlight"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Scroll down</span>
        </div>
      </section>

      {/* Marquee Divider */}
      <div className="marquee-container">
        <div className="marquee">
          <span>OPEN SOURCE</span> <span className="star">✶</span>
          <span>COLLABORATION</span> <span className="star">✶</span>
          <span>EMPOWERMENT</span> <span className="star">✶</span>
          <span>INNOVATION</span> <span className="star">✶</span>
          <span>COMMUNITY</span> <span className="star">✶</span>
          <span>OPEN SOURCE</span> <span className="star">✶</span>
          <span>COLLABORATION</span> <span className="star">✶</span>
          <span>EMPOWERMENT</span> <span className="star">✶</span>
          <span>INNOVATION</span> <span className="star">✶</span>
          <span>COMMUNITY</span> <span className="star">✶</span>
        </div>
      </div>

      {/* About / What We Do Section */}
      <section className="initiatives" id="initiatives">
        <div className="section-header">
          <h2 className="section-title">
            What <span className="italic-serif text-yellow">We Do</span>
          </h2>
          <p className="section-desc">
            Empowering the Open Source Community through consistent action and
            unyielding passion.
          </p>
        </div>

        <div className="grid-layout">
          {/* Glassmorphic Initiative Cards */}
          <div className="glass-card g-col-span-2" style={{ position: "relative", overflow: "hidden" }}>
            <div className="incubator-glow" style={{
              position: "absolute", top: "-50%", right: "-20%", width: "300px", height: "300px",
              background: "radial-gradient(circle, rgba(0,255,102,0.15) 0%, transparent 70%)",
              borderRadius: "50%",
              pointerEvents: "none"
            }}></div>
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--c-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3 style={{ position: "relative", zIndex: 1 }}>Project Incubator</h3>
            <p style={{ position: "relative", zIndex: 1, color: "var(--c-text-muted)" }}>
              Have a crazy idea? We provide the mentorship, resources, and community power 
              to turn your open-source dream into a production-ready reality.
            </p>
            <Link href="/shipyard" className="card-link" style={{ position: "relative", zIndex: 1 }}>
              Explore Shipyard ↗
            </Link>
          </div>

          <div className="glass-card">
            <div className="card-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--c-primary)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
              </svg>
            </div>
            <h3>Community Events</h3>
            <p>
              Regular meetups, hackathons, and code sprints to foster
              collaboration.
            </p>
          </div>

          <div className="glass-card">
            <div className="card-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--c-primary)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <h3>Global Contributions</h3>
            <p>
              Active participation in projects that make a real-world impact.
            </p>
          </div>

          <div className="glass-card g-col-span-2 highlight-card">
            <div className="card-badge">Learn</div>
            <h3>Community Workshops</h3>
            <p>
              Hands-on sessions for all levels. We ensure everyone grows.
            </p>
            <a href="https://docs.fosscu.org" className="btn btn-outline">
              Read Docs
            </a>
          </div>
        </div>
      </section>

      {/* Decorative Floating Elements for visual fill */}
      <div className="floating-shape shape-3" style={{ position: "absolute", top: "120vh", left: "10%", width: "80px", height: "80px", background: "linear-gradient(135deg, rgba(0,255,102,0.1) 0%, transparent 100%)", borderRadius: "30%", zIndex: -1 }}></div>
      <div className="floating-shape shape-4" style={{ position: "absolute", top: "180vh", right: "5%", width: "120px", height: "120px", border: "1px dashed rgba(0,255,102,0.15)", borderRadius: "50%", zIndex: -1 }}></div>

      {/* Live Impact Stats */}
      <section className="impact-stats" style={{ padding: "80px 0", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", margin: "100px 0", background: "rgba(0,0,0,0.2)" }}>
        <div className="grid-layout" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", textAlign: "center", gap: "2rem" }}>
          <div className="stat-block gs-reveal">
            <h4 className="stat-number" style={{ fontSize: "3.5rem", color: "var(--c-primary)", fontFamily: "var(--f-serif)", marginBottom: "0.5rem" }} data-target="50">0</h4>
            <span style={{ color: "var(--c-text-muted)", textTransform: "uppercase", letterSpacing: "2px", fontSize: "0.9rem" }}>Active Projects</span>
          </div>
          <div className="stat-block stat-block-divider gs-reveal" style={{ borderLeft: "1px solid rgba(255,255,255,0.05)", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
            <h4 className="stat-number" style={{ fontSize: "3.5rem", color: "var(--c-primary)", fontFamily: "var(--f-serif)", marginBottom: "0.5rem" }} data-target="1500">0</h4>
            <span style={{ color: "var(--c-text-muted)", textTransform: "uppercase", letterSpacing: "2px", fontSize: "0.9rem" }}>Global Contributors</span>
          </div>
          <div className="stat-block gs-reveal">
            <h4 className="stat-number" style={{ fontSize: "3.5rem", color: "var(--c-primary)", fontFamily: "var(--f-serif)", marginBottom: "0.5rem" }} data-target="10000">0</h4>
            <span style={{ color: "var(--c-text-muted)", textTransform: "uppercase", letterSpacing: "2px", fontSize: "0.9rem" }}>Commits Merged</span>
          </div>
        </div>
      </section>

      {/* Projects / Highlights Section */}
      <section className="projects-section" id="projects">
        <div className="section-header center">
          <h2 className="section-title">
            Built By <br />
            <span className="italic-serif text-yellow">The Community</span>
          </h2>
          <p className="section-desc">Explore our tools, and platforms.</p>
        </div>

        <div className="projects-container">
          <div className="retro-monitor">
            <div className="monitor-screen">
              <div className="screen-content">
                <h4>Reputation Checker</h4>
                <p>Verify and build your open-source standing.</p>
                <a
                  href="https://reputation.fosscu.org"
                  className="btn btn-outline"
                  target="_blank"
                >
                  View App
                </a>
              </div>
            </div>
          </div>

          <div className="retro-monitor">
            <div className="monitor-screen">
              <div className="screen-content">
                <h4>Sub-Domains</h4>
                <p>Get your own decentralized digital identity.</p>
                <a
                  href="https://subdomain.fosscu.org"
                  className="btn btn-outline"
                  target="_blank"
                >
                  Claim Now
                </a>
              </div>
            </div>
          </div>

          <div className="retro-monitor style-alt">
            <div className="monitor-screen">
              <div className="screen-content">
                <h4>LinkLiberate</h4>
                <p>An open-source link management solution.</p>
                <a
                  href="https://github.com/foss-community/LinkLiberate"
                  className="btn btn-outline"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="retro-monitor style-alt">
            <div className="monitor-screen">
              <div className="screen-content">
                <h4>Wand</h4>
                <p>CLI tools for community engagement and management.</p>
                <a
                  href="https://github.com/foss-community/wand"
                  className="btn btn-outline"
                  target="_blank"
                >
                  Discover
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-box">
          <h2 className="cta-title">
            Ready to Make an <span className="italic-serif text-yellow">Impact?</span>
          </h2>
          <p>Join our Discord community and start contributing today.</p>
          <div className="cta-buttons">
            <a
              href="https://dub.sh/fosscu"
              target="_blank"
              className="btn btn-primary large"
              rel="noreferrer"
            >
              Join Discord
            </a>
            <a
              href="https://github.com/FOSS-Community"
              target="_blank"
              className="btn btn-dark large"
              rel="noreferrer"
            >
              Explore GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

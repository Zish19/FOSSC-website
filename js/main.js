document.addEventListener("DOMContentLoaded", () => {

    // --- Custom Cursor ---
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");

    if (cursorDot && cursorOutline) {
        window.addEventListener("mousemove", (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Dot follows instantly
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Outline follows with slight delay an smooth easing via GSAP
            gsap.to(cursorOutline, {
                x: posX,
                y: posY,
                duration: 0.15,
                ease: "power2.out"
            });
        });

        // Add hover effects for interactable elements
        const interactables = document.querySelectorAll("a, button, .nav-pill, .glass-card, .retro-monitor");

        interactables.forEach(el => {
            el.addEventListener("mouseenter", () => {
                cursorOutline.style.width = "60px";
                cursorOutline.style.height = "60px";
                cursorOutline.style.backgroundColor = "rgba(255, 215, 0, 0.1)";
            });
            el.addEventListener("mouseleave", () => {
                cursorOutline.style.width = "40px";
                cursorOutline.style.height = "40px";
                cursorOutline.style.backgroundColor = "transparent";
            });
        });
    }

    // --- Interactive Eye Graphic ---
    const eye = document.querySelector(".eye");
    const pupil = document.querySelector(".pupil");

    if (eye && pupil) {
        window.addEventListener("mousemove", (e) => {
            const eyeRect = eye.getBoundingClientRect();
            const eyeCenterX = eyeRect.left + eyeRect.width / 2;
            const eyeCenterY = eyeRect.top + eyeRect.height / 2;

            const rad = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);

            // Limit pupil movement so it stays inside the eye
            const distance = Math.min(
                Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 10,
                20 // max displacement
            );

            const pupilX = Math.cos(rad) * distance;
            const pupilY = Math.sin(rad) * distance;

            gsap.to(pupil, {
                x: `${pupilX}px`,
                y: `${pupilY}px`,
                duration: 0.2,
                ease: "power2.out"
            });
        });
    }

    // --- GSAP Animations ---
    gsap.registerPlugin(ScrollTrigger);

    // Hero Entry Animation
    const heroTl = gsap.timeline();

    heroTl.from(".badge-wrapper", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    })
        .from(".hero-title", {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=0.6")
        .from(".hero-subtitle", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.8")
        .from(".hero-actions", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.6")
        .from(".eye-container", {
            scale: 0,
            rotation: 180,
            opacity: 0,
            duration: 1.2,
            ease: "back.out(1.5)"
        }, "-=1")
        .from(".floating-shape", {
            scale: 0,
            opacity: 0,
            duration: 1.5,
            stagger: 0.2,
            ease: "power2.out"
        }, "-=1.2");

    // Continuous floating animation for shapes
    gsap.to(".shape-1", {
        y: 30,
        x: -20,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
    });

    gsap.to(".shape-2", {
        y: -40,
        x: 20,
        duration: 5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
    });

    // Scroll Animations for Sections

    // Glass Cards
    gsap.utils.toArray(".glass-card").forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.1
        });
    });

    // Retro Monitors
    gsap.utils.toArray(".retro-monitor").forEach((monitor, i) => {
        gsap.from(monitor, {
            scrollTrigger: {
                trigger: monitor,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            scale: 0.9,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.2)",
            delay: i * 0.15
        });
    });

    // Section Headers
    gsap.utils.toArray(".section-header").forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    });

    // CTA Box
    gsap.from(".cta-box", {
        scrollTrigger: {
            trigger: ".cta-box",
            start: "top 85%"
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // Generic gs-reveal logic
    gsap.utils.toArray(".gs-reveal").forEach(elem => {
        gsap.from(elem, {
            scrollTrigger: {
                trigger: elem,
                start: "top 85%"
            },
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    });

});

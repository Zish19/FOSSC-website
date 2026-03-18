"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const faqs = [
  {
    question: "What do you mean by 'Open Source'?",
    answer: "Open source refers to a software development model in which the source code of a program is made freely available to the public, allowing anyone to view, modify, and distribute the code as they see fit.",
  },
  {
    question: "How do I make my first contribution to an open source project?",
    answer: "One common approach is to look for 'good first issue' or 'beginner-friendly' labels on open issues, which can provide a good entry point for new contributors. Feel free to contact us and we'll help you out as soon as we can.",
  },
  {
    question: "Can I contribute to an open source project even if I am not a developer?",
    answer: "Yes, open source projects often need help with documentation, testing, design, and other non-coding tasks. Check the project's documentation or contact the maintainers to see how you can contribute.",
  },
  {
    question: "What is the open source community?",
    answer: "The open source community is a group of individuals and organizations that collaborate on the development and maintenance of open source software. The community is typically characterized by a spirit of collaboration, transparency, and openness.",
  },
  {
    question: "What are some benefits of being part of the open source community?",
    answer: "The opportunity to collaborate with like-minded individuals, build your skills and experience in software development, and make meaningful contributions to important software projects. Join us now.",
  },
  {
    question: "How can I get involved in the open source community?",
    answer: "There are many ways to get involved in the open source community, including contributing to open source projects, attending events and conferences, participating in online forums and discussion groups, and joining open source communities on social media platforms.",
  },
  {
    question: "What are some ways to contribute to open source projects?",
    answer: "Some ways to contribute to open source projects include submitting bug reports, suggesting new features, creating documentation, writing code, improving existing code, providing feedback on issues, or helping with community management.",
  },
  {
    question: "What is a pull request in open source contribution?",
    answer: "A pull request is a proposed change to the codebase of an open source project that is submitted by a contributor for review and potential inclusion in the project.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (typeof window === "undefined") return;

    (gsap.utils.toArray(".faq-item") as HTMLElement[]).forEach((elem: HTMLElement, i: number) => {
      gsap.fromTo(
        elem,
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: elem,
            start: "top 90%",
          },
          duration: 0.6,
          y: 0,
          opacity: 1,
          ease: "power2.out",
          delay: i * 0.05,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  useEffect(() => {
    contentRefs.current.forEach((el, idx) => {
      if (el) {
        if (openIndex === idx) {
          gsap.to(el, { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" });
        } else {
          gsap.to(el, { height: 0, opacity: 0, duration: 0.3, ease: "power2.out" });
        }
      }
    });
  }, [openIndex]);

  return (
    <>
      <section
        className="page-header"
        style={{ paddingTop: "200px", paddingBottom: "80px", textAlign: "center" }}
      >
        <div className="badge-wrapper">
          <span className="badge">Support & Info</span>
        </div>
        <h1
          className="page-title"
          style={{
            fontSize: "clamp(3rem, 6vw, 4.5rem)",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Frequently Asked <span className="italic-serif highlight-yellow">Questions</span>
        </h1>
        <p
          style={{
            color: "var(--c-text-muted)",
            fontSize: "1.25rem",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          Find answers to common questions about open source and getting started with contributions.
        </p>
      </section>

      <section
        className="faq-container"
        style={{
          maxWidth: "800px",
          margin: "0 auto 150px auto",
          padding: "0 2rem",
        }}
      >
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item"
            style={{
              marginBottom: "1rem",
              background: "var(--c-dark-sec)",
              border: "1px solid rgba(0, 255, 102, 0.1)",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              style={{
                width: "100%",
                padding: "1.5rem 2rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "transparent",
                border: "none",
                color: "var(--c-light)",
                fontSize: "1.1rem",
                fontWeight: 600,
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              {faq.question}
              <span
                style={{
                  display: "inline-block",
                  transition: "transform 0.3s ease",
                  transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  color: "var(--c-primary)",
                  fontSize: "1.5rem",
                }}
              >
                ↓
              </span>
            </button>
            <div
              ref={(el) => {
                contentRefs.current[index] = el;
              }}
              style={{
                height: 0,
                opacity: 0,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "0 2rem 1.5rem 2rem",
                  color: "var(--c-text-muted)",
                  lineHeight: 1.6,
                }}
              >
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

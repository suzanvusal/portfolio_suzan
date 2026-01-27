"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";
import { motion, AnimatePresence } from "framer-motion";

const syne = Syne({ subsets: ["latin"] });

const carouselSlides = [
  {
    title: "Welcome to my Professional Hub",
    body:
      "Hello! I'm Sujan Bhusal, a Cloud Engineer with 5+ years of experience designing, implementing, and managing scalable cloud infrastructure. I focus on building systems that are reliable, secure, and easy to operate at scale.",
  },
  {
    title: "Cloud Engineer",
    body:
      "I specialize in AWS and Google Cloud, designing cloud-native architectures that emphasize scalability, security, and cost optimization. I enjoy turning complex infrastructure into simple, repeatable patterns.",
  },
  {
    title: "DevOps Enthusiast",
    body:
      "I work extensively with CI/CD pipelines, containerization, and automation using Docker, Kubernetes, Terraform, and GitHub Actions to help teams ship faster with confidence.",
  },
];

export default function About() {
  const { setSectionInView } = useView();
  const [index, setIndex] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-16 md:pt-[150px]" id="about">
      {/* TITLE */}
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        I orchestrate seamless cloud infrastructures
      </AnimatedTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-10 mt-8">
        {/* LEFT: MAIN CONTENT */}
        <div className="grid grid-cols-1 gap-6 text-white/80 text-xl md:text-2xl">
          {/* CAROUSEL */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <AnimatedTitle
                wordSpace={"mr-[0.3ch]"}
                charSpace={"mr-[0.001em]"}
                className="font-bold antialiased text-2xl md:text-3xl mb-4"
              >
                {carouselSlides[index].title}
              </AnimatedTitle>

              <AnimatedBody className="leading-[34px] md:leading-[39px]">
                {carouselSlides[index].body}
              </AnimatedBody>
            </motion.div>
          </AnimatePresence>

          {/* CAROUSEL CONTROLS */}
          <div className="flex gap-4 mt-2">
            <button
              onClick={() =>
                setIndex(
                  (index - 1 + carouselSlides.length) %
                    carouselSlides.length
                )
              }
              className="px-4 py-2 rounded-md border border-white/20 text-sm hover:bg-white/10 transition"
            >
              Prev
            </button>
            <button
              onClick={() =>
                setIndex((index + 1) % carouselSlides.length)
              }
              className="px-4 py-2 rounded-md border border-white/20 text-sm hover:bg-white/10 transition"
            >
              Next
            </button>
          </div>

          {/* STATIC ABOUT TEXT */}
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            Since diving into DevOps practices in 2019, I&apos;ve continuously
            evolved my skillset across cloud platforms, automation tooling, and
            security best practices. I focus on building production-ready
            systems that scale reliably and remain easy to maintain.
          </AnimatedBody>

          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            Every infrastructure challenge is an opportunity to simplify,
            automate, and improve. I care deeply about observability,
            repeatability, and enabling teams to ship software confidently.
            Want to know more? Here&apos;s{" "}
            <Link
              className="underline underline-offset-4"
              href="https://drive.google.com/file/d/link-to-your-resume"
            >
              my resume
            </Link>
            .
          </AnimatedBody>
        </div>

        {/* RIGHT: SKILL STACK */}
        <div className="grid grid-cols-1 gap-6">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Cloud & Infrastructure
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              AWS, Azure, Google Cloud, Docker, Kubernetes, Terraform, Ansible,
              Linux, Shell Scripting, Infrastructure as Code (IaC).
            </AnimatedBody>
          </div>

          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              CI/CD & Automation
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              GitHub Actions, Jenkins, GitLab CI, ArgoCD, Helm, Python, Bash,
              Configuration Management.
            </AnimatedBody>
          </div>

          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Monitoring & Security
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Prometheus, Grafana, ELK Stack, CloudWatch, Vault, IAM, Security
              Best Practices, SSL/TLS.
            </AnimatedBody>
          </div>
        </div>
      </div>
    </section>
  );
}

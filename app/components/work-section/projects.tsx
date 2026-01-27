import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import MetricsCard from "./MetricsCard";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { setSectionInView } = useView();

  const projects = [
    // ⭐ FEATURED PROJECT (TOP)
    {
      title: "Terraform Production Lab",
      about:
        "Designed and built a production-style AWS infrastructure platform using Terraform, following real-world DevOps best practices. The project features modular Terraform design, remote state management with S3 and DynamoDB locking, multi-environment support (dev, stage, prod), Auto Scaling Groups behind an Application Load Balancer, CloudWatch logging via EC2 user data, cost governance with AWS Budgets, and CI/CD pipelines using GitHub Actions with manual approval gates. Built incrementally with daily contributions to simulate real infrastructure evolution.",
      stack: [
        "terraform",
        "aws",
        "ec2",
        "autoscaling",
        "alb",
        "cloudwatch",
        "iam",
        "github actions",
        "ci/cd",
        "infrastructure as code",
      ],
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      gitLink: "https://github.com/suzanvusal/Terraform-production-lab",
    },

    {
      title: "Cloud Migration for E-commerce Platform",
      about:
        "Led the migration of a monolithic e-commerce platform to AWS, streamlining infrastructure and reducing downtime by 30%. Successfully implemented cloud-native solutions to enhance system scalability, reliability, and performance. Coordinated with cross-functional teams to ensure a seamless transition, optimizing application performance and reducing operational costs. Leveraged AWS services such as EC2, S3, and RDS to improve data handling, storage, and processing efficiency.",
      stack: ["aws", "ec2", "s3", "rds", "cloud migration"],
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      liveLink: "https://example.com",
    },
    {
      title: "CI/CD Pipeline Automation",
      about:
        "Designed and implemented an efficient CI/CD pipeline using Jenkins and Docker to automate the software delivery process, reducing deployment time by 50%. Integrated automated testing, continuous integration, and continuous deployment into the workflow, improving code quality and accelerating release cycles. Optimized containerization using Docker for consistent and scalable deployment across multiple environments.",
      stack: ["jenkins", "docker", "ci/cd"],
      img: "https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?w=800&h=600&fit=crop",
      gitLink: "https://github.com/your-repo",
    },
    {
      title: "Serverless Data Processing",
      about:
        "Developed a highly scalable serverless data processing system using AWS Lambda and S3, handling millions of records daily with minimal latency. Implemented event-driven workflows to process and analyze data efficiently while minimizing operational overhead.",
      stack: ["aws lambda", "s3", "serverless"],
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    },
    {
      title: "Centralized Logging & Monitoring",
      about:
        "Designed and implemented a centralized logging and monitoring solution using AWS CloudTrail, CloudWatch, and Splunk to provide real-time visibility into system performance and security. Enabled proactive alerting, auditing, and incident response.",
      stack: ["cloudwatch", "cloudtrail", "splunk"],
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
      title: "Effective Heart Disease Prediction Using Hybrid ML Techniques",
      about:
        "Developed a hybrid machine learning model for cardiovascular disease prediction using ensemble techniques such as Random Forest, KNN, and Decision Trees. Improved prediction accuracy through model voting and feature preprocessing.",
      stack: [
        "python",
        "machine learning",
        "scikit-learn",
        "random forest",
        "knn",
      ],
      img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=600&fit=crop",
      gitLink: "https://github.com/",
    },
    {
      title: "Full-Stack E-commerce Application (Internship Project)",
      about:
        "Developed a full-stack e-commerce web application using React, Node.js, Express, and MongoDB. Implemented secure authentication, RESTful APIs, and a scalable backend architecture.",
      stack: [
        "react",
        "node.js",
        "express",
        "mongodb",
        "full stack",
      ],
      img: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      gitLink: "https://github.com",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("projects");
  }, [inView, setSectionInView]);

  return (
    <section
      id="projects"
      ref={ref}
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
    >
      <Title>Projects</Title>

      {/* Metrics Dashboard */}
      <MetricsCard />

      {projects.map((project, index) => (
        <FolioCard
          key={index}
          title={project.title}
          img={project.img}
          about={project.about}
          stack={project.stack}
          gitLink={project.gitLink}
          liveLink={project.liveLink}
        />
      ))}
    </section>
  );
}

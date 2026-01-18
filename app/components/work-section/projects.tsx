import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import MetricsCard from "./MetricsCard"; // Import the new component
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { setSectionInView } = useView();

  const projects = [
    {
      title: "Cloud Migration for E-commerce Platform",
      about:
        "Led the migration of a monolithic e-commerce platform to AWS, streamlining infrastructure and reducing downtime by 30%. Successfully implemented cloud-native solutions to enhance system scalability, reliability, and performance. Coordinated with cross-functional teams to ensure a seamless transition, optimizing application performance and reducing operational costs. Leveraged AWS services such as EC2, S3, and RDS to improve data handling, storage, and processing efficiency.",
      stack: ["aws", "ec2", "s3", "rds", "cloud migration"],
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      liveLink: "https://example.com", // replace if available
    },
    {
      title: "CI/CD Pipeline Automation",
      about:
        "Designed and implemented an efficient CI/CD pipeline using Jenkins and Docker to automate the software delivery process, reducing deployment time by 50%. Integrated automated testing, continuous integration, and continuous deployment into the workflow, improving code quality and accelerating release cycles. Optimized containerization using Docker for consistent and scalable deployment across multiple environments, ensuring smooth transitions from development to production. Collaborated with development and operations teams to ensure seamless integration and faster delivery of new features.",
      stack: ["jenkins", "docker", "ci/cd"],
      img: "https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?w=800&h=600&fit=crop",
      gitLink: "https://github.com/your-repo",
    },
    {
      title: "Serverless Data Processing",
      about:
        "Developed a highly scalable serverless data processing system using AWS Lambda and S3, handling millions of records daily with minimal latency. Leveraged AWS Lambda to automatically process and analyze incoming data, ensuring efficient and cost-effective operations without the need for dedicated server infrastructure. Implemented S3 for secure and scalable data storage, while utilizing event-driven triggers to initiate processing workflows. Optimized the system to handle large volumes of data seamlessly, reducing operational overhead and improving data processing speed and reliability.",
      stack: ["aws lambda", "s3", "serverless"],
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    },
    {
      title: "Centralized Logging & Monitoring",
      about:
        "Designed and implemented a centralized logging and monitoring solution using AWS CloudTrail, CloudWatch, and Splunk to provide real-time visibility into system performance and security. Integrated CloudTrail for comprehensive logging of API calls across AWS services, ensuring full auditability and compliance. Utilized CloudWatch for monitoring resource utilization and application performance, setting up custom alarms and automated responses to incidents. Integrated Splunk for advanced data analysis and visualization, enabling proactive troubleshooting, improving system reliability, and ensuring the timely detection of potential security threats.",
      stack: ["cloudwatch", "cloudtrail", "splunk"],
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
      title:
        "Effective Heart Disease Prediction Using Hybrid ML Techniques",
      about:
        "Developed a hybrid machine learning model for Cardio-vascular disease prediction using Machine learning algorithms like Linear Regression, Decision Trees, Random Forest, and KNN. The dataset, sourced from Kaggle, was preprocessed and scaled before training models. A Voting Classifier was implemented to combine predictions, enhancing accuracy. The project demonstrated the effectiveness of ensemble methods in healthcare prediction.",
      stack: ["python", "machine learning", "scikit-learn", "linear regression", "decision trees", "random forest", "knn"],
      img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=600&fit=crop",
      gitLink: "https://github.com/",
    },
    {
      title: "Full-Stack E-commerce Application (Internship Project)",
      about:
        "Developed a full-stack e-commerce web application as part of an internship program. Built a responsive frontend using React, enabling users to browse products, manage carts, and place orders. Implemented a RESTful backend with Node.js and Express to handle authentication, product management, and order processing. Used MongoDB for efficient data storage and retrieval. Focused on clean API design, secure user authentication, and scalable architecture.",
      stack: [
        "react",
        "node.js",
        "express",
        "mongodb",
        "full stack",
        "e-commerce",
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

      {/* Add Metrics Dashboard here */}
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
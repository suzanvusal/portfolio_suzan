import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";

export default function Works() {
  const { setSectionInView } = useView();

  const experiences = [
    {
      title: "Cloud Engineer at Treadmill Factory Inc.",
      about:
        "📍 Toronto, CA | 🕒 Nov 2021 – Present\n\n" +
        "Led enterprise cloud infrastructure initiatives, designing AWS Organizations and Control Tower for scalable multi-account architectures. Spearheaded containerization and Kubernetes deployments with advanced auto-scaling. Implemented comprehensive security, compliance, and DevOps automation across cloud environments.\n\n" +
        "Key Achievements:\n" +
        "• 🚀 Containerized and deployed fitness coach application on Kubernetes with HPA and VPA auto-scaling, supporting both stateful and stateless workloads\n" +
        "• 🏗️ Designed and implemented AWS Organizations and Control Tower for enterprise-scale multi-account structures\n" +
        "• 🔒 Developed Service Control Policies (SCPs) ensuring security and compliance across all accounts\n" +
        "• 🛡️ Integrated comprehensive AWS Security services: AWS Config, CloudTrail, GuardDuty, and Security Hub\n" +
        "• ⚙️ Automated infrastructure provisioning using Terraform and AWS CloudFormation with Infrastructure as Code best practices\n" +
        "• 🔄 Designed CI/CD pipelines with GitHub Actions and Jenkins for seamless multi-account deployments\n" +
        "• 📊 Implemented centralized logging and monitoring using AWS CloudTrail, CloudWatch, and Splunk for real-time observability\n" +
        "• 🔐 Hardened web applications with AWS WAF and Azure Application Gateway, reducing security vulnerabilities\n" +
        "• 💰 Conducted performance optimization and cost management using AWS Cost Explorer and Budgets, achieving significant cost savings",
      stack: [
        "kubernetes",
        "docker",
        "aws",
        "terraform",
        "cloudformation",
        "github actions",
        "jenkins",
        "cloudwatch",
        "cloudtrail",
        "guardduty",
        "security hub",
        "splunk",
        "aws waf",
        "azure application gateway",
        "aws organizations",
        "control tower",
        "hpa",
        "vpa",
      ],
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    },
    {
      title: "Cloud Infrastructure Engineer at Mphasis Tech",
      about:
        "📍 Kathmandu, NP | 🕒 June 2019 – Oct 2021\n\n" +
        "Architected and implemented secure, scalable cloud infrastructures using AWS services. Drove automation initiatives and established robust CI/CD pipelines for infrastructure deployment. Led cloud migration projects and ML operations automation.\n\n" +
        "Key Achievements:\n" +
        "• ☁️ Designed and implemented secure, scalable cloud architectures using AWS best practices\n" +
        "• 🤖 Automated infrastructure provisioning using Terraform and AWS CloudFormation, reducing deployment time by 70%\n" +
        "• 📈 Set up centralized logging and monitoring using ELK Stack and AWS CloudWatch for enhanced observability\n" +
        "• 🔄 Established CI/CD pipelines using Jenkins for automated infrastructure deployment and testing\n" +
        "• 🚀 Successfully migrated servers and databases from on-premises to AWS using AWS Migration Services\n" +
        "• 🧠 Automated ML model deployment using Kubeflow, MLflow, and SageMaker Pipelines for streamlined MLOps",
      stack: [
        "aws",
        "terraform",
        "cloudformation",
        "jenkins",
        "elk stack",
        "cloudwatch",
        "aws migration services",
        "kubernetes",
        "kubeflow",
        "mlflow",
        "sagemaker",
      ],
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-16 md:pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Experience</Title>

      {experiences.map((exp, index) => (
        <FolioCard
          key={index}
          img={exp.img}
          title={exp.title}
          about={exp.about}
          stack={exp.stack}
        />
      ))}
    </section>
  );
}
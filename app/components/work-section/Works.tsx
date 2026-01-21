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
        "Designed and implemented AWS Organizations and Control Tower for scalable multi-account structures. Developed Service Control Policies (SCPs) for security and compliance. Integrated AWS Security services like AWS Config, CloudTrail, GuardDuty, and Security Hub.\n\n" +
        "Responsibilities:\n" +
        "• Designed and implemented AWS Organizations and Control Tower for scalable multi-account structures\n" +
        "• Developed Service Control Policies (SCPs) for security and compliance\n" +
        "• Integrated AWS Security services like AWS Config, CloudTrail, GuardDuty, and Security Hub\n" +
        "• Automated infrastructure provisioning using Terraform and AWS CloudFormation\n" +
        "• Designed CI/CD pipelines with GitHub Actions and Jenkins for multi-account deployments\n" +
        "• Implemented centralized logging and monitoring using AWS CloudTrail, CloudWatch, and Splunk\n" +
        "• Hardened web applications with AWS WAF and Azure Application Gateway\n" +
        "• Conducted performance optimization and cost management using AWS Cost Explorer and Budgets\n" +
        "• Containerized a fitness coach application and deployed it on Kubernetes with HPA and VPA auto-scaling, supporting both stateful and stateless workloads",
      stack: [
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
        "kubernetes",
        "hpa",
        "vpa",
        "docker",
      ],
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    },
    {
      title: "Cloud Infrastructure Engineer at Mphasis Tech",
      about:
        "📍 Kathmandu, NP | 🕒 June 2019 – Oct 2021\n\n" +
        "Designed and implemented secure, scalable cloud architectures using AWS services. Automated infrastructure provisioning and established CI/CD pipelines.\n\n" +
        "Responsibilities:\n" +
        "• Designed and implemented secure, scalable cloud architectures using AWS services\n" +
        "• Automated infrastructure provisioning using Terraform and AWS CloudFormation\n" +
        "• Set up centralized logging using ELK Stack and AWS CloudWatch\n" +
        "• Established CI/CD pipelines using Jenkins for infrastructure deployment\n" +
        "• Migrated servers and databases from on-premises to AWS using AWS Migration Services\n" +
        "• Automated ML model deployment using Kubeflow, MLflow, and SageMaker Pipelines",
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
    }
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

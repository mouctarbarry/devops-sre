export type Category =
  | "concepts"
  | "conteneurisation"
  | "iac"
  | "cloud"
  | "cicd"
  | "monitoring"
  | "scripting";

export interface CategoryInfo {
  label: string;
  description: string;
  color: string;
}

export const CATEGORIES: Record<Category, CategoryInfo> = {
  concepts: {
    label: "Concepts",
    description: "Philosophie DevOps, principes SRE et design CI/CD",
    color: "bg-blue-500",
  },
  conteneurisation: {
    label: "Conteneurisation",
    description: "Docker, Kubernetes et orchestration de conteneurs",
    color: "bg-purple-500",
  },
  iac: {
    label: "Infrastructure as Code",
    description: "Terraform, Ansible et automatisation d'infrastructure",
    color: "bg-amber-500",
  },
  cloud: {
    label: "Cloud",
    description: "AWS, Azure et architecture cloud",
    color: "bg-cyan-500",
  },
  cicd: {
    label: "CI/CD",
    description: "GitHub Actions, Jenkins, GitLab CI/CD et déploiement continu",
    color: "bg-green-500",
  },
  monitoring: {
    label: "Monitoring",
    description: "Prometheus, Grafana et observabilité",
    color: "bg-rose-500",
  },
  scripting: {
    label: "Scripting & Outils",
    description: "Shell/Bash, Git et outils quotidiens",
    color: "bg-teal-500",
  },
};

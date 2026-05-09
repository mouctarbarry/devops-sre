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
}

export const CATEGORIES: Record<Category, CategoryInfo> = {
  concepts: {
    label: "Concepts",
    description: "Philosophie DevOps, principes SRE et design CI/CD",
  },
  conteneurisation: {
    label: "Conteneurisation",
    description: "Docker, Kubernetes et orchestration de conteneurs",
  },
  iac: {
    label: "Infrastructure as Code",
    description: "Terraform, Ansible et automatisation d'infrastructure",
  },
  cloud: {
    label: "Cloud",
    description: "AWS, Azure et architecture cloud",
  },
  cicd: {
    label: "CI/CD",
    description: "GitHub Actions, Jenkins, GitLab CI/CD et déploiement continu",
  },
  monitoring: {
    label: "Monitoring",
    description: "Prometheus, Grafana et observabilité",
  },
  scripting: {
    label: "Scripting & Outils",
    description: "Shell/Bash, Git et outils quotidiens",
  },
};

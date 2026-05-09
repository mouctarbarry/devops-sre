export type Category =
  | 'concepts'
  | 'conteneurisation'
  | 'iac'
  | 'cloud'
  | 'cicd'
  | 'monitoring'
  | 'scripting';

export interface CategoryInfo {
  label: string;
  icon: string;
  description: string;
}

export const CATEGORIES: Record<Category, CategoryInfo> = {
  concepts: {
    label: 'Concepts',
    icon: '💡',
    description: 'Philosophie DevOps, principes SRE et design CI/CD',
  },
  conteneurisation: {
    label: 'Conteneurisation',
    icon: '📦',
    description: 'Docker, Kubernetes et orchestration de conteneurs',
  },
  iac: {
    label: 'Infrastructure as Code',
    icon: '🏗️',
    description: 'Terraform, Ansible et automatisation infrastructure',
  },
  cloud: {
    label: 'Cloud',
    icon: '☁️',
    description: 'AWS services et architecture cloud',
  },
  cicd: {
    label: 'CI/CD',
    icon: '🔄',
    description: 'GitHub Actions, pipelines et deploiement continu',
  },
  monitoring: {
    label: 'Monitoring',
    icon: '📊',
    description: 'Prometheus, Grafana et observabilite',
  },
  scripting: {
    label: 'Scripting & Outils',
    icon: '⚙️',
    description: 'Shell/Bash, Git et outils quotidiens',
  },
};

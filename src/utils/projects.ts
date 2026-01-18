export interface ProjectData {
  name: string;
  description: string;
  url: string;
  icon: string;
  color: string;
}

const PROJECTS: ProjectData[] = [
  {
    name: "Supascan",
    description: "Automated security scanner for Supabase databases. Detects exposed data, analyzes Row Level Security (RLS) policies, tests RPC functions, and generates comprehensive security reports.",
    url: "https://github.com/abhishekg999/supascan",
    icon: "Ss",
    color: "#3ECF8E",
  },
  {
    name: "CLI Toolkit",
    description: "Day to day terminal utilities for modern developers.",
    url: "https://cli.ahh.bet/",
    icon: "Cl",
    color: "#000",
  },
  {
    name: "Secret",
    description: "Encrypted and secure one-time-secret sharing service.",
    url: "https://secret.ahh.bet/",
    icon: "Sc",
    color: "#555",
  },
  {
    name: "Ahh Utils",
    description:
      "Plenty of developer utilities for everything a developer needs.",
    url: "https://utils.ahh.bet/",
    icon: "Au",
    color: "#14A249",
  },
  {
    name: "Markdown",
    description:
      "A simple and clean markdown space, no clutter, works offline.",
    url: "https://markdown.ahh.bet/",
    icon: "Md",
    color: "#DD88AB",
  },
] as const;

export async function getProjectsData(): Promise<ProjectData[]> {
  return PROJECTS;
}

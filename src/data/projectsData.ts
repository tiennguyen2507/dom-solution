import projectsJson from "./projectsData.json";

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  categoryEn: string;
  year: string;
  client: string;
  timeline: string;
  budget: string;
  metric: string;
  highlight: boolean;
  image: string;
  gallery: string[];
  tech: string[];
  summaryVi: string;
  summaryEn: string;
  challengeVi: string;
  solutionVi: string;
  deliverablesVi: string[];
  deliverablesEn: string[];
}

export const projectsData: ProjectItem[] = projectsJson as ProjectItem[];

export function getAllProjects(): ProjectItem[] {
  return projectsData;
}

export function getFeaturedProjects(): ProjectItem[] {
  return projectsData.filter((p) => p.highlight);
}

export function getProjectById(id: string): ProjectItem | undefined {
  return projectsData.find((p) => p.id === id);
}

export function getRelatedProjects(currentId: string, limit = 4): ProjectItem[] {
  return projectsData.filter((p) => p.id !== currentId).slice(0, limit);
}

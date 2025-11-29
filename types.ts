export interface Job {
  id: string;
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface Skill {
  category: string;
  items: string[];
  level: number; // 0-100 for charts
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
}

export interface Project {
  title: string;
  category: "Campaign" | "Website" | "Analytics";
  description: string;
  stats: string;
  image: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

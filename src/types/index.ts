// Personal Information Types
export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  location: string;
  availability: string;
  email: string;
  phone: string;
  resumeUrl: string;
  profileImage: string;
  roles: string[];
  social: SocialLinks;
  about: AboutInfo;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  instagram: string;
  email: string;
}

export interface AboutInfo {
  description: string;
  highlights: string[];
  interests: string[];
}

// Experience Types
export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  type: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
  projects?: ExperienceProject[];
  mentor?: string;
}

export interface ExperienceProject {
  name: string;
  description: string;
  tech: string[];
}

// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string[];
  featured: boolean;
  liveUrl: string;
  githubUrl: string;
  highlights: string[];
  status: 'completed' | 'in-progress' | 'planned';
  date: string;
}

// Skills Types
export interface SkillsData {
  categories: SkillCategory[];
  softSkills: SoftSkill[];
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

export interface SoftSkill {
  name: string;
  description: string;
  icon: string;
}

// Education Types
export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  gpa: string;
  description: string;
  achievements: string[];
  coursework?: string[];
  projects?: EducationProject[];
}

export interface EducationProject {
  name: string;
  description: string;
  tech: string[];
}

// Certification Types
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  credentialUrl: string;
  skills: string[];
  image: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Blog Types
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  readingTime: string;
  coverImage: string;
  content: string;
}

export interface BlogMetadata {
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  coverImage: string;
}

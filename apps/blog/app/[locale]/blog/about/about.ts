export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socialLinks ?: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}

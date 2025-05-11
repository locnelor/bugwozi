
import { prisma } from "@pkg/database";
import About, { TeamMember } from "./about"
async function getTeamMembers() {
  const teamMembers: TeamMember[] = [
    {
      name: "小沐禾",
      role: "Founder & Lead Developer",
      bio: "Alex has over 10 years of experience in web development and is passionate about sharing knowledge through writing. He specializes in React and Next.js.",
      avatar: "https://xsgames.co/randomusers/avatar.php?g=male&key=1",
      socialLinks: {
        github: "https://github.com/alexjohnson",
        twitter: "https://twitter.com/alexjohnson",
        linkedin: "https://linkedin.com/in/alexjohnson"
      }
    },
    {
      name: "Sarah Williams",
      role: "UI/UX Designer & Writer",
      bio: "Sarah brings creative design solutions to complex problems. With a background in both design and development, she writes about CSS, design systems, and user experience.",
      avatar: "https://xsgames.co/randomusers/avatar.php?g=female&key=2",
      socialLinks: {
        github: "https://github.com/sarahwilliams",
        twitter: "https://twitter.com/sarahwilliams",
        linkedin: "https://linkedin.com/in/sarahwilliams"
      }
    },
    {
      name: "David Kim",
      role: "Technical Editor",
      bio: "David ensures all technical content is accurate and up-to-date. His specialties include TypeScript, backend development, and performance optimization.",
      avatar: "https://xsgames.co/randomusers/avatar.php?g=male&key=3",
      socialLinks: {
        github: "https://github.com/davidkim",
        linkedin: "https://linkedin.com/in/davidkim"
      }
    },
    {
      name: "Emily Chen",
      role: "Content Strategist",
      bio: "Emily oversees the content roadmap and ensures our articles meet the needs of our audience. She has a background in technical writing and marketing.",
      avatar: "https://xsgames.co/randomusers/avatar.php?g=female&key=4",
      socialLinks: {
        twitter: "https://twitter.com/emilychen",
        linkedin: "https://linkedin.com/in/emilychen"
      }
    }
  ];

  return teamMembers;
}

async function getBlogHistory() {
  // In a real app, this could be stored in the database
  return [
    {
      date: "June 2021",
      title: "Blog Launch",
      description: "We launched with just 5 articles and a focus on React development."
    },
    {
      date: "December 2021",
      title: "Reached 10,000 Monthly Readers",
      description: "Our audience grew as we expanded into more frontend topics."
    },
    {
      date: "March 2022",
      title: "Added Comment System",
      description: "Implemented a new comment system to foster community engagement."
    },
    {
      date: "August 2022",
      title: "Expanded to Backend Topics",
      description: "Started covering Node.js, databases, and API design."
    },
    {
      date: "January 2023",
      title: "Redesigned Blog",
      description: "Launched a new responsive design with improved navigation and readability."
    },
    {
      date: "April 2023",
      title: "Started Weekly Newsletter",
      description: "Began delivering curated content directly to subscribers' inboxes."
    },
    {
      date: "Present",
      title: "Growing Community",
      description: "Continuing to expand our content library and community features."
    }
  ];
}
async function getBlogStats() {
  const articleCount = await prisma.blog_posts.count();
  const commentCount = await prisma.blog_comments.count({
    where: {
      status: true
    }
  });
  const categoryCount = await prisma.blog_categories.count();
  const tagCount = await prisma.blog_tag.count();
  return {
    articles: articleCount,
    comments: commentCount,
    categories: categoryCount,
    tags: tagCount
  };
}

const AboutPage = async () => {
  // Fetch data
  const data = await Promise.all([
    getTeamMembers(),
    getBlogHistory(),
    getBlogStats()
  ]);

  return (
    <About data={data} />
  )
}
export default AboutPage
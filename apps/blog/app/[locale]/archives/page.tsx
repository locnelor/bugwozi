import { Card, List, Tag, Radio, Timeline, Empty, Divider } from "antd";
import {
  CalendarOutlined,
  CommentOutlined,
  TagsOutlined,
  FolderOutlined
} from "@ant-design/icons";
import Link from "next/link";
import { prisma } from "@pkg/database";
// import ArchiveViewToggle from "../../components/ArchiveViewToggle";

// Server-side function to fetch archive data
async function getArchiveData() {
  try {
    const posts = await prisma.blog_posts.findMany({
      where: {
        status: true,
        published: true
      },
      orderBy: {
        publishedAt: 'desc'
      },
      include: {
        categories: true,
        tags: {
          include: {
            tag: true
          }
        },
        comments: true
      }
    });

    // Organize posts by year and month
    const archiveData: Record<string, Record<string, any[]>> = {};

    posts.forEach(post => {
      if (!post.publishedAt) return;

      const date = new Date(post.publishedAt);
      const year = date.getFullYear().toString();
      const month = date.toLocaleString('default', { month: 'long' });

      if (!archiveData[year]) {
        archiveData[year] = {};
      }

      if (!archiveData[year][month]) {
        archiveData[year][month] = [];
      }

      archiveData[year][month].push({
        id: post.uid,
        title: post.title,
        date: date.toISOString().split('T')[0],
        category: post.categories?.name || 'Uncategorized',
        tags: post.tags.map(tag => tag.tag.name),
        excerpt: post.excerpt || '',
        comments: post.comments.length
      });
    });

    return archiveData;
  } catch (error) {
    console.error("Error fetching archive data:", error);

    // Return mock data if database query fails
    return {
      "2023": {
        "August": [
          {
            id: "6",
            title: "Building a Blog with Next.js and Ant Design",
            date: "2023-08-15",
            category: "Next.js",
            tags: ["Next.js", "Ant Design", "Blog"],
            excerpt: "A guide on how to build a beautiful blog using Next.js and Ant Design.",
            comments: 2,
          }
        ],
        "July": [
          {
            id: "3",
            title: "Understanding TypeScript Generics",
            date: "2023-07-10",
            category: "TypeScript",
            tags: ["TypeScript", "JavaScript", "Programming"],
            excerpt: "A comprehensive guide to using generics in TypeScript.",
            comments: 3,
          },
          {
            id: "4",
            title: "State Management in React",
            date: "2023-07-05",
            category: "React",
            tags: ["React", "State Management", "JavaScript"],
            excerpt: "Comparing different state management approaches in React applications.",
            comments: 7,
          }
        ],
        "June": [
          {
            id: "2",
            title: "Tailwind CSS Best Practices",
            date: "2023-06-20",
            category: "CSS",
            tags: ["Tailwind", "CSS", "Styling"],
            excerpt: "Discover the most efficient ways to use Tailwind CSS in your projects.",
            comments: 8,
          }
        ],
        "May": [
          {
            id: "1",
            title: "Getting Started with Next.js",
            date: "2023-05-15",
            category: "Programming",
            tags: ["Next.js", "React", "Web Development"],
            excerpt: "Learn how to set up a Next.js project and explore its key features.",
            comments: 5,
          }
        ]
      },
      "2022": {
        "December": [
          {
            id: "5",
            title: "Year in Review: Web Development Trends",
            date: "2022-12-28",
            category: "Web Development",
            tags: ["Web Dev", "Trends", "Year Review"],
            excerpt: "Looking back at the most important web development trends of 2022.",
            comments: 10,
          }
        ]
      }
    };
  }
}

// Helper function to flatten archive data for timeline view
function flattenArchiveData(archiveData: Record<string, Record<string, any[]>>) {
  return Object.entries(archiveData).flatMap(([year, months]) =>
    Object.entries(months).flatMap(([month, posts]) =>
      posts.map(post => ({
        ...post,
        yearMonth: `${year} ${month}`
      }))
    )
  );
}

export default async function ArchivesPage() {
  // Fetch archive data
  const archiveData = await getArchiveData();

  // Flatten archive data for timeline view - will be used by client component
  const timelineItems = flattenArchiveData(archiveData);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Archives</h1>
        </div>

        {/* <ArchiveViewToggle 
          archiveData={archiveData}
          timelineItems={timelineItems}
        /> */}
      </div>
    </div>
  );
}
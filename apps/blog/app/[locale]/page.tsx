import { Card, Tag, Divider } from "antd";
import {
  CommentOutlined,
  LinkOutlined,
  TagsOutlined,
  FolderOutlined,
} from "@ant-design/icons";
import { Link } from "#/i18n/navigation";
import { prisma } from "@pkg/database";
import HomePageTabs from "../../components/HomePageTabs";

// Server-side data fetching function
async function getArticles() {
  try {
    const articles = await prisma.blog_posts.findMany({
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
      },
      take: 5
    });

    return articles.map(article => ({
      id: article.uid,
      title: article.title,
      date: article.publishedAt ? new Date(article.publishedAt).toISOString().split('T')[0] : '',
      excerpt: article.excerpt || '',
      category: article.categories?.name || 'Uncategorized',
      tags: article.tags.map(tag => tag.tag.name),
      comments: article.comments.length,
    }));
  } catch (error) {
    console.error("Error fetching articles:", error);
    // Return mock data if database query fails
    return [
    ]
  }
}

async function getAnnouncements() {
  try {
    const announcements = await prisma.blog_announcements.findMany({
      where: {
        status: true
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 3
    });

    return announcements.map(announcement => ({
      id: announcement.uid,
      title: announcement.title,
      date: announcement.createdAt ? new Date(announcement.createdAt).toISOString().split('T')[0] : '',
      content: announcement.content
    }));
  } catch (error) {
    console.error("Error fetching announcements:", error);
    // Return mock data if database query fails
    return [];
  }
}

// Get categories from the database
async function getCategories() {
  try {
    const categories = await prisma.blog_categories.findMany({
      include: {
        _count: {
          select: {
            posts: true
          }
        }
      }
    });

    return categories.map(category => ({
      name: category.name,
      count: category._count.posts
    }));
  } catch (error) {
    console.error("Error fetching categories:", error);
    // Return mock data if database query fails
    return [];
  }
}

// Get tags from the database
async function getTags() {
  try {
    const tags = await prisma.blog_tag.findMany({
      include: {
        _count: {
          select: {
            blogs: true
          }
        }
      }
    });

    return tags.map(tag => ({
      name: tag.name,
      count: tag._count.blogs
    }));
  } catch (error) {
    console.error("Error fetching tags:", error);
    // Return mock data if database query fails
    return [
      { name: "React", count: 25 },
      { name: "Next.js", count: 18 },
      { name: "Tailwind", count: 12 },
      { name: "TypeScript", count: 22 },
      { name: "CSS", count: 15 },
      { name: "JavaScript", count: 30 },
    ];
  }
}

// Get links from the database
async function getLinks() {
  try {
    const links = await prisma.blog_links.findMany({
      where: {
        status: true
      },
      orderBy: {
        name: 'asc'
      },
      take: 5
    });

    return links.map(link => ({
      id: link.uid,
      name: link.name,
      url: link.url
    }));
  } catch (error) {
    console.error("Error fetching links:", error);
    // Return mock data if database query fails
    return [
      { id: "1", name: "GitHub", url: "https://github.com" },
      { id: "2", name: "MDN Web Docs", url: "https://developer.mozilla.org" },
      { id: "3", name: "React Documentation", url: "https://react.dev" },
    ];
  }
}

// Get recent comments from the database
async function getRecentComments() {
  try {
    const comments = await prisma.blog_comments.findMany({
      where: {
        status: true
      },
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        post: true,
        user: true
      },
      take: 3
    });

    return comments.map(comment => ({
      id: comment.uid,
      content: comment.content,
      author: comment.user.name,
      postTitle: comment.post.title,
      postId: comment.post.uid
    }));
  } catch (error) {
    console.error("Error fetching comments:", error);
    // Return mock data
    return [];
  }
}

// Get archive structure
async function getArchiveStructure() {
  try {
    const posts = await prisma.blog_posts.findMany({
      where: {
        status: true,
        published: true
      },
      select: {
        publishedAt: true
      }
    });

    const archiveStructure: Record<string, string[]> = {};

    posts.forEach(post => {
      if (!post.publishedAt) return;

      const date = new Date(post.publishedAt);
      const year = date.getFullYear().toString();
      const month = date.toLocaleString('default', { month: 'long' });

      if (!archiveStructure[year]) {
        archiveStructure[year] = [];
      }

      if (!archiveStructure[year].includes(month)) {
        archiveStructure[year].push(month);
      }
    });

    return Object.entries(archiveStructure).map(([year, months]) => ({
      year,
      months
    }));
  } catch (error) {
    console.error("Error creating archive structure:", error);
    // Return mock data
    return [];
  }
}

export default async function HomePage() {
  // Fetch all data in parallel
  const [articles, announcements, categories, tags, links, recentComments, archiveStructure] =
    await Promise.all([
      getArticles(),
      getAnnouncements(),
      getCategories(),
      getTags(),
      getLinks(),
      getRecentComments(),
      getArchiveStructure()
    ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <HomePageTabs
            articles={articles}
            announcements={announcements}
            archiveStructure={archiveStructure}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Card title={<span><FolderOutlined /> Categories</span>} className="shadow-sm">
            <div className="space-y-2">
              {categories.map(category => (
                <div key={category.name} className="flex justify-between items-center">
                  <Link href={`/category/${category.name.toLowerCase()}`} className="text-blue-600 hover:text-blue-800">
                    {category.name}
                  </Link>
                  <Tag color="default">{category.count}</Tag>
                </div>
              ))}
            </div>
          </Card>

          <Card title={<span><TagsOutlined /> Tags</span>} className="shadow-sm">
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <Link href={`/tag/${tag.name.toLowerCase()}`} key={tag.name}>
                  <Tag color="processing" className="cursor-pointer">
                    {tag.name} ({tag.count})
                  </Tag>
                </Link>
              ))}
            </div>
          </Card>

          <Card title={<span><LinkOutlined /> Links</span>} className="shadow-sm">
            <div className="space-y-2">
              {links.map(link => (
                <div key={link.id}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    {link.name}
                  </a>
                </div>
              ))}
            </div>
          </Card>

          <Card title={<span><CommentOutlined /> Recent Comments</span>} className="shadow-sm">
            <div className="space-y-3">
              {recentComments.map(comment => (
                <div key={comment.id}>
                  <div className="text-sm text-gray-500">{comment.author} on "{comment.postTitle}"</div>
                  <div className="text-gray-700">{comment.content.length > 50 ? `${comment.content.substring(0, 50)}...` : comment.content}</div>
                  {comment.id !== recentComments[recentComments.length - 1].id && <Divider className="my-2" />}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

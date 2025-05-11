import BlogLink from "#/components/BlogLink";
import { TranslationProvider, Translation } from "#/components/Translations";
import BlogContent from "#/layout/BlogContent";
import BlogHeader from "#/layout/BlogHeader";
import { FolderOutlined, TagsOutlined, LinkOutlined, CommentOutlined } from "@ant-design/icons";
import { prisma } from "@pkg/database";
import { AppLayoutProps } from "@pkg/types"
import { Card, Tag, Divider, Affix } from "antd";

async function getAnnouncements() {
  const announcements = await prisma.blog_announcements.findMany({
    where: {
      status: true
    },
    orderBy: {
      createdAt: 'desc'
    },
    take: 3
  });
  return announcements
}

async function getCategories() {
  const categories = await prisma.blog_categories.findMany({
    include: {
      _count: {
        select: {
          posts: true
        }
      }
    }
  });

  return categories
}

// Get tags from the database
async function getTags() {
  const tags = await prisma.blog_tag.findMany({
    include: {
      _count: {
        select: {
          blogs: true
        }
      }
    }
  });
  return tags;
}

// Get links from the database
async function getLinks() {
  const links = await prisma.blog_links.findMany({
    where: {
      status: true
    },
    orderBy: {
      name: 'asc'
    },
    take: 5
  });
  return links
}

async function getRecentComments() {
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
  return comments
}

const V1Layout = async ({ children }: AppLayoutProps) => {
  const [categories, tags, links, recentComments] =
    await Promise.all([
      getCategories(),
      getTags(),
      getLinks(),
      getRecentComments(),
    ]);
  return (
    <div>
      <BlogHeader />
      <BlogContent>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              {children}
            </div>
            <Affix offsetTop={64}>
              <div className="flex flex-col gap-2">
                <TranslationProvider name="Page">
                  <Card title={<span><FolderOutlined /> <Translation name="categories" /></span>} className="shadow-sm">
                    <div className="space-y-2">
                      {categories.map(category => (
                        <div key={category.name} className="flex justify-between items-center">
                          <BlogLink href={`/category/${category.uid}`} className="text-blue-600 hover:text-blue-800">
                            {category.name}
                          </BlogLink>
                          <Tag color="default">{category._count.posts}</Tag>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card title={<span><TagsOutlined /> <Translation name="tags" /></span>} className="shadow-sm">
                    <div className="flex flex-wrap gap-2">
                      {tags.map(tag => (
                        <BlogLink href={`/tag/${tag.uid}`} key={tag.name}>
                          <Tag color="processing" className="cursor-pointer">
                            {tag.name} ({tag._count.blogs})
                          </Tag>
                        </BlogLink>
                      ))}
                    </div>
                  </Card>

                  <Card title={<span><LinkOutlined /> <Translation name="links" /></span>} className="shadow-sm">
                    <div className="space-y-2">
                      {links.map(link => (
                        <div key={link.uid}>
                          <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                            {link.name}
                          </a>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card title={<span><CommentOutlined /> <Translation name="recentPosts" /></span>} className="shadow-sm">
                    <div className="space-y-3">
                      {recentComments.map(comment => (
                        <div key={comment.uid}>
                          <div className="text-sm text-gray-500">{comment.user.name}</div>
                          <div className="text-gray-700">{comment.content.length > 50 ? `${comment.content.substring(0, 50)}...` : comment.content}</div>
                          {comment.uid !== recentComments[recentComments.length - 1].uid && <Divider className="my-2" />}
                        </div>
                      ))}
                    </div>
                  </Card>

                </TranslationProvider>
              </div>
            </Affix>
          </div>
        </div>
      </BlogContent>
    </div>
  );
}
export default V1Layout
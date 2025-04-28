"use client";

import { useState } from "react";
import { 
  Card, 
  Typography, 
  Tag, 
  Divider, 
  Avatar, 
  Button, 
  Space, 
  Form, 
  Input, 
  List,
  message,
  Breadcrumb
} from "antd";
import { 
  CalendarOutlined, 
  UserOutlined, 
  TagsOutlined, 
  FolderOutlined,
  CommentOutlined,
  HeartOutlined,
  HeartFilled,
  ShareAltOutlined,
  HomeOutlined
} from "@ant-design/icons";
import Link from "next/link";

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

interface ArticlePageProps {
  params: {
    id: string;
  };
}

interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  category: string;
  tags: string[];
  comments: Comment[];
}

interface Comment {
  id: string;
  author: string;
  avatar?: string;
  content: string;
  date: string;
  replies?: Comment[];
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const { id } = params;
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(42);
  const [commentForm] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);
  
  // Mock article data
  const articles: Record<string, Article> = {
    "1": {
      id: "1",
      title: "Getting Started with Next.js",
      content: `
# Getting Started with Next.js

Next.js is a powerful React framework that makes building web applications simple and efficient. In this guide, we'll explore how to set up a Next.js project and explore its key features.

## Installation

To create a new Next.js app, run the following command:

\`\`\`bash
npx create-next-app@latest my-next-app
\`\`\`

This will set up a new Next.js project with all the necessary dependencies.

## Key Features

### 1. File-Based Routing

Next.js uses a file-based routing system, where each file in the \`pages\` directory automatically becomes a route.

### 2. Server-Side Rendering (SSR)

Next.js provides built-in server-side rendering, improving performance and SEO.

### 3. Static Site Generation (SSG)

You can pre-render pages at build time using the \`getStaticProps\` function.

### 4. API Routes

Create API endpoints easily by adding files to the \`pages/api\` directory.

## Conclusion

Next.js offers a great developer experience with all the features you need to build production-ready applications. Its conventions make it easy to get started, while its flexibility allows for complex applications.
      `,
      excerpt: "Learn how to set up a Next.js project and explore its key features.",
      date: "2023-05-15",
      author: {
        name: "Alex Johnson",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
        bio: "Frontend developer specializing in React and Next.js"
      },
      category: "Programming",
      tags: ["Next.js", "React", "Web Development"],
      comments: [
        {
          id: "c1",
          author: "John Doe",
          avatar: "https://xsgames.co/randomusers/avatar.php?g=male&key=1",
          content: "This was really helpful, thanks!",
          date: "2023-05-16",
        },
        {
          id: "c2",
          author: "Emily Chen",
          avatar: "https://xsgames.co/randomusers/avatar.php?g=female&key=2",
          content: "I've been using Next.js for a few months now and it's been a game-changer for my productivity.",
          date: "2023-05-17",
          replies: [
            {
              id: "c2r1",
              author: "Alex Johnson",
              avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
              content: "Glad to hear that, Emily! What's your favorite Next.js feature?",
              date: "2023-05-17",
            }
          ]
        }
      ]
    },
    "2": {
      id: "2",
      title: "Tailwind CSS Best Practices",
      content: `
# Tailwind CSS Best Practices

Tailwind CSS has revolutionized the way developers style their applications. Instead of writing custom CSS, you can apply pre-defined utility classes directly in your HTML. Here are some best practices to make the most out of Tailwind CSS.

## Organize Your Components

Even though Tailwind is utility-first, it's still important to organize your UI into reusable components. This helps maintain consistency and reduces duplication.

## Use @apply for Complex Patterns

For complex patterns that you use frequently, consider using the \`@apply\` directive in your CSS:

\`\`\`css
.btn-primary {
  @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700;
}
\`\`\`

## Customize Your Theme

Tailwind's default theme is a great starting point, but customizing it to match your brand is easy using the \`tailwind.config.js\` file.

## Purge Unused CSS

For production, make sure to purge unused CSS to reduce file size dramatically:

\`\`\`js
// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  // ...
}
\`\`\`

## Conclusion

Tailwind CSS provides a different approach to styling that can significantly speed up your development process. By following these best practices, you can make the most out of this powerful utility-first framework.
      `,
      excerpt: "Discover the most efficient ways to use Tailwind CSS in your projects.",
      date: "2023-06-20",
      author: {
        name: "Sarah Williams",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=female&key=3",
        bio: "UI/UX designer and front-end developer"
      },
      category: "CSS",
      tags: ["Tailwind", "CSS", "Styling"],
      comments: [
        {
          id: "c3",
          author: "Michael Lee",
          avatar: "https://xsgames.co/randomusers/avatar.php?g=male&key=4",
          content: "Great article! I learned a lot about optimizing my Tailwind workflow.",
          date: "2023-06-21",
        }
      ]
    },
    "3": {
      id: "3",
      title: "Understanding TypeScript Generics",
      content: `
# Understanding TypeScript Generics

TypeScript generics are a powerful feature that allows you to create reusable components that work with a variety of types rather than a single one. This guide will help you understand how to use generics effectively.

## Basic Generic Syntax

A simple generic function looks like this:

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}
\`\`\`

Here, \`T\` is a type variable that gets defined when the function is called.

## Generic Interfaces

You can also create generic interfaces:

\`\`\`typescript
interface Box<T> {
  contents: T;
}

let numberBox: Box<number> = { contents: 42 };
let stringBox: Box<string> = { contents: "hello" };
\`\`\`

## Generic Constraints

Sometimes you want to limit the types that can be used with your generic. You can do this with constraints:

\`\`\`typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);  // Now we know it has a .length property
  return arg;
}
\`\`\`

## Generic Classes

Classes can also be generic:

\`\`\`typescript
class Queue<T> {
  private data: T[] = [];
  
  push(item: T) {
    this.data.push(item);
  }
  
  pop(): T | undefined {
    return this.data.shift();
  }
}
\`\`\`

## Conclusion

Generics are one of TypeScript's most powerful features, enabling you to write flexible, reusable code without sacrificing type safety. Understanding and using generics effectively will greatly enhance your TypeScript development experience.
      `,
      excerpt: "A comprehensive guide to using generics in TypeScript.",
      date: "2023-07-10",
      author: {
        name: "David Kim",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=male&key=5",
        bio: "Full-stack developer with a focus on TypeScript"
      },
      category: "TypeScript",
      tags: ["TypeScript", "JavaScript", "Programming"],
      comments: [
        {
          id: "c4",
          author: "Jennifer Wu",
          avatar: "https://xsgames.co/randomusers/avatar.php?g=female&key=6",
          content: "This finally made generics click for me. Thank you!",
          date: "2023-07-11",
        }
      ]
    }
  };
  
  // Get the article or show a not found message
  const article = articles[id] || {
    id: id,
    title: "Article Not Found",
    content: "The article you are looking for does not exist or has been removed.",
    excerpt: "",
    date: "",
    author: {
      name: "Unknown",
    },
    category: "",
    tags: [],
    comments: []
  };
  
  // Toggle like status
  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setLiked(true);
      setLikeCount(likeCount + 1);
    }
  };
  
  // Handle comment submission
  const handleCommentSubmit = (values: { comment: string }) => {
    if (!values.comment.trim()) {
      return;
    }
    
    setSubmitting(true);
    
    // In a real app, this would be an API call
    setTimeout(() => {
      message.success('Comment submitted successfully!');
      commentForm.resetFields();
      setSubmitting(false);
    }, 1000);
  };
  
  // Convert markdown content to HTML (simplified version)
  const renderContent = () => {
    // This is a simplified markdown renderer
    // In a real app, you'd use a library like marked or remark
    const parts = article.content.split('\n\n');
    
    return parts.map((part, index) => {
      if (part.startsWith('# ')) {
        return <Title key={index} level={1}>{part.substring(2)}</Title>;
      } else if (part.startsWith('## ')) {
        return <Title key={index} level={2}>{part.substring(3)}</Title>;
      } else if (part.startsWith('### ')) {
        return <Title key={index} level={3}>{part.substring(4)}</Title>;
      } else if (part.startsWith('```')) {
        const code = part.split('\n').slice(1, -1).join('\n');
        return (
          <pre key={index} className="bg-gray-100 p-4 rounded-md overflow-x-auto my-4">
            <code>{code}</code>
          </pre>
        );
      } else {
        return <Paragraph key={index}>{part}</Paragraph>;
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <Card className="shadow-sm">
            <Breadcrumb
              className="mb-6"
              items={[
                { title: <Link href="/"><HomeOutlined /> Home</Link> },
                { title: <Link href={`/category/${article.category.toLowerCase()}`}>{article.category}</Link> },
                { title: article.title }
              ]}
            />
            
            <Title level={1}>{article.title}</Title>
            
            <div className="flex items-center mb-6">
              <Space>
                <CalendarOutlined /> 
                <Text type="secondary">{article.date}</Text>
              </Space>
              <Divider type="vertical" />
              <Space>
                <FolderOutlined />
                <Link href={`/category/${article.category.toLowerCase()}`}>
                  <Tag color="blue">{article.category}</Tag>
                </Link>
              </Space>
              <Divider type="vertical" />
              <Space>
                <TagsOutlined />
                {article.tags.map(tag => (
                  <Link key={tag} href={`/tag/${tag.toLowerCase()}`}>
                    <Tag color="processing">{tag}</Tag>
                  </Link>
                ))}
              </Space>
            </div>
            
            <div className="article-content mb-8">
              {renderContent()}
            </div>
            
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <Button 
                  type="text" 
                  icon={liked ? <HeartFilled className="text-red-500" /> : <HeartOutlined />} 
                  onClick={handleLike}
                >
                  {likeCount} Likes
                </Button>
                <Button 
                  type="text" 
                  icon={<CommentOutlined />}
                  onClick={() => document.getElementById('comments-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {article.comments.length} Comments
                </Button>
              </div>
              <Button type="text" icon={<ShareAltOutlined />}>Share</Button>
            </div>
            
            <Divider />
            
            <div className="flex items-center mb-8">
              <Avatar 
                size={64} 
                src={article.author.avatar} 
                icon={!article.author.avatar && <UserOutlined />} 
              />
              <div className="ml-4">
                <Text strong className="text-lg">{article.author.name}</Text>
                {article.author.bio && (
                  <Paragraph type="secondary">{article.author.bio}</Paragraph>
                )}
              </div>
            </div>
            
            <Divider />
            
            <div id="comments-section">
              <Title level={3}>
                <CommentOutlined className="mr-2" />
                Comments ({article.comments.length})
              </Title>
              
              <List
                itemLayout="horizontal"
                dataSource={article.comments}
                renderItem={comment => (
                  <List.Item>
                    <div className="w-full">
                      <div className="flex items-start mb-2">
                        <Avatar 
                          src={comment.avatar} 
                          icon={!comment.avatar && <UserOutlined />} 
                          className="mr-3 mt-1"
                        />
                        <div className="flex-1">
                          <div className="font-semibold">{comment.author}</div>
                          <div className="text-gray-500 text-xs mb-2">{comment.date}</div>
                          <div className="text-gray-800">{comment.content}</div>
                        </div>
                      </div>
                      
                      {comment.replies && comment.replies.length > 0 && (
                        <div className="ml-12 mt-4 space-y-4">
                          {comment.replies.map(reply => (
                            <div key={reply.id} className="flex items-start">
                              <Avatar 
                                src={reply.avatar} 
                                icon={!reply.avatar && <UserOutlined />} 
                                size="small" 
                                className="mr-3 mt-1"
                              />
                              <div className="flex-1">
                                <div className="font-semibold">{reply.author}</div>
                                <div className="text-gray-500 text-xs mb-2">{reply.date}</div>
                                <div className="text-gray-800">{reply.content}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </List.Item>
                )}
              />
              
              <Divider />
              
              <Title level={4}>Leave a Comment</Title>
              <Form form={commentForm} onFinish={handleCommentSubmit}>
                <Form.Item name="comment" rules={[{ required: true, message: 'Please enter your comment' }]}>
                  <TextArea rows={4} placeholder="Write your comment here..." />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" loading={submitting}>
                    Submit Comment
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card title="Recent Articles" className="shadow-sm">
            <List
              itemLayout="horizontal"
              dataSource={Object.values(articles).slice(0, 3)}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    title={<Link href={`/article/${item.id}`} className="hover:text-blue-600">{item.title}</Link>}
                    description={
                      <div className="text-xs text-gray-500">
                        <CalendarOutlined className="mr-1" /> {item.date}
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
          
          <Card title="Categories" className="shadow-sm">
            <div className="space-y-2">
              {["Programming", "CSS", "TypeScript", "React", "JavaScript"].map(category => (
                <div key={category} className="flex justify-between items-center">
                  <Link href={`/category/${category.toLowerCase()}`} className="text-blue-600 hover:text-blue-800">
                    {category}
                  </Link>
                </div>
              ))}
            </div>
          </Card>
          
          <Card title="Tags" className="shadow-sm">
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "Tailwind", "CSS", "TypeScript", "JavaScript"].map(tag => (
                <Link href={`/tag/${tag.toLowerCase()}`} key={tag}>
                  <Tag color="processing" className="cursor-pointer">
                    {tag}
                  </Tag>
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 
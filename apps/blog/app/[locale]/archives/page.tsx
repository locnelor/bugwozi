"use client";

import { useState } from "react";
import { Card, List, Tag, Radio, Timeline, Empty, Divider } from "antd";
import { 
  CalendarOutlined, 
  CommentOutlined, 
  TagsOutlined, 
  FolderOutlined 
} from "@ant-design/icons";
import Link from "next/link";

export default function ArchivesPage() {
  const [viewType, setViewType] = useState<"timeline" | "cards">("timeline");
  
  // Mock archive data
  const archiveData = {
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

  // Flatten archives data for timeline view
  const timelineItems = Object.entries(archiveData).flatMap(([year, months]) => 
    Object.entries(months).flatMap(([month, posts]) => 
      posts.map(post => ({
        ...post,
        yearMonth: `${year} ${month}`
      }))
    )
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Archives</h1>
          <Radio.Group 
            value={viewType} 
            onChange={(e) => setViewType(e.target.value)}
            buttonStyle="solid"
          >
            <Radio.Button value="timeline">Timeline</Radio.Button>
            <Radio.Button value="cards">Cards</Radio.Button>
          </Radio.Group>
        </div>

        {viewType === "timeline" ? (
          <Timeline
            mode="left"
            items={timelineItems.map(post => ({
              label: post.yearMonth,
              children: (
                <Card className="mb-4 shadow-sm hover:shadow-md transition-shadow">
                  <Link href={`/article/${post.id}`} className="text-lg font-semibold hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                  <div className="mt-2 text-gray-500 text-sm">
                    <CalendarOutlined className="mr-1" /> {post.date}
                    <span className="mx-2">•</span>
                    <CommentOutlined className="mr-1" /> {post.comments} comments
                  </div>
                  <div className="mt-1 flex flex-wrap gap-2">
                    <Tag color="blue" icon={<FolderOutlined />}>{post.category}</Tag>
                    {post.tags.map(tag => (
                      <Tag key={tag} color="processing" icon={<TagsOutlined />}>{tag}</Tag>
                    ))}
                  </div>
                  <p className="mt-2 text-gray-700">{post.excerpt}</p>
                </Card>
              ),
            }))}
          />
        ) : (
          <div>
            {Object.entries(archiveData).map(([year, months]) => (
              <div key={year} className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{year}</h2>
                
                {Object.entries(months).map(([month, posts]) => (
                  <div key={month} className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">
                      <CalendarOutlined className="mr-2" />
                      {month}
                    </h3>
                    
                    <List
                      dataSource={posts}
                      renderItem={post => (
                        <List.Item>
                          <Card className="w-full shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col md:flex-row md:justify-between">
                              <div>
                                <Link href={`/article/${post.id}`} className="text-lg font-semibold hover:text-blue-600 transition-colors">
                                  {post.title}
                                </Link>
                                <div className="mt-2 text-gray-500 text-sm">
                                  <CalendarOutlined className="mr-1" /> {post.date}
                                  <span className="mx-2">•</span>
                                  <CommentOutlined className="mr-1" /> {post.comments} comments
                                </div>
                                <div className="mt-1 flex flex-wrap gap-2">
                                  <Tag color="blue" icon={<FolderOutlined />}>{post.category}</Tag>
                                  {post.tags.map(tag => (
                                    <Tag key={tag} color="processing" icon={<TagsOutlined />}>{tag}</Tag>
                                  ))}
                                </div>
                                <p className="mt-2 text-gray-700">{post.excerpt}</p>
                              </div>
                            </div>
                          </Card>
                        </List.Item>
                      )}
                    />
                  </div>
                ))}
                
                {year !== Object.keys(archiveData).slice(-1)[0] && (
                  <Divider className="my-6" />
                )}
              </div>
            ))}
          </div>
        )}

        {timelineItems.length === 0 && (
          <Empty description="No archived posts found" />
        )}
      </div>
    </div>
  );
}
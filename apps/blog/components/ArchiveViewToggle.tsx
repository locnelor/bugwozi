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

// Define post type for timeline view
interface Post {
  id: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  excerpt: string;
  comments: number;
  yearMonth?: string;
}

// Define props for the component
interface ArchiveViewToggleProps {
  archiveData: Record<string, Record<string, Post[]>>;
  timelineItems: (Post & { yearMonth: string })[];
}

export default function ArchiveViewToggle({ archiveData, timelineItems }: ArchiveViewToggleProps) {
  const [viewType, setViewType] = useState<"timeline" | "cards">("timeline");
  
  return (
    <>
      <Radio.Group 
        value={viewType} 
        onChange={(e) => setViewType(e.target.value)}
        buttonStyle="solid"
      >
        <Radio.Button value="timeline">Timeline</Radio.Button>
        <Radio.Button value="cards">Cards</Radio.Button>
      </Radio.Group>

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
    </>
  );
} 
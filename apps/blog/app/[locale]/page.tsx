"use client";

import { useState, useEffect } from "react";
import { Card, Tabs, Tag, List, Button, Space, Divider, message } from "antd";
import { 
  HomeOutlined, 
  FileTextOutlined, 
  NotificationOutlined, 
  CommentOutlined,
  LinkOutlined,
  TagsOutlined,
  FolderOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Link } from "#/i18n/navigation";
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();
  
  // Mock data
  const articles = [
    {
      id: "1",
      title: "Getting Started with Next.js",
      date: "2023-05-15",
      excerpt: "Learn how to set up a Next.js project and explore its key features.",
      category: "Programming",
      tags: ["Next.js", "React", "Web Development"],
      comments: 5,
    },
    {
      id: "2",
      title: "Tailwind CSS Best Practices",
      date: "2023-06-20",
      excerpt: "Discover the most efficient ways to use Tailwind CSS in your projects.",
      category: "CSS",
      tags: ["Tailwind", "CSS", "Styling"],
      comments: 8,
    },
    {
      id: "3",
      title: "Understanding TypeScript Generics",
      date: "2023-07-10",
      excerpt: "A comprehensive guide to using generics in TypeScript.",
      category: "TypeScript",
      tags: ["TypeScript", "JavaScript", "Programming"],
      comments: 3,
    },
  ];

  const announcements = [
    { id: "1", title: "Site Maintenance", date: "2023-08-01", content: "The blog will be under maintenance on August 5th from 2-4pm UTC." },
    { id: "2", title: "New Features Added", date: "2023-07-25", content: "We've added a new comment system and improved tagging functionality." },
  ];

  const links = [
    { id: "1", name: "GitHub", url: "https://github.com" },
    { id: "2", name: "MDN Web Docs", url: "https://developer.mozilla.org" },
    { id: "3", name: "React Documentation", url: "https://react.dev" },
  ];

  const categories = [
    { name: "Programming", count: 15 },
    { name: "Web Development", count: 12 },
    { name: "CSS", count: 8 },
    { name: "JavaScript", count: 20 },
    { name: "TypeScript", count: 10 },
  ];

  const tags = [
    { name: "React", count: 25 },
    { name: "Next.js", count: 18 },
    { name: "Tailwind", count: 12 },
    { name: "TypeScript", count: 22 },
    { name: "CSS", count: 15 },
    { name: "JavaScript", count: 30 },
  ];

  const tabItems = [
    {
      key: "home",
      label: (
        <span>
          <HomeOutlined /> {t('Page.article')}
        </span>
      ),
      children: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">{t('Page.recentPosts')}</h2>
          <List
            itemLayout="vertical"
            dataSource={articles}
            renderItem={(item) => (
              <List.Item
                key={item.id}
                extra={
                  <div className="flex flex-col items-end space-y-2">
                    <Tag color="blue">{item.category}</Tag>
                    <div className="text-sm text-gray-500">
                      <CalendarOutlined className="mr-1" />
                      {item.date}
                    </div>
                    <div className="text-sm text-gray-500">
                      <CommentOutlined className="mr-1" />
                      {item.comments} {t('Page.comment')}
                    </div>
                  </div>
                }
              >
                <List.Item.Meta
                  title={<Link href={`/article/${item.id}`} className="text-lg font-semibold">{item.title}</Link>}
                  description={
                    <div>
                      <p>{item.excerpt}</p>
                      <div className="mt-2">
                        {item.tags.map(tag => (
                          <Tag key={tag} color="processing">{tag}</Tag>
                        ))}
                      </div>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
          <div className="text-center">
            <Button type="primary">{t('Page.loadMore')}</Button>
          </div>
        </div>
      ),
    },
    {
      key: "archives",
      label: (
        <span>
          <FileTextOutlined /> {t('Page.archives')}
        </span>
      ),
      children: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">{t('Page.archives')}</h2>
          <List
            itemLayout="horizontal"
            dataSource={[
              { year: "2023", months: ["July", "June", "May"] },
              { year: "2022", months: ["December", "November", "October"] },
            ]}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={<div className="text-xl font-semibold">{item.year}</div>}
                  description={
                    <div className="flex flex-wrap gap-4">
                      {item.months.map(month => (
                        <Link href={`/archives/${item.year}/${month.toLowerCase()}`} key={month} className="block">
                          <Tag color="default" className="cursor-pointer py-1 px-3">{month}</Tag>
                        </Link>
                      ))}
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </div>
      ),
    },
    {
      key: "announcements",
      label: (
        <span>
          <NotificationOutlined /> {t('Page.announcements')}
        </span>
      ),
      children: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">{t('Page.announcements')}</h2>
          <List
            itemLayout="vertical"
            dataSource={announcements}
            renderItem={(item) => (
              <Card 
                title={item.title} 
                className="mb-4 shadow-sm"
                extra={<span className="text-gray-500 text-sm">{item.date}</span>}
              >
                <p>{item.content}</p>
              </Card>
            )}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <Tabs items={tabItems} defaultActiveKey="home" className="bg-white rounded-lg p-6 shadow-sm" />
        </div>
        
        <div className="space-y-6">
          <Card title={<span><FolderOutlined /> {t('Page.categories')}</span>} className="shadow-sm">
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
          
          <Card title={<span><TagsOutlined /> {t('Page.tags')}</span>} className="shadow-sm">
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
          
          <Card title={<span><LinkOutlined /> {t('Page.links')}</span>} className="shadow-sm">
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
          
          <Card title={<span><CommentOutlined /> {t('Page.recentComments')}</span>} className="shadow-sm">
            <div className="space-y-3">
              <div>
                <div className="text-sm text-gray-500">John on "Getting Started with Next.js"</div>
                <div className="text-gray-700">This was really helpful, thanks!</div>
              </div>
              <Divider className="my-2" />
              <div>
                <div className="text-sm text-gray-500">Sarah on "Tailwind CSS Best Practices"</div>
                <div className="text-gray-700">Great article! I learned a lot.</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

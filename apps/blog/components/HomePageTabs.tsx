"use client";

import { useState } from "react";
import { Tabs, Tag, List, Button, Card } from "antd";
import {
  HomeOutlined,
  FileTextOutlined,
  NotificationOutlined,
  CommentOutlined,
  TagsOutlined,
  FolderOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Link } from "#/i18n/navigation";
import { useTranslations } from 'next-intl';

// Define types for props
interface Article {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  tags: string[];
  comments: number;
}

interface Announcement {
  id: string;
  title: string;
  date: string;
  content: string;
}

interface ArchiveItem {
  year: string;
  months: string[];
}

interface HomePageTabsProps {
  articles: Article[];
  announcements: Announcement[];
  archiveStructure: ArchiveItem[];
}

export default function HomePageTabs({
  articles,
  announcements,
  archiveStructure
}: HomePageTabsProps) {
  const t = useTranslations('Page');

  const tabItems = [
    {
      key: "home",
      label: (
        <span>
          <HomeOutlined /> {t('article', { defaultMessage: 'Articles' })}
        </span>
      ),
      children: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">{t('recentPosts', { defaultMessage: 'Recent Posts' })}</h2>
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
                      {item.comments} {t('comment', { defaultMessage: 'comments' })}
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
            <Button type="primary">{t('loadMore', { defaultMessage: 'Load More' })}</Button>
          </div>
        </div>
      ),
    },
    {
      key: "archives",
      label: (
        <span>
          <FileTextOutlined /> {t('archives', { defaultMessage: 'Archives' })}
        </span>
      ),
      children: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">{t('archives', { defaultMessage: 'Archives' })}</h2>
          <List
            itemLayout="horizontal"
            dataSource={archiveStructure}
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
          <NotificationOutlined /> {t('announcements', { defaultMessage: 'Announcements' })}
        </span>
      ),
      children: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">{t('announcements', { defaultMessage: 'Announcements' })}</h2>
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
    <div
      className="bg-white rounded-lg px-4 py-2 shadow-sm" >
      <Tabs
        items={tabItems}
        defaultActiveKey="home"
      />
    </div>
  );
} 
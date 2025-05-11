"use client";

import { Tabs, List, Card } from "antd";
import {
  HomeOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { useTranslations } from 'next-intl';
import { blog_announcements } from "@pkg/database";
import OmsViewMarkdown from "./Markdown";
import PostsItem from "#/app/[locale]/PostsItem";
import { formatDateTime } from "@pkg/hooks";
import { PropsWithChildren } from "react";


interface HomePageTabsProps extends PropsWithChildren {
  announcements: blog_announcements[];
}

export default function HomePageTabs({
  announcements,
  children,
}: HomePageTabsProps) {
  const t = useTranslations('Page');

  const tabItems = [
    {
      key: "home",
      label: (
        <span>
          <HomeOutlined /> {t('article',)}
        </span>
      ),
      children,
    },
    {
      key: "announcements",
      label: (
        <span>
          <NotificationOutlined /> {t('announcements')}
        </span>
      ),
      children: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">{t('announcements')}</h2>
          <List
            itemLayout="vertical"
            dataSource={announcements}
            renderItem={(item) => (
              <Card
                title={item.title}
                className="mb-4 shadow-sm"
                extra={<span className="text-gray-500 text-sm">{formatDateTime(item.createdAt)}</span>}
              >
                <OmsViewMarkdown
                  textContent={item.content}
                />
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
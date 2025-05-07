"use client";

import { useEffect, useState } from 'react';
import { Card, Tag, List, Typography, Skeleton } from 'antd';
import { TagsOutlined } from '@ant-design/icons';
import { useTranslations } from 'next-intl';
import { Link } from '#/i18n/navigation';

const { Title } = Typography;

// 模拟标签数据
const mockTags = [
  // { name: "React", count: 25, color: "blue" },
  // { name: "Next.js", count: 18, color: "green" },
  // { name: "Tailwind", count: 12, color: "purple" },
  // { name: "TypeScript", count: 22, color: "magenta" },
  // { name: "CSS", count: 15, color: "cyan" },
  // { name: "JavaScript", count: 30, color: "orange" },
  // { name: "GraphQL", count: 8, color: "pink" },
  // { name: "REST API", count: 10, color: "red" },
  // { name: "Redux", count: 14, color: "volcano" },
  // { name: "Node.js", count: 19, color: "lime" },
  // { name: "Express", count: 9, color: "geekblue" },
  // { name: "MongoDB", count: 11, color: "gold" },
  // { name: "PostgreSQL", count: 7, color: "blue" },
  // { name: "Docker", count: 13, color: "cyan" },
  // { name: "CI/CD", count: 6, color: "green" },
  // { name: "Testing", count: 16, color: "purple" },
  // { name: "Performance", count: 8, color: "magenta" },
  // { name: "Accessibility", count: 5, color: "orange" },
  // { name: "SEO", count: 7, color: "red" },
  // { name: "Mobile", count: 9, color: "volcano" },
];

export default function TagsPage() {
  const t = useTranslations();
  const [loading, setLoading] = useState(true);
  const [tags, setTags] = useState<typeof mockTags>([]);

  // 模拟数据加载
  useEffect(() => {
    setTimeout(() => {
      setTags(mockTags);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <Skeleton active paragraph={{ rows: 6 }} />
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <div className="flex items-center mb-6">
          <TagsOutlined className="text-2xl mr-3" />
          <Title level={2} className="m-0">{t('Page.tags')}</Title>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          {tags.map(tag => (
            <Link key={tag.name} href={`/tag/${tag.name.toLowerCase()}`}>
              <Tag 
                color={tag.color} 
                className="px-4 py-2 text-lg cursor-pointer"
              >
                {tag.name} 
                <span className="ml-2 text-sm opacity-75">({tag.count})</span>
              </Tag>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <Title level={3}>{t('Tags.popularTags')}</Title>
          <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
            dataSource={tags.slice().sort((a, b) => b.count - a.count).slice(0, 8)}
            renderItem={tag => (
              <List.Item>
                <Card title={tag.name} size="small" className="text-center">
                  <p>{tag.count} {t('Tags.articles')}</p>
                  <Link href={`/tag/${tag.name.toLowerCase()}`}>
                    <Tag color={tag.color}>{t('Tags.viewArticles')}</Tag>
                  </Link>
                </Card>
              </List.Item>
            )}
          />
        </div>
      </Card>
    </div>
  );
} 
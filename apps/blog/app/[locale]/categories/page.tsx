"use client";

import { Card, Typography, Tag, Input, Breadcrumb, Row, Col, Statistic, List, Space, Progress } from "antd";
import { 
  FolderOutlined, 
  HomeOutlined, 
  SearchOutlined,
  FileTextOutlined,
  ReadOutlined
} from "@ant-design/icons";
import Link from "next/link";
import { useState, useMemo } from "react";

const { Title, Paragraph, Text } = Typography;

interface CategoryInfo {
  name: string;
  slug: string;
  count: number;
  description: string;
  icon?: React.ReactNode;
}

export default function CategoriesPage() {
  const [searchText, setSearchText] = useState("");
  
  // Mock categories data
  const allCategories: CategoryInfo[] = [
    { 
      name: "Programming", 
      slug: "programming",
      count: 35, 
      description: "General programming concepts, algorithms, and best practices."
    },
    { 
      name: "Web Development", 
      slug: "web-development",
      count: 28, 
      description: "Everything related to web development, standards, and technologies."
    },
    { 
      name: "JavaScript", 
      slug: "javascript",
      count: 30, 
      description: "Articles about JavaScript language, frameworks, and libraries."
    },
    { 
      name: "TypeScript", 
      slug: "typescript",
      count: 22, 
      description: "TypeScript tutorials, type systems, and advanced concepts."
    },
    { 
      name: "CSS", 
      slug: "css",
      count: 18, 
      description: "CSS styling, animations, layouts, and methodologies."
    },
    { 
      name: "React", 
      slug: "react",
      count: 25, 
      description: "React.js tutorials, component patterns, and state management."
    },
    { 
      name: "Next.js", 
      slug: "next-js",
      count: 15, 
      description: "Next.js framework guides, features, and deployment strategies."
    },
    { 
      name: "Backend", 
      slug: "backend",
      count: 20, 
      description: "Server-side technologies, APIs, and database management."
    },
    { 
      name: "DevOps", 
      slug: "devops",
      count: 12, 
      description: "Deployment, CI/CD, container orchestration, and infrastructure."
    },
    { 
      name: "UI/UX", 
      slug: "ui-ux",
      count: 14, 
      description: "User interface design, user experience, and accessibility."
    },
  ];
  
  // Total article count
  const totalArticles = useMemo(() => 
    allCategories.reduce((sum, category) => sum + category.count, 0),
    [allCategories]
  );
  
  // Filter categories based on search text
  const filteredCategories = useMemo(() => {
    if (!searchText) return allCategories;
    const searchLower = searchText.toLowerCase();
    return allCategories.filter(category => 
      category.name.toLowerCase().includes(searchLower) || 
      category.description.toLowerCase().includes(searchLower)
    );
  }, [searchText, allCategories]);
  
  // Sort categories by count (most articles first)
  const sortedCategories = useMemo(() => {
    return [...filteredCategories].sort((a, b) => b.count - a.count);
  }, [filteredCategories]);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <Breadcrumb
          className="mb-6"
          items={[
            { title: <Link href="/"><HomeOutlined /> Home</Link> },
            { title: "Categories" }
          ]}
        />
        
        <div className="mb-8">
          <Title level={2} className="flex items-center">
            <FolderOutlined className="mr-2" /> Categories
          </Title>
          <Paragraph className="text-gray-600 mt-2">
            Browse all categories in our blog. Each category contains articles related to a specific topic or area of interest.
          </Paragraph>
          
          <Row gutter={24} className="mt-6 mb-8">
            <Col span={24} md={16}>
              <Input 
                placeholder="Search categories..." 
                prefix={<SearchOutlined />} 
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
                allowClear
                className="mb-6"
              />
            </Col>
            <Col span={12} md={4}>
              <Card className="text-center h-full">
                <Statistic 
                  title="Categories" 
                  value={allCategories.length} 
                  prefix={<FolderOutlined />} 
                />
              </Card>
            </Col>
            <Col span={12} md={4}>
              <Card className="text-center h-full">
                <Statistic 
                  title="Articles" 
                  value={totalArticles} 
                  prefix={<FileTextOutlined />} 
                />
              </Card>
            </Col>
          </Row>
        </div>
        
        {sortedCategories.length > 0 ? (
          <List
            grid={{ 
              gutter: 16,
              xs: 1,
              sm: 1,
              md: 2,
              lg: 2,
              xl: 3,
              xxl: 3,
            }}
            dataSource={sortedCategories}
            renderItem={category => {
              // Calculate percentage of total articles
              const percentage = Math.round((category.count / totalArticles) * 100);
              
              return (
                <List.Item>
                  <Card 
                    hoverable 
                    className="h-full"
                    title={
                      <Link 
                        href={`/category/${category.slug}`} 
                        className="text-lg font-semibold hover:text-blue-600"
                      >
                        {category.name}
                      </Link>
                    }
                    extra={
                      <Tag color="blue">{category.count}</Tag>
                    }
                    actions={[
                      <Link key="view" href={`/category/${category.slug}`}>
                        <ReadOutlined /> View Articles
                      </Link>
                    ]}
                  >
                    <div className="min-h-[80px]">
                      <Paragraph ellipsis={{ rows: 2 }} className="text-gray-600">
                        {category.description}
                      </Paragraph>
                    </div>
                    
                    <div className="mt-4">
                      <Space direction="vertical" className="w-full">
                        <div className="flex justify-between text-sm">
                          <Text type="secondary">
                            {category.count} article{category.count !== 1 ? 's' : ''}
                          </Text>
                          <Text type="secondary">{percentage}% of total</Text>
                        </div>
                        <Progress percent={percentage} size="small" showInfo={false} />
                      </Space>
                    </div>
                  </Card>
                </List.Item>
              );
            }}
          />
        ) : (
          <div className="text-center py-12">
            <FolderOutlined style={{ fontSize: 48 }} className="text-gray-300" />
            <p className="mt-4 text-gray-500">No categories found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
} 
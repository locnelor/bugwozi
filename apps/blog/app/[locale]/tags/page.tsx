"use client";

import { Card, Typography, Tag, Input, Breadcrumb, Row, Col, Statistic } from "antd";
import { 
  TagsOutlined, 
  HomeOutlined, 
  SearchOutlined,
  FireOutlined 
} from "@ant-design/icons";
import Link from "next/link";
import { useState, useMemo } from "react";

const { Title, Paragraph } = Typography;

interface TagInfo {
  name: string;
  count: number;
  category?: string;
}

export default function TagsPage() {
  const [searchText, setSearchText] = useState("");
  
  // Mock tags data with categories
  const allTags: TagInfo[] = [
    { name: "React", count: 25, category: "Framework" },
    { name: "Next.js", count: 18, category: "Framework" },
    { name: "Tailwind", count: 12, category: "CSS" },
    { name: "CSS", count: 15, category: "CSS" },
    { name: "JavaScript", count: 30, category: "Language" },
    { name: "TypeScript", count: 22, category: "Language" },
    { name: "Web Development", count: 35, category: "General" },
    { name: "Frontend", count: 28, category: "General" },
    { name: "Backend", count: 15, category: "General" },
    { name: "Database", count: 10, category: "General" },
    { name: "API", count: 14, category: "General" },
    { name: "UI/UX", count: 8, category: "Design" },
    { name: "Design Patterns", count: 7, category: "Programming" },
    { name: "Testing", count: 6, category: "Development" },
    { name: "DevOps", count: 5, category: "Development" },
    { name: "Performance", count: 9, category: "Development" },
    { name: "Security", count: 4, category: "Development" },
    { name: "Accessibility", count: 3, category: "Development" },
    { name: "SEO", count: 5, category: "Marketing" },
    { name: "Git", count: 8, category: "Tool" },
    { name: "Docker", count: 4, category: "Tool" },
    { name: "AWS", count: 6, category: "Cloud" },
    { name: "Node.js", count: 12, category: "Backend" },
    { name: "Express", count: 8, category: "Backend" },
    { name: "MongoDB", count: 5, category: "Database" },
  ];
  
  // Filter tags based on search text
  const filteredTags = useMemo(() => {
    if (!searchText) return allTags;
    const searchLower = searchText.toLowerCase();
    return allTags.filter(tag => 
      tag.name.toLowerCase().includes(searchLower) || 
      (tag.category && tag.category.toLowerCase().includes(searchLower))
    );
  }, [searchText, allTags]);
  
  // Group tags by category
  const tagsByCategory = useMemo(() => {
    const grouped: Record<string, TagInfo[]> = {};
    
    filteredTags.forEach(tag => {
      const category = tag.category || "Uncategorized";
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(tag);
    });
    
    // Sort categories alphabetically
    return Object.entries(grouped).sort(([catA], [catB]) => catA.localeCompare(catB));
  }, [filteredTags]);
  
  // Get popular tags (top 5 by count)
  const popularTags = useMemo(() => {
    return [...allTags]
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
  }, [allTags]);
  
  // Tag color based on count
  const getTagColor = (count: number) => {
    if (count >= 20) return "red";
    if (count >= 15) return "orange";
    if (count >= 10) return "green";
    if (count >= 5) return "blue";
    return "default";
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <Breadcrumb
          className="mb-6"
          items={[
            { title: <Link href="/"><HomeOutlined /> Home</Link> },
            { title: "Tags" }
          ]}
        />
        
        <div className="mb-8">
          <Title level={2} className="flex items-center">
            <TagsOutlined className="mr-2" /> Tags
          </Title>
          <Paragraph className="text-gray-600 mt-2">
            Browse all tags used in our blog posts. Click on any tag to see related articles.
          </Paragraph>
          
          <Row gutter={24} className="mt-6">
            <Col span={24} md={16}>
              <Input 
                placeholder="Search tags..." 
                prefix={<SearchOutlined />} 
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
                allowClear
                className="mb-6"
              />
            </Col>
            <Col span={24} md={8}>
              <Card className="bg-gradient-to-r from-orange-50 to-red-50">
                <Statistic 
                  title="Total Tags" 
                  value={allTags.length} 
                  prefix={<TagsOutlined />} 
                />
              </Card>
            </Col>
          </Row>
          
          <Card title={<span><FireOutlined /> Popular Tags</span>} className="mb-6">
            <div className="flex flex-wrap gap-3">
              {popularTags.map(tag => (
                <Link key={tag.name} href={`/tag/${tag.name.toLowerCase()}`}>
                  <Tag color="red" className="text-base py-1 px-3 cursor-pointer">
                    {tag.name} ({tag.count})
                  </Tag>
                </Link>
              ))}
            </div>
          </Card>
        </div>
        
        {tagsByCategory.length > 0 ? (
          <div className="space-y-8">
            {tagsByCategory.map(([category, tags]) => (
              <div key={category}>
                <Title level={4} className="mb-4 pb-2 border-b">{category}</Title>
                <div className="flex flex-wrap gap-3">
                  {tags.map(tag => (
                    <Link key={tag.name} href={`/tag/${tag.name.toLowerCase()}`}>
                      <Tag 
                        color={getTagColor(tag.count)} 
                        className="text-base py-1 px-3 cursor-pointer"
                      >
                        {tag.name} ({tag.count})
                      </Tag>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <TagsOutlined style={{ fontSize: 48 }} className="text-gray-300" />
            <p className="mt-4 text-gray-500">No tags found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
} 
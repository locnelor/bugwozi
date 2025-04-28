"use client";

import { useState, useEffect, useMemo } from "react";
import { 
  Card, 
  Input, 
  List, 
  Tag, 
  Empty, 
  Divider, 
  Typography, 
  Space, 
  Breadcrumb,
  Checkbox,
  Radio,
  Select,
  Button,
  Tooltip
} from "antd";
import { 
  SearchOutlined, 
  HomeOutlined, 
  CalendarOutlined, 
  TagsOutlined, 
  FolderOutlined,
  FilterOutlined,
  SortAscendingOutlined,
  FileTextOutlined,
  ClockCircleOutlined,
  ClearOutlined
} from "@ant-design/icons";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

const { Title, Paragraph, Text } = Typography;
const { Option } = Select;
const { Group: CheckboxGroup } = Checkbox;
const { Group: RadioGroup } = Radio;

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar?: string;
  };
  comments: number;
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") || "";
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchResults, setSearchResults] = useState<Article[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter states
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("relevance");
  
  // Mock articles data
  const allArticles: Article[] = [
    {
      id: "1",
      title: "Getting Started with Next.js",
      excerpt: "Learn how to set up a Next.js project and explore its key features.",
      content: "Next.js is a powerful React framework that makes building web applications simple and efficient. In this guide, we'll explore how to set up a Next.js project and explore its key features. Next.js provides features like server-side rendering, static site generation, and API routes.",
      date: "2023-05-15",
      category: "Programming",
      tags: ["Next.js", "React", "Web Development"],
      author: {
        name: "Alex Johnson",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=male"
      },
      comments: 5
    },
    {
      id: "2",
      title: "Tailwind CSS Best Practices",
      excerpt: "Discover the most efficient ways to use Tailwind CSS in your projects.",
      content: "Tailwind CSS has revolutionized the way developers style their applications. Instead of writing custom CSS, you can apply pre-defined utility classes directly in your HTML. This article covers best practices for using Tailwind efficiently, including component extraction and theme customization.",
      date: "2023-06-20",
      category: "CSS",
      tags: ["Tailwind", "CSS", "Styling"],
      author: {
        name: "Sarah Williams",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=female"
      },
      comments: 8
    },
    {
      id: "3",
      title: "Understanding TypeScript Generics",
      excerpt: "A comprehensive guide to using generics in TypeScript.",
      content: "TypeScript generics are a powerful feature that allows you to create reusable components that work with a variety of types. This guide explains how to use generics effectively, including generic functions, interfaces, classes, and constraints.",
      date: "2023-07-10",
      category: "TypeScript",
      tags: ["TypeScript", "JavaScript", "Programming"],
      author: {
        name: "David Kim",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=male"
      },
      comments: 3
    },
    {
      id: "4",
      title: "State Management in React",
      excerpt: "Comparing different state management approaches in React applications.",
      content: "Effective state management is crucial for building maintainable React applications. This article compares different state management solutions including useState, useContext, Redux, Zustand, and Jotai, with examples showing when to use each approach.",
      date: "2023-07-05",
      category: "React",
      tags: ["React", "State Management", "JavaScript"],
      author: {
        name: "Emily Chen",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=female"
      },
      comments: 7
    },
    {
      id: "5",
      title: "Year in Review: Web Development Trends",
      excerpt: "Looking back at the most important web development trends of 2022.",
      content: "As 2022 comes to a close, we review the most significant trends in web development this year. From the adoption of Web Components to the rise of Edge Functions and the continued evolution of frameworks like React, Vue, and Svelte.",
      date: "2022-12-28",
      category: "Web Development",
      tags: ["Web Dev", "Trends", "Year Review"],
      author: {
        name: "Michael Lee",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=male"
      },
      comments: 10
    },
    {
      id: "6",
      title: "Building a Blog with Next.js and Ant Design",
      excerpt: "A guide on how to build a beautiful blog using Next.js and Ant Design.",
      content: "In this tutorial, we'll build a complete blog application with Next.js and Ant Design. The blog will feature a responsive design, dark mode support, article categorization, and a search function. We'll implement server-side rendering for SEO and fast page loads.",
      date: "2023-08-15",
      category: "Next.js",
      tags: ["Next.js", "Ant Design", "Blog"],
      author: {
        name: "Jennifer Wu",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=female"
      },
      comments: 2
    },
    {
      id: "7",
      title: "Introduction to GraphQL",
      excerpt: "Learn the basics of GraphQL and how it differs from REST.",
      content: "GraphQL is a query language for APIs and a runtime for executing those queries against your data. This article introduces GraphQL concepts including schemas, resolvers, queries, mutations, and subscriptions, and explains how GraphQL differs from traditional REST APIs.",
      date: "2023-04-12",
      category: "API Development",
      tags: ["GraphQL", "API", "Backend"],
      author: {
        name: "Robert Smith",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=male"
      },
      comments: 6
    },
    {
      id: "8",
      title: "Modern CSS Techniques",
      excerpt: "Explore the latest CSS features and techniques for modern web development.",
      content: "CSS has evolved significantly in recent years with powerful new features like Grid, Flexbox, Custom Properties, and Container Queries. This article showcases modern CSS techniques that can replace JavaScript in many UI implementations, making your sites faster and more maintainable.",
      date: "2023-03-20",
      category: "CSS",
      tags: ["CSS", "Frontend", "Web Design"],
      author: {
        name: "Laura Johnson",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=female"
      },
      comments: 9
    }
  ];
  
  // Get unique categories and tags
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(allArticles.map(article => article.category)));
    return uniqueCategories.map(category => ({
      label: category,
      value: category
    }));
  }, [allArticles]);
  
  const tags = useMemo(() => {
    const allTags = allArticles.flatMap(article => article.tags);
    const uniqueTags = Array.from(new Set(allTags));
    return uniqueTags.map(tag => ({
      label: tag,
      value: tag
    }));
  }, [allArticles]);
  
  // Perform search when query changes
  useEffect(() => {
    if (initialQuery) {
      setIsSearching(true);
      
      // Simulate API call with setTimeout
      setTimeout(() => {
        performSearch();
        setIsSearching(false);
      }, 500);
    }
  }, [initialQuery]);
  
  const performSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    
    setIsSearching(true);
    
    // In a real app, this would be an API call
    // For now, we'll filter the mock data
    setTimeout(() => {
      const query = searchQuery.toLowerCase();
      let results = allArticles.filter(article => 
        article.title.toLowerCase().includes(query) || 
        article.content.toLowerCase().includes(query) || 
        article.excerpt.toLowerCase().includes(query) ||
        article.tags.some(tag => tag.toLowerCase().includes(query)) ||
        article.category.toLowerCase().includes(query)
      );
      
      // Apply category filter
      if (selectedCategories.length > 0) {
        results = results.filter(article => 
          selectedCategories.includes(article.category)
        );
      }
      
      // Apply tag filter
      if (selectedTags.length > 0) {
        results = results.filter(article => 
          article.tags.some(tag => selectedTags.includes(tag))
        );
      }
      
      // Apply date filter
      if (dateRange !== "all") {
        const now = new Date();
        const dateFilters = {
          "last-week": new Date(now.setDate(now.getDate() - 7)),
          "last-month": new Date(now.setMonth(now.getMonth() - 1)),
          "last-year": new Date(now.setFullYear(now.getFullYear() - 1)),
        };
        
        if (dateRange in dateFilters) {
          const cutoffDate = dateFilters[dateRange as keyof typeof dateFilters];
          results = results.filter(article => 
            new Date(article.date) >= cutoffDate
          );
        }
      }
      
      // Apply sorting
      switch (sortBy) {
        case "date-newest":
          results.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
          break;
        case "date-oldest":
          results.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
          break;
        case "title-az":
          results.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "title-za":
          results.sort((a, b) => b.title.localeCompare(a.title));
          break;
        // For "relevance", we keep the original order which is based on match quality
      }
      
      setSearchResults(results);
      setIsSearching(false);
      
      // Update URL with search query
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }, 500);
  };
  
  const handleSearch = () => {
    performSearch();
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      performSearch();
    }
  };
  
  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedTags([]);
    setDateRange("all");
    setSortBy("relevance");
  };
  
  // Highlight search terms in text
  const highlightText = (text: string, searchTerms: string[]) => {
    if (!searchTerms.length) return text;
    
    let result = text;
    searchTerms.forEach(term => {
      if (term.length < 3) return; // Skip short terms
      
      const regex = new RegExp(`(${term})`, 'gi');
      result = result.replace(regex, '<span class="bg-yellow-200">$1</span>');
    });
    
    return result;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <Breadcrumb
          className="mb-6"
          items={[
            { title: <Link href="/"><HomeOutlined /> Home</Link> },
            { title: "Search" }
          ]}
        />
        
        <div className="mb-8">
          <Title level={2} className="flex items-center mb-4">
            <SearchOutlined className="mr-2" /> Search Articles
          </Title>
          
          <div className="flex items-center gap-2">
            <Input.Search
              placeholder="Search articles, tags, or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onSearch={handleSearch}
              onKeyPress={handleKeyPress}
              loading={isSearching}
              enterButton
              size="large"
              className="w-full"
              prefix={<SearchOutlined />}
            />
            
            <Tooltip title="Toggle Filters">
              <Button 
                icon={<FilterOutlined />} 
                size="large"
                type={showFilters ? "primary" : "default"}
                onClick={() => setShowFilters(!showFilters)}
              />
            </Tooltip>
          </div>
          
          {/* Filters Section */}
          {showFilters && (
            <div className="mt-4 p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <Title level={4} style={{ margin: 0 }}>Filters & Sorting</Title>
                <Button 
                  icon={<ClearOutlined />} 
                  onClick={clearFilters}
                  type="text"
                >
                  Clear All
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <div className="font-medium mb-2">Categories</div>
                  <CheckboxGroup
                    options={categories}
                    value={selectedCategories}
                    onChange={(values) => setSelectedCategories(values as string[])}
                    className="flex flex-col gap-1"
                  />
                </div>
                
                <div>
                  <div className="font-medium mb-2">Tags</div>
                  <Select
                    mode="multiple"
                    placeholder="Select tags"
                    value={selectedTags}
                    onChange={(values) => setSelectedTags(values)}
                    style={{ width: '100%' }}
                    maxTagCount={3}
                  >
                    {tags.map(tag => (
                      <Option key={tag.value} value={tag.value}>{tag.label}</Option>
                    ))}
                  </Select>
                </div>
                
                <div>
                  <div className="font-medium mb-2">Date Range</div>
                  <RadioGroup
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    className="flex flex-col gap-1"
                  >
                    <Radio value="all">All Time</Radio>
                    <Radio value="last-week">Last Week</Radio>
                    <Radio value="last-month">Last Month</Radio>
                    <Radio value="last-year">Last Year</Radio>
                  </RadioGroup>
                </div>
                
                <div>
                  <div className="font-medium mb-2">Sort By</div>
                  <RadioGroup
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="flex flex-col gap-1"
                  >
                    <Radio value="relevance">Relevance</Radio>
                    <Radio value="date-newest">Date (Newest First)</Radio>
                    <Radio value="date-oldest">Date (Oldest First)</Radio>
                    <Radio value="title-az">Title (A-Z)</Radio>
                    <Radio value="title-za">Title (Z-A)</Radio>
                  </RadioGroup>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <Button 
                  type="primary" 
                  onClick={performSearch}
                  icon={<SearchOutlined />}
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          )}
        </div>
        
        {/* Search Results */}
        {searchQuery && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <Title level={3} style={{ margin: 0 }}>
                Search Results
                {searchResults.length > 0 && (
                  <span className="text-gray-500 text-lg font-normal ml-2">
                    ({searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} for "{searchQuery}")
                  </span>
                )}
              </Title>
              
              {searchResults.length > 0 && (
                <div className="flex items-center gap-2">
                  <SortAscendingOutlined />
                  <span>Sorted by: </span>
                  <Select
                    value={sortBy}
                    onChange={setSortBy}
                    style={{ width: 180 }}
                    bordered={false}
                  >
                    <Option value="relevance">Relevance</Option>
                    <Option value="date-newest">Date (Newest First)</Option>
                    <Option value="date-oldest">Date (Oldest First)</Option>
                    <Option value="title-az">Title (A-Z)</Option>
                    <Option value="title-za">Title (Z-A)</Option>
                  </Select>
                </div>
              )}
            </div>
            
            {isSearching ? (
              <div className="text-center py-12">
                <div className="animate-pulse flex flex-col items-center">
                  <SearchOutlined style={{ fontSize: 48 }} className="text-gray-300 mb-4" />
                  <p className="text-gray-500">Searching...</p>
                </div>
              </div>
            ) : searchResults.length > 0 ? (
              <List
                itemLayout="vertical"
                dataSource={searchResults}
                renderItem={(article) => {
                  const searchTerms = searchQuery.toLowerCase().split(' ').filter(term => term.length > 2);
                  const highlightedExcerpt = highlightText(article.excerpt, searchTerms);
                  
                  return (
                    <List.Item>
                      <Card className="w-full mb-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                          <Link href={`/article/${article.id}`} className="text-xl font-semibold hover:text-blue-600 transition-colors">
                            <span dangerouslySetInnerHTML={{ 
                              __html: highlightText(article.title, searchTerms) 
                            }} />
                          </Link>
                          
                          <Space>
                            <Tag color="blue" icon={<FolderOutlined />}>
                              <Link href={`/category/${article.category.toLowerCase()}`} className="text-inherit">
                                {article.category}
                              </Link>
                            </Tag>
                          </Space>
                        </div>
                        
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <Space>
                            <CalendarOutlined /> 
                            <span>{article.date}</span>
                          </Space>
                          <Divider type="vertical" />
                          <Space>
                            <FileTextOutlined />
                            <span>{article.comments} comments</span>
                          </Space>
                          <Divider type="vertical" />
                          <Space>
                            <ClockCircleOutlined />
                            <span>5 min read</span>
                          </Space>
                        </div>
                        
                        <Paragraph 
                          className="mt-3 text-gray-700"
                          dangerouslySetInnerHTML={{ __html: highlightedExcerpt }}
                        />
                        
                        <div className="mt-3 flex flex-wrap gap-2">
                          {article.tags.map(tag => (
                            <Link key={tag} href={`/tag/${tag.toLowerCase()}`}>
                              <Tag 
                                color="processing" 
                                icon={<TagsOutlined />}
                                className="cursor-pointer"
                              >
                                {tag}
                              </Tag>
                            </Link>
                          ))}
                        </div>
                        
                        <div className="mt-4">
                          <Link 
                            href={`/article/${article.id}`} 
                            className="text-blue-600 hover:text-blue-800"
                          >
                            Read more →
                          </Link>
                        </div>
                      </Card>
                    </List.Item>
                  );
                }}
              />
            ) : (
              <Empty 
                description={
                  <span>
                    No results found for "<strong>{searchQuery}</strong>"
                    <p className="mt-2 text-gray-500">
                      Try different keywords or remove filters
                    </p>
                  </span>
                }
                className="py-12"
              />
            )}
          </div>
        )}
        
        {/* Initial State - No Search Yet */}
        {!searchQuery && !isSearching && (
          <div className="text-center py-16">
            <SearchOutlined style={{ fontSize: 64 }} className="text-gray-300 mb-6" />
            <Title level={3}>Search for Articles</Title>
            <Paragraph className="text-gray-500 max-w-lg mx-auto">
              Enter a keyword above to search for articles, tags, or categories. 
              Use the filters to narrow down your results by category, date, or specific tags.
            </Paragraph>
            <div className="mt-8">
              <Title level={4}>Popular Searches</Title>
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                {["React", "Next.js", "TypeScript", "CSS", "State Management"].map(term => (
                  <Button
                    key={term}
                    onClick={() => {
                      setSearchQuery(term);
                      performSearch();
                    }}
                  >
                    {term}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 
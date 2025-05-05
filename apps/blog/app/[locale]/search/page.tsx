import {
  Card,
  Input,
  Tag,
  Empty,
  Divider,
  Typography,
  Space,
  Breadcrumb,
  Button,
  Tooltip
} from "antd";
import {
  SearchOutlined,
  HomeOutlined,
  CalendarOutlined,
  TagsOutlined,
  FolderOutlined,
  SortAscendingOutlined,
  UserOutlined,
  MessageOutlined
} from "@ant-design/icons";
import Link from "next/link";
import { prisma } from "@pkg/database";
import { Suspense } from "react";

const { Title, Paragraph, Text } = Typography;

// Client-side component for interactive filtering
// const SearchFilters = dynamic(() => import('./SearchFilters'), { ssr: false });
import SearchFilters from "./SearchFilters";

// Article type definition from Prisma schema
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

// Highlight text with search terms - server side implementation
function highlightText(text: string, query: string) {
  if (!query) return text;

  // Simple implementation for server-side
  const searchTerms = query.toLowerCase().split(' ').filter(Boolean);

  // For server-side rendering, we'll use a simpler approach
  // We'll split at a maximum of 150 characters for excerpt
  return text.length > 150 ? `${text.substring(0, 150)}...` : text;
}

// Server-side search function
async function searchArticles(
  query?: string,
  categories?: string[],
  tags?: string[],
  dateRange?: string,
  sortBy?: string
): Promise<Article[]> {
  try {
    // Build search conditions for Prisma
    const where: any = {
      status: true,
      published: true
    };

    // Search in title, content, and excerpt
    if (query) {
      where.OR = [
        { title: { contains: query } },
        { content: { contains: query } },
        { excerpt: { contains: query } }
      ];
    }

    // Filter by categories
    if (categories && categories.length > 0) {
      where.categoriesId = {
        in: categories
      };
    }

    // Filter by tags
    if (tags && tags.length > 0) {
      where.tags = {
        some: {
          tag: {
            name: {
              in: tags
            }
          }
        }
      };
    }

    // Date range filter
    if (dateRange && dateRange !== 'all') {
      const now = new Date();
      let startDate = new Date();

      switch (dateRange) {
        case 'day':
          startDate.setDate(now.getDate() - 1);
          break;
        case 'week':
          startDate.setDate(now.getDate() - 7);
          break;
        case 'month':
          startDate.setMonth(now.getMonth() - 1);
          break;
        case 'year':
          startDate.setFullYear(now.getFullYear() - 1);
          break;
      }

      where.publishedAt = {
        gte: startDate
      };
    }

    // Determine sort order
    let orderBy: any = {};
    switch (sortBy) {
      case 'date-desc':
        orderBy = { publishedAt: 'desc' };
        break;
      case 'date-asc':
        orderBy = { publishedAt: 'asc' };
        break;
      case 'title':
        orderBy = { title: 'asc' };
        break;
      case 'comments':
        orderBy = { comments: { _count: 'desc' } };
        break;
      default:
        orderBy = { publishedAt: 'desc' }; // Default to most recent
    }

    // Fetch articles with related data
    const articles = await prisma.blog_posts.findMany({
      where,
      orderBy,
      include: {
        categories: true,
        user: true,
        tags: {
          include: {
            tag: true
          }
        },
        comments: true
      },
      take: 20 // Limit results
    });

    // Transform database results to Article format
    return articles.map(article => {
      return {
        id: article.uid,
        title: article.title,
        excerpt: article.excerpt || '',
        content: article.content,
        date: article.publishedAt ? new Date(article.publishedAt).toISOString().split('T')[0] : '',
        category: article.categories?.name || 'Uncategorized',
        tags: article.tags.map(tag => tag.tag.name),
        author: {
          name: article.user.name,
          avatar: '/images/avatar-placeholder.png' // Placeholder
        },
        comments: article.comments.length
      };
    });

  } catch (error) {
    console.error('Error searching articles:', error);
    return [];
  }
}

// Server-side function to get all categories
async function getAllCategories() {
  try {
    const categories = await prisma.blog_categories.findMany({
      orderBy: {
        name: 'asc'
      }
    });

    return categories.map(category => ({
      label: category.name,
      value: category.uid
    }));
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Server-side function to get all tags
async function getAllTags() {
  try {
    const tags = await prisma.blog_tag.findMany({
      orderBy: {
        name: 'asc'
      }
    });

    return tags.map(tag => ({
      label: tag.name,
      value: tag.uid
    }));
  } catch (error) {
    console.error('Error fetching tags:', error);
    return [];
  }
}

// Article card component
function ArticleCard({ article, searchQuery }: { article: Article, searchQuery?: string }) {
  return (
    <Card
      hoverable
      className="mb-4"
    >
      <div className="flex justify-between items-start mb-2">
        <Link href={`/article/${article.id}`} className="text-xl font-bold text-blue-600 hover:text-blue-800">
          {article.title}
        </Link>
        <div>
          <Tag color="blue" icon={<FolderOutlined />}>
            <Link href={`/category/${article.category.toLowerCase()}`} className="text-blue-700">
              {article.category}
            </Link>
          </Tag>
        </div>
      </div>

      <div className="text-gray-500 mb-3 flex items-center space-x-4">
        <span className="flex items-center">
          <CalendarOutlined className="mr-1" /> {article.date}
        </span>
        <span className="flex items-center">
          <UserOutlined className="mr-1" /> {article.author.name}
        </span>
        <span className="flex items-center">
          <MessageOutlined className="mr-1" /> {article.comments} comments
        </span>
      </div>

      <Paragraph className="mb-3">
        {highlightText(article.excerpt, searchQuery || '')}
      </Paragraph>

      <div className="flex flex-wrap gap-2">
        {article.tags.map(tag => (
          <Tag key={tag} icon={<TagsOutlined />}>
            <Link href={`/tag/${tag.toLowerCase()}`} className="text-gray-600">
              {tag}
            </Link>
          </Tag>
        ))}
      </div>
    </Card>
  );
}

export default async function SearchPage({ searchParams }: {
  searchParams: {
    q?: string,
    categories?: string,
    tags?: string,
    date?: string,
    sort?: string
  }
}) {
  // Get search parameters from URL
  const query = searchParams.q || '';
  const categories = searchParams.categories ? searchParams.categories.split(',') : [];
  const tags = searchParams.tags ? searchParams.tags.split(',') : [];
  const dateRange = searchParams.date || 'all';
  const sortBy = searchParams.sort || 'relevance';

  // Fetch data
  const [articles, allCategories, allTags] = await Promise.all([
    searchArticles(query, categories, tags, dateRange, sortBy),
    getAllCategories(),
    getAllTags()
  ]);

  // Filter options for client-side
  const dateOptions = [
    { label: "All Time", value: "all" },
    { label: "Last 24 Hours", value: "day" },
    { label: "Last Week", value: "week" },
    { label: "Last Month", value: "month" },
    { label: "Last Year", value: "year" }
  ];

  const sortOptions = [
    { label: "Relevance", value: "relevance" },
    { label: "Newest First", value: "date-desc" },
    { label: "Oldest First", value: "date-asc" },
    { label: "Title A-Z", value: "title" },
    { label: "Most Comments", value: "comments" }
  ];

  // Encoded search state for client-side hydration
  const searchState = {
    query,
    categories,
    tags,
    dateRange,
    sortBy,
    allCategories,
    allTags,
    dateOptions,
    sortOptions
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <Breadcrumb
          className="mb-6"
          items={[
            { title: <Link href="/"><HomeOutlined /> Home</Link> },
            { title: "Search Results" }
          ]}
        />

        <div className="mb-8">
          <Title level={2} className="mb-6">
            Search Results {query ? `for "${query}"` : ''}
          </Title>

          {/* Server-side search form */}
          <form action="/search" method="GET" className="mb-6">
            <div className="relative max-w-3xl">
              <Input
                name="q"
                placeholder="Search articles..."
                defaultValue={query}
                prefix={<SearchOutlined />}
                size="large"
                className="pr-20"
              />
              <Button
                type="primary"
                htmlType="submit"
                className="absolute right-0 top-0 h-full rounded-l-none"
              >
                Search
              </Button>
            </div>

            {/* Hidden inputs to preserve filter state */}
            {categories.length > 0 && (
              <input type="hidden" name="categories" value={categories.join(',')} />
            )}
            {tags.length > 0 && (
              <input type="hidden" name="tags" value={tags.join(',')} />
            )}
            {dateRange !== 'all' && (
              <input type="hidden" name="date" value={dateRange} />
            )}
            {sortBy !== 'relevance' && (
              <input type="hidden" name="sort" value={sortBy} />
            )}
          </form>

          {/* Client-side filters */}
          <Suspense fallback={
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p>Loading search filters...</p>
            </div>
          }>
            <SearchFilters initialState={searchState} />
          </Suspense>
        </div>

        {/* Search metadata */}
        <div className="mb-6 flex justify-between items-center">
          <div>
            <Text>Found {articles.length} results</Text>
            {(categories.length > 0 || tags.length > 0 || dateRange !== 'all') && (
              <Text className="ml-2 text-gray-500">
                (with filters applied)
              </Text>
            )}
          </div>

          <div>
            <Tooltip title="Sorting options available in filters">
              <span className="flex items-center">
                <SortAscendingOutlined className="mr-2" />
                Sorted by: {sortOptions.find(opt => opt.value === sortBy)?.label || 'Relevance'}
              </span>
            </Tooltip>
          </div>
        </div>

        {/* Results list */}
        <div>
          {articles.length > 0 ? (
            <div className="space-y-4">
              {articles.map(article => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  searchQuery={query}
                />
              ))}
            </div>
          ) : (
            <Empty
              description={
                <div>
                  <p className="text-lg mb-2">No articles found</p>
                  <p className="text-gray-500">
                    Try adjusting your search terms or filters
                  </p>
                </div>
              }
              className="py-12"
            />
          )}
        </div>

        {/* Client-side search data for hydration */}
        <script
          id="search-data"
          type="application/json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(searchState)
          }}
        />
      </div>
    </div>
  );
} 
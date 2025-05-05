import { Card, Row, Col, Button, Divider } from 'antd';
import { LinkOutlined, ShakeOutlined } from '@ant-design/icons';
import { prisma } from '@pkg/database';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';
import LinkApplyForm from './LinkApplyForm';
import LinkClientJS from './LinkClientJS';
// 友情链接类型定义
interface FriendlyLink {
  id: string;
  name: string;
  url: string;
  description: string;
  logo: string;
  category: string;
  featured: boolean;
  sort: number;
  clicks: number;
}

// 数据库链接类型定义
interface DbLink {
  uid: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  url: string;
  logo: string | null;
  description: string | null;
  sort: number;
  status: boolean;
  clicks: number;
}

// 分类配置
const CATEGORIES = [
  { value: 'all', label: '全部' },
  { value: 'tech', label: '技术' },
  { value: 'design', label: '设计' },
  { value: 'tools', label: '工具' },
  { value: 'resources', label: '资源' },
  { value: 'community', label: '社区' },
  { value: 'blog', label: '博客' },
  { value: 'partner', label: '合作伙伴' },
];

// 获取分类图标
function getCategoryIcon(category: string) {
  return <span className="category-icon">{category}</span>;
}

// 获取分类颜色
function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    tech: 'bg-blue-100 text-blue-800',
    design: 'bg-purple-100 text-purple-800',
    tools: 'bg-yellow-100 text-yellow-800',
    resources: 'bg-green-100 text-green-800',
    community: 'bg-indigo-100 text-indigo-800',
    blog: 'bg-pink-100 text-pink-800',
    partner: 'bg-red-100 text-red-800'
  };
  return colors[category] || 'bg-gray-100 text-gray-800';
}

// 获取分类名称
function getCategoryName(category: string): string {
  const names: Record<string, string> = {
    tech: '技术',
    design: '设计',
    tools: '工具',
    resources: '资源',
    community: '社区',
    blog: '博客',
    partner: '合作伙伴'
  };
  return names[category] || '其他';
}

// 从描述中提取分类信息
function getCategoryFromDescription(description: string | null): string {
  if (!description) return "blog";

  const categoryMatch = description.match(/\[(.*?)\]/);
  if (categoryMatch && categoryMatch[1]) {
    return categoryMatch[1].toLowerCase();
  }

  return "blog";
}

// 从数据库获取并转换友情链接数据
async function getFriendlyLinks(searchQuery?: string, categoryFilter?: string): Promise<FriendlyLink[]> {
  try {
    // 构建查询条件
    const where: any = {
      status: true
    };

    // 如果有搜索词，添加搜索条件（名称或描述包含搜索词）
    if (searchQuery) {
      where.OR = [
        { name: { contains: searchQuery } },
        { description: { contains: searchQuery } }
      ];
    }

    const links = await prisma.blog_links.findMany({
      where,
      orderBy: [
        { sort: 'asc' },
        { createdAt: 'desc' }
      ]
    });

    // 转换为前端友情链接对象
    const friendlyLinks = links.map((link: DbLink) => {
      const category = getCategoryFromDescription(link.description);
      return {
        id: link.uid,
        name: link.name,
        url: link.url,
        description: link.description || '',
        logo: link.logo || '/images/default-logo.png', // 默认logo
        category,
        featured: link.sort > 5, // 排序值大于5的认为是精选
        sort: link.sort,
        clicks: link.clicks
      };
    });

    // 如果有分类过滤，且不是 'all'，再过滤一次
    if (categoryFilter && categoryFilter !== 'all') {
      return friendlyLinks.filter(link => link.category === categoryFilter);
    }

    return friendlyLinks;
  } catch (error) {
    console.error('Error fetching links:', error);
    return [];
  }
}

// 链接卡片组件
function LinkCard({ link }: { link: FriendlyLink }) {
  return (
    <Card
      hoverable
      className="h-full flex flex-col"
      cover={
        <div className="h-24 flex items-center justify-center p-4 bg-gray-50">
          <Image
            src={link.logo}
            alt={link.name}
            width={96}
            height={48}
            style={{ objectFit: 'contain' }}
          />
        </div>
      }
    >
      <Card.Meta
        title={
          <Link
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            data-link-id={link.id}
            className="text-blue-600 hover:text-blue-800"
          >
            {link.name}
          </Link>
        }
        description={
          <div>
            <p className="mb-2 text-gray-600 line-clamp-2">{link.description}</p>
            <div className="flex justify-between items-center mt-2">
              <span className={`px-2 py-1 text-xs rounded-full ${getCategoryColor(link.category)}`}>
                {getCategoryIcon(link.category)} {getCategoryName(link.category)}
              </span>
              <span className="text-xs text-gray-500">{link.clicks} 访问</span>
            </div>
          </div>
        }
      />
    </Card>
  );
}

// SSR 预渲染分类选择器
function CategorySelector({ initialCategory, categories }: { initialCategory: string, categories: Array<{ value: string, label: string }> }) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <a
            key={category.value}
            href={`?category=${category.value}`}
            className={`px-4 py-2 rounded-full border transition-colors ${initialCategory === category.value
              ? 'bg-blue-500 text-white border-blue-500'
              : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
              }`}
          >
            {category.label}
          </a>
        ))}
      </div>
    </div>
  );
}

// 搜索表单 - 使用标准 HTML 表单进行 SSR
function SearchForm({ initialValue }: { initialValue: string }) {
  return (
    <form className="mb-8" action="" method="get">
      <div className="relative max-w-md">
        <input
          type="text"
          name="q"
          defaultValue={initialValue}
          placeholder="搜索站点..."
          className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </span>
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700"
        >
          搜索
        </button>
      </div>
    </form>
  );
}

export default async function LinksPage({ searchParams }: { searchParams: { q?: string, category?: string } }) {
  // 获取URL查询参数
  const searchQuery = searchParams.q;
  const categoryFilter = searchParams.category;

  // 获取链接数据，带上查询参数
  const links = await getFriendlyLinks(searchQuery, categoryFilter);

  // 提取精选链接
  const featuredLinks = links.filter((link: FriendlyLink) => link.featured);

  // 按分类整理链接
  const linksByCategory: Record<string, FriendlyLink[]> = {};
  links.forEach((link: FriendlyLink) => {
    if (!linksByCategory[link.category]) {
      linksByCategory[link.category] = [];
    }
    linksByCategory[link.category].push(link);
  });

  // 初始搜索值（用于搜索框的默认值）
  const initialSearchValue = searchQuery || '';
  // 初始分类（用于分类选择器的默认值）
  const initialCategory = categoryFilter || 'all';

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">友情链接</h1>

      {/* 客户端交互脚本 */}
      <Suspense fallback={null}>
        <LinkClientJS />
      </Suspense>

      {/* 服务端渲染的搜索表单 */}
      <SearchForm initialValue={initialSearchValue} />

      {/* 服务端渲染的分类选择器 */}
      <CategorySelector initialCategory={initialCategory} categories={CATEGORIES} />

      {/* 搜索结果统计 */}
      {searchQuery && (
        <div className="mb-6 bg-gray-50 p-4 rounded">
          <p className="text-gray-700">
            搜索 "<span className="font-semibold">{searchQuery}</span>"
            {categoryFilter && categoryFilter !== 'all' && (
              <span> 在 <span className="font-semibold">{getCategoryName(categoryFilter)}</span> 分类下</span>
            )}
            找到 {links.length} 个结果
          </p>
        </div>
      )}

      {/* 精选链接 */}
      {(!searchQuery || links.length > 0) && initialCategory === 'all' && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <LinkOutlined className="mr-2" /> 精选推荐
          </h2>
          {featuredLinks.length > 0 ? (
            <Row gutter={[16, 16]}>
              {featuredLinks.map(link => (
                <Col xs={24} sm={12} md={8} lg={6} key={link.id}>
                  <LinkCard link={link} />
                </Col>
              ))}
            </Row>
          ) : (
            searchQuery && <p className="text-gray-500">未找到相关的精选推荐</p>
          )}
        </section>
      )}

      {/* 显示无结果提示 */}
      {searchQuery && links.length === 0 && (
        <div className="text-center p-8 bg-gray-50 rounded-lg mb-12">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-xl font-bold mb-2">未找到相关链接</h3>
          <p className="text-gray-600 mb-4">
            没有找到与 "{searchQuery}"
            {categoryFilter && categoryFilter !== 'all' && (
              <span> 在 {getCategoryName(categoryFilter)} 分类下</span>
            )}
            相关的链接
          </p>
          <Button type="primary" href="/links">
            查看所有链接
          </Button>
        </div>
      )}

      {/* 所有链接 */}
      {links.length > 0 && initialCategory === 'all' && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">所有链接</h2>
          <Row gutter={[16, 16]}>
            {links.map(link => (
              <Col xs={24} sm={12} md={8} lg={6} key={link.id}>
                <LinkCard link={link} />
              </Col>
            ))}
          </Row>
        </section>
      )}

      {/* 分类链接 */}
      {initialCategory !== 'all' && linksByCategory[initialCategory] && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            {getCategoryIcon(initialCategory)} {getCategoryName(initialCategory)}
          </h2>
          <Row gutter={[16, 16]}>
            {linksByCategory[initialCategory].map(link => (
              <Col xs={24} sm={12} md={8} lg={6} key={link.id}>
                <LinkCard link={link} />
              </Col>
            ))}
          </Row>
        </section>
      )}

      {/* 申请友链 */}
      <section className="mt-16 mb-12 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <ShakeOutlined className="mr-2" /> 申请友链
        </h2>
        <p className="mb-6">
          我们欢迎高质量的网站申请友情链接，请确保您的网站满足以下条件：
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>网站内容健康，无违法违规内容</li>
          <li>网站已稳定运行至少3个月</li>
          <li>网站设计美观，用户体验良好</li>
          <li>网站内容原创度高，更新频率稳定</li>
          <li>已在您的网站添加本站友链</li>
        </ul>

        <Divider />

        <Row gutter={24}>
          <Col xs={24} md={12}>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">我的信息</h3>
              <ul className="list-disc pl-6">
                <li>名称：BugWoZi 博客</li>
                <li>网址：https://bugwozi.com</li>
                <li>描述：专注于Web开发和前端技术分享</li>
                <li>Logo：https://bugwozi.com/images/logo.png</li>
              </ul>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">申请表单</h3>
              <Suspense fallback={<div>加载表单中...</div>}>
                <LinkApplyForm />
              </Suspense>
            </div>
          </Col>
        </Row>
      </section>

      {/* 客户端增强脚本 */}
      <script id="links-data" type="application/json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          categories: CATEGORIES,
          initialCategory,
          searchQuery
        })
      }} />
    </div>
  );
}
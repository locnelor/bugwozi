"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { 
  Card, 
  Tag, 
  Divider, 
  Avatar, 
  Skeleton, 
  Button, 
  Form, 
  Input, 
  List, 
  Typography, 
  message 
} from 'antd';
import { 
  CalendarOutlined, 
  TagOutlined, 
  FolderOutlined, 
  EyeOutlined, 
  LikeOutlined, 
  CommentOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Link } from '#/i18n/navigation';

const { TextArea } = Input;
const { Title, Paragraph, Text } = Typography;

// 定义文章和评论类型
interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  avatar: string;
}

interface Article {
  id: string;
  title: string;
  date: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  authorAvatar: string;
  comments: Comment[];
  views: number;
  likes: number;
}

// 模拟文章数据
const mockArticles: Record<string, Article> = {
  "1": {
    id: "1",
    title: "Getting Started with Next.js",
    date: "2023-05-15",
    content: `
# Getting Started with Next.js

Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.

## Creating a Next.js App

To create a Next.js app, open your terminal, cd into the directory you'd like to create the app in, and run the following command:

\`\`\`bash
npx create-next-app@latest
\`\`\`

This will give you a template with everything set up for you, including:

- A basic page structure
- ESLint rules
- Tailwind CSS configuration

## Understanding the File Structure

The Next.js app consists of several key directories:

- **pages/**: Where your routes live (in Pages Router)
- **app/**: Where your routes live (in App Router)
- **public/**: Static assets like images
- **styles/**: Global styles

## Page Navigation

Next.js has a file-system based router built on the concept of pages. When a file is added to the pages directory, it's automatically available as a route.

For example, \`pages/about.js\` will be mapped to \`/about\`.

## Data Fetching

Next.js provides various ways to fetch data:

1. **getStaticProps**: Fetch data at build time
2. **getServerSideProps**: Fetch data on each request
3. **getStaticPaths**: Specify dynamic routes
4. **Client-side fetching**: Using SWR or React Query

## Conclusion

Next.js provides an excellent developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.
    `,
    category: "Programming",
    tags: ["Next.js", "React", "Web Development"],
    author: "John Doe",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    comments: [
      { id: "1", author: "Sarah", content: "This was really helpful, thanks!", date: "2023-05-16", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah" },
      { id: "2", author: "Mike", content: "Great introduction! Looking forward to more articles on Next.js.", date: "2023-05-17", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike" }
    ],
    views: 1245,
    likes: 78
  }
};

export default function ArticlePage() {
  const t = useTranslations();
  const params = useParams();
  const id = params.id as string;
  
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [commentForm] = Form.useForm();

  // 模拟数据加载
  useEffect(() => {
    const fetchArticle = async () => {
      // 在实际应用中，这里会是一个API调用
      setTimeout(() => {
        setArticle(mockArticles[id] || null);
        setLoading(false);
      }, 800);
    };

    fetchArticle();
  }, [id]);

  const handleLike = () => {
    setArticle((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        likes: prev.likes + 1
      };
    });
    message.success(t('Article.likeSuccess'));
  };

  const handleCommentSubmit = (values: { comment: string }) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      author: "Guest User",
      content: values.comment,
      date: new Date().toISOString().split('T')[0],
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=guest"
    };
    
    setArticle((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        comments: [...prev.comments, newComment]
      };
    });
    
    commentForm.resetFields();
    message.success(t('Article.commentSuccess'));
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <Skeleton active avatar paragraph={{ rows: 4 }} />
        </Card>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <Title level={2}>{t('Article.notFound')}</Title>
        <Paragraph>{t('Article.notFoundDesc')}</Paragraph>
        <Button type="primary">
          <Link href="/">{t('Article.backToHome')}</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <Title level={1}>{article.title}</Title>
        
        <div className="flex flex-wrap items-center text-gray-500 mb-6">
          <div className="flex items-center mr-6">
            <Avatar src={article.authorAvatar} icon={<UserOutlined />} />
            <span className="ml-2">{article.author}</span>
          </div>
          <div className="flex items-center mr-6">
            <CalendarOutlined className="mr-1" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center mr-6">
            <FolderOutlined className="mr-1" />
            <Link href={`/category/${article.category.toLowerCase()}`}>
              {article.category}
            </Link>
          </div>
          <div className="flex items-center mr-6">
            <EyeOutlined className="mr-1" />
            <span>{article.views} {t('Article.views')}</span>
          </div>
          <div className="flex items-center">
            <CommentOutlined className="mr-1" />
            <span>{article.comments.length} {t('Page.comment')}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <TagOutlined className="mr-2" />
          {article.tags.map((tag: string) => (
            <Tag key={tag} color="blue" className="mr-2">
              <Link href={`/tag/${tag.toLowerCase()}`}>{tag}</Link>
            </Tag>
          ))}
        </div>
        
        <Divider />
        
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br>') }} />
        
        <Divider />
        
        <div className="flex justify-between items-center">
          <Button 
            type="primary" 
            icon={<LikeOutlined />} 
            onClick={handleLike}
          >
            {t('Article.like')} ({article.likes})
          </Button>
          
          <div className="flex space-x-4">
            <Button>
              <Link href="/">{t('Article.backToList')}</Link>
            </Button>
          </div>
        </div>
      </Card>
      
      <Card title={`${t('Article.comments')} (${article.comments.length})`} className="mb-8">
        <List
          itemLayout="horizontal"
          dataSource={article.comments}
          renderItem={(comment: Comment) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={comment.avatar} icon={<UserOutlined />} />}
                title={
                  <div className="flex justify-between">
                    <span>{comment.author}</span>
                    <span className="text-gray-500 text-sm">{comment.date}</span>
                  </div>
                }
                description={comment.content}
              />
            </List.Item>
          )}
        />
      </Card>
      
      <Card title={t('Article.leaveComment')}>
        <Form form={commentForm} onFinish={handleCommentSubmit}>
          <Form.Item 
            name="comment" 
            rules={[{ required: true, message: t('Article.commentRequired') }]}
          >
            <TextArea rows={4} placeholder={t('Article.commentPlaceholder')} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {t('Article.submit')}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
} 
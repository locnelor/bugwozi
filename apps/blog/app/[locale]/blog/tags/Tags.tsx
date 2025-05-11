"use client"
import { Card, List, Typography } from 'antd';
import { TagsOutlined } from '@ant-design/icons';
import { useTranslations } from 'next-intl';
import { Link } from '#/i18n/navigation';
import { blog_tag } from '@pkg/database';
import BlogLink from '#/components/BlogLink';

const { Title } = Typography;

const Tags = ({ tags }: {
  tags: blog_tag[]
}) => {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <div className="flex items-center mb-6">
          <TagsOutlined className="text-2xl mr-3" />
          <Title level={2} className="m-0">{t('Page.tags')}</Title>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          {tags.map(tag => (
            <BlogLink key={tag.name} href={`/tag/${tag.name.toLowerCase()}`}>
              <span className="bg-gray-100 px-4 py-2 rounded text-base hover:bg-gray-200">
                {tag.name}
              </span>
            </BlogLink>
          ))}
        </div>

        <div className="mt-12">
          <Title level={3}>{t('Tags.popularTags')}</Title>
          <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
            dataSource={tags.slice(0, 8)}
            renderItem={tag => (
              <List.Item>
                <Card title={tag.name} size="small" className="text-center">
                  <BlogLink href={`/tag/${tag.name.toLowerCase()}`} className="text-blue-600">
                    {t('Tags.viewArticles')}
                  </BlogLink>
                </Card>
              </List.Item>
            )}
          />
        </div>
      </Card>
    </div>
  );
}
export default Tags
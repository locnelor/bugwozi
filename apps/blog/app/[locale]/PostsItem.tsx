"use client"
import OmsViewMarkdown from "#/components/Markdown"
import { CalendarOutlined } from "@ant-design/icons"
import { List, Tag, Pagination, Card } from "antd"
import { useRouter } from "#/i18n/navigation"
import { useTranslations } from "next-intl"
import { useSearchParams } from "next/navigation"
import { formatDate } from "@pkg/hooks"
import BlogLink, { getBlogHref } from "#/components/BlogLink"


interface Props {
  posts: any[]
  postsCount: number
}
const PostsItem = ({
  posts,
  postsCount
}: Props) => {
  const router = useRouter();
  const t = useTranslations('Page');
  const query = useSearchParams();
  const page = parseInt(query.get('page') || '1');
  const size = parseInt(query.get('size') || '10');
  return (
    <Card>
      <div className="space-y-6">
        <List
          itemLayout="vertical"
          dataSource={posts}
          renderItem={(item) => (
            <List.Item
              key={item.uid}
              extra={
                <div className="flex flex-col items-end space-y-2">
                  <BlogLink href={`/categories/${item.categories.uid}`}>
                    <Tag color="blue">{item.categories.name}</Tag>
                  </BlogLink>
                  <div className="text-sm text-gray-500">
                    <CalendarOutlined className="mr-1" />
                    {formatDate(item.createdAt)}
                  </div>
                </div>
              }
            >
              <List.Item.Meta
                title={<BlogLink href={`/posts/${item.uid}`} className="text-lg font-semibold">{item.title}</BlogLink>}
                description={
                  <div>
                    <OmsViewMarkdown
                      textContent={item.content}
                    />
                    <div className="mt-2">
                      {item.tags.map(({ tag }: any) => (
                        <BlogLink key={tag.uid} href={`/tags/${tag.uid}`}>
                          <Tag color="processing">{tag.name}</Tag>
                        </BlogLink>
                      ))}
                    </div>
                  </div>
                }
              />
            </List.Item>
          )}
        />
        <div className="flex justify-end">
          <Pagination
            current={page}
            total={postsCount}
            pageSize={size}
            showTotal={(total) => `${t('total')} ${total} ${t('items')}`}
            showSizeChanger
            onChange={(page, size) => {
              router.push({
                pathname: getBlogHref("/"),
                query: {
                  page,
                  size
                },
              })
            }}
          />
        </div>
      </div>
    </Card>
  )
}
export default PostsItem
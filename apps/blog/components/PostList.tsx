"use client"
import { CalendarOutlined } from "@ant-design/icons"
import { formatDate } from "@pkg/hooks"
import { List, Tag } from "antd"
import BlogLink from "./BlogLink"
import OmsViewMarkdown from "./Markdown"


const PostList = ({ posts }: {
  posts: any[]
}) => {

  return (
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
  )
}

export default PostList
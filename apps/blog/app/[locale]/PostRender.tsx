"use client"
import { Pagination, Card } from "antd"
import { useRouter } from "#/i18n/navigation"
import { useTranslations } from "next-intl"
import { useSearchParams } from "next/navigation"
import { getBlogHref } from "#/components/BlogLink"
import PostList from "#/components/PostList"


interface Props {
  posts: any[]
  postsCount: number
}
const PostRender = ({
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
        <PostList
          posts={posts}
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
export default PostRender
import { Prisma, prisma } from "@pkg/database"
import PostRender from "../PostRender"


interface Props {
  searchParams: any
  tag?: string
  categories?: string
}
const PagePosts = async ({
  searchParams,
  tag,
  categories
}: Props) => {
  const page = parseInt(searchParams.page || '1')
  const take = parseInt(searchParams.size || '10')
  const where: Prisma.blog_postsWhereInput = {}
  if (!!tag) {
    where.tags = {
      some: {
        tagId: tag
      }
    }
  }
  if (!!categories) {
    where.categoriesId = categories
  }
  const posts = await prisma.blog_posts.findMany({
    where,
    include: {
      categories: true,
      tags: {
        include: {
          tag: true
        }
      }
    },
    take,
    skip: (page - 1) * take,
    orderBy: {
      createdAt: 'desc'
    }
  })
  const postsCount = await prisma.blog_posts.count({ where })
  return (
    <PostRender
      postsCount={postsCount}
      posts={posts.map(e => ({ ...e, content: e.content.substring(0, 200) + "..." }))}
    />
  )
}
export default PagePosts
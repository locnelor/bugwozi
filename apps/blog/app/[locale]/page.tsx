import { prisma } from '@pkg/database'
import LocalPage from './localPage'

const HomePage = async () => {

  // 获取最新的5篇文章
  const latestPosts = await prisma.blog_posts.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' },
    include: { categories: true }
  })

  // 获取文章总数
  const totalPosts = await prisma.blog_posts.count()

  // 获取分类总数
  const totalCategories = await prisma.blog_categories.count()

  return (
    <div className="w-full">
      <LocalPage
        latestPosts={latestPosts}
        totalPosts={totalPosts}
        totalCategories={totalCategories}
      />
    </div>
  )
}

export default HomePage
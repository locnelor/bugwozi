import { prisma } from "@pkg/database"
import DashboardClient from "./DashboardClient"

async function getSystemStats() {
  // 用户统计
  const userCount = await prisma.sys_user.count()
  const newUsersToday = await prisma.sys_user.count({
    where: {
      createdAt: {
        gte: new Date(new Date().setHours(0, 0, 0, 0))
      }
    }
  })

  // 订单统计
  const orderCount = await prisma.sys_order.count()
  const orderStats = await prisma.$queryRaw`
    SELECT 
      COUNT(CASE WHEN state = 'SUCCESS' THEN 1 END) as successCount,
      COUNT(CASE WHEN state = 'NOTPAY' THEN 1 END) as notPayCount,
      COUNT(CASE WHEN state = 'REFUND' THEN 1 END) as refundCount,
      SUM(CASE WHEN state = 'SUCCESS' THEN amount ELSE 0 END) as totalRevenue
    FROM sys_order
  ` as any[]

  // 博客统计
  const postCount = await prisma.blog_posts.count()
  const commentCount = await prisma.blog_comments.count()
  const newPostsToday = await prisma.blog_posts.count({
    where: {
      createdAt: {
        gte: new Date(new Date().setHours(0, 0, 0, 0))
      }
    }
  })

  // 最近记账统计
  const recentBookkeepCount = await prisma.bookkeep_record.count({
    where: {
      createdAt: {
        gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // 最近7天
      }
    }
  })

  return {
    users: {
      total: userCount,
      newToday: newUsersToday
    },
    orders: {
      total: orderCount,
      success: orderStats[0]?.successCount || 0,
      notPay: orderStats[0]?.notPayCount || 0,
      refund: orderStats[0]?.refundCount || 0,
      revenue: orderStats[0]?.totalRevenue || 0
    },
    blog: {
      posts: postCount,
      comments: commentCount,
      newToday: newPostsToday
    },
    bookkeep: {
      recentRecords: recentBookkeepCount
    }
  }
}

async function getRecentActivities() {
  // 最近订单
  const recentOrders = await prisma.sys_order.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' },
    include: {
      user: true,
      goods: true
    }
  })

  // 最近博客文章
  const recentPosts = await prisma.blog_posts.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' },
    include: {
      user: true,
      categories: true
    }
  })

  // 最近评论
  const recentComments = await prisma.blog_comments.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' },
    include: {
      user: true,
      post: true
    }
  })

  // 最近注册用户
  const recentUsers = await prisma.sys_user.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' }
  })

  // 公告
  const announcements = await prisma.blog_announcements.findMany({
    where: {
      status: true,
      OR: [
        { endTime: { gt: new Date() } },
        { endTime: null }
      ]
    },
    orderBy: [
      { important: 'desc' }, 
      { createdAt: 'desc' }
    ],
    take: 5
  })

  return {
    recentOrders,
    recentPosts,
    recentComments,
    recentUsers,
    announcements
  }
}

const DashboardPage = async () => {
  // 获取统计数据
  const stats = await getSystemStats()
  
  // 获取最近活动
  const activities = await getRecentActivities()

  return (
    <DashboardClient stats={stats} activities={activities} />
  )
}

export default DashboardPage
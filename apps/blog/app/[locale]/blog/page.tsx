import { prisma } from "@pkg/database";
import HomePageTabs from "../../../components/HomePageTabs";
import { AppPageProps } from "@pkg/types";

async function getAnnouncements() {
  const announcements = await prisma.blog_announcements.findMany({
    where: {
      status: true
    },
    orderBy: {
      createdAt: 'desc'
    },
    take: 3
  });
  return announcements
}


const HomePage = async (props: AppPageProps) => {
  const searchParams = await props.searchParams
  const page = parseInt(searchParams.page || '1')
  const take = parseInt(searchParams.size || '10')
  const posts = await prisma.blog_posts.findMany({
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
  const postsCount = await prisma.blog_posts.count()
  const announcements = await getAnnouncements()

  return (
    <HomePageTabs
      posts={posts.map(e => ({
        ...e,
        content: e.content.substring(0, 100) + '...',
      }))}
      announcements={announcements}
      postsCount={postsCount}
    />

  );
}

export default HomePage;
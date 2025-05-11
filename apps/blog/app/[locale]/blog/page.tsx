import { prisma } from "@pkg/database";
import HomePageTabs from "../../../components/HomePageTabs";
import { AppPageProps } from "@pkg/types";
import PagePosts from "./PagePosts";

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
  const announcements = await getAnnouncements()

  return (
    <HomePageTabs
      announcements={announcements}
    >
      <PagePosts
        searchParams={searchParams}
      />
    </HomePageTabs>
  );
}

export default HomePage;
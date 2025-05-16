
import { prisma } from "@pkg/database"
import CreatorClient from "../CreatorClient";
import { AppPageProps } from "@pkg/types";
import { notFound } from "next/navigation";


const CreatorEditPage = async ({
  params
}: AppPageProps) => {
  const categories = await prisma.blog_categories.findMany()
  const p = await params;
  const uid = p.id;
  const posts = await prisma.blog_posts.findUnique({
    where: {
      uid
    },
    include: {
      tags: {
        include: {
          tag: true
        }
      }
    }
  });
  if (!posts) notFound();

  return (
    <CreatorClient
      posts={{
        ...posts,
        tags: posts.tags.map(e => e.tag.name)
      }}
      categories={categories}
    />
  )
}
export default CreatorEditPage
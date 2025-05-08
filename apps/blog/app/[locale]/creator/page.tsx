import { getViewer } from "#/hooks/viewer/getViewer";
import { prisma } from "@pkg/database"
import CreatorClient from "./CreatorClient";


const CreatorPage = async () => {
  const categories = await prisma.blog_categories.findMany()
  const tags = await prisma.blog_tag.findMany();
  const { viewer } = await getViewer();


  return (
    <CreatorClient categories={categories} />
  )
}
export default CreatorPage
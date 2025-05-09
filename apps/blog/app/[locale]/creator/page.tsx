import { prisma } from "@pkg/database"
import CreatorClient from "./CreatorClient";


const CreatorPage = async () => {
  const categories = await prisma.blog_categories.findMany()
  return (
    <CreatorClient categories={categories} />
  )
}
export default CreatorPage

import { prisma } from "@pkg/database";
import Categories from "./Categories";

const CategoriesPage = async () => {
  const categories = await prisma.blog_categories.findMany();
  const postsCount = await prisma.blog_posts.count();
  return (
    <Categories
      categories={categories}
      postsCount={postsCount}
    />
  )
}
export default CategoriesPage